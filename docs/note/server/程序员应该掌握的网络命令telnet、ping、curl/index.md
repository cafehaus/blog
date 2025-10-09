# 程序员应该掌握的网络命令telnet、ping、curl

这篇文章源于开发中发现的一个服务之间调用问题，在当前服务中调用了其他团队的一个服务，看日志一直报错没有找到下游的服务实例，然后就拉上运维来一块排查，运维让我先 telnet 一下网络，我一下没反应过来是要干啥！

<img src="./1.jpg">

### telnet
telnet是电信(telecommunications)和网络(networks)的联合缩写，它是一种基于 TCP 的网络协议，用于远程登录服务器（数据均以明文形式传输，存在安全隐患，所以现在基本不会用了）或测试主机上的端口开放情况。

```bash
# 命令格式
telnet IP或域名 端口

# telnet ip地址
telnet 192.168.1.1:3306

# telnet 域名
telnet cafe123.cn:443
```

### ping
ping 是一种基于 ICMP（Internet Control Message Protocol）的网络工具，用于测试主机之间的网络连通性，它不能指定端口。

```bash
# 命令格式
ping IP或域名

# ping ip地址
ping 192.168.1.1

# ping 域名
ping cafe123.cn
```

日常开发中测试某台服务器上的web后端、数据库、redis等服务的端口是否开放可用，就可以用 telnet 命令；若只需确认服务器主机是否在线，就可以用 ping 命令。

像一般服务之间调用出现问题，我就需要先从服务器网络开始测试，一步步来缩小范围，如果当前服务器上都没法 telnet 通目标服务器的某个端口，那就是网络问题，那就可以从网络入手来排查是网络不让访问还是目标服务压根不存在。

### curl
curl（Client URL）是一个强大的网络请求命令工具，可以理解为命令行中的 postman。

比如如果我们要在服务器上去请求某个接口，看能不能请求通，总不能在 Linux 上去装个 postman 来请求吧。这种情况 curl 命令就派上用场了。

#### 1、请求某个网页
```bash
# 命令格式
curl 网址

# 示例
curl https://cafe123.cn
```

#### 2、发送 get 请求
参数 -X 指定 HTTP 方法，不指定默认就是 get
```bash
# 示例
curl -X GET https://cafe123.cn?name=zhou&age=18
```

#### 3、发送 post 请求
请求头用 -H 指定，多个直接分开多次指定就行，-d 指定 post 请求参数
```bash
curl -X POST -H "Content-Type: application/json" -H "token: 1345102704" -d '{"name":"ZHOU","age":18}'  https://api.cafe123.cn/users
```

实际上面的这些也不用记，浏览器的 network 前端接口请求查看面板里右键实际是可以直接复制出来对应接口的 curl 命令的，然后直接复制出来去服务器上执行就行了，postman 中也支持直接导入 curl 命令给自动转成 postman 对应的参数。