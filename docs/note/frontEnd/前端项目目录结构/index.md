# 前端项目目录结构

## vue 项目
```
├── public/static -- 静态资源，无需编译的图片之类的
├    └── img -- 图片资源
├    └── svg -- SVG资源
├    └── favicon.ico -- 网站图标
├    └── index.html -- 网站首页
│
├─src -- 项目开发目录
│  ├─assets -- 公共静态数据或较小的图片资源，vue-cli会把较小的图片编译成base64，如果时页面独有的建议直接放到页面目录里
│  │  ├─data -- 静态数据
│  │  └─images -- 较小图片资源
│  ├─common -- 公共文件
│  ├─libs/utils -- 公共方法、工具
│  ├─api/request -- 数据请求
│  ├─styles -- 公共样式
│  ├─router/routes -- 路由
│  ├─store -- 状态
│  ├─components -- 公共组件
│  │    ├─base -- 基础组件
│  │    └─hello -- 业务组件
│  ├─filters -- 过滤器
│  ├─directives -- 指令
│  ├─plugins -- 插件
│  ├─mixins -- 混入
│  ├─views/pages -- 页面
│  ├─app.vue -- 根组件
│  ├─main.js -- 入口文件
│  └─config.js -- 配置文件
│
├── .gitignore -- git忽略列表
├── package.json -- 项目依赖配置
├── vue.config.js -- vue cli3的webpack配置
├── README.md -- 项目简介
├── docs -- 文档
├── examples -- 示例文件
├── test -- 测试脚本
```