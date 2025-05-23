# 日常工作每日记录

## 2025年05月23日
DBvear 连接数据库时，默认会加载当前ip下的所有数据库，如果有几百上千个库，打开使用的时候会特别卡，可以右键编辑连接，然后常规里可以设置数据库/目录过滤规则，点进去只用添加自己需要的库，然后每次加载的时候就只会加载设置的库，使用就不会卡了。

## 2025年05月10日
mac 上执行项目里的 npm 的 scripts 脚本报错：
```bash
env: node\r: No such file or directory
```
是因为windows伤的 CRLF 换行符导致的，可以自己打开 node_modules 下的 .bin 目录选中要执行的脚本文件，就可以在 vscode 底部看到会显示 CRLF，一般删掉 node_modules 重新安装下依赖再重新执行下就行了。

## 2025年04月17日
如果网页超过一屏需要滚动才能截屏完整的，可以通过命令让chrome浏览器自动截屏整个网页：

1. 鼠标右键检测（快捷键F12）打开浏览器控制台
2. 控制台打开后，再按键盘上 Ctrl+Shift+P（Windows）或 Command+Shift+P（Mac）
3. 输入命令：Capture full size screenshot
4. chrome浏览器会自动将当前网页所有内容截图形成一张长图，然后自动下载到电脑上

## 2024年12月12日
JWT不需要后端维护登录信息，只需要解密信息，加密用的密钥和盐值在后端，很难被劫持伪造出来。

分布式架构和用户多设备登录的今天，JWT明显过时了，属于PHP、jQuery那个年代的东西了。

jwt 简单的应用可以用，现在基本都是需要多设备、权限控制、过期这些的，即使用jwt还是需要后端再维护一份登录信息，那为啥不一开始就直接 redis +token。

## 2024年11月1日
垃圾Java与Python对比
* A：听说Python的第三方库很多
* B：哪有Java嵌套的空文件夹多啊

AI万能提问公式：角色定位+明确需求+内容提供

## 2024年7月10日
* protobuf int64 json 时为什么会被转成 string，int64、int32、js中最大数字、精度丢失
* 在 vscode 中 ctrl + p 输入文件完整路径可以直接打开文件
* postman 中可以直接通过 import 导入从浏览器 network 接口里复制出来的请求信息 Copy as cURL(bash)

## 2023年7月12日
* vue-check-view，监听元素是否进入视口
* vuex 可以 modules 和全局共存，还可以用 modules 嵌入子模块
* bind()方法调用的函数，函数名name属性值前会加上“bound ”前缀：foo.bind({}).name  // "bound foo"
* Chrome 浏览器设置-无障碍-使用文本光标浏览网页，打开这一项网页上点击文本内容时都会出现一个像输入框一样的聚焦光标

## 2023年6月26日
* axios 不同版本 Content-Type 的坑：0.x 版本会根据数据类型自己设置 Content-Type，你封装的时候设置的或者传参设置的无效；1.x 版本会先判断有没有自己设置，有设置就取设置的
* webpack 的 productionSourceMap 设置为 true，可以在浏览器的 控制台 source 里看到项目源代码，会造成项目源代码泄露
* vue 组件懒加载不止router路由里可以用，在普通页面里也可以用，像页面里的各种弹窗组件就应该用impot()函数动态导入来优化性能
* uniapp 中用 uni-simple-router 来实现路由功能，在 created 生命周期里用 this.$Route.query 在小程序中拿不到参数（h5中没问题），在 mounted 生命周期里可以拿到，uni-simple-router 官方文档里也有提到这个问题，跨端获取路由信息要在 this.$AppReady.then 里去获取
* el-form 表单组件里，获取数据直接填充默认值后，输入框填充数据导致假死无法输入，开始还以为是不是 el-select 下拉框组件数据太多导致卡顿，结果最后才发现是绑定的 form 数据变量里没有设置默认的属性，导致双向绑定失效

## 2023年5月31日
* 浏览器原生复制文本 navigator.clipboard.writeText 注意要自己 catch 一下，有时会报：DOMException: Document is not focused.
* python、java 项目注意环境和端口，如果一直启动不起来或者启动了一直访问不了，把端口杀死再重新启动
* stylus 和 sass 可义通过 @extend 关键字后面直接跟选择器名，继承复用样式，直接 @加上属性名引用自身的样式值（常用的 @width、@height...其实其他的也可以这样用，如：@color）

## 2023年5月19日
* 项目依赖安装超时，导致报错可以通过 npmrc/yarnrc 文件配置镜像源和第三方包的地址
* 项目中尽量不要用 replaceAll 方法，有兼容性问题，在部分浏览器或版本里会报错(即使常用的Chrome也要大于85版本)：replaceAll is not a function，替换成 replace 和正则加 g
* 前端项目本地运行，只要打开控制台一点刷新按钮就一直加载中，开始还以为是电脑、浏览器内存占满了或项目打包配置出问题了啥的，更新浏览器到最新版本、重启电脑都不行，最后才发现是 Network 网络哪里可能是啥时候定位问题选成了 Fast 3G，现在都5G了，3G肯定慢嘛，那个地方要选 No throttling

## 2023年5月8日
* element-ui 的消息提示框 $alert、$confirm，如果不用 promise 的 then 和 catch 使用方式，不加 callback 这个参数，点右上角关闭按钮时会报错：uncaught (in promise) cancel
* element-ui的上传组件el-upload，接口还在上传时直接点击删除会报错：TypeError: reqs[uid].abort is not a function，解决办法：上传中时将 el-uplaod 的 disabled 属性设为 true，就不会出现那个删除图标
* node版本管理工具 nvm，要安装最新的 20.0.0，要升级到 1.1.11版本，1.1.09版本会报错
* 用构造函数 new RegExp 构造正则表达式时，一般表达式中需要插入变量时只能用构造函数方式，注意里面的特殊字符需要转义，否则容易报错，如 new RegExp('(+861347)', 'ig') 会报 SyntaxError: Invalid regular expression: /(+861347)/: Nothing to repeat

