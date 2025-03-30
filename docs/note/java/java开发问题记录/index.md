# java开发问题记录

### IntelliJ IDEA 快捷键
* 全局搜索：双击 shift、ctrl + shit + F
* 当前搜索：ctrl + F
* 当前替换：ctrl + R
* 代码向后缩进：选中需要缩进的代码 + tab键
* 代码向前缩进：选中需要缩进的代码 + shift + tab键

### mac 上安装 Itellij IDE
之前安装过的话要卸载干净了才能再装最新的，否则装上新版会打不开。卸载可以在终端里一次输入下面4条删除命令：

```bash
# 第1条
rm -rf ~/Library/Logs/JetBrains/IntelliJIdea*

# 第2条
rm -rf ~/Library/Application\ Support/JetBrains/IntelliJIdea*

# 第3条
rm -rf ~/Library/Caches/JetBrains/IntelliJIdea*

# 第4条
rm -rf ~/Library/Preferences/jetbrains.idea*
```

### Address already in use 报错
杀死占用端口进程再重新运行，mac 上杀死端口：
```bash
# 查出占用要杀死端口的 PID
lsof -i:8080

# 通过 PID 杀死进程
kill -9 ${查出来的PID}
```

### IDEA跑单测报错  Command line is too long
实测有用的彻底解决此报错的方法：直接给 JUint 设置 shorten command line。

### IDEA避免包被自动引入全部
IDEA导入包时避免编辑器自动引入全部 import xxx.xx.*，将 Settings - Editor - Code Style - Java - Imports 中的 Class count to use import with '*' 和 Names count to use static import with '*' 默认的5、3改大点比如：50、30。

### IDEA多个文件Tab显示成多行
IDEA默认的打开文件Tab是单行显示的，文件名太长时同时打开多个文件时切换会很不方便，可以设置 File - Settings - Editor -Editor Tabs，去掉 Show tabs in single row 勾选，下面的 Tab limit 可以调整显示的 tab 数量，一般可以调到 20，这样多个 Tab 时会直接多行排列，切换和查找的时候都很方便。

### IDEA终端Esc快捷键冲突
IDEA中使用命令行通过 i 进入编辑模式修改好后，没办法按Esc键退出，原因是和IDEA快捷键冲突了，可以在 Settings 设置里把 Esc的快捷键删掉就可以了。