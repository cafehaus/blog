# 公司SpringBoot微服务java项目本地运行笔记

开发工具推荐安装 IDE intelliJ 2021.2.2 版本，可安装的插件：无限试用插件 IDE Eval Reset、中文插件 Chinese


### 运行步骤
* 1、拉各个服务代码
* 2、pom.xml配置文件，右键添加为 maven 项目，根据 dependencies 里的 artifactId 拉取其他项目：kjhaoyun-parent、last-mile-core、last-mile-domain、last-mile-web
* 3、settings - Build,Execution,Deployment - Build Tools - Maven - User settings file 里配置自己的私有仓库文件
* 4、settings - Build,Execution,Deployment - Build Tools - compiler - java compiler，选择 1.8 版本
* 5、选中每个项目点击小锤子图标 build project
* 6、再点击小三角启动入口服务类

修改配置：Services - Run Configuration Type - Application，Edit Configuration，专业版的settings里才有 spring boot 的配置，自定义参数在 VM options 里，-Dspring.profiles.active=test -Dserver.port=9906，Services 菜单如果没有，在顶部 View - Tool Windows - Services

java程序重启端口被占用
```bash
# 查找被占用端口进程
netstat -aon|findstr 8888

# 杀死进程
taskkill -PID 2523 -F
```

### 输入端口号自动杀死进程bat脚本
使用方式：直接复制如下代码，粘贴到记事本上，修改文件后缀名 .bat，双击会自动打开 cmd 命令行窗口，根据提示输入端口号就行了：

```bat
@echo off & setlocal EnableDelayedExpansion
CHCP 65001
title 输入端口杀死对应的进程
CLS
echo 请输入程序正在运行的端口号
set /p port=
echo 找到的进程记录
echo =================================================================================
netstat -nao|findstr !port!
echo =================================================================================
echo 回车进行逐个确认
pause
for /f "tokens=2,5" %%i in ('netstat -nao^|findstr :%%port%%') do (
	::if "!processed[%%j]!" == "" (
	if not defined processed[%%j] (
		set pname=N/A
		for /f "tokens=1" %%p in ('tasklist^|findstr %%j') do (set pname=%%p)
		echo %%i	%%j	!pname!
		echo 输入Y确认Kill，否则跳过，可回车跳过
		set flag=N/A
		set /p flag=
		if "!flag!" == "Y" (
			taskkill /pid %%j -t -f
		) else (
			echo 已跳过
		)
		set processed[%%j]=1
	)
)

cmd
```