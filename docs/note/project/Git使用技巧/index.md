# Git使用技巧

## 常用的git操作命令
从配置、初始化本地仓库到提交代码的常用git操作命令

### 使用git前的配置
刚使用git，先要在电脑上安装好git，接着我们需要配置一下帐户信息：用户名和邮箱。
```bash
# 设置用户名
git config --global user.name "xxx"

# 设置邮箱
git config --global user.email "xxx"
```
* global：对当前用户所有仓库有效
* local：只对当前仓库有效
* system：对系统所有登录的用户有效

查看配置信息
```bash
git config --list --global
```

### 初始化一个本地仓库
配置好后就可以初始化一个本地仓库
```bash
git init
```

同时我们也可以针对仓库进行账户信息配置，如果要清除配置可以用下面的命令
```bash
git config --unset --local user.name
```

### git clone克隆远程仓库代码
初始化好仓库后我们就可以用git clone拉去远程仓库的代码
```bash
git clone xxx
```

接着可以进入的代码目录下，默认拉取到的是master分支，这时可以用git checkout切换到自己的开发分支
```bash
# 切换到某个分支
git checkout feat-zhou

# 想要拉取最新代码
git pull
```

### git banch
正常开发中用到的开发分支，一般会在其他需求管理平台上统一创建，但有时我们也需要自己在本地创建分支。
```bash
# 基于当前分支创建分支
git branch feat-test

# 查看本地的分支
git branch

# 删除本地的dev分支
git branch -D dev
```

### 工作区、暂存区和远程仓库
这一部份是我们日常开发中使用最频繁的地方，git有3种状态：已修改、已暂存和已提交，一个文件我们在工作区修改了代码就会变成已修改，此时可以查看本地修改的状态
```bash
git status
```

然后可以将本地的修改添加到暂存区
```bash
# 添加单个文件到暂存区
git add <file>

# 添加多个文件到暂存区
git add <file>

# 添加所有修改和新增的文件到暂存区，注意不包括删除的文件
git add .

# 从工作区和暂存区删除某个文件
git rm <file>
```

等开发完成后我们就可以将代码提交到远程仓库
```bash
# 将暂存区的所有修改会生成一条记录，添加个方便我们后续查找的备注
git commit -m "feat:新增用户登录接口"

# 推送到远程仓库
git push
```

### git merge
有时需要往某个分支合代码时，比如开发完成提测时往test测试环境分支合代码，我们就需要用到merge命令。
```bash
# 先切换到test分支
git checkout test

# 拉取最新代码
git pull

# 将开发分支代码合到test分支
git merge feat-zhou

# 推送到远程仓库
git add .
git commit -m "merge feat-zhou"
git push
```
注意如果上面merge后有冲突时，这时就需要自己先在本地解决完冲突后，才能推送到远程分支
```bash
# 标记冲突已解决
git add .

# 推送到远程仓库
git commit -m "merge feat-zhou"
git push
```

### git stash
当我们开发中跟别人共用了同一个分支开发，然后别人突然提交了代码，这个时候我们就可以用git stash把本地的修改暂存起来，然后git pull拉取到最新的代码，再把git stash中存的代码添加进来。

还有就是开发中线上突然出现了bug，需要先切换到其他分支去解决问题，但是当前分支的代码可能我们还没写好还不想提交，这时我们也可以通过git stash暂存起来。

```bash
# 查看本地 stash 暂存过的所有记录
git stash list

# 暂存本地修改
git stash save "xxx"

# 将最近一次暂存修改的代码加载回来
git stash apply

# 将最近一次暂存修改的代码加载回来，并删掉暂存记录
git stash pop
```

### 给某个已经提交过的文件重命名
当我们在开发中需要修改某个文件的路径时，比如之前放的目录不合理需要移到另一个目录下，直接将文件拖到新的目录后提交svn时实际会是两步操作，之前目录的文件先被删除，然后在新的目录下添加了一个新的文件。

这就会导致新目录下文件之前的提交记录丢失了，因为对git来说这是一个新增的文件。

这种情况其实我们就可以用git mv命令来解决，不管是移动目录还是修改文件名，文件所有之前的提交记录都不会丢失。
```bash
# 重命名文件
git mv xx xx
```

清屏
```bash
# Mac
clear

# Windows
cls
```

### git log
通过git log命令可以查看历史提交的记录
```bash
# 查看所有提交记录，可以详细看到提交人、提交日期这些，也可以不加 --all
git log --all

# 以简洁方式查看提交记录，每条记录只会占用一行显示提交id和备注信息
git log --oneline

# 查看最近4条
git log -n 4

# 简洁方式查看最近4条
git log --oneline -n 4
```

## commit 规范
type 为必填项，用于指定 commit 的类型，约定了 feat、fix 两个主要 type，以及 docs、style、build、perf、refactor、revert 六个特殊 type。

**主要 type**  
* feat：增加新功能  
* fix：修复bug

**特殊 type**  
* docs：只改动了文档相关的内容  
* style：代码格式修改，例如去掉空格、改变缩进、增删分号  
* build：构造工具的或者外部依赖的改动，例如webpack，npm  
* perf：提高性能的改动  
* refactor：代码重构时使用  
* revert：执行 git revert 打印的 message  

**完整的 commit message 示例：**
```bash
git add .
git commit -m "build(package.json):升级vue版本到v3.0.2"
git push origin dev
```

## git批量删除本地分支
开发一段时间后，我们本地会有很多无用的分支，一个一个的 git branch -D branchName 又感觉太费时间了，如果要批量删除，可以用下面的命令：

```bash
git checkout master
git branch | grep -v 'master' | xargs git branch -D
```

注：以上命令只能用 Git Bash 运行才有效，直接在终端命令、PowerShell、vscode终端里运行都会报错：无法识别 grep（windows cmd 终端切换到D盘：① cd /d d:② d:）

**具体执行步骤是：**
* 1、切换到master分支，因为当前的分支不能删除，要保留哪个就先切换到哪个分支  
* 2、将git branch的结果进行筛选，除去master分支  
* 3、将处理后的结果作为git branch -D的参数来进行批量删除


**grep 查找命令**  
* grep name 表示查看包含name这个关键字的内容  
* grep -v name 反向查找，表示查看除了含有name之外的内容

**xargs**  
xargs（英文全拼： eXtended ARGuments），是给命令传递参数的一个过滤器，也是组合多个命令的一个工具

**管道命令符**  
管道命令符 | 的作用是将前一个命令的标准输出当作后一个命令的标准输入，格式为“命令A|命令B"