# 小程序开发和设计注意事项

## 公共问题

### webview 跳转域名
跳转外部链接，需要配置域名，一般跳别人的网页没法实现，因为要在服务器上上传验证文件

## 百度小程序

### 字体图标不显示
使用 iconfont 字体图标，阿里的 iconfont 上默认生成的引用字体文件路径里没有加 http 或 https，百度小程序中真机上要自己加上 https 才有效。

## 字节小程序

### 获取用户手机号
字节小程序的获取电话号码要先申请权限通过了，才能使用

## 快手小程序

### 安卓真机上接口报错
wordpress 官方的 REST API 接口的响应头中可能会出现 x-wp-doingitwrong 字段，值如果是乱码，再安卓真机上就会导致接口报错。
