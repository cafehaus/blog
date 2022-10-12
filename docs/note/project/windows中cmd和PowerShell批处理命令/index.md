# windows中cmd和PowerShell批处理命令

之前在 Git 批量删除本地分支，有用到 Linux 或 MacOS 下的批处理命令 xargs：

```bash
git checkout master
git branch | grep -v 'master' | xargs git branch -D
```

因为这个命令中的 grep、xargs 本身是 Shell script，在 windows 中的 cmd 和 PowerShell 中是不能用的。

那如果想要在 windows 中实现上面同样的批处理，该如何实现呢？

## cmd 中批处理命令

```bash
# 在cmd中用 % 标识变量，如果是批处理程序执行bat文件中需要使用 %% 来表示变量如 %%i

# 在cmd小黑窗窗口中
for %i in (xxx) do command

# 在bat文件中
for %%i in (xxx) do command
```

* for、in和do是for语句的关键字，三个缺一不可
* xxx是任何序列，可以只有一个元素。元素可以是变量、字符串，元素之间用空格键、tab键、逗号、分号或等号分隔
* xxx必须用()包围，即使只有一个元素
* %%I是形式变量，即使没有在command中被使用，也不能省略
* for语句的形式变量I，可以换成26个字母中的任意一个，这些字母会区分大小写，也就是说，%%I和%%i会被认为不是同一个变量
* 为了不与批处理中的%0～%9这10个形式变量发生冲突，请不要随意把%%I替换为%%0～%%9中的任意一个
* for语句依次提取(xxx)中的每一个元素，把它的值赋予形式变量I，带到do后的command中参与命令的执行；当执行完一次do后的语句之后，再提取(xxx)中的下一个元素，再执行一次command，如此循环，直到(xxx)中的所有元素都已经被提取完毕，该for语句才宣告执行结束

### 批处理 for 命令主要作用:

1. for循环
```bash
for %I in (xxx) do command
```

2. 文本处理
```bash
for /f %I in (file) do command
```

3. 对命令执行结果进行处理
```bash
for /f %I in ('command1') do command2
```

4. 路径扩充
```bash
for /f %I in (pathset) do command
```

** for 后面的参数，大小写都可以 **

* /D 用于在指定目录内搜索子目录名
* /R 用于在指定目录内搜索文件名
* /L 用于以增量形式输出数字序列
* /F 用于在指定文件内（.txt）搜索文件内容

## 实现批量处理

1. 实现反向过滤
```bash
git checkout master
git branch | findStr /I /V master

# /V  显示所有未包含指定字符串的行
# /C  仅显示包含字符串的行数
# /N  显示行号
# /I  搜索字符串时忽略大小写
```

2. 批处理
for 循环里没找到能怎么直接获取管道符输出的方法，所以只能借助生成一个 txt 文件写入内容，循环了再删掉来实现

```bash
# 打印测试
# git branch |(findStr /V master>branch.txt) && (for /f %i in (branch.txt) do echo %i) && del branch.txt

git branch | (findStr /V master > branch.txt) && (for /f %i in (branch.txt) do git branch -D %i) && del branch.txt
```

## PowerShell 中批处理命令

PowerShell 中的条件和循环这些和普通的编程语言比较像，PowerShell 中实现换行多行命令输入，按住 ctrl + Enter
```bash
# -lt：小于 (less than)
for($i=0;$i -lt 10;$i++)
{
    echo "Hello"
}
```

为了使用管道符，可以直接用 foreach 来循环处理
```bash
git branch | findStr /V master | foreach {git branch -D $_.Trim()}

# 注意要用 Trim() 方法去掉获取到的分支名前后的空格，否则会报错
# error: branch '  xxx' not found.
```