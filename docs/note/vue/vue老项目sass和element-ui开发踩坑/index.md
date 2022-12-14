# vue老项目sass和element-ui开发踩坑

公司的一个各种依赖比较老的项目，习惯了之前的iview和stylus开发，刚接手还是有很多不习惯的地方。

### 项目部分依赖
* element-ui：2.2.2
* sass：1.26.1
* sass-loader：7.3.1
* webpack: 3.6.0

sass 之前用的 node-sass，替换成 sass（dart-sass）^1.56.1 版本后，深度选择器 ::v-deep 覆盖 element-ui 组件样式死活无效，降到 1.26.1 版本并且用 >>> 才生效了。

element-ui 2.2.2 版本的 el-input-number 数字输入框的 placeholder 无效，升级到 2.15.11会报错找不到这个文件：element-ui/lib/theme-chalk/index.css，去源码包里查看也确实没有 lib 这个文件夹，直接更新到截止2022年12月9日最新的 2.15.12版本就可以了。

注意用样式 content 去覆盖element-ui的官方组件图标，不同的版本的字体图标的 content 码是不一样的，比如覆盖下拉框右侧的箭头，不同版本要去看 el-icon-arrow-up 的实际content值。

sass(dart-sass)、sass-loader配置自动导入全局变量文件，sass-loader v8以下版本是 data，v8是prependData，最新的v10中是 additionalData。对应这个项目中要用：

```json
{
  "sass": {
    "data": `@import "@/styles/var.scss";` // 引入全局变量
  }
}
```