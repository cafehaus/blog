# 用SpringBoot开发java程序和部署笔记

## SpringBoot快速上手

* New Project
* Spring Initializr 注意社区版 Intellij IDE 没有这项，需要额外安装插件
* Project SDK: 1.8
* Spring Initializr Project Settings：Group 组织一般公司域名倒写，Artifact 项目名，Maven，Java，Jar，Java version: 8
* Web，Spring Web

JDK8或者JDK1.8是由于自从JDK1.5/JDK5命名方式改变后遗留的新旧命名方式问题，所以我们口中常说的Java8、JDK8、JDK1.8其实是同一个东西。

#### 运行报错：
* Error:Cannot determine path to 'tools.jar' library for openjdk-19
* Error:java: 错误: 不支持发行版本 17

上面这两个报错一般是 JDK 或编辑器版本不对，可以直接用最新的的社区版 Intellij IDE

#### 端口被占用
```bash
# 【mac】
# 查看被占用的端口号，8080 就是要查看的端口
sudo lsof -i tcp:8080

# 杀死进程，PID 是对应进程的 PID
sudo kill -9 PID

# 【windows】
# 查看端口8080被哪个进程占用
netstat -ano | findstr "8080"    

# 杀死进程
kill -9 PID
```

#### 项目热部署

类似前端的自动热更新和运行 node 项目的 nodemon，需要借助 spring-boot-devtools

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <optional>true</optional>
</dependency>
```

添加到 pom.xml 文件中，类似前端里的 package.json，用来管理项目依赖。

添加好后还须在 src/main/resources/application.properties 文件里配置一下让它生效。

IDE 中还须额外配置：
* Settings页面（社区版的设置没在File菜单下，在右上角的设置小图标里），Build,Execution,Deployment => compile => Build project automatically
* Maintenance页面：windows 上 ctrl+alt+shift+/（mac 上连续按两次shift键），打开选择框，输入reg，选择 Registry...， 勾选上 compiler.automake.allow.when.app.running。坑：最新版的 Registry 里已经没有那项了，在设置里的 Advanced Settings 里：Allow auto-make to start even if developed application is currently running。

## SpringBoot Controller

控制器 controller：
* @Controller，返回页面，通常与模版引擎一起使用
* @RestController，返回json数据，前后端分离

MVC模式：
* Model：模型，存储数据
* Controller：控制器，协调控制
* View：视图，显示数据

大白话理解：Model => 数据库，View => 前端，Controller => 后端

常用请求注解：
* @RequestMapping
* @GetMapping
* @PostMapping

## SpringBoot文件上传+拦截器

静态资源放到 src/main/resources/static 目录下，就能直接访问，和前端里的 public 目录类似。

如果要修改，在 application.properties 中定义过滤规则和静态资源位置
```
spring.mvc.static-path-pattern=/static/**
spring.web.resources.static-locations=classpath:/static/
```

Spring Boot工程嵌入的 tomcat 限制了每个文件最大为1M，单次请求的文件的总数不能大于10M，如果要修改配置，在 application.properties 中：
```
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=20MB
```

前端用 input 表单或 postman 模拟 multipart/form-data 上传文件，注意文件的名字要跟接口里定义的 MultipartFile 的参数名一致，下面代码用的 file，再通过 transferTo 方法可将文件写入到磁盘中，类似 nodejs 中的 fs.writeFile。
```java
@RestController
public class FillController {
    // 上传文件目录
    private static final String UPLOAD_FOLDER = System.getProperty("user.dir") + "/upload/";

    // 上传文件
    @PostMapping("upload")
    public String upload(String nickname, MultipartFile file) throws IOException {
        System.out.println("文件大小：" + file.getSize());
        System.out.println(file.getContentType());
        System.out.println(file.getOriginalFilename());
        saveFile(file);
        return "上传文件成功";
    }

    public void saveFile(MultipartFile file) throws IOException {
        System.out.println("项目目录：" + System.getProperty("user.dir"));
        System.out.println("文件上传目录：" + UPLOAD_FOLDER);

        File upDir = new File(UPLOAD_FOLDER);
        // 目录不存在就新建一个
        if (!upDir.exists()) {
            upDir.mkdir();
        }

        File f = new File(UPLOAD_FOLDER + file.getOriginalFilename());
        // 通过transferTo方法写入文件，类似 node 里的 fs.writeFile
        file.transferTo(f);
    }
}
```

文件保存目录也可以用 HttpServletRequest 对象的 getServletContext().getRealPath("/upload/") 去创建，此目录是服务器上的路径，每次重启服务器会发生变化，直接将此路径复制到浏览器中是可以直接打开的。通过此路径在额外配置下静态目录，这样就可以直接通过项目访问到上传的文件。

也可以通过 ClassUtils.getDefaultClassLoader().getResource("").getPath() + "static/" 直接将文件存入 static 目录中。

### 学习课程
* [1天搞定SpringBoot+Vue全栈开发](https://www.bilibili.com/video/BV1nV4y1s7ZN)