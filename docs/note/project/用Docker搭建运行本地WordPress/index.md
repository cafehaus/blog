# 用Docker搭建运行本地WordPress

**为什么会有这样的需求**

WordPress需要部署在服务端，如果我们只是为了看下效果或者测试开发使用，那就需要直接部署在本地。而我之所以想要在本地部署也是因为打算开发一个WordPress 的插件，在服务器上搭建和测试插件太不方便了。按照以前的思路是需要在本地安装 phpStudy、XAMMP 这类服务器软件，现在有了Docker 可就方便多了，只用安装相应镜像跑起来就可以了。

**搭建步骤**

1. 本地安装好 Docker 软件（下面的操作都是基于 Windows 10）
2. 拉取 WordPress 镜像
```bash
docker pull wordpress
```
3. 拉取 WordPress 镜像
```bash
# 也可以拉取具体的版本 docker pull mysql:5.2
docker pull mysql
```
4. 启动 MySQL 容器
```bash
docker run -d -p 3123:3306 --name wpmysql -e MYSQL_ROOT_PASSWORD=123456 mysql

# run: 启动一个容器
# -d: 启动的容器在后台运行
# --name: 容器名 wpmysql
# -e MYSQL_ROOT_PASSWORD:  设置 MySQL 的 root 密码
# -p：映射端口，将容器的3306端口映射到主机的3123端口
# mysql：启动的镜像，如果具体版本，这里也要加上具体版本号 mysql:5.2
```

5. 启动 WordPress 容器，并连接到 MySQL 容器上
```bash
docker run -d -p 8088:80 --name wordpress --link wpmysql:mysql wordpress
# -p：映射端口，本地访问路径：http://localhost:8088
# --link：将 wpmysql 容器挂载到 mysql 上，这样 WordPress 才能访问
```

不出意外的话，在浏览器打开后设置好数据库信息看到的是这样的：

<img src="./1.png">

**解决方案**

```bash
# 1.查看运行的容器
docker ps

# 2.进入mysql容器
docker exec -it wpmysql bash

# 3.登录mysql
mysql -uroot -p

# 4.授权root用户在其他机器上运行：host为 % 表示不限制ip，默认的localhost表示本机使用
grant all on *.* to 'root'@'%';

# 5.如果是 mysql8 版本，由于不支持动态修改密码验证，还需要更新root用户密码
alter user 'root'@'%' identified with mysql_native_password by '123456';

# 6.刷新权限
flush privileges;
```

<img src="./2.png">

经过上面的设置后应该就可以正常连接了，注意数据库地址要填本机的 ip 地址加上端口号，在 C:\Windows\System32\drivers\etc 里的 hosts 文件里也能看到 Docker 添加的 ip 映射：# Added by Docker Desktop）

<img src="./3.png">

之后看到这就代表部署成功了，撒花~~~

<img src="./4.png">

**其他问题**

1、可以连接到数据库服务器(这说明您的用户名和密码正确),但是不能选择 wordpress 数据库

就是 mysql 服务器上没找到叫 wordpress 这个名字的数据库，需要自己用 navicat 这类图形化工具自己手动去新建一个，或者用下面的命令去新建

```bash
# 1.查看运行的容器
docker ps

# 2.进入mysql容器
docker exec -it wpmysql bash

# 3.登录mysql
mysql -uroot -p

# 4.自己创建一个名字为 wordpress 的数据库(要跟wordpress安装是让配置的名字一致)
create database wordpress;
```

2、数据库连不上：Error establishing a database connection

1）自己删了旧的 wordpress 容器重新根据新的 ip 新建容器

因为我们本地的 ip 一般是动态 ip，过一段时间会变的，如果发现突然某一天又连不上了：

<img src="./5.png">

这种情况可能是 ip 又变了，在终端里用 ipconfig 查看新的 ip 地址，然后 C:\Windows\System32\drivers\etc 文件夹下的 hosts 里的 Docker ip 映射也同步修改一下，在输入 ipconfig/flushdns 刷新本机 DNS 解析缓存，之后再用新的 ip 地址去连接数据库就可以了，可以直接用 navcat 去测试连接。

数据库可以连了之后，再把之前的 wordpress 容器删掉，再重新启动连接数据库就可以了。

<img src="./6.png">

如果看到提示：可以连接到数据库服务器（这说明您的用户名和密码正确），但是不能选择 wpmysql 数据库...这是没有新建数据库，自己去新建一个你上面输入的数据库名同名的就行了。

2）直接去修改 wordpress 程序的数据库配置地址

```bash
# 1. 进入到容器中
docker exec -it wordpress bash
ls

# 2. 官方的 wordpress 镜像中并没有预装vim编辑器，所以要先装一下编辑器
apt-get update
apt-get install vim

# 3. 编辑 wp-config.php 文件
vi wp-config.php

# 找到 define 'DB_HOST' 那一行修改
# 按【i】进入输入模式，移动光标去修改
# 按键盘左上角【退出Esc】切换到命令模式，输入【:wq 】保存后离开
```


**引发的连带问题**

愉快地玩耍了本地 wordpress 之后，打开 vue 项目时，发现启动本地项目时 Network 变成 unavailable 了:

<img src="./7.png">

::: tip Docker 的网络模式
最上面的第一个网络 vEthenet (Default Switch)，就是 docker 和宿主机网络通信添加出来的，docker容器的网络模式默认 --net=bridge，为容器创建独立的网络命名空间，容器具有独立的网卡等所有单独的网络栈，是最常用的使用方式。也可以设置为 --net=host，直接使用容器宿主机的网络命名空间，此时容器的IP地址即为宿主机的IP地址。
::: 

网上找到的解决方案：

1. 禁用本地多余的网络（试了没效果）
2. 在 vue.config.js 里 devServer 里 的 public 设置成本机的 ip 地址，或者用 node 提供的 os 模块去自动获取

```js
module.exports = {
    devServer:{
        public: require('os').networkInterfaces()[Object.keys(require('os').networkInterfaces())[0]][1].address + '::8080'
  }
}
```
> **devServer.public：**当使用内联模式(inline mode)并代理 dev-server 时，内联的客户端脚本并不总是知道要连接到什么地方。它会尝试根据 window.location 来猜测服务器的 URL，但是如果失败，你需要使用这个配置。此处涉及的相关配置：devServer.host、devServer.public、devServer.inline（后两个 webpack 5里已经移除了，webpack 4里才有）

<img src="./8.png">

每个项目都要自己这样去设置的话太不程序猿了，应该会有用，不过我没试就直接 pass 掉了

3. 添加 windows 10 的 PATH 系统变量：C:\windows\System32\Wbem，注意添加之后把这个变量用那个“上移”按钮移到第一个去：

<img src="./9.png">

然后重启 vscode 发现完美解决了，而且多出了好几个 Network，打开都是一样的效果：

<img src="./10.png">