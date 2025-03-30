# nodejs开发后端服务学习笔记

用nodejs开发一个后端服务的学习笔记，当初学完后才对很多后端概念有了一个清晰的认识，也算是自己的后端入门笔记，其中对npm、模块的讲解也很值得学习。

### P14 http-理解http模块的概念及作用
2022年4月17日

http模块是node官方提供的核心模块：
* 客户端：消费资源
* 服务器：提供资源

普通电脑与服务器的区别：有没有安装 IIS、Apache 这些服务器软件，在node中，http模块就相当于上面那些第三方服务器软件。

### P15 http-服务器相关的概念
2022年4月17日

IP地址：每台计算机的唯一地址，相当于电话号码，点分十进制，格式 a.b.c.d，每一个都是0-255之间的十进制整数。

* ping：在终端中输入 ping cafe123.cn，就可以ping出域名对应的ip地址
* 本地：localhost，对应IP地址 127.0.0.1
* 域名：Domain Name，因为IP地址不好记而发明的
* 域名服务器：提供IP地址和域名之间的转换服务的服务器，DNS全称Domain Name Server，用来映射IP地址和域名的对应关系
* 端口：相当于门牌号，每个端口号不能同时被多个 web 服务占用，默认 80 可以省略，网络请求通过端口号，可以被准确地交给对应的 web 服务器处理

常见端口号：
* 80: http超文本传输服务
* 443: https加密的超文本传输服务
* 3306: MySQL 数据库端口

### P16 http-创建最基本的 web 服务器
2022年4月17日

```js
// 1、导入 http
const http = require('http')

// 2、创建服务器实例
const server = http.createServer()

// 3、绑定 request 事件，监听客户端请求
server.on('request', (req, res) => {
  console.log('someone visit our web server')
})

// 4、启动服务器
server.listen(8080, () => {
  console.log('server run at http://127.0.0.1:8080')
})
```

* req 请求对象：req.url 请求路径，req.method 请求方式
* res 响应对象：res.end 向客户端发送响应内容，注意不是 res.send

解决响应中文乱码问题：调用res.setHeader()，设置 Content-Type 响应头
```js
res.setHeader('Content-Type', 'text/html;charset=utf-8')
```

### P17 http-根据不同的url响应不同的html内容
2022年4月17日

直接根据请求url来判断返回的内容就行了，如果想要能在手机上访问，本地启动的IP地址 127.0.0.1（或者localhost）要改成电脑实际的ip地址就可以访问了。

* windows查看本机ip终端命令：ipconfig
* mac查看本机ip终端命令：ifconfig，和Linux系统下一样

### P18 http-实现 clock 时钟的 web 服务器
2022年4月17日

注意加上下面这句解决中文乱码的，css会不生效
```js
res.setHeader('Content-Type', 'text/html;charset=utf-8')
```

### P19 模块化-模块化的概念
2022年4月18日

将一个大文件拆分成独立并互相依赖的多个小模块，如前面的拆分html文件，好处：复用、可维护、按需加载

### P20 模块化-模块的分类&require的使用
2022年4月18日

三大分类：内置模块(fs、path、http)、自定义模块、第三方模块(npm)，加载模块用 require，会执行加载模块中的代码。加载自定义模块时，可以省略文件后缀名 .js。

### P21 模块化-模块作用域和module对象
2022年4月18日

模块作用域：跟函数作用域类似，在自定义模块中定义的变量、方法，只能在当前模块内访问，防止全局变量污染。

module对象：每一个自定义模块中都有一个 module 对象，里面储存了与当前模块相关 的信息，可以直接在js文件里console.log(module)查看具体信息(当然里面必须要包含 exports 或 module.exports才有用)

### P22 模块化-module.exports对象的使用
2022年4月18日

在自定义模块中可以通过 module.exports 将模块内的成员共享出去，供外部使用
require导入自定义模块时，得到的就是 module.exports 所指向的对象（默认是一个空对象）

### P23 模块化-exports对象
2022年4月18日

