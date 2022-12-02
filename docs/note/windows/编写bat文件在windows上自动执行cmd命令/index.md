# 编写bat文件在windows上自动执行cmd命令

windows 电脑上直接新建 txt 记事本文件，编写好要执行的命令后，将后缀修改成 .bat，然后直接点击文件就可以执行里面的命令了

```bash
# 打开命令窗口
start cmd

# /k 执行完命令不关闭cmd命令窗口
start cmd /k

# /c 执行完命令关闭cmd命令窗口
start cmd /c

# 执行具体命令
start cmd /k "cd /d D:\D:\codehaus\blog && yarn && yarn dev"
```

### cd /d 注解

要进入其他盘符下的目录，通常需要在CMD窗口运行两次命令：先进入盘符，后面才能进入指定的目录

1. 进入D盘
```bash
d:
```

2. 进入D盘下的test目录
```bash
cd test
```

而通过参数 /d ，我们就可以直接一步进入指定盘符下的文件夹
```bash
cd /d d:\test
```
### %cd% 和 %~dp0% 注解

%cd%：脚本执行的当前目录，需要注意的是，这里的当前目录有可能和脚本实际所在目录不一致，可以在 bat 脚本中使用，也可以在命令行窗口中使用

%~dp0%：脚本文件所在的目录，注意，目录的路径为全路径，并且带结尾的\，仅可以在 bat 脚本中使用，如直接进入脚本所在目录：cd /d %~dp0

```bash
@echo off

set path_cd=%cd%
set path_dp0=%~dp0

echo Value of cd: %path_cd%
echo Value of dp0: %path_dp0%

pause
```

### 相关：

* Flutter SDK 包里的 flutter_console.bat 文件就是跟这个类似的，点一下就可以直接自动在打开 cmd 小黑窗，然后可直接输入 flutter 命令。

* bat文件和cmd文件类似，本质上没有区别，都是简单的文本编码方式，都可以用记事本创建、编辑和查看，两者所用的命令行代码也可以共用，只是cmd文件中允许使用的命令要比bat文件多。

* npm script 中用到的命令，windows系统 node_modules/.bin 目录下存的就是 cmd 文件。