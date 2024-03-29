# 用electron打包前端应用初体验

[electron 官方文档](https://www.electronjs.org/)

### 打包报错

按照示例教程打包应用，报错：

* An unhandled rejection has occurred inside Forge:
* Error: Command failed with a non-zero return code (1):
* Fatal error: Unable to commit changes
* Electron Forge was terminated. Location...

本地运行起来的桌面窗口未关闭，先关了再来打包。

### 引用 react + vite 打包后的 dist 文件白屏

react + vite build 打包后的文件，js 和 css 资源引用路径都是绝对路径，导致 electron 中加载不到对应的文件。

```html
<script type="module" crossorigin src="/assets/index.21b9ac96.js"></script>
<link rel="stylesheet" href="/assets/index.c622ce5d.css">
```

解决办法，配置 vite.config.js 中的 base: './' 为相对路径。


### 本地运行调试前端项目

正常打包项目是用 win.loadFile 加载打包好的 html 文件，本地运行时可以直接用 win.loadURL 直接引入本地运行的前端服务，方便调试和开发。

```js
  // win.loadFile('./dist/index.html')
  win.loadURL('http://127.0.0.1:5173/')
```

### 使用 node 模块

渲染进程使用 node 模块，需要额外配置 webPreferences

```js
// main.js
const { app, BrowserWindow } = require('electron')

let win = null
app.on('ready', () => {
  win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: { // 在渲染进程中使用node, 需要配置 webPreferences属性
      nodeIntegration: true, // 使渲染进程拥有node环境
      contextIsolation: false, // 设置此项为false后，才可在渲染进程中使用 electron api，https://www.electronjs.org/zh/docs/latest/api/browser-window
      preload: path.join(__dirname, 'preload.js')
  })
})

// preload.js
window.require = require
```

注意需要用 preload 预加载脚本去设置下 window.require，这样才能在 vue、react 项目中用 require 去导入 node 相关模块，当然你也可以往 window 上挂载其他需要挂载的，注意这样挂载了不能直接在浏览器中调试，会报错的，要在 electron 中去调试。

### 主进程和渲染进程通信

ipcRenderer 和 ipcMain 通过 send 和 on 事件监听通信，如果一方收到信息后还要回复另一方，只能通过 event.reply 发送给对方另一个事件实现回复通信。

不过还可以通过 ipcMain.handle 用 promise 来 return 数据实现回复，主进程 ipcMain.handle，渲染进程 ipcRenderer.invoke。

### 数据传递

vue3 中如果用的 reactive 定义的数据，其实是一个 Proxy 代理对象，直接往主进程传递会报错，要自己 JSON.parse(JSON.stringify(xx)) 或者将数据复制到普通对象进行传递。

### 查看相关版本号

* electron 版本：process.versions.electron
* NODE版本：process.versions.node
* V8 引擎版本：process.versions.v8
* chrome版本：process.versions.chrome