module.exports 单词太长，为了简化 node 又搞出了个 exports 对象，它和 module.exports 指向同一个对象，console.log(module.exports === exports) 结果为true（当然，这要在初始化默认的状态下才成立，如果后面改变了任意一个的指向，那肯定就不成立了）

### P24 模块化-exports和module.exports的使用误区
2022年4月18日

最终共享出去的对象，永远都是以 module.exports 所指向的对象为准（就是module.exports可以覆盖exports，不管哪个写在前面，反之则不行，此处用覆盖有点不太准确，就是exports可以往里面添加属性，但是不可以直接赋值个新对象去改变module.exports的指向，反过来 module.exports 可以直接指向一个新对象让 exports 不管是添加属性还是赋值的新对象都无效

一开始 module.exports 和 exports 都指向同一个对象，但是如果 module.exports 重新赋值了一个新对象，exports 就被踢到一边凉拌了。

为了避免混乱，在同一个模块中尽量不要同时使用 module.exports 和 exports。

### P25 模块化-CommonJS模块化规范
2022年4月18日

node遵循CommonJS模块规范：
* 1、每个模块中，module变量即指当前模块
* 2、module是一个对象，它的属性 exports是对外暴露的接口
* 3、用require 加载某个模块，其实就是加载模块的 module.exports 属性

### P26 包与npm-包的概念
2022年4月18日

第三方模块又叫做包
* npm：全球最大的包共享平台，npm.Inc公司
* 搜索包：npmjs.com
* 供下载包的服务器：registry.npmjs.org
* npm 包管理工具：Node Package Manager，安装node的时候会自动一块安装，输入终端命令 npm -v 可以查看版本

### P27 包与npm-格式化时间的两种做法
2022年4月18日

* 1、自己封装处理时间的方法，用模块导出导入方式使用
* 2、直接安装第三方包，dayjs、momentjs，require 进来使用即可

### P28 包与npm-使用npm的其他注意点
2022年4月18日

首次安装包后，目录下会多出 node_modules 和 package-lock.json，不要去改这两个文件下的东西，npm 包管理工具会自动维护。

要安装某个包的具体版本，在包名后面用 @版本号
```bash
npm install xx@1.2.3
```

版本号遵循”点分十进制”，a.b.c，第一位数字代表大版本，第二位数字代表小版本功能版本，第三位代表bug修复。

package.json里记录要安装的包信息，以 ^开头的就是匹配安装第一位大版本的最新版本包，以 ~ 开头的就是要匹配第二位功能版本的最新版本包，没有其他符号的就是直接安装具体版本的包。

### P29 包与npm-包管理配置文件
2022年4月18日

package.json
```bash 
npm init -y
```

文件夹里不能包含中文和空格，否则运行 npm init -y 会报错。

npm install 包名，简写 npm i ，直接用空格分割可以一次安装多个包。-g 全局安装，刚拉下来代码初始化项目时不用跟包名，直接 npm i 会自动根据 package.json 里的配置安装所有的包。

npm uninstall 包名，没有简写，会自动从配置文件里移除。

devDependencies 只在开发阶段用到的包，在安装命令包名前或后加 -D，不知道要安装到哪时，一般根据包的使用文档来安装就行了，规范的包都会直接提供安装命令。

### P30 包与npm-解决下包慢的问题
2022年4月18日

默认是从npm官方registry.npmjs.org 下载服务器下载，国内访问国外的节点，需要网络传输需要通过海底光缆，所以慢的很。

淘宝 npm 镜像服务器，每隔一段时间自动同步国外npm官方服务器。

切换 npm 下包镜像源
* 查看：npm config get registry
* 设置：npm config set registry=https://registry.npm.taobao.org

nrm 小工具，切换镜像源更方便。

### P31 包与npm-包的分类&规范的包结构
2022年4月18日

* 项目包：开发依赖包 -D，核心依赖包
* 全局包：-g，默认会被安装到c盘，卸载时和卸载普通包一样，不过要多加一个 -g，一般一些工具包才有全局安装的必要

### P32 发布包-初始化基础的包结构
2022年4月18日

* package.json：name、version、main 入口文件
* index.js
* README.md

### P33 发布包-格式化时间&main属性
2022年4月18日