## 2023年4月21日
* 注意 vuex 的 mutations 和 actions 是不支持传递多个参数的，多个参数可以直接放到对象或者数组中作为一个传递进去
* 复制文本一般用css的 user-select 就能解决，如果在手机上能选择文本但是不弹出系统的右键菜单，也就是无法复制、全选这些，看下是不是阻止了 [contextmenu 事件](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/contextmenu_event)
* 前端直接下载文件时，注意下载名后面要加上文件后缀，否则浏览器不能自动识别出来的文件是不会自动加上后缀的，需要用户自己下载下来手动加上文件后缀才能正常打开

## 2023年3月27日
* svg图标上添加 click 点击事件无效，自己在外面再套一层 span 标签
* 对象属性key可以重复的教训：methods 里写了两个同名的函数，调试发现逻辑死活不生效，最后才发现一直再第一个里面写逻辑，后面的直接给你覆盖了的，所以配置 eslint 禁止重名定义是个好习惯：https://eslint.org/docs/latest/rules/no-dupe-keys
* 不能直接将带 · 的多级字符串 key 用 [] 去取对象的属性值，会被整个当成一个 key，例：res['data.records']，正确的：'data.records'.split('.').reduce((value, entry) => value && value[entry], res)
* 路由前置守卫 router.beforeEach 里增加判断逻辑，本地可以部署到线上就一直白屏，最后才发现是里面用到了数组的 includes 方法去判断权限，但是这个方法前面未做空判断，导致路由白屏但是也没有具体的报错信息，排查老半天
* 遇到客户 bmp 格式图片无法上传，原来是项目里用 canvas 和 img 压缩图片，客户的源图片有问题，导致 img.onerror 报错，用 windows 自带的画图工具另存为一下 bmp 图片就好了

## 2023年3月15日
* promise 的reject只能在 catch 里去捕获，否则会报错：Uncaught (in promise)
* 不要嵌套三元表达式，逻辑复杂了很难看懂
* 初始化表单复杂数据的默认值，之前都是每个地方自己写一遍，或者用JSON.stringify这些去深度克隆，其实可以直接学vue组件的data函数，每次直接返回一个对象，需要使用的地方直接调用模板的方法就可以了
```
// 数据模板
  const formTemp = () => ({ name: '', age: null, friends: [] })
```
* sql查询数据库：模糊查询手机号 SELECT * FROM `address` WHERE phone like '152%876'
* https下不管访问http里的静态资源，还是调http域名下的接口，都是不行的哟
## 2023年2月21日
* vue项目中把api这种会不断增大的数据挂在this下并不好，会造成那vue下挂载的数据越来越大，可以按 api/user.js、api/order.js 这样按业务或模块分，页面中按需引入，不要啥都挂载到 vue.prototype 全局上，学习 vue3、react... 这种按需引入，全局一时爽，后期火葬场！
* react函数组件，函数入口是 props，出口是 html。理解 JSX 语法：遇到 {} 符号内部解析为 JS 代码，遇到成对的 <> 符号内部解析为 HTML 代码
* axios响应拦截器axios.interceptors.response.use的第一个回调 2xx 范围内的状态码都会触发该函数，第二个超出 2xx 范围的状态码都会触发该函数
```js
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  })
```
fetch：下一代ajax，全局window的 fetch() 方法用于发起获取资源的请求。它返回一个 promise，这个 promise 会在请求响应后被 resolve，并传回 Response 对象。需要两个Promise才能获取到接口返回的数据，第一个Promise成功以后，得到的是一个Response对象，它对应服务器的 HTTP 回应；第二个Promise需要根据服务器返回的类型的数据，使用不同的读取方法异步读取数据：
* response.text()：得到文本字符串
* response.json()：得到 JSON 对象
* response.blob()：得到二进制 Blob 对象
* response.formData()：得到 FormData 表单对象
* response.arrayBuffer()：得到二进制 ArrayBuffer 对象

函数可以直接 return 一个 await，跟 return new Promise()一样

## 2023年2月21日
* 但 IPv4 网络标准为 localhost 保留了 127.0.0.1 – 127.255.255.255 范围，使用范围内的任意一个 IP 地址会导致相同或相似的方式，所以我们平时启动的前端项目服务，用 http://127.200.1.3:8080 也是可以访问的
* class类的public公开方法里不能去调用类的静态方法，即静态成员方法不能直接使用非静态成员
* es6函数结构参数，记得给个默认的空对象结构，否则不传参时会报错：
```js
function createBoy({ name='zhou', age=18 } = {}) {
  console.log(name, age)
}
```
## 2023年2月9日
* map 无法遍历直接 Array(10) 创建的数组，在 JavaScript 内部，数组就是用数字作为键名的对象，当使用 Array 构造函数创建了一个新的数组时，实际上是创建了一个 length 属性等于传给 Array 的参数的空对象，对象中并没有数组对应的索引键（index key）
* 浏览器页面进入全屏模式 document.documentElement.requestFullscreen()，退出全屏 document.exitFullscreen()
* console.log 添加样式，%c 处的字符一次匹配后面的样式，网址还可以直接点击
```js
console.log(
  '%c 样式文本一 %c 样式文本二 \n https://www.baidu.com',
   'color: #ffffff; background: #3c9cff; padding:5px 0;',
  'color: #3c9cff;background: #ffffff; padding:5px 0;',
)
```
* 阻止浏览器默认的账号密码自动填充，用 hidden 或 display:none 隐藏输入框无效
```html
<!-- #ifdef H5 -->
<!-- <input type="text" style="width: 0; height: 0; position: absolute; z-index: -1;"> -->
<input type="password" style="width: 0; height: 0; position: absolute; z-index: -1;">
<!-- #endif -->
```

## 2023年2月3日
* 自我价值，文档输出，代码，公共组件
* 技术对公司业务价值的思考
* 需求与实现的平衡
* 执行力，不要追求完美，没啥万事俱备，先干就完了
* 更多的去思考技术能创造的价值，能为公司创造的价值，不能创造出实际价值的代码，即使写得在优雅健壮也一文不值
* 比你优秀的人，学习人家的优点，不要论资排辈，不要从心理上排斥别人，虚心学习
* 机会来了就要抓住，不要拖，后面的不一定会更好，把握不住的多张嘴问别人确认，不要靠自己猜
* 不要把计划告诉别人，把结果给他们看。
* 慢慢来，比较快

