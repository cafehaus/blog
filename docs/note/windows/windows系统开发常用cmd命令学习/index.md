# windows系统开发常用cmd命令学习

## 打开命令窗口方式
1. win + R，然后输入 cmd
2. 右键搜索，直接输入 cmd，或老的windows系统开始 => 运行 => 输入 cmd 回车
3. 直接在顶部文件目录中输入 cmd
4. shift + 右键，直接在此处打开 PowerShell 窗口

## 文件或目录相关

### cd
显示当前目录的名称，或更改当前目录
```bash
# cd [<path>] 指定要显示或更改的目录的路径
cd d:
```

### dir
显示目录的文件和子目录的列表，相当于 linux 里的 ls 和 ll

```bash
# 显示当前目录下文件，注意这个命令是 linux 里的，在 windows 的 PowerShell 里可以用，cmd 小黑窗里不可以用
ls

# 显示当前目录下文件详细信息，相当于 ll
ls -l

# 显示当前目录下文件详细信息
ll
```

### tree
以图形方式显示驱动器中路径或磁盘的目录结构

### mkdir
创建目录或子目录，此命令与 md 命令相同

```bash
# mkdir [<drive>:]<path>
mkdir D:\Test

```

### xcopy / copy
copy：将一个或多个文件从一个位置复制到另一个位置

xcopy：复制文件和目录，包括子目录

### rename
重命名文件或目录
```bash
# rename [<drive>:][<path>]<filename1> <filename2>
rename zhou.txt hei.txt
```

### move
将一个或多个文件从一个目录移到另一个目录

### replace
替换目录中的现有文件。 如果与 /a 选项一 起使用，则此命令会将新文件添加到目录，而不是替换现有文件

### del / rd / rmdir
del：删除一个或多个文件，此命令执行与 erase 擦除命令相同的操作

rd / rmdir：删除目录

### find / findstr
find：搜索文件中的文本字符串，并显示包含指定字符串的文本行

findstr：搜索文件中的文本模式

```bash
# find 查找 test.txt 中包含字符串 zhouxiaohei 的所有行
find `"zhouxiaohei`" test.txt

# findstr 查找 test.txt 中包含字符串 zhouxiaohei 的所有行
findstr zhouxiaohei test.txt
```

跟 linux 下的 grep 类似，windows 下推荐用 findstr，一般会用管道符 | 和其他命令配合使用，如查找网络：netstat -ant |find `"192.168.2`"

注意：
1. find命令中要查找的字符串要用"双引号"括起来
2. 双引号前面需加上转义符 `，否则可能会报错：FIND: 参数格式不正确

### 重定向输出符号 > >>
命令 > 文件：将标准输出重定向到文件中（清除原有文件中的数据）

命令 >> 文件：将输出重定向到文件中（在原有内容后面追加）

```bash
# 在当前目录下生成一个 test.txt 文本文件，内容：zhouxiaohei
echo "zhouxiaohei" > test.txt

# 在当前目录 test.txt 文本文件中追加内容：123
echo "123" >> test.txt
```

### echo
显示消息或打开或关闭命令回显功能。 如果不使用参数， echo 将显示当前的回显设置。

```bash
# echo [<message>]  指定要在屏幕上显示的文本
# echo [on | off]   打开或关闭命令回显功能，默认情况下，命令回显处于启用状态
# @echo off 防止批处理文件中的所有命令 (包括 echo off 命令) 在屏幕上显示在批处理文件类型的第一行