获取日的方法是 getDate()，getDay()是获取星期，星期日是0

### P34 发布包-转义&还原HTML的方法
2022年4月18日

```
防止用户输入可以直接对标签的 <> 进行转义
```

### P35 发布包-模块化拆分&编写包的使用说明
2022年4月18日

将使用步骤，示例写出来就可以了

### P36 发布包-把包发布到npm
2022年4月18日

* 要切换到npm官方源才能登录发布
* npm unpublish 包名，可以删除发布72小时以内的包
* 不要往npm 上发布没有意义的包

### P37 模块的加载机制
2022年4月18日

不管内置模块还是第三方模块，会优先从缓存中加载，内置模块的加载优先级最高，路径里没有 ./ 或 ../，node就会当成内置模块或第三方模块来加载。

用require 加载模块时，如果省略了文件后缀名，node会遵循：
* 1、确切的文件名加载
* 2、自动补全 .js
* 3、自动补全 .json
* 4、自动补全 .node
* 5、加载失败，终端报错

加载第三方模块，会从当前文件父目录下的 node_modules 开始，一级一级向上查找，直到文件根目录。

将文件目录用 require 加载遵循：
* 1、寻找 package.json文件，从里面的main里找入口文件
* 2、加载当前目录下的 index.js（在封装vue组件时经常用到，一个组件有多个文件时，直接放到一个目录下，然后新建一个 index.js 导入导出）
* 3、终端报错，模块找不到

### P38 express-认识express并创建基本的服务器
2022年4月19日

第三方npm包，web开发框架，和node内置的http模块类似。基于http内置模块封装出来的，功能更强大，开发效率更高。

```js
// 1、导入
const express = require('express')

// 2、创建
const app = express()

// 3、启动
app.listen(80, () => {
   console.log('success')
})
```

### P39  express-监听get和post请求&处理参数
2022年4月19日

* req.query 获取路由参数
* req.params 获取动态参数

### P40 express-静态资源处理
2022年4月19日

```js
app.use(express.static("public")
```
外部就可以直接访问public文件夹下的资源，public不会出现在url路径中。如果想要加上路径访问前缀：
```js
app.use('/public', express.static('public'))
```

要托管多个目录，重复调用上面的方法就可以了，但是查找文件的时候会有个先后顺序，如在第一个目录中找到了相应的文件就不会再去第二个文件夹了。

### P41 express-安装并使用 nodemon
2022年4月19日

nodemon: 能够监听文件的变动，自动重启项目，方便开发
```bash
node xxx.js   =>  nodemon xxx.js
```

### P42 路由-初识express中的路由
2022年4月19日

路由：就像移动客服的请按 1…，此处就是按键与服务之间的映射。在 express 中就是客户端的请求和服务器处理函数之间的映射关系，由3部分组成：
* ① 请求类型
* ② 请求的 URL 地址
* ③ 处理函数

```js
app.METHOD(PATH, HANDLER)
```

### P43 路由-路由的模块化
2022年4月19日

为了方便管理维护，不建议直接挂载到app上
```js
express.Router()

const router = require('./router.js')
app.use(router)
// 添加路由前缀
// app.use('/api', router)
```

### P44 中间件-中间件的概念与格式
2022年4月20日

跟污水处理厂一样，上一级处理完再交给下一级继续处理。express的中间件，本质上就是一个function处理函数

```js
app.get('/', function(req, res, next) {
  next()
})
```

middleware，中间件函数形参中必须包含 next 参数，而路由处理函数中只包含 req 和 res。

### P45 中间件-全局生效的中间件
2022年4月20日

全局生效中间件：客户端请求到达服务器之后，都会触发的中间件。通过调用 app.use(中间件函数)，即可定义一个全局生效的中间件。

多个中间件之间，共享同一份 req 和 res，可以在上游的中间件中为 req 或 res 对象添加自定义属性，供下游的中间件或路由使用。

### P46 中间件-局部生效的中间件
2022年4月20日

不用 app.use() 调用，直接加在路由处理中
```js
const mw = (req, res, next) => {
  next()
}
const mw2 = (req, res, next) => {
  next()
}
app.get('/', 中间件mw, 中间件mw2, (req, res)  => {

})
```

