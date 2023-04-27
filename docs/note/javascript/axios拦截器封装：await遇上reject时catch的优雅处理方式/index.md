# axios拦截器封装：await遇上reject时catch的优雅处理方式

前端项目中使用 axios 请求接口，基于 axios 二次封装了一些业务逻辑，一般我们会在请求和响应拦截器里添加自己项目相关的业务逻辑，一个简单的 demo 如下：
```js
import axios from 'axios'
import config from '@/config'
import cookies from 'vue-cookies'

axios.defaults.baseURL = config.apiBaseURL

// 请求拦截
axios.interceptors.request.use(
  config => {
    config.timeout = 600000
    let token = cookies.get('token')
    if (token) {
      config.headers.token = token
    }
    config.headers = Object.assign(config.headers, {
      'Content-Type': 'application/json'
    })
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
axios.interceptors.response.use(
  function(response) {
    // 2xx 范围内的状态码都会触发该函数
    return response.data || {}
  },
  function(error) {
    // 超出 2xx 范围的状态码都会触发该函数
    return Promise.reject(error)
  }
)

export default axios
```
正常我们项目中使用是没问题的，比如在 vue 项目中使用：
```vue
<script>
export default {
  created() {
    this.getData()
  },

  methods: {
    async getData() {
      const res = await this.$axios({
        method: 'get',
        url: 'user'
      })
      if (res.success) {
        console.log('success')
      } else {
        console.log('error')
      }
    }
  }
}
</script>
```
但是有一天后端告诉你，我们框架在外层直接做了参数校验、登录校验...就是如果各种乱七八糟的校验不通过时，http状态码就不是我们正常见到的 200 哟，可能登录态 token 失效直接扔给前端一个 401。然后问后端可不可以改下，这种情况应该也是 200 才对，因为请求已经成功，然后具体的你们的校验逻辑可以放在里层数据的 code 里，前端也比较好处理。

后端说实现不了，这是框架做的，压根还没请求到具体的服务里，好吧，那只能自己动手丰衣足食了。

像这种非 2xx 的状态码，axios 的相应拦截器会直接走第 2 个 error，封装的是直接返回 Promise.reject(error)，这样前端如果不去做任何处理的话，控制台会报错：Uncaught (in promise)，也就是有一个异常未去捕捉。

要解决这个报错就需要前端在具体的调用地方用 catch 或者 try catch 去捕捉，如果是直接在 await 的后面 catch 捕捉，报错确实消失了，但是 await 的返回值 res 此时就是 undefined，此时 await 接收到的值就是 catch 里的返回值，如果没有 return 就是 undefined 了。

然后悲催地跟着后面如果有用 res 做判断，又会报错：TypeError: Cannot read properties of undefined...如果还不明白，可以看下面的小 demo：

```js
async test() {
  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('fail')
    }, 3000)
  })
  // 报错：Uncaught (in promise)
  // 下面的代码不会执行
  console.log('res:', res)
  if (res.success) {
    console.log('success')
  }
},

async testCatch() {
  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('fail')
    }, 3000)
  }).catch(error => console.log(error))

  console.log('res:', res) // undefined
  if (res.success) { // 报错：TypeError: Cannot read properties of undefined
    console.log('success')
  }
},
```

### 最终实现方式

页面里用 try catch 或者自己多加几个判断，确实能解决报错，但是好像也不太优雅，目前找到的比较好的方式，如果能够拿到 error 里的一些报错信息，自己模拟组装一份数据，直接 return 给前端，这样既不用额外 catch，也解决了后续的报错问题：

```js
import axios from 'axios'
import config from '@/config'
import cookies from 'vue-cookies'

axios.defaults.baseURL = config.apiBaseURL

// 请求拦截
axios.interceptors.request.use(
  config => {
    config.timeout = 600000
    let token = cookies.get('token')
    if (token) {
      config.headers.token = token
    }
    config.headers = Object.assign(config.headers, {
      'Content-Type': 'application/json'
    })
    return config
  },
  error => {
    loadingInstance && loadingInstance.close()
    if (error.response && error.response.status == 401) {
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// 响应拦截
axios.interceptors.response.use(
  function(response) {
    // 2xx 范围内的状态码都会触发该函数
    return response.data || {}
  },
  function(error) {
    // 超出 2xx 范围的状态码都会触发该函数
    let errMsg
    const response = error.response
    if (response) {
      onst data = response.data || {}
      const dataMsg = data.message || data.msg
      const statusText = response.statusText
      errMsg = dataMsg || statusText || '出错了'
    } else if (error.message) {
      errMsg = error.message
    }

    // 有错误信息时自己模拟一份错误数据返回，解决后端动不动就直接 http 状态码 500、401...
    // 直接 reject 的话外层需要自己 catch，还需要额外判断 await 的返回值
    if (errMsg) {
      return {
        message: errMsg,
        success: false,
      }
    }
    return Promise.reject(error)
  }
)

export default axios
```