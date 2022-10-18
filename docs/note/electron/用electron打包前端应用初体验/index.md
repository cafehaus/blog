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
const { app, BrowserWindow } = require('electron')

let win = null
app.on('ready', () => {
  win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: { // 在渲染进程中使用node, 需要配置 webPreferences属性
      nodeIntegration: true,
      contextIsolation: false  //Electron 12.0以上版本需要的额外设置此项}
  })
})
```
