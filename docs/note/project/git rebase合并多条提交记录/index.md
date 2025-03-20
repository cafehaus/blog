# git rebase合并多条提交记录

通过 git rebase 可以合并开发阶段的多个 commit，让我们的提交记录更干净。其实操作也很简单，主要分为如下6个步骤，以下操作都是在 windows 中的 PowerShell 命令行窗口中进行：

### 1、查看提交历史
```bash
git log --oneline
```

### 2、设置要合并最近提交的 N 个 commit
```bash
git rebase -i HEAD~N
```

### 3、修改要合并的记录
按键盘上 i 进入编辑模式，然后将除第一行的 pick 外，其他的 pick 全部修改成 s。

### 4、保存退出修改
修改好后按键盘左上角的 esc 键，然后输入 :wq 就可以保存了。

### 5、修改 commit 提交信息
操作完上面一步后会自动进入修改 commit 信息，还是按 i 进入编辑模式，接着将不需要的 commit 提交信息前面加上 # 号注释掉，修改好后按 esc，然后输入 :wq 保存。

### 6、推送到远程仓库
```bash
git push -f
```

这样我们开发调试过程中提交的一些无关紧要的 commit 比如：

* feat:测试一下
* feat:前一次提交漏了
* fix:修复前面一次改出来的问题
* feat:更新一下

都可以借助 git rebase 来合并掉，只保留关键的提交信息，让 git 记录树更加整洁，注意如果中途有其他人提交或者 merge master 之类的操作就不建议再去 git rebase 合并了，因为有可能会导致一些冲突和提交记录丢失。