### P47 中间件-中间件的5个注意事项
2022年4月20日

* ① 一定要在路由之前注册中间件（从上到下匹配的）
* ② 客户端发送过来的请求，可以连续调用多个中间件进行处理
* ③ 执行完中间件的业务代码之后，不要忘记调用 next() 函数
* ④ 为了防止代码逻辑混乱，调用 next() 函数后不要再写额外的代码
* ⑤ 连续调用多个中间件时，多个中间件之间，共享 req 和 res 对象

### P48 中间件-中间件的分类
2022年4月20日

express官网把常见的中间件用法分成了5大类：
* ① 应用级别的中间件：绑定到 app 实例上的，app.use、app.get、app.post
* ② 路由级别的中间件：直接绑定到路由 router 上的
* ③ 错误级别的中间件：捕获整个项目中发生的异常错误，（err, req, res, next），也是用 app.use() 调用，必须要注册在所有路由之后
* ④ express 内置的中间件：express.static、express.json、express.urlencoded
* ⑤ 第三方的中间件

### P49 中间件-自定义中间件
2022年4月20日

### P50 编写接口-创建基本的服务器&创建API路由模块
2022年4月20日

### P51 编写接口-编写get接口
2022年4月20日

get请求参数通过 req.query 获取

### P52 编写接口-编写post接口
2022年4月20日

post请求参数要通过 req.body 获取，要获取 URL-encoded 格式的请求体数据，必须配置中间件
```js
app.use(express.urlencoded({ extended: false }))
```

### P53  跨域-基于cors解决接口跨域问题
2022年4月20日

跨域：cross-domain，浏览器同源（same-origin）安全机制：协议、域名、端口，浏览器其实已经拿到数据了，只是不会将拿到的数据转交给用户。

cors：主流解决方案 cross-origin resource sharing，由一系列http 响应头组成，这些响应头决定了浏览器是否阻止前端跨域获取资源，只支持 XMLHttpRequest Level2 的浏览器，如 IE 10+、Chrome4+、FireFox3.5+。

jsonp：只支持get 请求。

1、安装cors包
```bash
npm i cors
```

2、导入
```js
const cors = require('cors')
```

3、使用一下
```js
app.use(cors())
```
⚠️ 要在路由之前注册，注册的时候要调用一下

### P54 跨域-cors相关的3个响应头
2022年4月22日

* Access-Control-Allow-Origin：访问来源，可以用通配符 *
* Access-Control-Allow-Header：请求头信息，默认只有9个，要用额外的需要设置
* Access-Control-Allow-Methods：请求方式，默认允许 GET、POST、HEAD，也可以用通配符 * 设置

### P55 跨域-cors的简单请求与预检请求
2022年4月22日

简单请求：需同时满足
* 1、GET、POST、HEAD
* 2、无额外请求头

预检请求：只要满足以下任一条件，浏览器会先发送 OPTION 请求进行预检，服务器响应成功后才会发送正式请求
* 1、GET、POST、HEAD之外的请求方式
* 2、有额外请求头
* 3、向服务器发送了 application/json 格式的数据

### P56 跨域-编写jsonp接口
2022年4月22日

只能发送get请求，利用 script 标签可以跨域获取资源的历史bug

### P57 数据库-学习目标
2022年4月23日

* MySQL基本使用
* Express中操作MySQL
* 前后端身份认证：Session、JWT

### P58 数据库-数据库的基本概念
2022年4月23日

database，组织、储存和管理数据的仓库

**常见数据库：**
1、传统型数据库（关系型数据库、SQL数据库）
* MySQL
* Oracle：收费
* SQL Server：收费
跟 excel 表格很像，数据组织结构分为：数据库 database、数据表 table、数据行 row、字段 field

2、型数据库（非关系型数据库、NoSQL数据库）
* Mongodb

### P59 数据库-安装MySQL数据库
2022年4月23日

* MySQL Server
* MySQL Workbench：可视化 MySQL管理工具

