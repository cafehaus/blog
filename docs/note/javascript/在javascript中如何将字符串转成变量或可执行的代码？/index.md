# 在javascript中如何将字符串转成变量或可执行的代码？

有这样一个需求：当前作用域内有未知的一些变量，其中一个函数中可以拿到某个变量名字符串，怎么能在函数内通过传进来的字符串取到作用域链中的变量值，示例小 demo 如下：
```js
const name = '周小黑'
const age = 18

/**
 * @param {String} e 变量名字符串
 * @returns value 通过变量名字符串在作用域链中取到的变量值
 */
function fn(e) {
  let value
  // ...
  return value
}

const str = fn('name')
```

要解决上面的问题，主要就是怎么将字符串转变成可执行的代码？主要有三种方式：

### eval() 函数
eval() 函数会将传入的字符串当做 JavaScript 代码进行执行，所以下面的字符串可以正确取到变量对应的值，eval 对比 new Function 和 setTimeout 它是可以访问局部作用域的，后两者都只能访问全局作用域。

```js
const name = '周小黑'
const age = 18

function fn(e) {
  let value = eval(e)
  return value
}

const str = fn('name')
console.log(str)
```
很多地方都能看到这句名言：eval is evil，eval 是魔鬼。所以使用 eval 的时候要注意，性能低而且有安全风险。

### new Function()
```js
const name = '周小黑'
const age = 18

function fn(e) {
  let value = new Function('return ' + e)
  return value
}

const str = fn('name')
console.log(str)
```

对于函数我们平时都是直接用 function 或者箭头函数创建，不会用构造函数来创建函数，一般使用也是为了来动态创建函数，因为 new Function 最后一个参数是函数体字符串，这样我们就可以用来动态生成拼接，具体语法如下：
```js
let func = new Function([arg1, arg2, ...argN], functionBody)
```
注意函数体中只能访问全局作用域，不能访问局部作用域。


### setTimeout
定时器 setTimeout 的第一个参数我们平时都是传一个函数，它其实也是可以传字符串进去的，在浏览器中是可以正常执行的，在node环境中会报错。

实际上浏览器中也是不推荐这么用的，另外需要注意的是字符串中的变量只能访问全局作用域，不能访问局部作用域，如果全局作用域中没有，就是 undefined。
```js
const name = '周小黑'
const age = 18

let value
setTimeout('value = name')
setTimeout(() => {
  console.log(value)
})
```