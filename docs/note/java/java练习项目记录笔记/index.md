# java练习项目记录笔记

sky-pojo 子模块，存放 entity、DTO、VO
POJO 普通 java 对象，只有属性和对应的 getter、setter
Entity 实体，通常和数据库中的表对应
DTO 数据传输对象，通常用于程序中各层之间传递数据
VO 视图对象，为前端展示数据提供的对象

sky-server 子模块，存放配置文件、配置类、拦截器、controller、service、mapper、启动类等

springboot的service层为什么要分层接口和实现类，而不直接写实现类？
mybatis的mapper为什么是一个接口而不是实现类？

@RequestBody 获取body请求参数
@RequestParam 获取query请求参数，不加注解默认就是这个，如果要序列化或者强制转化参数就必须要加上这个注解
@PathVariable 获取动态 url 占位参数

Java 不支持 js 中的那种方法用 = 给参数设置默认值，不传的时候就使用默认值
Java 中字符串 String 是引用类型，判断字符串是否相等不能直接像 JavaScript 中用 == 判读，需要用 equals，判断是否空字符串要用 str == null || str.isEmpty()，不能直接像 js 中用 str === “” 来判断

mybatis插入数据一直报错：StringIndexOutOfBoundsException，最后才发现是写的 sql 里变量 #{name} 忘加末尾的 } 了
更新数据提示成功了一直不生效，sql 条件复制出来改错了：<if test=
“name != null ”></if>写成<if test=
“name != name ”></if>了

redis 非关系型数据库，基于内存所以读写速度相当快。像店铺营业状态这种数据（非多店铺），就只需要存一个是否营业中的状态，用 mysql 的话需要新建一张表，表里面就一个营业状态 status 字段，其实完全没必要，像这种场景 redis 就很适合。

不同框架注解的名字是可以相同的，注意看 import 的到底是哪个，引入错了使用时会报错

Post 请求的Body 参数记得要加 @RequestBody 注解才能获取到

mybatis 执行 sql 报错注意先检查语法拼写、参数这些，基本都是这出问题

新版本的项目设置不是在 File 菜单下的 settings 里，在左上角 ItelliJ IDEA 菜单下的 Preferences 里面

快速生成 main 方法快捷键 pvsm，就是 public static void main 的首字母


Itellij IEAD mac 常用快捷键
⇥           缩进代码，相当于vscode 里选中代码 command {
⇧⇥       反缩进代码，相当于vscode 里选中代码 command }
⌘⌥L     格式化代码
⌘F        当亲文件内查找
⌘⇧F     全局查找
⌘D        复制当前行

⌘+点击注解，可以跳到源码查看


最新版minio新建容器的命令不一样，api端口也要和console端口不一样，停止然后删除已创建的容器，浏览器访问端口是9001，java代码中的端口是9000

docker run -d -p 9000:9000 -p 9001:9001 --name minio -v /Users/xx/zhou/java/minio/data:/data -v /Users/xx/zhou/java/minio/config:/root/.minio -e "MINIO_ROOT_USER=minio" -e "MINIO_ROOT_PASSWORD=minio123" minio/minio server /data --console-address ":9001"


新版的 minIO 不能访问要把 Buckets 的 Access Policy 设置为 public

各类数据判断：
Null
字符串：equals
数组：isEmpty()、size() == 0，注意要先用 null 判断避免空指针异常
Map：isEmpty()，注意要先用 null 判断避免空指针异常

可以把枚举想象成常量，其实跟常量很类似，可以理解成有强规范约束的常量

Lambda 表达式 JDK 8开始新增的语法形式：用于简化匿名内部类的代码写法，只能用于只有一个抽象方法的函数式接口（不能用于普通类）

抽象类 abstract 只能被继承，接口只能被实现 implements
继承抽象类的子类必须重写抽象类里的所有抽象方法，实现接口的子类必须重写接口里的所有方法（注意抽象类实现接口时不用全部重写，但是继承此抽象类的子类必须重写抽象类+接口里的方法）

#为什么实例对象可以用接口来接收？
List<String> list = new ArrayList<String>();
List 是一个 interface 接口，正常我们应该用 ArrayList 来接收的，这里用 List 接口来接收，在设计模式中有对依赖倒置原则。程序要尽量依赖于抽象，不依赖于具体。 从Java语法上，这种方式是使用接口引用指向具体实现。比如，你若希望用LinkedList的实现来替代ArrayList的话，只需改动一行即可，其他的所有的都不需要改动：List list=new LinkedList()；
这也是一种很好的设计模式.一个接口有多种实现,当你想换一种实现方式时,你需要做的改动很小。这也就是我们常听到的面向接口编程。但是注意这样也有个不好的点，就是即使类里面有但是没在接口中定义的方法就不能用了。


审核文章和生成文章详情html文件时，用到的 feign 和@Async 异步方法注解，新增文章会报错，直接把 ArticleFreemarkerServiceImpl 里 buildArticleToMinIO 方法上的 @Async 注解删掉就可以了