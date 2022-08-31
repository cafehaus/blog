# 通过hosts文件修改本地域名映射

hosts是一个没有扩展名的系统文件，windows系统里位置在 C:\Windows\System32\drivers\etc，其作用就是将一些常用的网址域名与其对应的IP地址建立一个映射关系，这样用户在浏览器中输入一个网址，浏览器会先在电脑本地的那个hosts文件里去找有没有对应的ip地址，如果有就直接去访问这个ip地址，如果没有找到，则系统会再将网址提交到DNS域名解析服务器进行IP地址的解析。

在另一篇文章：[电脑上打不开github解决办法](../电脑上打不开github解决办法/index.md)，也是通过修改 hosts 文件实现的。

## 修改 hosts 文件实现 baidu.com 访问本地服务

下面通过一个小实验，实现在浏览器中输入 baidu.com 访问电脑本地的服务，首先在 hosts 文件中将 baidu.com 映射到本地的 127.0.0.1，直接加在文件最后就可以了，如下：

```bash
# ...
127.0.0.1 baidu.com
```

修改好后保存，如果提示没修改权限，可通过如下方法尝试解决：

* 鼠标右键以管理员方式打开
* 登录电脑那个默认的 Administrator 管理员账号
* 直接右键-属性里，也可以查看和修改当前文件的权限
* 复制hosts文件到桌面，改好了再直接粘贴过去覆盖替换那个文件

保存好后刷新下本地dns，命令：ipconfig/flushdns

接着我们可以在本地起一个后端服务或者前端项目，比如我们在 localhost:8088 端口起一个前端 vue 项目，此时我们去浏览器里输入 baidu.com:8088，此时并不会打开百度的网站，如果是 webpack 打包运行的，可能会看到显示：Invalid Host header。

到这里其实我们已经实现了通过 baidu.com 访问咱本地的服务，至于显示的 Invalid Host header 而不是咱本地的网页，其实是 webpack 的一项安全检查设置：[devServer.allowedHosts](https://webpack.js.org/configuration/dev-server/#devserverallowedhosts)，可通过如下方式解决：

* 设置 disableHostCheck 为 true，但是在 webpack5 版本里已经被移除了，直接使用会报错
* 通过 allowedHosts 设置允许访问开发服务器的域名白名单

```js
// vue.config.js
module.exports = {
  //...
  devServer: {
    allowedHosts: [ // 'auto' | 'all' [string]
      'baidu.com',
      // '.baidu.com', // . 可作为子域通配符
    ]
  }
}
```

设置好后就可以正常通过 baidu.com:8088 访问咱本地运行的服务了。

## hosts 域名访问原理在开发和测试中的应用

开发中如果需要使用到多个环境或者多台服务器，就可以设置一个自定义域名，方便切换开发测试。

移动端开发测试中也可以通过 hosts 文件，手机上设置代理到电脑上，来实现访问特定ip地址的目的。