## 2023年1月13日
* 注意其他第三方包对项目数据的修改影响，项目中用了一个自己封装的 npm 组件包，里面用到了自己封装的一个菜单组件，每次点击菜单会去把菜单下的操作权限 id 缓存到 sessionStorage 里，项目里再去通过 sessionStorage 里缓存的权限值判断权限，开始在项目中搜索，一直没找到到底是在哪去缓存的权限值，这坑太深了

## 2023年1月6日
form 表单里只有一个 input 时按回车会触发默认提交事件，导致当前页面刷新，解决方法：
* ① 多加一个隐藏的 input
* ② 阻止表单默认事件 @submit.native.prevent

svg 图标上传后在网页中使用有默认颜色无法覆盖，是因为 svg 文件里加了 fill 属性填充了颜色，直接给去掉就可以了，用 Ai 设计或修改svg图标时，不要用导出，直接用储存为 svg，可以避免很多奇奇怪怪的问题

## 2022年12月23日
* 查看http请求的协议，打开浏览器 network - 选中接口右键 - 标头选项 - 勾选上：协议，就能在 network 的接口面板上多一栏：协议，里面会显示 http 具体的版本：http/1.1、h2
* 输入字符用逗号空格切割成数组：xxx.split(/[，, ]/).filter(m => m)

## 2022年12月16日
* 项目依赖问题，可以直接去查看 node_modules 下的安装包源码，从里面的package.json、readme.md文件中就能发现很多有用信息
* 二次封装组件时，可以利用 $attrs 和 $listeners 往下透传属性和事件，不用自己一个一个地去写
* 组件 props 如果传递的是引用数据类型，因为是传递的地址，所以其实是可以直接去改变里面的属性值的

## 2022年12月14日
* 父组件调用子组件方法，除了通过 ref 获取到子组件实例再调用，也可以在子组件中通过监听一个 props 变量值去触发，如在父组件中切换 Tab 选项卡获取对应 TabItem 子组件的数据，就可以在组件中 watch 当前选中的 Tab。还可以利用 $parent 和 $children
* windows cmd 终端命令不区分大小写，Linux 上区分大小写
* .m-class:nth-of-type 类名加上 nth-of-type 去选择同类名元素坑：和咱直觉相悖，并不是选中具有 m-class 类名的第 n 个元素，就是要先数标签（第 n 个），然后再是那个类名就选中了，所以要选中类名中的第 n 个，要标签也一样，而且和里面的其他标签区分开：
  * ① 这个元素是它的父元素下同一个标签名的元素中的第 n 个；
  * ② 要选中的元素的类名是class。
* 想测试 safari 浏览器兼容性，没有 mac 笔记本时，可以在苹果手机上打开 safari 测试
* overflow-y:auto 设置滚动条没超过最大高度也出现滚动条，有可能是父元素的 box-sizing 导致的
* display想同时使用 flex 和 inline-block，用 display: inline-flex; 就行了

## 2022年11月30日
* windows下 win+R，然后输入 recent 可以看到电脑上的操作记录
* 小程序设置剪贴板内容 uni.setClipboardData，uni 文档上说微信小程序在成功回调success里设置toast可覆盖自带的轻提示，实测无效
* 浏览器的 console 控制台里也可以用终端命令里一样的 ↑↓ 箭头切换历史输入
* 浏览器提供的地理位置接口：HTML5 Geolocation 和 navigator.geolocation

## 2022年11月28日
* 前端用 join 去拼接数组内容做页面展示时，自己判下空，否则会出现连续的分隔符情况
* iframe 外层盒子不加 overflow: hidden，外面盒子 overflow-y 的滚动条设置会出问题
* 段落文字记得加 word-break:break-all，否则全英文或者数字不会换行

## 2022年11月24日
* 小程序动态 style 以对象形式绑定 uni 编译到微信小程序会变成 <view style="[object Object]"></view>，uni 文档上有说：小程序端不支持 classObject 和 styleObject 语法 https://uniapp.dcloud.net.cn/tutorial/vue-basics.html#class-%E4%B8%8E-style-%E7%BB%91%E5%AE%9A
* uniapp 开发工具 HBuilderX 云打包安卓app时，manifest.json 配置文件里 加上 "ios" : { "dSYMs" : false } 这个后，打包一直无反应，去掉就好了
* 有时一不小心会把 vscode 搞成全屏模式，windows 上直接按 F11 就可以退出全屏
* 注意 git clone 和 git checkout\pull\fetch ... 这些命令的操作目录，后面的这些都要先进入项目目录才能操作，否则会报错
* 渐变样式 UI 在 sketch 软件中拉渐变时，渐变轴可能不会按照边界拉，往往会超出形状边界，但是蓝湖里标注图上的渐变样式会直接按照整个渐变轴来取色，可能中造成最终渐变样式差异较大，所以最好前端自己去吸边界上的色值，太复杂的渐变可以找UI提供更详细的一整个形状为边界的色值
* 微信小程序静态资源会被缓存，明明服务器上已经更新了，但是小程序里还是老的，解决办法资源路径后面带时间戳，或者自己清理微信小陈新股缓存：我 - 设置 - 通用 - 储存空间
* slot 插槽简要写法：
```vue
<template #action="{ row }"></template>

<!-- 对应之前的 -->
<template slot="action" slot-scope="{ row }"></template>
```
* uni 项目中容易误用的方法，pc端常用的$router(这个已经被uni官方占用了，所以其他路由插件都大写R) 和其他插件的 $Router，$Message 和 $tips 封装的提示组件

