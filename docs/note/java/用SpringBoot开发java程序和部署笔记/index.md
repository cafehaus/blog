# 用SpringBoot开发java程序和部署笔记

## SpringBoot快速上手

* New Project
* Spring Initializr 注意社区版 Intellij IDE 没有这项，需要额外安装插件
* Project SDK: 1.8
* Spring Initializr Project Settings：Group 组织一般公司域名倒写，Artifact 项目名，Maven，Java，Jar，Java version: 8
* Web，Spring Web

JDK8或者JDK1.8是由于自从JDK1.5/JDK5命名方式改变后遗留的新旧命令方式问题，所以我们口中说的Java8、JDK8、JDK1.8其实是同一个东西。

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

### 学习课程
* [1天搞定SpringBoot+Vue全栈开发](https://www.bilibili.com/video/BV1nV4y1s7ZN)