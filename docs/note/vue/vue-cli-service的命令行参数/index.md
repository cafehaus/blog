# vue-cli-service的命令行参数

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

## 前端访问常用地址

### 0.0.0.0
不能被ping通，称为“unspecified”，即未指定（无效的、无意义的）地址，在服务器中.0.0.0.0并不是一个真实的的IP地址，它表示本机中所有的IPV4地址

### 127.0.0.1
凡是以127开头的IP地址，都是回环地址（Loop back address），其所在的回环接口一般被理解为虚拟网卡，并不是真正的路由器接口，通俗的讲就是我们在主机上发送给127开头的IP地址的数据包会被发送的主机自己接收，专供自己访问自己，速度快(不用经过整个协议栈)，永远都不能出现在主机外部的网络中，所以只适合用在开发环境

### localhost
是个域名而不是一个ip地址，一般windows系统默认将 localhost 指向了 127.0.0.1，但是 localhost 并不等于 127.0.0.1，localhost 指向的IP地址是可以自己配置