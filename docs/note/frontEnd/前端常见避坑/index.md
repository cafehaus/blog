# 前端常见避坑

## javascript
* JSON.parse/JSON.stringify/encodeURIComponent/async await 要放到 try catch 中
* new RegExp 最好也放到 try catch 中，用构造函数 new RegExp 构造正则表达式时，一般表达式中需要插入变量时只能用构造函数方式，注意里面的特殊字符需要转义，尤其是之际接收用户输入的字符，否则容易报错，如 new RegExp('+861347', 'ig') 会报 SyntaxError: Invalid regular expression: /(+861347)/: Nothing to repeat
* 接口数据中比较长的 id 要用字符串，否则大数字会出现失精导致 id 对不上
* 浮点数运算失精
* macOS 系统下日期时间格式要用斜杠 / 代替横杠 -
* https 下访问 http 资源
* 项目中尽量不要用 replaceAll 方法，有兼容性问题，在部分浏览器或版本里会报错(即使常用的Chrome也要大于85版本)：replaceAll is not a function，替换成 replace 和正则加 g

## css
* transform 对于行内 inline 元素无效