## 2022年11月22日
* 开发：历史问题不用管，脏数据不用管，测试：一天都是不用管，这也不用管那也不用管
* 命令行输入 winver 可以弹出 windows 版本，查看系统信息 systeminfo
* vscode 里的终端命令可以右下角终端面板的 + 图标，同时开启多个服务，也可以选择不同的终端命令，如果windows安装了wsl，还可以直接用 linux 命令（不过要配置对应的node环境这些才能用），对于用 uniapp 这种多端框架比较有用，比如同时开启小程序打包和H5打包，可以同时调试两个端，一次修改，端端调试
* iview select 组件单选，如果值是 number，初始值为 null，resetFields 重置表单会有bug
* iview 的 Table 里有异步操作项，可以直接用 Table 的 loading 来让整个表格处于加载状态中，防止用户多次操作，Table 也有提供 loading 的 slot 可以自定义加载提示内容
* const 常量建议采用全大写的命名，单词以_分割
* v-if 里面判断有 + 号，uni打包到微信小程序里会报错：Bad attr `wx:if` with message: unexpected token `+`
```vue
<template>
  <p v-if="+status === 6" >周小黑</p>
</template>
<script>
  export default {
    data() {
      return {
        status: '6'
      }
    }
  }
</script>
```

## 2022年11月14日
* vscode 插件安装目录：C:\Users\Administrator\.vscode\extensions
* 阿里云效 git 添加的 ssh 密钥配置文件夹：C:\Users\Administrator\.ssh，里面有这2个文件 id_rsa、id_rsa.pub
* git bash 操作的历史命令在这儿：C:\Users\Administrator\.bash_history
* 后端 post 接口用 postman 调用，如果没有文件上传，一般都用的 Body-raw-JSON，有文件上传才用的 form-data
* uniapp 中 ref 属性非 H5 端只能用于获取自定义组件，不能用于获取内置组件（如：view、text），文档上有写：https://uniapp.dcloud.net.cn/tutorial/vue-components.html#ref
* 字符编码问题，php-jwt 封装 token 时，测试解码 JWT::decode 一直报错，因为 token 字符我直接复制粘贴的在控制台打印出来的字符，可能编码不同，换成直接获取到 token 变量就好了，在小黑窗和PowerShell中右键 -属性 -选项，可以看到下面的当前代码页：936（ANSI/OEM - 简体中文 GBK），所以不能直接复制终端命令里的字符瞎用呀。
* 微信小程序开发者工具从下面“固定任务栏”打开时，有时有各种奇奇怪怪的问题，比如：调试控制台下面的 Wxml、Console ... 这些菜单一直出不来，尽量自己直接从开始菜单打开
* vuepress 的 markdown 文件中你可以直接写 html、script 和 style，对于 style 你还可以直接写 stylus 语法，因为 vuepress 已经内置了 stylus 和 stylus-loader(注意是1.x版本才内置了，最新的2.x版本木有)，https://vuepress.vuejs.org/zh/guide/using-vue.html#使用预处理器
* 【此问题最后项目排查不是谷歌浏览器的设置问题，此笔记有误】异步代码中用 window.open 打开新页面，最新的谷歌浏览器会阻止打开，要在浏览器右上角 ... - 设置 - 隐私设置和安全 - 网站设置 - 弹出式窗口和重定向 - 网站可以发送弹出式窗口并使用重定向，当然这只是个临时方案。一般通过用户的点击事件触发的在新标签页中打开链接，浏览器是不会拦截的，因为这种形式打开新窗口浏览器会认为是用户自己需要的，ajax异步请求成功后需要在新窗口中打开返回的url地址，使用window.open()会被拦截，因为这种情况下浏览器认为该操作不是用户主动触发的，所以会拦截
* uniapp 中 <component :is="MyComp" /> 这种动态组件写法，只有 H5 和 APP 支持，微信小程序不支持，https://uniapp.dcloud.net.cn/tutorial/vue3-api.html#%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6
* input type="radio" 取消选中要放在 setTimeout 或 $nextTick 中才有效
* 基于 async-validator 插件的表单的重置校验方法 this.$refs['form'].resetFields()，会对整个表单进行重置，将【所有字段值重置为空】并移除校验结果，所以新增的时候其实不用自己在手动重置一遍表单数据了，直接 resetFields 重置校验就可以了

## 2022年11月02日
* 前端路径参数超过3个让后端存库，最好都只携带一个 id 参数，否则后期就是给自己埋坑
* 查询get请求参数超过2个改用 post 请求，参数放 body 里
* 状态名枚举尽量不要前端直接写死，最好让后端处理好，前端直接负责显示
* 小程序 uview 弹窗里内容内部滚动，需要用 scroll-view，如果内容里是 html 标签，要去掉 \r\n 否者会造成行首缩进，行尾文字被截掉部分bug
* vscode 中如果文件夹中只有一个文件夹会在一行上显示，查看文件感觉别扭也不方便，修改首选项-设置，搜素 Compat Folders，去掉默认的勾选
* 尽量不要用 JSON.parse 和 JSON.stringify 来深度克隆数据，这两货不能克隆 Function 和 Date
* css 多行文本截取显示省略号，盒子里不要用 padding 来设置上下间距，否则截取的部分也会在 padding 上展示出来
* '' == false 结果为 true，但是注意 '0' == false 结果也为 true，js 中字符串和布尔值进行比较的时候会隐式转换，会先把布尔值转成数值，前面的也就是 '0' == 0
* 正则中 \d \n \w \s 这些不用加转义符
* 浏览器记住账号密码，查看实际密码：① 去浏览器里输入开机密码，查看具体的真实密码 ② 直接 F12 将 input 的 type 属性由 password 改成 text
* 带输入操作的弹窗，记得禁止掉弹窗点击蒙层关闭的功能
* 可选链操作符 ?. 目前处于Stage 3提案阶段，暂时不可以直接使用，需安装 @babel/plugin-proposal-optional-chaining，但是呢在 node 12 以上版本中是可以直接使用的
* 一般代码重构或者功能改动较大时可能会重新调整文件目录，git 调整文件路径尽量用 git mv 提交，保留原始提交记录，可以先将要调整的步骤理出来，再开始分步骤调整
* 提交后台的数据记得去除首位空格 trim，多选用逗号、空格去分隔参数时记得过滤下空数据的（如连续敲几个空格、逗号就会产生空的数据）
* RegExp 这个对象会在我们调用了正则表达式的方法后, 自动将最近一次的结果保存在里面, 所以我们可以直接使用 RegExp.$1 到 RegExp.$99
* dayjs 格式化时间时 format，注意大小写的区别，如 dayjs().format('YYYY-MM-DD hh:mm:ss')，会被格式化成12小时制 2022-10-2512:00:00
* 重置页面初始数据：Object.assign(this.$data, this.$options.data.call(this))
* process.cwd()：current work directory，当前工作目录的路径，就是你当前运行小黑窗的目录
* __dirname：当前执行的 js 脚本的目录
* __filename：当前执行的 js 脚本的带着文件名的完整路径
* computed 计算属性里不能监听 localStorage 和 sessionStorage 的数据变化。要监听 localStorage，自己封装监听事件，或者可以用 vuex 结合来实现

