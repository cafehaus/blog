# vue-cli-service的命令行参数

[CLI 服务官方文档](https://cli.vuejs.org/zh/guide/cli-service.html)
### vue-cli-service serve

Options:

* --open 服务器启动时打开浏览器
* --copy 将URL复制到服务器启动时的剪贴板
* --mode 指定环境模式 (默认: development)
* --host host 地址 (default: 0.0.0.0)
* --port 端口号 (default: 8080)
* --https 使用https (default: false)

### vue-cli-service build

Options:

* --mode 指定环境模式 (default: production)
* --dest 指定输出目录 (default: dist)
* --modern 构建两个版本的 js 包：一个面向支持现代浏览器的原生 ES2015+ 包，以及一个针对其他旧浏览器的包
* --no-clean 在构建项目之前不要删除输出目录 (dist)
* --report 生成 report.html 分析包
* --report-json 生成 report.json 分析包
* --watch 监听 修改文件时自动重新打包

### node_modules\@vue\cli-service\lib\commands\serve.js

* '--open': `open browser on server start`,
* '--copy': `copy url to clipboard on server start`,
* '--stdin': `close when stdin ends`,
* '--mode': `specify env mode (default: development)`,
* '--host': `specify host (default: ${defaults.host})`,
* '--port': `specify port (default: ${defaults.port})`,
* '--https': `use https (default: ${defaults.https})`,
* '--public': `specify the public network URL for the HMR client`,
* '--skip-plugins': `comma-separated list of plugin names to skip for this run`

命令行里开发运行项目 npm run serve --open 时默认打开的是 http://0.0.0.0:xxxx，是无法直接访问的，解决方式：
* 命令里增加 host 参数 npm run serve --open --host localhost，也可以直接在 package.json 的 scripts 脚本命令里加
* 修改 vue.config.js 的 devServer 下的 host 配置
* 修改 node_modules/@vue/cli-service/lib/commands/serve.js 里的 defaults 的 host（不推荐）

windows下会将 0.0.0.0 这个地址作为访问的非法地址处理，但是在Linux下却是可以访问的，也就是 mac 上其实是可以访问的。
## 前端访问常用地址

### 0.0.0.0
不能被ping通，称为“unspecified”，即未指定（无效的、无意义的）地址，在服务器中.0.0.0.0并不是一个真实的的IP地址，它表示本机中所有的IPV4地址。它其实相当于Java中的this，真表示啥要放到实际所处环境中去考虑。

在服务器中：0.0.0.0 指的是本机上的所有 IPV4 地址，它指代的就是这台机器上所有的IP。假如一台机器上有两个 IP: 202.10.20.5/12 和 202.10.20.7/11，我们把一个应用服务的IP绑定到了 0.0.0.0:8080，那访问 202.10.20.5:8080 和 202.10.20.7:8080 都可以与这个服务建立连接。

在路由中：0.0.0.0 表示的是默认路由，即当路由表中没有找到完全匹配的路由的时候所对应的路由。

### 127.0.0.1
凡是以127开头的IP地址，都是回环地址（Loop back address），其所在的回环接口一般被理解为虚拟网卡，并不是真正的路由器接口，通俗的讲就是我们在主机上发送给127开头的IP地址的数据包会被发送的主机自己接收，专供自己访问自己，速度快(不用经过整个协议栈)，永远都不能出现在主机外部的网络中，所以只适合用在开发环境

### localhost
是个域名而不是一个ip地址，一般windows系统默认将 localhost 指向了 127.0.0.1，但是 localhost 并不等于 127.0.0.1，localhost 指向的IP地址是可以自己配置

## uni-serve和uni-build
* node_modules\@dcloudio\vue-cli-plugin-uni\commands\serve.js
* node_modules\@dcloudio\vue-cli-plugin-uni\commands\build.js