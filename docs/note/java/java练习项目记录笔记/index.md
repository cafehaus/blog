# java练习项目记录笔记

### java 数据类型
* 字符必须用单引号，字符串用双引号，注意字符串 string 在java中是引用类型。
* 数组里面值类型要一致。
* 什么类型的变量就只能放什么类型的值，变量定义的时候可以不用给初始值，但是使用的时候必须要有初始值。
* 数据在计算机底层以0和1二进制储存，文字用ascii码，图片储存像素，声音储存声波，视频就是储存图片和声音的结合。

基本数据类型：
* 整数: int,byte,short,long
* 浮点数:double,float
* 字符:char
* 布尔:boolean

循环中断和跳出
* break结束循环，如果是嵌套循环，要都结束需要用 break+标签，来做跳出实现
continue 结束当次循环继续下一次
* return 跳出方法结束程序运行，所以在方法中结束整个循环可以直接用return。

### 面向对象编程 OOP
万物皆对象
* static 静态修饰符，属于类，所有对象共享，可以用类或者对象来访问，建议通过类来访问。
* 无static修饰，属于对象，只能用对象来访问。
* static 静态方法中不能出现 this，this只能代表对象，不能代表类。
* 用 static 封装工具类，可以将其构造器私有化。

Java 中构造器和类名同名，不像其他语言中用的 constructor，分为默认构造器、无参构造器和有参构造器。

this 可以出现在构造器或成员方法中，指当前对象。构造器中用 this 为当前实例对象的成员变量赋值，如果不用 this 而形参又和成员变量同名时，实际上是形参自己赋值给自己了，而不是赋值给对象的成员变量。

类的5大金刚：
* 成员变量
* 构造器
* 方法
* 代码块
* 内部类

代码块：跟类一起优先加载，优先于构造器加载，一般用于初始化静态资源，分为有static修饰的静态代码块(只加载一次)和无static修饰的构造代码块(实例代码块，属于对象，每次创建对象都会加载，一般不会用到)。

* 常量用 public static final 修饰
* 抽象类不能创建对象，不能实例化，只能用来继承
* final 和 abstract 是互斥关系
* interface 接口里写，常量和抽象方法，体现一种规范思想。
* 类实现接口，接口多继承，类只能单继承
* sql 语句排序是 order by，注意不是连在一起的 orderby

mac 快捷键：
* 多行注释：command + shift + /
* 单行注释：command + /
* 快速选择if、try…代码块语句包裹：command + option + t
* 自动import对应类：Alt + Enter

注解，泛化，模板方法

### 初始化项目
依赖用资料包里提供的仓库依赖，自己拉取的会各种报错，nacos 没必要搞个虚拟机跑，mac 或 windows 都可以直接自己本地安装 docker，然后跑个本地 nacos 就行了，配置地址改成本地的 localhost:8848。

项目启动报错，第一个slf4j日志库冲突报错：在pom.xml配置文件 fastdfs-client 依赖下排除掉日志库：
```xml
<dependency>
      <groupId>com.github.tobato</groupId>
      <artifactId>fastdfs-client</artifactId>
      <exclusions>
        <exclusion>
          <groupId>org.slf4j</groupId>
          <artifactId>slf4j-api</artifactId>
        </exclusion>
        <exclusion>
          <groupId>org.slf4j</groupId>
          <artifactId>jcl-over-slf4j</artifactId>
        </exclusion>
        <exclusion>
          <groupId>org.slf4j</groupId>
          <artifactId>slf4j-api</artifactId>
        </exclusion>
        <exclusion>
          <groupId>ch.qos.logback</groupId>
          <artifactId>logback-classic</artifactId>
        </exclusion>
      </exclusions>
</dependency>
```

还有一个数据库的报错，在配置的mysql地址路径后面加上useSSL=falseq。

### entity、DTO、VO
* POJO 普通 java 对象，只有属性和对应的 getter、setter
* Entity 实体，通常和数据库中的表对应
* DTO 数据传输对象，通常用于程序中各层之间传递数据
* VO 视图对象，为前端展示数据提供的对象

sky-server 子模块，存放配置文件、配置类、拦截器、controller、service、mapper、启动类等

**疑问**
* springboot的service层为什么要分层接口和实现类，而不直接写实现类？
* mybatis的mapper为什么是一个接口而不是实现类？

### controller获取请求参数注解
* @RequestBody 获取body请求参数
* @RequestParam 获取query请求参数，不加注解默认就是这个，如果要序列化或者强制转化参数就必须要加上这个注解
* @PathVariable 获取动态 url 占位参数

Java 不支持 js 中的那种方法用 = 给参数设置默认值，不传的时候就使用默认值。

