# 前端框架中index.html中的变量语法

在 vue 或者 react 前端项目中，我们经常会在入口模板文件 index.html 中看到用 %PUBLIC_URL%、<%= BASE_URL %>、<%= title %> 之类的变量插入。

但这似乎我们平时的 html 或者 javscript 压根没见过这类的写法，一时感觉超出了自己的知识盲区。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= title %></title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### %PUBLIC_URL%

%PUBLIC_URL% 代表项目 public 静态资源文件夹的绝对路径，vite3 中 index.html 中的 URL 将被自动转换，因此不再需要 %PUBLIC_URL% 占位符了，[文档](https://vitejs.cn/vite3-cn/guide/#index-html-and-project-root)。

一般用来设置网站的图标、logo或者全局css、js引用这些，如 <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />。

对应 vite 中的 publicDir 配置，默认就是 public

### <%= BASE_URL %>

项目根目录

要修改这个值，vue + webpack项目中 Vue CLI 3.3 之前的版本，配置：baseURl: '/static'，Vue CLI 3.3 之后（包括3.3）的版本，配置：publicPath: '/static'。

这个值在开发环境下同样生效，这么改打包后是没问题了，但项目本地运行会报错，官方也给出了方案，只需要判断一下当前环境是生产环境还是开发环境，再设置不同的路径就可以了：

```js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/static/'
    : '/'
}
```

### ejs 模板语法

像我们在 html 代码中见到的 <%%>、<%=%>、<%:%> 这类语法，其实是 [ejs模版语法](https://ejs.co)，就是帮我们用 JavaScript 代码来生成 HTML 页面。

四种语法：

1. 纯脚本标签

里面可以直接写 js 代码，用于书写流程控制语句，不输出任何内容。

<% xxx %>

```js
<%
for (var i = 0; i < 10; i++) {
  alert('hello world')
}
%> 
```

2. 输出经过 HTML 转义的内容

将数据输出到模板，如果输出的数据是HTML，则会被转义，如 '<'、'>'、'&' 等 html 字符，会被转义成字符实体：&lt; &gt; &amp;

<%= xxx %>

3. 输出非转义的内容

和上一个类似，不过不会被转义，通常用来输出富文本内容

<%- xxx %>

```js
const html = '<p>我是周小黑</p>'
<h2><%- html %></h2>
```

4. 引入其他模版

将相对于模板路径中的模板片段包含进来

<%- include('文件路径') %>

5. 条件判断

```js
<% if (condition1) { %>
  ... 
<% } %>

<% if (condition1) { %>
  ... 
<% } else if (condition2) { %>
  ... 
<% } %>
```

6. 循环

```js
<% for(var i = 0; i < arr.length; i++){ %>
  <%= i %> <%= arr[i] %>
<% } %>
```

7. 注释

EJS模板提供的注释方式，不会被作为模板内容编译输出

<%# xxx %>