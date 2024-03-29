# Donut多端框架小程序打包适配ios和安卓app

腾讯新出了一个 Donut 多端框架，可以直接将微信小程序转成 ios 和 安卓 app，小程序开发者工具里也集成了 app 相关升级、调试和打包的功能，具体的可以参考[官方文档](https://dev.weixin.qq.com/docs/)。

### 适配过程
展示组件、样式上微信大部分都适配了，没啥大的问题，目前就发现 css 里的网格 grid 布局在一些低版本手机上会显示异常。主要是一些官方功能组件和api很多不支持，如果使用小程序特定的一些api比较多的话，可能适配也比较麻烦，很多东西在app上都还不支持或者目前还没适配。

登录这块目前官方提供了直接跳转小程序授权、微信、手机号和苹果Apple登录，微信授权登录需要依赖微信开放平台，所以需要提前注册好开放平台账号。

### 安卓相关问题
#### 安卓开发证书
生成安卓开发者证书，网上有在线生成的网站，也可以本地安装 java 环境然后用命令行直接生成。

#### 打包的 Package Name 包名
这个不是在生成安卓开发者证书的时候设置的，是需要自己去微信开放平台设置，没设置官方会默认会分配一个测试包名，设置了可以在 Donut 后台同步看到。

#### apk 安装包发送到手机上不能安装
直接将打包好的安卓 apk 文件通过微信发到手机上，接收保存时微信会默认在后面给你加上 .1，直接在文件管理里文件重命名删掉 .1 的后缀，就可以点击安装包安装到手机上了。

#### 上架安卓应用商店提示 targetSdkVersion 版本不符合要求
上架小米应用商店提示 targetSdkVersion 版本不符合要求，要求要大于等于30。Donut 默认给设置的 29，然后在文档上找到了可以在 project.miniapp.json 里配置 targetSdkVersion，要求下载版本号 ≥ 1.06.2308242 的开发者工具。开发工具下载的稳定版最新版里面压根没这项配置，重新下载了最新的开发版开发工具才找到可以配置。

#### 基座 APK 构建失败，错误信息：Execution failed for task
Android sdk 版本1.2.7，lbs sdk 版本 1.0，构建安卓安装包的时候会报错，需要把 lbs sdk 的版本切换到 1.2.0
```
基座 APK 构建失败，错误信息：Execution failed for task ':app:checkArmReleaseDuplicateClasses'. > A failure occurred while executing com.android.build.gradle.internal.tasks.CheckDuplicatesRunnable > Duplicate class com.tencent.tencentmap.lbssdk.service.GTime found in modules TencentLocationSdk-openplatform-7.5.2-runtime (com.tencent.map.geolocation:TencentLocationSdk-openplatform:7.5.2) and wxa-standalone-open-runtime-SaaA-sdk-1.2.7-runtime (com.tencent.luggage:wxa-standalone-open-runtime-SaaA-sdk:1.2.7) Duplicate class com.tencent.tencentmap.lbssdk.service.GnssRaw found in modules TencentLocationSdk-openplatform-7.5.2-runtime (com.tencent.map.geolocation:TencentLocationSdk-openplatform:7.5.2) and wxa-standalone-open-runtime-SaaA-sdk-1.2.7-runtime (com.tencent.luggage:wxa-standalone-open-runtime-SaaA-sdk:1.2.7) Duplicate class com.tencent.tencentmap.lbssdk.service.RegTxGposListener found in modules TencentLocationSdk-openplatform-7.5.2-runtime (com.tencent.map.geolocation:TencentLocationSdk-openplat...
```

### ios相关问题
#### ios签名和开发证书
下载证书到mac上显示证书不受信任，需要现在在 https://www.apple.com/certificateauthority/ 上下载 Developer Authentication、Worldwide Developer Relations - G2、Worldwide Developer Relations - G3... 这几个中间证书，安装好后就会显示信任了。

#### wx.weixinAppLogin 报错 errCode:-700000
这个 api 需要唤起微信 app 授权，需要使用自己申请的开发证书，还要在 Donut 后台绑定了 Bundle ID 和 Universal Links，开启了相关的权限。直接使用官方提供的临时证书，是不能使用这些功能的。

#### .mobileprovision 文件所属的 bundleId 与应用无对应关系
跟上一个问题类似，这个一般是用自己的证书如果没设置 Bundle ID 和 Universal Links，打包时就会提示这个报错。

#### Run the app failed：Sign the app fail:undefined
用临时证书打包或真机运行用报上面的错误，先要用 USB 连接添加了设备权限的iphone手机到 mac 上，点击运行电脑上会弹窗让你输入 AppID 账号和密码，注意此账号也要在苹果开发者后台已经添加为开发者，手机也要拿到 UUID 在苹果开发者后台添加到调试设备里，手机要开启开发者模式。

如果报错上面还有：MiniAppBuilder could not sign in with your Apple ID. Your Apple ID or password is incorrect，就是提示你输入的账号密码不正确，重新再开发工具里先清除证书签名缓存，再输入正确的账号和密码，首次使用可能还会在你手机上弹出一个动态码，信任登录然后在电脑上输入手机上获取到的授权码就行了。

#### Build ipa failed：Sign the app fail:undefined
跟上一个问题类似，用临时证书打包时可能会出现这个报错，先清除证书签名缓存，再输入正确的账号和密码。

#### .ipa文件 上传交付时报错：Asset validation failed (90161) Invalid Provisioning Profile
Invalid Provisioning Profile. The provisioning profile included in the bundle xxx [Payload/demo.app] is invalid. [Missing code-signing certificate]. A Distribution Provisioning profile should be used when submitting apps to the App Store. For more information, visit the iOS Developer Portal. (ID: xxx)

用分发证书打包成功后，在 Transporter 里上传交付时报错，上面的报错提示证书文件无效，解决办法：

* 核对证书和描述文件，确保受信任而且未过期
* 打包时用的证书和描述文件，是否误用了开发证书和描述文件
* 把本地已经在钥匙串里安装了的证书全部删掉，然后重新安装再打包
* 上面的方法都不能解决的，重新在苹果开发者后台重新生成新的分发证书和描述文件

#### invalid provisioning profile.the provisioning profile included in the bundle is invalid
打包的证书要安装在mac电脑本地钥匙串里，直接双击证书文件，安装好了可以在钥匙串-我的证书里看到。

#### Transporter 里交付成功，苹果开发者后台看不到提价信息
这个一般是交付的版本有问题，像一些隐私权限描述未添加...注意下自己开发者账号对应的邮箱，苹果官方会给你发送具体的错误信息邮件。有收到提示邮件就是有问题的，这个时候苹果开发者后台 app 管理里是看不到你交付的版本的，需要修改后重新交互，成功了后台构建那就可以看到交互的版本了。

#### The provided entity includes an attribute with a value that has already been used (-19232)
每次构建上传的版本号需要累加，不能比之前的低

#### 选择图片、保存图片时app崩溃
需要在 project.miniapp.json 中设置 iOS - 隐私信息访问许可描述，然后操作的时候用户才可以正常操作。Donut 的适配也确实太粗暴了，竟然不是给个提示报错未设置隐私描述之类的，直接让app崩了！

#### 第三方登录
如果有接入第三方平台登录，比如微信登录、微博登录...苹果要求必须同时接入它的 apple 登录，否则审核不会通过的，亲儿子就是好。有的应用商店审核只要有注册功能还需要同时提供账号注销功能。

### 其他问题
#### 1、相关功能不能用
比如视频不能播放、canvas绘图报错...官方为了减小打包大小 SDK 里很多功能默认是没有开启的，如果项目里有用到音视频、canvas 这些功能，需要先在 project.miniapp.json 配置文件里，自己开启相关的 SDK：Media SDK、XWeb SDK，否则是不能用的。

#### 2、适配登录需要新建登录页
使用小程序授权登录，需要新建一个 DonutLogin 的授权登录页，自己不新建也会有一个官方默认的。首次打开 app 会先打开这个页面让跳转小程序授权，开发者工具里有直接集成，右键-新建多端登录 Page，会生成一个官方提供的默认授权页，也可以直接在上面修改自定义。刚开始以为这是官方强制要弹这个的，即使没用到小程序登录，首次安装也会打开这个授权页，最后才发现是直接在开发者工具里升级成多端项目时，默认给你配置了小程序授权登录，具体参考下面的一点。

#### 3、wx.login 会隐式触发 wx.getMiniProgramCode
小程序升级成多端项目后身份配置时 app.miniapp.json 里的 adaptWxLogin 为 true，默认 app 中调 wx.login 会隐式触发 wx.getMiniProgramCode，然后会打开小程序授权登录的页面，即使项目中没有使用微信登录。

#### 4、跳转到小程序
小程序很多相关的功能、插件在 app 上都是不能用的，不过官方提供了 app 直接唤起微信打开小程序的方法 wx.miniapp.launchMiniProgram，不过里面需要用到小程序的原始 id，可以直接跳转到小程序里面的各个页面。

#### 5、安卓app安装后一直在启动页
打包 android 的 sdk 版本 sdkVersion 是 1.1.1，更新到最新的 1.1.2 重新打包后就没问题了。所以遇到这种奇奇怪怪的问题，记得更新开发工具、sdk版本到最新版，如果已经是最新版那就回退个版本，说不定运气好就解决了，哈哈哈哈。

### 条件编译
官方也提供了类似 uniapp 条件编译的语法，为了同时兼容小程序和app可以使用条件编译语法，注意小程序开发者工具本地配置里也要勾选上-启用条件编译：

```
// js 文件中使用
// #if MP
// #elif IOS
// #elif ANDROID
// #endif


// wxml 模板文件中使用
<!-- #if MP -->
<!-- #elif IOS -->
<!-- #elif ANDROID -->
<!-- #endif -->


// wxss 样式文件中使用
/* #if MP */
/* #elif IOS */
/* #elif ANDROID */
/* #endif */
```
json 文件中需要自己通过 mini-wechat、mini-ios、mini-android 去分别配置，功能上没有 uniapp 提供的条件编译强大。