# java开发问题记录

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

### mac 上杀死端口

```bash
# 查出占用要杀死端口的 PID
lsof -i:8080

# 通过 PID 杀死进程
kill -9 ${查出来的PID}
```