# java代码优化：判断内聚到实体对象中和构造上下文对象传递参数

通过两个常见的java后端实例场景探讨代码优化，代码不是优化出来的，而是设计出来的，我们永远不可能有专门的时间去做代码优化，优化和设计在平时。

### 案例一：判断内聚到实体对象中
需求是数据库里会定期插入一些订单，需要在批处理服务中定时去扫描一下库里的数据，如果状态是未关闭且创建的时间超过1天，就把状态自动改成已关闭，核心代码如下：

```java
public void closeOrder(List<OrderDO> orderList) {
    for (OrderDO orderDO : orderList) {
        if (!DateTimeUtils.isBeforeNowByDay(orderDO.getCreateTime(), 1)) {
            continue;
        }

        // 状态改成已关闭(这里直接修改状态简单模拟下)
        orderDO.setStatus(2);
    }
}
```

OrderDO.java
```java
/**
 * 订单DO对象
 *
 * @author cafehaus
 * @date 2025/01/03
 */
@Data
public class OrderDO {
    /**
     * 订单id
     */
    private String orderId;

    /**
     * 状态：1-未关闭 2-已关闭
     */
    private Integer status;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;
}
```

DateTimeUtils.java
```java
/**
 * 日期时间工具类
 *
 * @author cafehaus
 * @date 2025/01/03
 */
public class DateTimeUtils {
    /**
     * 判断给定日期时间是否比当前早指定的天数
     *
     * @param date
     * @param gapDay
     * @return
     */
    public static boolean isBeforeNowByDay(LocalDateTime date, int gapDay) {
        if (date == null) {
            throw new IllegalArgumentException("LocalDateTime cannot be null");
        }

        // 要对比的参考时间：当前时间减去间隔的天数
        LocalDateTime referenceDate = LocalDateTime.now().minusDays(gapDay);

        // 返回比较结果
        return date.isBefore(referenceDate);
    }

}
```

上面的代码看着好像没啥问题，逻辑也很清晰。实际 for 循环里的那个 if 判断是可以继续优化的，按照上面的写法有两个不好的地方：
- 单测不好测试
- 判断不够简洁

下面是优化过后的代码：
```java
public void closeOrder(List<OrderDO> orderList) {
    for (OrderDO orderDO : orderList) {
        if (orderDO.notNeedClose()) {
            continue;
        }

        // 状态改成已关闭(这里直接修改状态简单模拟下)
        orderDO.setStatus(2);
    }
}
```

OrderDO.java
```java
/**
 * 订单DO对象
 *
 * @author cafehaus
 * @date 2025/01/03
 */
@Data
public class OrderDO {
    /**
     * 订单id
     */
    private String orderId;

    /**
     * 状态：1-未关闭 2-已关闭
     */
    private Integer status;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;

    /**
     * 判断是否不需要关闭当前订单
     */
    public boolean notNeedClose() {
        return !DateTimeUtils.isBeforeNowByDay(createTime, 1);
    }
}
```
改动的地方只是直接将 if 判断内聚到了 DO 对象中作为一个方法，外部使用的时候直接调用一下当前对象的这个方法就可以了，也不需要再额外取反。除此之外，单测或者变异测试也很好测试，不需要再依赖整个流程或者其他数据，我们可以在任何地方直接 new 出来 OrderDO 对象，然后随便测试，外面的业务代码逻辑也变得更简单。

所以平时我们定义实体对象、枚举这些并不是只用 get、set 就行了，一些 if 判断实际内聚到实体对象内部更加合理，整体代码可读性也会提高不少。

### 案例二：构造上下文对象传递参数
在一个任务操作中，我们可能会先查询任务信息，然后参数、逻辑校验这些，接着进行具体的核心发布逻辑操作，最后可能还需要记录操作日志...其实和我们大部分的业务场景很相似，一个接口中我们需要拆解成很多步骤，为了代码的可读性，每个步骤我们可能又会提取成一个单独的方法，那其中就会涉及到各种参数、数据的传递，这个时候可能有如下几种解决办法：

- 直接往方法中加参数，但是参数一多就会出问题了，一般超过3个参数就不建议直接传递了
- 用 Map 来传递参数，但这样其实就违背了面向对象的初衷
- 定义各种 DTO 之类的实体对象来传递和接收参数，如此就会写出下面的代码：

