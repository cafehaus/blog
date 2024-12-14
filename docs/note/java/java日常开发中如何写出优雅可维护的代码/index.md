# java日常开发中如何写出优雅的好维护的代码

### 注释
开发中合理添加注释，提高代码的可读性和易读性
* 1、在类、接口、方法、属性、代码块、有特殊逻辑的地方都要添加注释说明
* 2、推荐中文注释，减少理解成本
* 3、遵循 javaDoc 注释规范，除方法内的代码块用 // 注释，其他地方推荐 javaDoc 注释

### 日志
开发中要合理添加 info、error 日志，方便线上问题定位
* 1、在关键步骤上要添加日志
* 2、异常分支必须增加日志，比如throw抛异常的地方，打印出关键信息，提升问题定位效率
* 3、日志描述信息用英文，不要用中文，防止不同编码导致乱码问题
* 4、一般只在开发中打印的日志会用debug打印，线上日志debug级别的一般会设置不打印出来，不过上线前还是建议删除开发中调试的日志

### 命名
* 1、不能太随意，反例：BaseResultMap1、param1
* 2、能正确区分含义和功能
* 3、拼写要正确，反例：supper => super

### 代码可读性
日常开发中哪怕是不断在开发新需求，但我们至少有一半的时间都是在阅读老的代码，想要提高代码可维护性，那可读性就很重要。
就像Martin Fowler在《Refactoring: Improving the Design of Existing Code》中提到的：“任何傻瓜都能写出计算机能理解的代码，但只有优秀的程序员能写出人类能理解的代码。”
所以一定不要按照需求文档一步一步的去写出面条式的代码，多去抽离和提取。
* 1、每个函数不要太长
* 2、函数参数不要超过3个，多个参数可以定义成单独的对象传递
* 3、复杂的参数可以封装成上下文context对象里再嵌套其他实体对象，利用引用数据类型的特点，单独的方法中也不需要在额外return出结果，后续其他方法中通过context对象就可以直接获取其他方法中处理过的最新的数据
* 4、可读性比节省的那点性能重要，比如在同一个for循环中去同时做两件不同的事，看似只用1次循环节省了点性能，实际可读性变差了
* 5、一些DTO、entity对象附属的判断、赋值之类操作可以直接封装在实体对象里面
* 6、保持简单，不要炫技，如果一眼就能让人看明白的，就不要去写出需要别人想半天才能明白的代码

### 条件判断
* 1、判空统一用 StringUtils、CollectionUtils 这类官方库
如字符串判空项目中有自己判断的，有用 hutool 的，推荐统一使用 Apache 的 StringUtils 来判断，多条判断可以用 isAnyBlank、isAnyEmpty 合并，反例：
```java
if (str == null || str.isEmpty()) {}
if (StrUtil.isNotBlank(testDO.getName())) {}
```

* 2、复杂判断抽成单独的方法，比如抽成单独的assembler静态方法，这样也很方便单独针对判断逻辑来写单测测试，反例：
```java
if (queryEntity.getId() == null && queryEntity.getName() == null && queryEntity.getUserId() == null && (queryEntity.getAge() > 0)) {
    return true;
}
```

* 3、if 判断不要嵌套太深
可以提前 return 来减少 if 嵌套层级，也可以利用 switch、策略模式、提取单独的方法简化逻辑

* 4、多用 StringUtils.defaultString、ListUtils.emptyIfNull 简化代码：
```java
if (CollectionUtils.isNotEmpty(testList)) {
    for (Item item : testList) {
        item.setNickName(StringUtils.isEmpty(item.getName()) ? "" : item.getName())
    }
}
```
可以简化成：
```java
for (Item item : ListUtils.emptyIfNull(testList)) {
    item.setNickName(StringUtils.defaultString(item.getName()))
}
```

### 代码逻辑
* 1、方法职责单一，尽量保证每个方法只做一件事
* 2、转换代码抽到单独的 Assembler 里
* 3、无用的代码直接删除掉，除非确实容易埋坑的代码可以注释掉保留
* 4、消除魔法值，可以定义成公共/局部常量、枚举，反例：
```java
if (!"YEAR".equals(request.getUnit())) {}
```

### 单测
* 1、caseDesc 里清晰描述每条用例
* 2、用例文件名命名有意义，反例：success1.json5、fail2.json5
* 3、所有外部依赖数据要全部 mock 掉
* 4、尽量覆盖所有场景的用例，单测实际能检测出大部分的问题
* 5、不像前端开发中基本不会单独写单测，后端开发实际很依赖单测来自测，所以要重视单测

以上就是开发中总结出来的有利于提高代码优雅性、可维护性的一些地方，其中最重要的我觉得还是可读性那一点，代码可读性太差，实际是给团队后续开发中埋坑，优化在平时，没有那个团队会说我专门给你一个月来优化之前的代码，所以在日常开发中就要多注意可读性问题，不要写出几天之后自己都看不懂的代码。
