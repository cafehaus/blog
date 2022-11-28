# 工作中常用工具和技术合集

## 前端技术栈

1. HTML
2. CSS
3. JavaScript
4. vue
5. react
6. angular
7. TypeScript
8. nodejs


## 前端项目UI库

1. elementUI
2. iView
3. vant
4. uView
5. LinUI


## 跨端框架

1. uni-app
2. taro
3. flutter
4. electron


## 前端项目常用第三方包

1. axio
2. dayjs
3. js-md5
4. lodash
5. number-precision
6. v-click-outside
7. clipboard
8. vee-validate / async-validate
9. vxe-table
10. v-viewer
11. echarts / AntV


## 常用工具

1. vscode / HBuilderX / sublime
2. Git / SVN
3. Postman
4. Navicat
5. Photoshop
6. illustrutor
7. xShell
8. Docker
9. FileLocator
10. Beyond Compare
11. Charles
12. Snipaste
13. Android Studio
14. 向日葵远程 / AnyDesk / TeamViewer


## vscode 常用插件

1. Vetur
2. Prettier - Code formatter：自动格式化代码
3. Auto Close Tag：自动添加 HTML/XML 关闭标签
4. Auto Rename Tag：自动重命名 HTML或XML 标签
5. Chinese (Simplified)：中文语言包
6. Path Intellisense：智能路径提示
7. Color Highlight：样式颜色高亮显示
8. CSS Peek：鼠标放在类名上css样式查看器
9. Bracket Pair Colorizer：给匹配的括号上色
10. open in browser
11. Project Manager：多项目切换管理
12. Trailing Spaces：自动高亮行尾空格
13. ESlint：规范js代码书写规则
14. Code Spell Checker：单词拼写检查
15. Dracula Official：骚气的主题
16. GitLens：快速查看更改行或代码块的对象
17. GitHistory：查看和搜索git日志以及图形和详细信息
18. local history：代码本地修改记录，比 ctrl + z 好用
19. vscode-icons：官方出品的图标库
20. Regex Previewer：预览正则表达式效果
20. EditorConfig for VS Code：格式化代码


## 前端工具链

1. 开发环境：浏览器、V8、Node、Deno
2. 前端框架：Angular、React、Vue
3. 前端微服务框架：Single SPA、Qiankun
4. 脚手架：Vue CLI、Angular CLI、Create React App、Yeoman、Umi、Maven
5. 跨端框架：Electron、uniapp、taro、flutter、React Native、Weex
6. 后端框架：Nest、Express、Koa、Nuxt、Egg
7. 开发工具：Vscode、HBuilderX、IntelliJ IDEA
8. 静态化支持：TypeScript、CoffeeScript、Flow、LiveScript
9. 样式预处理器：scss、less、stylus
10. 模板引擎：handlebarsjs、etpl、templatejs、Jsx
11. 调试工具：Chrome DevTools/Firebug/Webkit inspecto、vscode/WebStorm/IDE、Http-server
12. 转译工具：Babel、postcss
13. 格式规范工具：JSLint、JSHint、ESLint、TSLint、Husky、Prettier、stylelint
14. 接口联调工具：Axios、Fetch、Postman、Easymock、Swagger
15. 包管理器：NPM、Yarn、Bower、PNPM、lerna
16. 模块加载器：RequireJS、SystemJS、StealJS、ES Module、CommonJs
17. 打包工具：Webpack、Rollup、Parcel、Browserify、Grunt、Gulp、vite
18. 进程管理：Forever、PM2、StrongLoop Process Manager
19. 代码管理：git、gitlab、sourcetree、github Desktop、Sonar
20. 代码集成和部署：jenkins、docker、nginx、Travis
21. 测试工具：Mocha、Jasmine、Jest、Karma
22. 抓包工具：Wireshark、Chalers、Fidder
23. 监控：sentry

浏览器兼容性测试
* [turbo](https://hub.turbo.net/browsers)
* [Browserstack](https://www.browserstack.com)
* [LambdaTest](https://www.lambdatest.com)
* [smartbear](https://smartbear.com)
* [virtuoso](https://www.virtuoso.qa)
* [testgrid](https://www.testgrid.io)

需收费，可免费试用，貌似用处不大

## 前端常见易错易混单词

* form 和 from
* handle 和 handel
* model、modle、modal
* params 和 pramas
* route 和 router
* title 和 tittle
* label 和 lable
* month 和 mouth
* useable 和 usable (两个都表示：adj. 能用的，可用的，适用的)

## node 第三方包

* 删除文件和目录：rimraf
* 图片处理：sharp、Jimp
* 操控浏览器：puppeteer(谷歌出的)、playwright(微软出的)
* node版本管理：nvm
* node服务启动：nodemon
* 命令行带颜色输出：chalk
* 任务调度和定时任务：node-schedule
* 桌面自动化：robot
* 接口压测：autocannon（* 还有Java写的JMeter）
* JsDoc 注释：jsdoc

查看本地全局安装的包 npm list -g，查看本地安装的所有 node 版本 nvm list

## 前端团队协作

* z-index 规范
* 公用组件/样式/方法
* 公用的业务组件都喜欢直接复制出来改下，后期维护成本大，也容易出问题
* git commit 规范，尽量不要一次 commit 所有文件，跟模块化开发一样的，拆分成细小的修改，然后每一个点一次 commit
* 代码 jsDoc 注释
* 模块化：js 代码逻辑抽离、css样式抽离（变量、函数、单独的样式文件）、组件抽离、mixins 混入、composition API
* 公用方法封装命名规范，如pc端 this.$Message.success('成功')，移动端又是  this.$tips.toast('成功')，开发时同样的功能逻辑可能都是直接复制过来该，像这种公用方法命名不同就很容易误用
* 提高开发效率：公用封装、代码片段、造数据开发流程小工具
* 低级码农：不会的不知道找同事协助，有延期风险不向上反馈，有问题不解决只抱怨（尤雨溪，觉得 angular 不好用就自己开发了一个vue）

## 全栈项目

* 原型图：Axure、mastergo、Figma
* UI设计：Photoshop、Sketch、蓝湖(设计稿标注)
* 前端：vue、react、angular、svelte、uni、flutter、electron
* 后端：wp、nodejs、java、python

## 新技术

* [WebAssembly](https://webassembly.org)
* WebGL