## 2022年9月21日
小程序分包的时候注意，import 导入资源时，只能分包引用主包的，不能反过来主包导入分包的，因为分包一开始并不会被加载。

小程序分享用 uni 在路径中带参数，用模板字符串直接【this.变量名】一直undefined，需要自己先用个变量存一下，在写到模板字符串里就没问题了。

## 2022年9月13日
iview 的 AutoCompelete 自动完成组件, 如果想要在无搜索关键词时默认匹配所有下拉选项, 可以设置完整的数据源 data, 然后前端再利用提供的 filter-method 方法来绑定前端搜索过滤方法, 这样就可以实现既可以输又可以选, 为空还可以展示出所有的选项.

Select\DatePicker 之类的组件放在弹窗中, 为了不撑开布局加上 transfer, 滚动的时候会导致下拉框不收回固定在页面上错位, iview 有提供一个 events-enabled(4.6.0, 是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能), 这个东西就是 Popper 会在窗口变化会页面滚动的时候会实时去重新计算位置, 会有明显的卡顿, 而且元素滚动出了视线区下拉框并不会消失, 会更奇葩浮在弹窗外, 所以这个属性其实也没多大用. 之后的解决办法是通过 vue 的 scroll 事件去监听滚动再模拟点击, 让下拉框自动收回.
## 2022年8月9日
javascript 省略花括号{}的几种表达式：
```js
/**
 * if 简写
 */
let a = 1
let b = 2
if(a > b) console.log('a')
if(a < b) console.log('b')
/**/
if(a > b) console.log('a')
else console.log('b')

/**
 * for简写
 */
for(let i=0; i<10; ++i) console.log(i)

/**
 * while简写
 */
while (i > 10) console.log(i)
```

## 2022年7月29日
一直感觉C盘老容易满，160G空间感觉也不小，之前一直觉得是不是各种开发工具装太多了，所以占硬盘比较大，但是大部分的软件都是装在D盘的，今天闲逛C盘偶然发现：C:\Users\Administrator\AppData\Local\微信开发者工具，这玩意居然占了30多个G，果断直接删了，企鹅这东西也太辣鸡了。

## 2022年6月20日
页面路由守卫 beforeRouteLeave(to, from, next)，在页面子组件中并不会触发

## 2022年6月1日
* 小程序上拉加载更多每次push数据，带参数过来记得先清空数据和查询条件
* onLoad、onShow、mounted、created这些生命周期初始化数据，尽量放到一个里处理，否则也会造成重复
* 弹窗里渲染富文本内容，如果UI弹窗宽度太小图片容易被压缩显得模糊（评需求的时候注意有相关的报价表格类的图片需要比较情绪的，可以考虑单独上传图片或弹窗宽度不能太小）
* 小程序用 img 图片标签裁切属性mode无效，要用 image
* 小程序textarea放到弹窗里，默认的placeholder设置无效，要先设置个值然后清空才会生效，hack：弹窗弹出先赋值，然后再用定时器清空
* mp-vue和uni-app小程序里路由里的参数，要去onLoad生命周期里取this.$route.query，直接在data里这样赋值会是undefined

uniapp打包命令
```js
"build:mp-weixin-test": "cross-env VUE_APP_ENV=test NODE_ENV=production UNI_PLATFORM=mp-weixin vue-cli-service uni-build --minimize --watch",

// UNI_INPUT_DIR=指定源代码绝对路径
// UNI_OUTPUT_DIR=dist/release/h5
```

* uni-app组件绑定props的时候，不能用data开头的驼峰（如 dataList ），data-是原生小程序在节点上绑定参数的方式
* uni-app 新项目运行 stylus 报错，可能是 stylus-loader 版本太高，可以降到 @3.x.x 试下，uview-ui 2.x 版本cli在 vue.config.js 里配置了  transpileDependencies: ['uview-ui'] 还是提示报错，可能是 node 版本太高，降到 @12.x 试下

网络图片转base64报跨域错误前端解决方案：
* 1、要求图片资源服务器端已经设置了允许跨域访问，否则下面的都是无用功
* 2、设置 img.setAttribute('crossOrigin', 'anonymous')
* 3、图片url缓存还是会偶尔报跨域，所以在路径参数后面加个动态参数
```js
img.src = url + `${url.includes('?') ? '&' : '?'}` + new Date().valueOf()
```
参考：https://stackoverflow.com/questions/46609800/canvas-crossorigin-anonymous-cors-chrile-mac-osx

```js
this.$wj.cookie('inviteCode', query.inviteCode, { expires: 7 })
this.$wj.cookie('inviteCode', '') // 有一个过期参数 expires，直接这样清除无效
```

让浏览器滚动条不占用页面宽度（不会挤压布局0）：overflow：overlay。行为与auto相同，但滚动条绘制在内容之上而不是占用空间。 仅在基于WebKit（例如，Safari）和基于Blink的（例如，Chrome或Opera）浏览器中受支持。

iview modal弹窗里放select下拉框组件，不加transfer属性有时下拉框层级会出问题，被弹窗挡住了。