TaskService.java
```java
public class TaskService {
    @Autowired
    private TaskRepositoryService taskRepositoryService;

    /**
     * 提交发布信息
     *
     * @param taskId
     * @param operateUser
     * @return
     */
    public String submitPublish(String taskId, String operateUser) {
        // 1. 查询任务信息
        TaskDTO taskDTO = taskRepositoryService.queryTaskById(taskId);

        // 2. 发布任务
        PublishResultDTO publishResultDTO = publishTask(taskDTO, operateUser);

        // 3. 记录日志
        insertPublishLog(taskDTO, operateUser, publishResultDTO);

        return taskDTO.getTaskId();
    }

    /**
     * 发布任务
     *
     * @param taskDTO
     * @param operateUser
     * @return
     */
    private PublishResultDTO publishTask(TaskDTO taskDTO, String operateUser) {
        PublishResultDTO result = new PublishResultDTO();

        try {
            // ... 省略掉了各种业务逻辑操作
            result.setResultCode("1");
            result.setResultMsg("success");
        } catch(Exception e) {
            result.setResultCode(e.getCode());
            result.setResultMsg(e.getMessage());
        }

        return result;
    }

    /**
     * 插入发布日志
     *
     * @param taskDTO
     * @param operateUser
     * @param publishResultDTO
     */
    private void insertPublishLog(TaskDTO taskDTO, String operateUser, PublishResultDTO publishResultDTO) {
        // 通过任务信息和发布结果构造日志数据插入数据库中，具体逻辑省略...
    }
}
```

TaskDTO.java
```java
/**
 * 任务DTO对象
 *
 * @author cafehaus
 * @date 2025/01/04
 */
@Data
public class TaskDTO {
    /**
     * 任务id
     */
    private String taskId;

    /**
     * 任务步骤
     */
    private Integer publishStep;

    /**
     * 发布code
     */
    private String resultCode;

    /**
     * 发布结果信息
     */
    private String resultMsg;
}
```

PublishResultDTO.java
```java
/**
 * 任务发布结果DTO对象
 *
 * @author cafehaus
 * @date 2025/01/04
 */
@Data
public class PublishResultDTO {
    /**
     * 发布code
     */
    private String resultCode;

    /**
     * 发布结果信息
     */
    private String resultMsg;
}
```

如果按照上面的写法，一个接口我们可能需要定义很多个 DTO 之类的接口来传递参数，如果一直按照这样去开发需求，经过一段时间之后就会发现项目中定义了一大堆各种各样的 DTO，那有没有其他可以优化的方式呢？

其实像这种一个接口中我们需要各种传递参数的场景，本身又在一个方法中那就可以通过构造一个统一的上下文对象来解决，如下是优化后的代码：

TaskService.java
```java
public class TaskService {
    @Autowired
    private TaskRepositoryService taskRepositoryService;

    /**
     * 提交发布信息
     *
     * @param taskId
     * @param operateUser
     * @return
     */
    public String submitPublish(String taskId, String operateUser) {
        // 1. 构造上下文对象
        TaskContextDTO taskContextDTO = new TaskContextDTO();
        taskContextDTO.setTaskId(taskId);
        taskContextDTO.setOperateUser(operateUser);

        // 2. 查询任务信息
        TaskDTO taskDTO = taskRepositoryService.queryTaskById(taskId);
        taskContextDTO.setTaskInfo(taskDTO);

        // 3. 发布任务
        publishTask(taskContextDTO);

        // 4. 记录日志
        insertPublishLog(taskContextDTO);

        return taskContextDTO.getTaskId();
    }

    /**
     * 发布任务
     *
     * @param taskContextDTO
     */
    private void publishTask(TaskContextDTO taskContextDTO) {
        try {
            // ... 省略掉了各种业务逻辑操作
            taskContextDTO.setResultCode("1");
            taskContextDTO.setResultMsg("success");
        } catch(Exception e) {
            taskContextDTO.setResultCode(e.getCode());
            taskContextDTO.setResultMsg(e.getMessage());
        }
    }

    /**
     * 插入发布日志
     *
     * @param taskContextDTO
     */
    private void insertPublishLog(TaskContextDTO taskContextDTO) {
        // 通过任务信息和发布结果构造日志数据插入数据库中，具体逻辑省略...
    }
}
```

TaskContextDTO.java
```java
/**
 * 任务上下文DTO对象
 *
 * @author cafehaus
 * @date 2025/01/04
 */
@Data
public class TaskContextDTO {
    /**
     * 任务id
     */
    private String taskId;

    /**
     * 操作人
     */
    private String operateUser;

    /**
     * 发布code
     */
    private String resultCode;

    /**
     * 发布结果信息
     */
    private String resultMsg;

    /**
     * 任务信息
     */
    private TaskDTO taskInfo;
}
```
所有参数的传递和接收全部通过一个 TaskContextDTO 对象解决，像 TaskDTO 里的信息也可以作为上下文对象里的一个属性来嵌套储存，利用引用数据类型的特点。

前面的步骤也不需要 return 出结果再传给后面的步骤去获取了，在获取到结果时直接去 set 上下文对象 TaskContextDTO，其他需要的地方通过 get 就能直接获取到。如此方法的参数也减少了，也不需要再传来传去了。