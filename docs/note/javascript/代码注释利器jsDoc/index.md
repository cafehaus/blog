# 代码注释利器jsDoc

以前老看到一些开源库和大佬们写的代码里，总是会在前面用 @ 符号加一些注释，对于平时只用 // 来写注释的我来说，感觉好高级。今天终于才知道类似的规范叫 jsDoc，而 jsDoc 类似于 Javadoc 或 phpDocumentor，它可以将文档注释直接添加到源代码中，然后借助 jsDoc 工具可以扫描源代码并为您成一个HTML文档网页。

### 使用 jsDoc 的好处

* 有助于提升代码可读性的提升
* 在 IDE 开发工具里可以得到更好的代码提示
* 对于框架开发，书写好的 jsDoc 可以直接生成 API 手册

我们常用的 vscode 其实内置了 jsDoc，只需输入 /** 然后就会有提示，然后直接按回车就可以生成了：

```js
/**
 * @function 计算两个数之和
 * @params {number} a
 * @params {number} b
 * @returns {number} 两数之和
 * /
function addNumber(a, b) {
    return a + b
}
```

### jsDoc 插件

可以借助 jsdoc 插件工具，根据我们的 js 文件生成 API 文档：

```bash
# 全局安装
npm install -g jsdoc

# 根据注释生成文档网页
jsdoc ./demo.js
```

[jsdoc 官网](https://jsdoc.app)