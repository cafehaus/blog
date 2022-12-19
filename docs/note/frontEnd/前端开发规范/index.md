# 前端开发规范

## JavaScript
* 常量用 const 申明，全局的常量命名字母全部大写，多单词用下划线连接，如 APP_NAME，局部的可用小写
* 变量名、方法名用小驼峰命名，如 userName、submitOrder
* 页面上的事件用 handle 加上具体的名字，如 handleEdit；子组件 emit 的事件可用 on，如 onShare
* 公用方法封装命名规范，如pc端 this.$Message.success('成功')，移动端又是  this.$tips.toast('成功')，开发时同样的功能逻辑可能都是直接复制过来该，像这种公用方法命名不同就很容易误用

## CSS
* 类名命名多单词用横杠 - 连接，如 form-item
* z-index 规范，不能只顾当前都往大了写 9999 之类的
* !important 的使用，不能啥样式都用 important 去覆盖
* 全局类名可增加 g- 之类前缀

## 组件
组件或目录建议用单词加 - 命名，阅读更直观
父组件当前操作项命名 curRow，子组件 props 接收 info（不要用 row，容易和其他一些组件库用到的命名冲突）

## 注释
* 不要只写个名字，比较重要和遗漏的点要写明
* 可用 jsDoc 规范编写代码注释

## git/svn
* 每次提交代码必须写 commit
* 尽量不要一次 commit 所有文件，跟模块化开发一样的，拆分成细小的修改，然后每一个点一次 commit