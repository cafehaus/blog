# 本地开发 localhost 不同服务token被覆盖

同时开发多个前端项目，都是运行在 localhost 下的不同端口上：localhost:8080、localhost:8081、localhost:8082...一去登录其中一个端，其他端的登录态都失效了。

项目里的登录态 token 都是存在 cookie 里的，代码如下：
```js
import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 请求头添加登录验证
  config.headers.Token = cookie('token') || 'null' // 防止不传，被网关拦截，接口401
  return config
}, error => {
  return Promise.reject(error)
})
```
cookie 是不提供端口隔离的，不同的端口下的服务 cookie 是可以相互读写的，所以登录其中一个端时，其他端口下的所有服务的 token 都会被新的替换了

**浏览器缓存作用域**

* localStorage：协议、主机名以及端口
* sessionStorage：协议、主机名以及端口，还要加上浏览器标签页
* cookie：范围仅限于当前主机名上的所有URL - 而不是绑定到端口或协议信息，domain本身以及domain下的所有子域名，需注意cookie不提供端口隔离，即同一服务器的下运行的不同端口之间的服务是可以相互读写cookie的

**注意**

相同浏览器下，并且是同源窗口（协议、域名、端口一致），即使不同页面也是可以共享localStorage和Cookies值，但是不能共享sessionStorage