echo 123
```

## 网络相关

### ipconfig
显示所有当前的 TCP/IP 网络配置值，并刷新动态主机配置协议 (DHCP) 和域名系统 (DNS) 设置

开发中一般用来查看本地的局域网动态 ip 地址，mac 和 linux 系统里用 ifconifig

### ping
通过向回显请求消息发送 Internet 控制消息协议，验证与另一个 TCP/IP (IP) 连接，可使用此命令测试计算机名称和计算机的 IP 地址。 如果 ping IP 地址成功，但 ping 计算机名不成功，则可能是名称解析问题。

### netstat
用来查看网络状态的命令，显示活动 TCP 连接、计算机正在侦听的端口、以太网统计信息、IP 路由表、IP 路由表、IP、ICMP、TCP 和 UDP 协议) 的 IPv4 统计信息 (，以及 IPv6、ICMPv6、基于 IPv6 的 TCP 以及基于 IPv6 协议) 的 UDP 的 IPv6 统计信息 (。 在不带参数的情况下使用，此命令显示活动的 TCP 连接

-a 显示计算机正在侦听的所有活动 TCP 连接以及 TCP 和 UDP 端口

-r 显示 IP 路由表的内容，这等效于 route print 命令，告诉我们本地机器的网关、子网掩码等信息

## 系统或操作相关

###  tasklist / taskkill
tasklist：显示本地计算机或远程计算机上当前正在运行的进程列表

taskkill：结束一个或多个任务或进程，可以通过进程 ID 或图像名称结束进程，可以先使用 tasklist 命令来查看进程 ID (PID) 以结束进程

```bash
# 杀死某个进程
taskkill /pid <processID>
```

日常开发中一般某个要用的端口被占用了，可以用这两个命令来查看和操作

### path
在 PATH 环境变量中设置命令路径，指定用于搜索可执行文件 (.exe) 目录集。 如果不带参数使用，此命令将显示当前命令路径

### where
显示与给定的搜索模式匹配的文件的位置

### cls
清除屏幕

### start
启动单独的命令提示符窗口以运行指定的程序或命令

### ctrl+c
终止命令

### exit
退出 cmd

### pause
暂停批处理程序的处理，并显示提示， Press any key to continue . . .

### title
为"命令提示符"窗口创建标题
```bash
# title [<string>]
title 周小黑
```

### whoami
显示当前登录到本地系统的用户的用户、组和特权信息

### systeminfo
显示有关计算机及其操作系统的详细配置信息，包括操作系统配置、安全信息、产品 ID 和硬件属性 (例如 RAM、磁盘空间和网卡)

## 系统变量

```bash
# 查看当前所有可用的环境变量
set

# 查看某个环境变量
set path

# 修改环境变量
set USERNAME="TEST"

# 环境变量追加：set 环境变量名="%环境变量名%;addValue"
set PATH="%PATH%;C:"
```

部分系统内置变量，可通过 echo 在命令窗口里查看
```bash
# 返回当前目录字符串
%CD%

# 返回 Windows 根目录的位置
%SystemRoot%

# 返回系统根目录的驱动器
%SystemDrive%

# 返回默认情况下应用程序存储数据的位置
%APPDATA%
%LOCALAPPDATA%

# 返回操作系统目录的位置
%windir%

# 指定可执行文件的搜索路径
%Path%

# 返回所有“用户配置文件”的位置
%ALLUSERSPROFILE%

# 返回当前用户的配置文件的位置
%USERPROFILE%

# 返回命令行解释器可执行程序的准确路径
# C:\WINDOWS\system32\cmd.exe
%ComSpec%

# 返回用来启动当前的 Cmd.exe 的准确命令行
%CMDCMDLINE%

# 返回连接到用户主目录的本地工作站驱动器号
%HOMEDRIVE%

# 返回用户主目录的完整路径
%HOMEPATH%

# 返回用户的共享主目录的网络路径
%HOMESHARE%

# 返回验证当前登录会话的域控制器的名称
%LOGONSERVER%

# 返回计算机的名称
%COMPUTERNAME%

# 返回操作系统的名称
%OS%

# 返回对当前登录用户可用的应用程序所使用的默认临时目录
%TEMP%
%TMP%

# 返回包含用户帐户的域的名称
%USERDOMAIN%

# 返回当前登录的用户的名称
%USERNAME%

# 返回当前日期
%DATE%

# 返回当前时间
%TIME%
```

在 cmd 命令中，按键盘的向上箭头可以快速切换历史前后命令，敲 Tab 可自动补全路径

相关：
[windows-commands 文档](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands)