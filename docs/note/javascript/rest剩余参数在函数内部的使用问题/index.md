# rest剩余参数在函数内部的使用问题

ES6 中引入了 rest 参数（...变量名），用于获取函数内不确定的多余参数，注意只能放在所有参数的最后一个：
```js
function restFunc(...args) {
  console.log(args)
  console.log(arguments)
  for (var a of args) {
  }
}

restFunc(2, 5, 8)
// [ 2, 5, 8 ]
// [Arguments] { '0': 2, '1': 5, '2': 8 }
```

### 剩余参数和 arguments 对象的区别
* 剩余参数只包含没有对应形参的实参，arguments 包含函数的所有实参
* 剩余参数是一个真正的数组，arguments 是一个类数组对象，不能直接使用数组的方法
* arguments 不能在箭头函数中使用

### 在函数内部的怎么使用剩余参数
剩余参数我们大都用在一些公共的封装里面，经常配合闭包、call、apply、bind 这些一块使用，对于这几个的使用差异很容易把人绕晕。

* 1、直接通过变量名取值、遍历
如果是直接在函数内部获取参数，或者遍历取出参数，我们直接用变量名就行了，注意不需要额外加 ...
```js
function restFunc(...args) {
  console.log(args[0])
}

restFunc(2) // 2
```

* 2、在闭包函数中配合 call、bind 使用
这里在函数内部用 call、bind 去改变 this 指向
```js
function callFunc(func) {
  return function(...args) {
    func.call(this, ...args)
  }
}
```

注意 call、bind 接收的参数也是我们正常看到的函数用逗号分隔开的一个一个的参数，但是因为我们拿到的剩余参数其实是一个数组，所以这里的三个点并不是指和上面的剩余参数一样，而是将参数数组展开，是数组的展开运算符，有点晕的看下面 demo：
```js
function func(num) {
  console.log(arguments)
}

const arr = [2, 3, 4]
func(1, ...arr) // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
```

虽然这两个长的一样，但是不是同一个东西，只要记住：...剩余参数是用在定义函数时，...展开参数是用在函数调用时（bind 要单独记下）。

* 3、在闭包函数中配合 apply 使用
示例和上面的 call、bind 类似，不过注意 apply 接收的参数本来就是一个数组或类数组，所以这里并不需要额外用展开运算符去展开剩余参数：
```js
function applyFunc(func) {
  return function(...args) {
    func.apply(this, args)
  }
}
```