# webpack本地axios接口代理一直不生效

一个比较老的项目，各种配置也比较坑，之前没有配 proxy 接口代理，webpack 还是用的 v3 版本，项目中因为要访问另一个域名下的接口，所以就来折腾了下代理，但是接口代理一直不生效，报错：Failed to load resource: the server responded with a status of 404 (Not Found)。

vue 项目的 main 配置入口文件
```js
// main.js
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import myAjax from '@/util/my-axios'

Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
})
```

自定义 axios 配置的 my-axios 文件
```js
// util/my-axios.js
import axios from 'axios'
import config from '@/config'
import cookies from 'vue-cookies'

axios.defaults.baseURL = config.apiBaseURL

// 请求拦截
axios.interceptors.request.use(
  config => {
    config.withCredentials = true
    config.timeout = 600000
    const token = cookies.get('token')
    config.headers.token = token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
axios.interceptors.response.use(
  response => {
    return response.data || {}
  },
  error => {
    return Promise.reject(error)
  }
)
```

最后查看接口发现，请求地址也并不是配置的代理前缀，后面才发现是因为 main.js 里原本导入了 my-axios 文件，eslint 会提示变量未使用，我手一抖就给删掉了，然后就会发现报错，代理也不生效。

这个问题还有就是 main.js 里导入 axios 的方式也有问题，这里先导入了官方的 axios 库，然后又导入了自定义的 my-axios 文件，实际运行是没问题的，但是比较好的方式应该是只导入咱自己封装过后的 my-axios 这一个文件，优化后的版本：

vue 项目的 main 配置入口文件，只用导入 my-axios 这一个文件：
```js
// main.js
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '@/util/my-axios'

Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
})
```

自定义 axios 配置的 my-axios 文件，比上面原本的最后一行多一个默认导出 export default axios：
```js
// util/my-axios.js
import axios from 'axios'
import config from '@/config'
import cookies from 'vue-cookies'

axios.defaults.baseURL = config.apiBaseURL

// 请求拦截
axios.interceptors.request.use(
  config => {
    config.withCredentials = true
    config.timeout = 600000
    const token = cookies.get('token')
    config.headers.token = token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
axios.interceptors.response.use(
  response => {
    return response.data || {}
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios
```

所以要注意前端项目 index.html 里的 script 标签直接定义的变量和 main.js 里定义或 import 导入的一些东西即使提示未使用也不能删除，因为这里的是全局变量，说不定那个页面或系统里直接在用。
