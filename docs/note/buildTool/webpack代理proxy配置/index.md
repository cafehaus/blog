# webpack代理proxy配置

前端项目开发中我们经常会用到 proxy 代理来解决接口跨域问题，通常是在 webpack.config.js 或 vue.config.js 或 vite.config.js 中配置：
```js
devServer: {
   proxy: {
     '/api': {
       target: 'http://localhost:3000',
       changeOrigin: true,
       pathRewrite: { '^/api': '' },
     },
   },
 }
```

webpack 中的服务器工具 webpack-dev-server，实质上是启动了一个 express 服务器。proxy 代理是利用 http-proxy-middleware 这个http代理中间件（[vite 是用的 http-proxy](https://cn.vitejs.dev/config/server-options.html#server-proxy)，其实 http-proxy-middleware 也是基于 http-proxy 的），实现将请求转发给其他服务器。

背后其实都是使用 node 来启动 server 服务器，这也是为什么我们常说这种代理只能在开发阶段使用，因为 build 生产包时我们并不会打包一个 node 服务器进去，线上要实现代理一般直接通过 nginx 来配置。

### node 代理服务器示例
```js
const express = require('express')
const proxy = require('http-proxy-middleware')
const app = express()

app.use('/api', proxy({
  target: 'http://www.cafe123.cn',
  changeOrigin: true
}))
app.listen(3000)
```

### proxy 配置参数

#### target
url string to be parsed with the url module，target host to proxy to. (protocol + host)，要代理访问的目标主机（协议 + 主机），如：http://cafe123.cn、http://192.168.2.228:8088/api/

#### changeOrigin
true/false, Default: false - changes the origin of the host header to the target URL，for virtual hosted sites，needed for virtual hosted sites. 改变请求 host 头，默认是 false，项目中或网上很多地方都能看到会给设置成 true。

看名字会以为修改的是 Origin 头，实际上改的是 Host 头，感觉应该叫 changeHost 更合理呢，修改的也就是我们发送请求时 Request Headers 里的参数。

在浏览器中我们即使设置为 true，会发现请求头里的 Host 和 Origin 都是不会发生任何变化的，因为这歌修改是代理服务器所做的操作，所以要在服务器端去查看请求头里的信息就能看到两者的不同了。

Host 请求头表示请求资源的网络主机和端口号，是 HTTP/1.1 版本中为了解决虚拟主机的问题，所以这个参数和跨域没啥关系，其实我们压根不用设置，保持默认的 false 就可以了。

#### pathRewrite
(object/function) Rewrite target's url path. Object-keys will be used as RegExp to match paths.路径重写，可以是对象，也可以是函数：

```js
// rewrite path 重写路径
pathRewrite: {'^/old/api' : '/new/api'}

// remove path 移除路径
pathRewrite: {'^/remove/api' : ''}

// add base path 添加基础路径
pathRewrite: {'^/' : '/basepath/'}

// custom rewriting 路径自定义
pathRewrite: function (path, req) { return path.replace('/api', '/base/api') }

// custom rewriting, returning Promise 路径自定义，返回 Promise
pathRewrite: async function (path, req) {
  const should_add_something = await httpRequestToDecideSomething(path)
  if (should_add_something) path += 'something'
  return path
}
```

### axios
项目中使用 axios 发送请求，我们一般通过 axios.default.baseURL 来设置默认的基础请求地址，如果不设置我们本地就是默认的 localhost:8080 之类的，具体请求接口中的 url 我们一般只用写接口 path 就可以了。

写代理路径时，要注意下 axios.default.baseURL 和接口里的 url。

* [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)