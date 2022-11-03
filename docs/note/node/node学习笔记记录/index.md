# node学习笔记记录

## 获取脚本路径
* process.cwd()：current work directory，当前工作目录的路径，就是你当前运行小黑窗的目录
* __dirname：当前执行的 js 脚本的目录
* __filename：当前执行的 js 脚本的带着文件名的完整路径
* process.execPath：安装的 node.exe 所在的绝对路径

## os 模块获取桌面目录
用来获取用户的桌面路径

```js
// 模块前面可加上 node: 表明是 node 的内置模块
const os = require('node:os')
const path = require('node:path')
const desktopDir = path.join(os.homedir(),'Desktop')
console.log(desktopDir)
```

## os 模块获取用户操作系统

os.platform() 和 process.platform 获取的结果都是一样的，不过注意 windows 系统不管是32位还是64位，获取到的都是 win32。要想区分出具体的位数，需要用 process.arch，64位获取到的就是 x64

```js
const os = require('node:os')
console.log(os.platform())
console.log(process.platform)
console.log(process.arch)
```