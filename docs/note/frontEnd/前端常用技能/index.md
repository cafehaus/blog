# 前端常用技能

## 伪造登录
一般前端登录态 token 会缓存到本地，可以用线上登录环境拿到 token 直接在本地伪造
* postman：直接在接口请求 header 里添加一个 token
* 浏览器：Cookie 里新增一个 token
* 小程序：localstorage 里新增一个 token