### P60 数据库-MySQL Workbench的基本用法
2022年4月23日

### P61 数据库-创建数据库和表
2022年4月23日

Mac 上 Navicat 连接报错，去系统偏好设置 - MySQL - Initialize Database - Use Legacy Password Encryption

### P62 数据库-了解什么是SQL
2022年4月23日

Structured Query Language 结构化查询语言，是一门数据库编程语言，只能在关系型数据库中使用
* 查询数据 select
* 插入数据 insert into
* 更新数据 update
* 删除数据 delete

需要额外掌握的4种SQL语法：
* where 条件
* and 和 or  运算符
* order by 排序
* count(*) 函数 

### P63 SQL语句-select、insert、update、delete
2022年4月23日

```sql
SELECT * FROM 表名
SELECT 列名[, 列名2] FROM 表名

INSERT INTO 表名 (字段名[, 字段名2]) values (值[, 值2])

# 注意要加 where 条件，否则会更新整张表
UPDATE users SET 字段名 = 新值[, 字段名2 = 新值2] where id = 15

# 注意要加 where 条件，否则会删除整张表
DELETE FROM users where id = 17
```

### P64 SQL语句-where子句、and和or运算符
2022年4月23日

### P65 SQL语句-排序
2022年4月23日

* 升序 asc，默认
* 降序 desc
* order by 字段名 desc/asc[, 字段名2 desc/asc]

### P66 SQL语句-count函数和as关键字
2022年4月23日

```sql
SELECT count(*) FROM users
SELECT count(*) FROM users where status = 0
```

### P67 SQL语句-保存和打开sql文件
2022年4月23日

### P68 mysql模块-安装并配置mysql模块
2022年4月23日

安装依赖
```bash
npm i mysql
```
项目中使用mysql
```js
const mysql = require('mysql')
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'xxxx',
  password: 'xxxxx'
  database: 'tablename'
})
```

### P69 mysql模块-查询和插入数据
2022年4月23日

```js
// ? 标识占位符
let insertSql = 'INSERT INTO users (username, password) VALUES (?, ?)'
db.query(insertSql, ['cafehaus', '123456'], (err, result) => {
  if (err) return console.log(err.message)

  if (result.affectedRows === 1) {
    consloe.log('插入成功')
})

// 插入数据便捷写法   SET ?
let info = { username: 'cafehaus', password: '123456' }
let insertSql = 'INSERT INTO users SET ?'
db.query(insertSql, info , (err, result) => {
  if (err) return console.log(err.message)

  if (result.affectedRows === 1) {
    consloe.log('插入成功')
  }
})
```

### P70  mysql模块-更新和删除数据
2022年4月23日
  
如果只有一个占位符时，可以不用数组，直接写占位符的那个值就行

DELETE FROM 语句一般使用比较少，因为会把数据直接从表中删掉，一般使用标记删除，也就是用 update 去更新某个字段的值来做标记

### P71 web开发模式
2022年4月23日

主流web开发模式：
* ① 基于服务端渲染的传统开发模式
* ② 前后端分离的开发模式

服务端渲染 SSR server side render

### P72 身份认证的概念
2022年4月23日

身份认证：身份验证、鉴权，通过一定的手段，完成对用户身份的确认

* 服务端渲染推荐 Session 认证机制
* 前后端分离推荐 JWT 认证机制

### P73 session的原理
2022年4月23日

HTTP 协议的无状态性：客户端的每次 http 请求都是独立的，服务器不会主动保留每次http请求的状态，想象超市的收银员能否记住当前客户是否为vip。

如何突破 HTTP 无状态的限制：超市会为vip客户发放会员卡。

Cookie：储存在用户浏览器中一段不超过4kb的字符串，不同域名下的各自独立，客户端请求时会自动把当前域名下所有未过期的cookie一同发送到服务器。

Cookie存在浏览器，不具安全性，就像客户可以伪造会员卡，所以不要用来存储用户的隐私信息。

Session认证：会员卡(客户端 Cookie) + 刷卡认证。

### P74 express-session模块中间件的使用
2022年4月24日