Java 中字符串 String 是引用类型，判断字符串是否相等不能直接像 JavaScript 中用 == 判读，需要用equals，判断是否空字符串要用 str == null || str.isEmpty()，不能直接像 js 中用 str === "" 来判断

### mybatis插入数据一直报错
报错：StringIndexOutOfBoundsException，最后才发现是写的 sql 里变量 #{name} 忘加末尾的 } 了。更新数据提示成功了一直不生效，sql 条件复制出来改错了：
```xml
<if test="name != null"></if>
<!-- 写成了 -->
<if test="name != name"></if>
```

redis 非关系型数据库，基于内存所以读写速度相当快。像店铺营业状态这种数据（非多店铺），就只需要存一个是否营业中的状态，用 mysql 的话需要新建一张表，表里面就一个营业状态 status 字段，其实完全没必要，像这种场景 redis 就很适合。

* 不同框架注解的名字是可以相同的，注意看 import 的到底是哪个，引入错了使用时会报错
* Post 请求的Body 参数记得要加 @RequestBody 注解才能获取到
* mybatis 执行 sql 报错注意先检查语法拼写、参数这些，基本都是这出问题
* 新版本的项目设置不是在 File 菜单下的 settings 里，在左上角 ItelliJ IDEA 菜单下的 Preferences 里面
* 快速生成 main 方法快捷键 pvsm，就是 public static void main 的首字母


### Itellij IEAD mac 常用快捷键
* ⇥        缩进代码，相当于vscode 里选中代码 command {
* ⇧⇥       反缩进代码，相当于vscode 里选中代码 command }
* ⌘⌥L      格式化代码
* ⌘F       当亲文件内查找
* ⌘⇧F      全局查找
* ⌘D       复制当前行

⌘+点击注解，可以跳到源码查看


最新版minio新建容器的命令不一样，api端口也要和console端口不一样，停止然后删除已创建的容器，浏览器访问端口是9001，java代码中的端口是9000

```shell
docker run -d -p 9000:9000 -p 9001:9001 --name minio -v /Users/xx/zhou/java/minio/data:/data -v /Users/xx/zhou/java/minio/config:/root/.minio -e "MINIO_ROOT_USER=minio" -e "MINIO_ROOT_PASSWORD=minio123" minio/minio server /data --console-address ":9001"
```

新版的 minIO 不能访问要把 Buckets 的 Access Policy 设置为 public

各类数据判断：
* Null
* 字符串：equals
* 数组：isEmpty()、size() == 0，注意要先用 null 判断避免空指针异常
* Map：isEmpty()，注意要先用 null 判断避免空指针异常

可以把枚举想象成常量，其实跟常量很类似，可以理解成有强规范约束的常量

Lambda 表达式 JDK 8开始新增的语法形式：用于简化匿名内部类的代码写法，只能用于只有一个抽象方法的函数式接口（不能用于普通类）

抽象类 abstract 只能被继承，接口只能被实现 implements

继承抽象类的子类必须重写抽象类里的所有抽象方法，实现接口的子类必须重写接口里的所有方法（注意抽象类实现接口时不用全部重写，但是继承此抽象类的子类必须重写抽象类+接口里的方法）

### 为什么实例对象可以用接口来接收？
```java
List<String> list = new ArrayList<String>();
```
List 是一个 interface 接口，正常我们应该用 ArrayList 来接收的，这里用 List 接口来接收，在设计模式中有对依赖倒置原则。程序要尽量依赖于抽象，不依赖于具体。

从Java语法上，这种方式是使用接口引用指向具体实现。比如，你若希望用LinkedList的实现来替代ArrayList的话，只需改动一行即可，其他的所有的都不需要改动：
```java
List list = new LinkedList();
```

这也是一种很好的设计模式.一个接口有多种实现,当你想换一种实现方式时,你需要做的改动很小。这也就是我们常听到的面向接口编程。但是注意这样也有个不好的点，就是即使类里面有但是没在接口中定义的方法就不能用了。

审核文章和生成文章详情html文件时，用到的 feign 和@Async 异步方法注解，新增文章会报错，直接把 ArticleFreemarkerServiceImpl 里 buildArticleToMinIO 方法上的 @Async 注解删掉就可以了

```
List<string> 和 string[] 的区别？
```

### 内存泄漏和内存溢出的区别？
同时运行多个 spring 服务，最下面的一个服务颜色是灰色的，不影响运行，但是看着别扭。原因是 IDEA 限制了同时运行的服务数量，自己在 Settings - Advanced Settings - Run/Debug 那可以设置，默认是 5，所以超过运行超过5个服务就是灰色的了，注意设置了需要重启 IDEA。

### 生产者/消费者模式
某个模块负责产生数据，这些数据由另一个模块来负责处理（此处的模块是广义的，可以是类、函数、线程、进程等），产生数据的模块就形象地称为生产者，而处理数据的模块就称为消费者。