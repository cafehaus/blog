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

相关：

Flutter SDK 包里的 flutter_console.bat 文件就是跟这个类似的，点一下就可以直接自动在打开 cmd 小黑窗，然后可直接输入 flutter 命令