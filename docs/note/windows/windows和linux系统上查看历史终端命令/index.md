# windows和linux系统上查看历史终端命令

### Linux 系统查看历史终端命令
* 用键盘上的 ↑↓ 上下箭头查看
* 输入 history 可以查看所有历史输入的命令，history 10：查看最近10条终端执行过的命令

### windows 系统查看历史终端命令
* 用键盘上的 ↑↓ 上下箭头查看
* 小黑窗cmd 中按 F7 快捷键可以弹出一个历史输入命令的小白窗，可以直接选择回车再次执行，按 Esc 关闭小白窗，注意 PowerShell 中无效
* 小黑窗cmd 中输入 doskey/HISTORY，注意 PowerShell 中无效
* PowerShell 中输入 [Get-History](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_history?view=powershell-7.3)，注意小黑窗 cmd 中无效