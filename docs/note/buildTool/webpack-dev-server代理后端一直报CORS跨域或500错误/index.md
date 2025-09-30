# webpack-dev-server代理后端一直报CORS跨域或500错误

本地运行vue项目，打包工具是webpack，后端接口已经部署到开发域名上，接口用postman请求没问题，但是在项目中代理接口后运行就一直报500错误，报错信息如下：

```bash
Uncaught runtime errors:

ERROR
Request failed with status code 500
    at createError (webpack-internal:///./node_modules/axios/lib/core/createError.js:16:15)
    at settle (webpack-internal:///./node_modules/axios/lib/core/settle.js:17:12)
    at XMLHttpRequest.handleLoad (webpack-internal:///./node_modules/axios/lib/adapters/xhr.js:61:7)
```

vue.config.js中的代理配置：
```js
// 开发代理配置
devServer: {
    proxy: {
        '^/api/': {
            target: 'http://cafe123.cn',
            changeOrigin: true
        }
    }
}
```

### 探索原因
开始一直以为是devServer代理配置或者axios哪的问题，代理肯定是成功了的，因为500错误本身就是服务器返回的，然后各种调试axios都无效。

直接弃用devServer代理，换成whistle在浏览器上来转发代理接口，服务器上依然返回500错误。postman中请求没问题的cURL：

```bash
curl --location --request POST 'https://cafe123.cn/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "account": "admin",
    "password": "1345102704"
}'
```

然后直接复制出来浏览器中的请求cURL，放到postman中发送请求，发现浏览器加了很多请求头，然后再一个请求头一个请求头测试，最终发现原因在Origin请求头上。

### 解决办法
找到问题的原因就好办了，origin请求头有问题，那就直接改它，方式也有下面两种：

1、在devServer代理中添加Origin请求头
```js
// 开发代理配置
devServer: {
    proxy: {
        '^/api/': {
            target: 'http://cafe123.cn',
            changeOrigin: true,
            headers: {
                Origin: 'http://cafe123.cn'
            }
        }
    }
}
```

2、直接去掉请求中的Origin请求头
```js
// 开发代理配置
devServer: {
    proxy: {
        '^/api/': {
            target: 'http://cafe123.cn',
            changeOrigin: true,
            router: function(request) {
                delete request.headers.origin
            },
        }
    }
}
```

### http的origin请求头
请求头 Origin 表示请求的来源（协议、主机、端口）。如果一个用户代理需要请求一个页面中包含的资源，或者执行脚本中的 HTTP 请求（fetch），那么该页面的来源（origin）就可能被包含在这次请求中，浏览器中请求会出现 Origin 请求头的2种情形：

* 跨源请求
* 除 GET 和 HEAD 以外的同源请求（即它会被添加到同源的 POST、OPTIONS、PUT、PATCH 和 DELETE 请求中）

### devServer的changeOrigin配置
changeOrigin: true/false, Default: false - changes the origin of the host header to the target URL。

changeOrigin是用来将host请求头修改为target的URL，注意这里修改的并不是origin header，这个配置实际跟解决跨域问题没啥关系。

参考文档
* [webpack devServer.headers](https://webpack.js.org/configuration/dev-server/#devserverheaders)
* [HTTP Headers Origin](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Reference/Headers/Origin)