iview的form表单校验：
* 1、form表单中带有prop属性的子组件进行校验规则绑定时，是在vue声明周期mounted生命周期里完成的，如果想用v-if来动态控制表单项会出现校验错误失效的问题，动态动态校验同样也会出现这个问题，iview官网的动态表单校验是通过额外的一个status标识去判断该不该渲染（不是直接去splice数组，如果后面要提交参数还要自己再去filter一下），要解决这个校验出错的问题可以直接用 v-show 去控制动态表单，然后自己自定义 validator（不过required参数好像不能动态修改，待再验证）
* 2、注意 v-show 控制显示隐藏校验会生效，因为校验域其实还在页面上

抖音小程序获取用户手机号的api需要企业主体，而且要先申请审核通过了才可以用

## 2022年5月21日
和js一样弱类型的php也是一样的结果，注意：
```js
console.log('0' == false) // true
```

## 2022年3月9日
user-select 属性规定是否能选取元素的文本  
* auto	默认。如果浏览器允许，则可以选择文本。  
* none	防止文本选取。  
* text	文本可被用户选取。  
* all	单击选取文本，而不是双击。  
有时我们加了user-select all让单击选中文本，但是想按钮之类的并不需要选中，需要设置user-select none

flex 布局会将直接子元素是行内元素的自动转换成块元素（可以在Chrome浏览器调试面板“计算样式”里看到变化），transform动画对行内 inline 元素无效，要转成 inline-block 或 block（前一点flex布局会自动转成block，所以有时不容易发现这个问题）
文件名中尽量不要包含中文和一些特殊字符，有个文件名中包含好几个\，从github上克隆仓库时就一直报错，应该是/被判断成路径了，找不到此文件所以一直报错：invalid path，实在要用应该要加个转义符的\，像这样 \\

文字按钮加 hover 效果字体变粗，整体宽度会边长，造成布局抖动，找到下面两个
* ① 可变字体，部分浏览器不支持，font-variation-settings，需要字体支持，https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide
* ② 用字体阴影来模拟加粗，视觉上看着稍微有点不足 text-shadow -0.06ex 0 black, 0.06ex 0 black
* ③ 用伪元素来将字体加粗，原本的字体颜色改为透明或和背景色一样，伪元素 content 想取到文字内容，直接在元素上绑定一个属性如 data-hover="我是文字"，content: attr(data-hover) 就能取到了

iview里的 menu 组件如果是动态去设置的菜单列表数据，在子菜单里刷新当前页面默认自动折叠起来了，open-names 有值也不生效，要自己用这个方法 updateOpened 手动展开下

windows
* 刷新本地DNS缓存：ipconfig /flushdns
* 显示dns缓存：ipconfig /displaydns

程序员沟通很重要
* 大家是一个团队，自己很久也解决不了的问题可以找同事、领导协助解决
* 大家的目标都是一致的，齐心协力把产品做好，说话的艺术：
 * 1、没有这么做的、没见过这样的 => 我建议是xx这样比较好，你可以去对比下，参考下
 * 2、咱们不支持、没有这些功能 => 这个因为咱现有的系统没有，需要额外开发，我的建议是在目前资源比较紧张的情况下可以先xx
* 不要带着个人情绪工作，高情商，脾气发出来是本能，压下去是本事

空值合并操作符（??） 是一个逻辑操作符，与逻辑或操作符 || 类似，不过只有 ?? 左侧为 null 或 undefined 时，才会返回右侧的值，而 || 只要左侧是 false、null、undefined、0、NaN、'' 这6个都会返回右侧的值

2022-05-16T18:35:48.906Z 这种格式是 UTC世界时间，与北京时间相差8个时区，格式化时要用 dayjs.utc，直接用 dayjs 格式化要减去 8 个小时才对
```js
dayjs.utc().format()   // 2022-05-18T01:54:50Z
dayjs().format()        // 2022-05-18T09:54:50+08:00
new Date()              // Wed May 18 2022 09:54:50 GMT+0800 (中国标准时间)
```

excel 制作模板要固定表头：视图 - 冻结窗格，禁止编辑单元格：
* ① 点左上角全选整张表，设置单元格格式 - 保护，取消掉勾选“锁定”
* ② 选中要禁止的单元格，设置单元格格式 - 保护，勾选上“锁定”
* ③ 审阅 - 保护工作表 -设置密码（下面的那些可以都勾选上）

## 2021年11月11日
在js里其实是可以用中文做变量名，但是一般不建议使用超出ASCII码的字符，unicode水很深
* unicode：统一码（万国码、单一码），是国际组织制定的可以容纳世界上所有文字和符号的字符编码方案
* ASCII码：大多数计算机采用ASCII码（美国标准信息交换码），它是表示所有大小写字母、数字、标点符号和控制字符的7位编码方案。统一码（Unicode）包含ASCII码，'\u0000'到'\u007F'对应全部128个ACSII字符

InputElement，输入元素是JS词法扫描程序拿到的最基本元素：
* WhiteSpace
* LineTerminator
* Commit
* Token（Punctuator、(IdentiferName：Keywords、Identifer(变量名、属性名)、Future reserved Keywords)、Literal）

构建知识体系，前端技能模型：
* 领域知识
* 前端知识
* 编程能力
* 架构能力
* 工程能力

箭头加个新的文件名，会直接生成这个新的：
```bash
babel demo.js >newDemo.js
```

## 2021年11月10日
交互小优化：
* 1、能点击的地方加上 cursor pointer，
* 2、表单输入选择框加上可清除属性 clearable（ivu的select选中后没法清除，加了filterable支持搜索敲键盘上清除键删完了失去焦点又会默认选到之前的选项，所以对于一些非必填选择框要加上clearable让用户可以删除），
* 3、input输入框注意自动去掉首尾的空格 v-model.trim，maxlength限制最长输入
* 4、对于段落文字加上 text-align: justify 排版更整齐
* 5、小程序适配字体：段落文字可以直接写px，像标题之类的描述文字用rpx，适配出来不同屏幕更符合UI效果图

