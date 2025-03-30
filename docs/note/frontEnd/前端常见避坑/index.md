# 前端常见避坑

### javascript

#### try catch捕获异常
JSON.parse、JSON.stringify、encodeURIComponent、async await 要放到 try catch 中。

new RegExp 最好也放到 try catch 中，用构造函数 new RegExp 构造正则表达式时，一般表达式中需要插入变量时只能用构造函数方式，注意里面的特殊字符需要转义，尤其是之际接收用户输入的字符，否则容易报错，如：
```js
new RegExp('+861347', 'ig')

// 会报 SyntaxError: Invalid regular expression: /(+861347)/: Nothing to repeat
```

#### 数字精度问题
接口数据中比较长的 id 要用字符串，否则大数字会出现失精导致 id 对不上。

浮点数运算失精，涉及到计算的用number-precision这类计算库。

#### 时期时间
macOS 系统下日期时间格式要用斜杠 / 代替横杠 -。

#### 资源访问
https 下访问 http 资源会报错

#### replaceAll 替换字符串中内容
项目中尽量不要用 replaceAll 方法，有兼容性问题，在部分浏览器或版本里会报错(即使常用的Chrome也要大于85版本)：replaceAll is not a function，替换成 replace 和正则加 g。

#### for循环中间的分号
for循环里的条件这个地方中间的是分号，不是逗号
```js
for(var i = 0; i < 100; i++) {  
}
```

#### 等号判断相等
判断是不是相等是用 == 或 ===，切记不要用 = 去判断是不是相等，一个等号是赋值。

#### alert方法
alert方法只能弹出一段字符串，所以默认会调用toString()方法，要弹出多个变量需要用 + 号拼接，如果用逗号分割，则只会弹出第一个变量的值。

#### 请求接口路径中的斜杠
找了半个小时的bug，一直拿不到数据，用postman又可以：注意如果用变量拼接地址，原地址后面有/的，这个地方就不用再加了：
```js
const baseUrl = 'http://localhost:8888/api/private/v1/'

// 有问题的
const api = `${url}/login`

// 正确的
const api2 = `/${url}/login`
```

#### Math.max()
Math.max()方法是找出一串数字中的最大值（不是数组），如果直接传入数组返回的就是NaN，如果要判断数组中的最大值：
* ① 用ES6中的展开运算符，直接将数组中的元素展开 Math.max(…arr)
* ② 用apply方法改变this的指向 Math.max(null, arr)

#### 方法中return时省略分号
javascript有自动补全功能，所以每行可以加分号也可以不加：
```js
function foo(){
   return 
   {
       b: 2
    }
}
```
会被解析成：
```js
function foo(){
   return ;
   {
       b: 2
    }
};
```
所以最后的返回结果是 undefined。

#### map返回一个新的数组
用map遍历数组时如果是要得到一个新的数组，一定要记得return item，要不然原数组里的元素都变成undefined了。

### html

#### 标签自定义属性
自定义属性不可以通过【元素.自定义属性名】来获取，要用 getAttribute('自定义属性名')。

#### 百度小程序template绑定数据
百度小程序模板 template 绑定数据那是3对花括号，不是2对
```html
<template is="personCard" data="{{{...person}}}" />
```

微信那就是2对：
```html
<template is="msgItem" data="{{...item}}" />
```

狗日的百度，净搞些鬼迷日眼的。

#### 微信小程序页面节点上绑定数据
微信小程序里，wx:for="{{arr}}"，这里一定要加 {{}}，只有事件名才不用加双花括号，其他的只要是变量都要加，wx:key="index"（这个地方也不用加花括号）。

## css
#### 行内元素添加transform动画
transform 对于行内 inline 元素是无效的，如果要对其添加transform动画，需要先用display将行内元素变成行内块或块元素。

#### 小程序button默认样式
小程序button去掉默认边框要设置
```css
button::after {
    border: none;
}
```
自己设置border后行高要根据内减模型（box-sizing: border-box）来计算，里面的文字才能垂直居中。

#### img图片裁切 object-fit
给img标签加上
```css
.img {
    object-fit: cover;
}
```
被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框。

图片继承父盒子的宽，width: 100%，在设置object-fit: cover；不起作用，原因：要给img同时设置出宽高，才能裁切。

#### Tabbar导航栏定位问题
给tabbar设置position: fixed；后，不要设置left: 0；在大屏上tabbar就会跑到浏览器左下角去了，因为他是相对浏览器来做定位的。

#### 设置背景色渐变
不是设置background-color: linear-gradient()，而是background: linear-gradient()。

#### 自闭合标签伪元素
伪元素只有双标签才可以用，伪元素的本质是往标签元素的内部添加额外的元素，所以自闭合标签比如 img 是不能添加伪元素的。

#### 用a标签放置网站Logo
```html
<div class="logo">
    <h1><a href="#"></a></h1>
</div>
```
用a标签的背景图放网站logo，切记a标签是行内元素，不可以设置宽高，所以要先display: inline-block，然后设置宽高后，背景图才能显示出来，如果div是用的flex布局，a要设置成block才行。

导航栏的菜单也要注意，如果要给a设置宽高，也得先转成行内块inline-block（最好设置成block，设置成inline-block会出现其他一些问题）。
```html
<li>
    <a href=“#”>我是导航</a>
</li>
```
用span或者i标签放置背景图时也要先改变元素显示类型，才能设置宽高。