```js
const session = require('express-session')

app.use({
   secret：'xxx'，
   resave：false，
   saveUninitialized：true
})
```

* 存储和获取 req.session
* 清除 req.session.destroy()

### P75 jwt-token的原理
2022年4月24日

session认证机制的不足：需要配合浏览器Cookie使用，Cookie默认不支持跨域访问，跨域需要做很多额外的配置。

最流行的跨域请求认证解决方案：JWT Json Web Token，用户信息通过加密的 Token 字符串的形式储存在客户端浏览器中，服务器通过解密还原 Token 字符串来确认用户信息。

JWT由3部分组成:
* Header：头部
* Payload：有效荷载，真正的用户信息，用户信息经过加密后生成的字符串
* Signature：签名

### P75 jwt-在express中生成token
2022年4月24日

```bash
npm i jsonwebtoken express-jwt
```

* jsonwebtoken：生成jwt字符串
* express-jwt：将jwt字符串解析还原成json对象

### P76-96 express完整接口项目
2022年4月27日

windows 上 node 链接 mysql 报错：
```bash
Client does not support authentication protocol requested by server; consider upgrading MySQL client
```

原因：node中的mysql模块不支持 mysql 8 中的 caching_sha2_password 默认的严格加密模式加密方式，所以修改加密规则为普通模式就可以了。

解决方案：
* ① 进到安装目录 mysql/bin，登录
```bash
mysql -u root -p 输入密码
```
* ② 再输入命令：
```bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密码';
```
* ③ 接着输入命令刷新权限：
```bash
FLUSH PRIVILEGES;
```

如果后面两条命令输入后显示：Query OK, 0 rows affected (0.01 sec)，就是成功了，注意命令后面那个分号不能少。

用终端登录到数据后查看表命令最后的分号后面还要敲一个空格：
```bash
show databases;
```

2022年4月28日

客户端一次请求，服务端两次 res.send 会报错：
```bash
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
```

2022年4月29日

localtunnel 可以将内网服务器暴露到外网，供其他人访问
* ① 安装依赖
```bash
npm i -g localtunnel
```
* ② --subdomain 不配置自定义域名会默认给你返回一个，自定义的容易和别人的冲突，然后也可能报错打不开，命令最前面那个是小写的L：
```bash
lt --port <要映射的端口> --subdomain <自定义域名前缀>
```

如果打开网址报错：Invalid Host header，在 vue.config.js 里的开发服务器 devServer 里添加：disableHostCheck: true（是否关闭用于 DNS 重绑定的 HTTP 请求的 HOST 检查，devServer 默认只接受来自本地的请求，关闭后可以接受来自任何 HOST 的请求）。

类似的工具还有：ngrok、frp、nps、nat123。

内网穿透：NAT 穿透，内网也称为局域网，就是路由器搭建的网络，比如需要访问别的站点，就要是公网，我们的普通电脑只有一个局域网ip，没有公网ip，同一局域网内的设备可以通过局域网ip找到你，但是不在这个局域网内的设备则找不到你，最多只能找到你的路由器，但进不了你的局域网，局域网外的设备要访问你就需要内网穿透

JWT认证：在 OAuth2 体系中认证通过后返回的令牌信息分为两大类：不透明令牌（opaque tokens）和透明令牌（not opaque tokens）。

不透明令牌：是一种无可读性的令牌，一般来说就是一段普通的 UUID 字符串。使用不透明令牌时资源服务不知道这个令牌是什么，代表谁，需要调用认证服务器校验、获取用户信息。使用不透明令牌采用的是 中心化 的架构。

透明令牌：一般指的是我们常说的JWT Token，用户信息保存在 JWT 字符串中，资源服务器自己可以解析令牌不再需要去认证服务器校验令牌。使用JWT是属于 无状态、去中心化 的架构。

一旦我们选择了使用JWT，就需要明确一点：在不借助外力的情况下，让JWT失效的唯一途径就是等token自己过期，无法做到主动让JWT失效。非要让JWT有主动失效的功能只能借助外力，即在服务端存储JWT的状态，在请求时添加判断逻辑，这个与JWT的无状态化、去中心化特性是矛盾的。