## 2021年11月9日
iview校验一直不通过：prop的字段要先写到form里的，不能是动态添加的（vue不能监听到动态新增的属性？？？）

## 2021年9月2日
用v-html渲染富文本，里面的style标签样式会影响到页面里的样式

```js
// 富文本内容，过滤掉js和style标签（style里的样式会影响到全局）
if (key === 'cost_channel_reparation_rule' && value) { // 赔付方案
  let regJs = /<script[^>]*?>[\s\S]*?<\/script>/ig
  let regStyle = /<style[^>]*?>[\s\S]*?<\/style>/ig
  let val = value.replace(regJs, '').replace(regStyle, '')
  tableItem[key] = val
}
```

## 2021年4月16日
后端把Long类型数据传给前端，会出现精度丢失的问题
```js
let n = 1290850452280250366  
console.log(n)  
1290850452280250400
```
像列表id之类的，要让后端返字符串，数值类型过大会出现精度丢失，id错误问题

## 2021年03月23日

狗日的，又废接口：wx.getUserInfo => wx.getUserProfile
<button class="btn-login" open-type="getUserInfo" :data-mtaid="'login.button.submit'" @getuserinfo="getWxUserInfo">登录</button>

<button class="btn-login" @click="getWxUserInfo">登录</button>

```js
// 获取用户微信信息
getWxUserInfo() {
    let _this = this
    wx.getSetting({
        success (res) {
            if (res.authSetting['scope.userInfo']) {
                // 已经授权
                wx.getUserInfo({
                    success: function(res) {
                        _this.wxUserInfo = res.userInfo
                        _this.$storage('wxUserInfo', res.userInfo)
                        _this.setWxUserInfo()

                        _this.login()
                    }
                })
            } else {
                _this.$tips.toast('为了更好的使用体验，请允许授权！')
            }
        }
    })
},

getWxUserInfo() {
    wx.getUserProfile({
        lang: 'zh_CN',
        desc: '登录后个人信息展示',
        success: res => {
            this.wxUserInfo = res.userInfo
            this.$storage('wxUserInfo', res.userInfo)
            this.setWxUserInfo()

            this.login()
        }
    })
}
```

## 2021年02月10日
iview的select组件开启远程搜索后，直接放在用modal组件封装的弹窗内，弹出弹窗回显默认值的时候，界面上不显示，要在外面用v-if去控制modal显隐的时候才会有效（周颖发现的，原因后面有空探究下）

## 2021年1月11日
上个月替换加盟商小程序接口 api.51.xxx.com => api-51.xxx.com，忘记在小程序管理后台添加服务器域名了，小程序修改任何东西都要提交给测试验证（测试、线上）。

## 2020年11月26日
vue文档上有说：https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E7%B1%BB%E5%9E%8B。props default 数组／对象的默认值应当由一个工厂函数返回，如果你的 type 是 Object，你需要这么写  
```js
default: () => ({})
```
而不是
```js
default: () => {}
```
不加括号的话应该是一个空函数体，没有返回值了

## 2020年11月2日
用伪元素渲染单选图标
```css
.radio
    margin-right 30rpx
    font-size 28rpx
    color #333333
    &.on
    font-weight 500
    &:before
        color #1890FF
        content "\e84b"
    &:before
    display inline-block
    font-family "iconfont" !important
    font-size 16px
    font-style normal
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    content "\e823"
    margin-right 8rpx
    color #979797
```

## 2020年3月31日
iview的table组件添加固定列 fixed：'right'，如果第一列宽度 width: 60（大于和小于都没事），会造成右边fixed固定列错位

## 2020年3月30日
iview的 InputNumber组件同时限制 :min="2000"和:max="6000"，默认值一变化就会去验证（on-change），操作体验超级差，值来回在2000和6000切换。不用min和max限制，在失去焦点时on-blur里校正又没法监听到步骤器的加减

解决方案：用min和max限制，添加一个属性 :active-change="false"

（iview文档里又说明，InputNumber组件属性的最后一个：active-change	是否实时响应数据，设置为 false 时，只会在失焦时更改数据），就会在失去焦点时才会去验证是否符合最大最小值

## 2020年3月19日
下载流文件
```js
let blob = new Blob([res], { type: 'application/vnd.ms-excel;application/octet-stream' })
let href = URL.createObjectURL(blob)
```

## 2020年3月18日
* iview开关组件 switch 不要使用switch 或 Switch 作为组件名，如果没有使用 iview-loader 时会报错
* vue组件名不能乱起，组件名不能是html标签，svg标签等，还不能是component和slot，注意，其中svg标签和component，slot是大小写都不允许存在（例如,Switch,SWITCH都不行）；html标签是不能存在小写，大些可以(例如,button不行,Button可以)

## 2020年3月13日
iview Input组件on-change事件默认返回当前值，如果要在事件中传递自己的参数，$event就代表默认的参数：
```js
@on-change="onChange"                   // 不传参数第一个参数就是默认的当前值 onChange(val) { console.log(val) }
@on-change="onChange(item, $event)"     // 第二个参数是默认的当前值
@on-change="onChange($event, item)"     // 第一个参数是默认的当前值
```

## 2020年3月12日
vee-validate表单验证插件

表单项双向绑定的初始值要保证为一个空字符串或默认值，不可以是 undefined，否则再blur、change事件里绑定验证的时候第一次必定返回“false”，要第二次触发验证才恢复正常
```js
// 不要
formData:  {}

// 要
formData:  {
    name: '',
    age: ''
}
```

父子组件传值 sync 修饰符

## 2020年3月10日
* position: sticky，可以做粘性布局，吸顶交互效果
* v-click-outside-x：vue插件，可以监听元素外部得事件（如iview里的Poptip 气泡提示组件，点击元素外部区域，关闭当前组件）

vscode 快捷键
* 1. 折叠所有区域代码的快捷: ctrl + k ctrl + 0 ; 先按下 ctrl 和 K,再按下 ctrl 和 0 ; ( 注意这个是零,不是欧 )
* 2. 展开所有折叠区域代码的快捷:ctrl +k ctrl + J ; 先按下 ctrl 和 K,再按下 ctrl 和 J

