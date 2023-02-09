# 前端常见避坑

## javascript
* JSON.parse/JSON.stringify/encodeURIComponent 要放到 try catch 中
* 接口数据中比较长的 id 要用字符串，否则大数字会出现失精导致 id 对不上
* 浮点数运算失精
* macOS 系统下日期时间格式要用斜杠 / 代替横杠 -
* https 下访问 http 资源

## css
* transform 对于行内 inline 元素无效