## 2020年3月6日
在渲染多个元素时候可以把一个template元素作为包装元素，并在上面使用v-if进行条件判断，template最终不会被渲染

* 注意：v-show不支持 template 语法（注意，v-show 不支持 template 元素，也不支持 v-else。关于这一点vue官方文档有说明https://cn.vuejs.org/v2/guide/conditional.html#v-show）

## 2020年3月4日
```css
justify-content: space-around;    /* 两边的间距是中间间距的1/2 */
justify-content: space-evenly;    /* 所有间距相等 */
```

## 2019年12月31日
清除缓存
```bash
npm cache clean --force
yarn cache clean
```

## 2019年12月25日
用vue-scrollwatch模拟鼠标滚轮滑动一下 滚动一屏

```js
window.addEventListener('mousewheel', this.setScrollTop, { passive: false })
window.addEventListener('DOMMouseScroll', this.setScrollTop, { passive: false }) // 兼容firefox
```

如果把浏览器的缩放比调整了（不是正常的100%），会出现监听错误，造成滚动错乱（害我找了半天bug）

## 2019年12月24日
* 动态路由传参 query 和 params  
* param -> params

params传参的坑
* 1、要在路由定义的时候带上参数 path: 'user/:id'
* 2、this.$route.push的时候只能用name，而且要和定义路由时的name对应
* 3、params 这个单词别拼错了

## 2019年12月18日
全数字时间日期格式化（正则替换）
```js
let date = '20191218175924'.replace(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/, '$1-$2-$3 $4:$5:$6')
console.log(date) 2019-12-18 17:59:24
```

时间戳转格式要是数值类型的才行，字符串的会NaN 
```js 
new Date('num')   ->  NaN
```

## 2019年11月14日
限制弹窗高度
```js
// 方法一：
max-height 80vh
overflow auto

// 方法二：
mounted() {
    let h = window.innerHeight
    this.screenHeight = h - 500
},
// 给元素动态绑定最大高度
:style="{maxHeight: screenHeight+'px', overflow: 'auto'}"
```

## 2019年11月6号
* 不能这样判断 this.arr === []，复杂类型全等比较的是类型和引用地址，可以这样判断 if (!this.arr.length)
* map方法不能用来过滤掉数据，过滤用filter

## 2019年10月17号
* window.open在vue中跳转会自动添加本地服务器的地址，需要完整的https才可以，http也不行
* window.open('https://www.baidu.com','_blank')

## 2019年9月20日
css :not选择器性能不好？

not选择器排除列表元素最后一个会造成页面抖动，在弹出框里特别明显，它的规则是先全部选出来在排除，在v-for的外面层再加一个判断：v-if="data.length"，就不会出现抖动了

Collapse 折叠面板用v-for异步请求渲染的数据，第一次进入会有bug，不管点哪个都会展开第一行，要点第二次后才会恢复正常，也是在外面层再加一个判断：v-if="data.length"，就不会有这个bug了

iview框架table的行禁选，动态渲染render

v-for和v-if同时使用

Vue报错 Duplicate keys detected: 'xxx'. This may cause an update error. 
* 情况一、错误信息展示为关键字‘keys‘,此时应该检查for循环中的key，循环的key值不为唯一性 （很普通）
* 情况二、有两个相同的for循环，而这两个for循环的key值是一样的，此时可以将一个的key值加一个数字或者加一个字符串

## 2019年9月18号
ivew修改组件的默认样式必须用深度选择器才有效 >>>

## 2019年9月5号
所有用到的组件要在plugins文件夹下的iview.js里注册引入

## 2019年9月3日
超出可以滚动并且隐藏滚动条
```css
.box {
   overflow-x: hidden;
   overflow-y: scroll;
}
.box::-webkit-scrollbar {
   display none
}
```

伪元素的父盒子设置了 z-index后，伪元素的z-index会失效，所以如果用 ::after来给盒子做阴影时，只用给伪元素设置z-index为负数就可以了

## 2019年6月18日
**margin-left: auto 块级元素右对齐**

如果想让某个块状元素右对齐，脑子里不要就一个 float:right，很多时候，margin- left:auto 才是最佳的实践，浮动毕竟是个“小魔鬼”。甚至可以这么说 margin 属性的 auto 计算就是为块级元素左中右对齐而设计的，和内联元素使用 text-align 控制左中右对齐正好遥相呼应! 

**巧妙互换变量的值**

如果不用第三个变量，如何交换两个数值变量的值？
```js
var a = 9;
var b = 20;
b = a + b;
a = b - a;
b = b - a;
console.log(a, b);
```
还有下面这个十分的巧妙解法，想出来的人一定是大神，除非他是托梦想出来的，简单粗暴一行代码交换了a和b的变量值：
```js
var a = 9;
var b = 20;
a = [b, b=a][0];
```
根据运算符优先级，首先执行 b=a，此时的b直接得到了a的变量值，后一步数组索引让a得到了b的值（简直不能再厉害）。

## 2019年5月7日

**mac笔记本快捷键**

安全与隐私里显示出：任何来源
* ① 打开终端
* ② 输入命令行语句：sudo spctl --master-disable
* ③ 回车后，输入密码，再去打开安全与隐私里，就选到任何来源了
显示出隐藏文件，快捷键：command + shift + .

**UI笔记**

切图命名以模块为前缀，如：模块_类别_功能_状态.png

模块：
* 登陆页面（login）
* 公共（common） 
* 需求a（need）
* 需求b(demand) 
* 发现（discover）
* 消息（message）
* 我（me）
 
类别：
* 导航栏（nav）
* 菜单栏（tab）
* 按钮（btn）
* 图标（icon）
* 背景图片（bg）
* 默认图片(def)
 
功能：
* 菜单（menu）
* 返回（back）
* 关闭（close）
* 编辑（eidt）
* 消息（message）
* 删除（delete）
 
状态：
* 选中（selected）
* 不可点（disabled）
* 按下（pressed）
* 正常（normal）