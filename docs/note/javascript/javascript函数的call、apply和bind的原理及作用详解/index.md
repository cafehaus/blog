# javascript函数的call、apply和bind的原理及作用详解

javascript函数的 call、apply和bind 本质是用来实现继承的，专业点说法就是改变函数体内部 this 的指向，当一个对象没有某个功能时，就可以用这3个来从有相关功能的对象里借用过来。

最早javascript实现继承是通过 prototype 原型链，后来有了 class 类，可以像其他面向对象语言一样来实现类的继承。

通俗点说就好像我们小时候，家里要将稻子加工成大米，但是家里又没有打米机，那就只能背到村里别人开的打米房里，叫别人打开他的打米机，将我们的稻子喂进去，然后就能接出来大米了。


## call
call 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数：

```js
function.call(thisArg, arg1, arg2, ...)
```

当第一个参数为 null 或 undefined 时，可以使用数组展开语法实现类似的结果。请注意，this 可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。


## apply
apply 方法调用一个具有给定 this 值的函数，以及以一个数组（或一个类数组对象）的形式提供的参数：

```js
function.apply(thisArg, [arg1, arg2])
```

call 和 apply 其实是同一个东西，区别只有参数不同，call 是 apply 的语法糖，call 方法接受的是一个参数列表，而 apply 方法接受的是一个包含多个参数的数组

## bind
bind 方法创建一个新的函数，在 bind 被调用时，这个新函数的 this 被指定为 bind 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

```js
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

三者第一个参数都是 this 要指向的对象，如果如果没有这个参数或参数为 undefined 或 null，则默认指向全局 window。


## 实际应用场景

### 应用场景一：从数组中找出最大值、最小值
原生的 Math.max、Math.min 只能传入用逗号分隔的参数列表，但实际业务中我们往往拿到的是数组，就可以用下面的方法来实现（也可以用扩展运算符 ... 实现）：

```js
let arr = [1, 2, 3]
Math.min.apply(null, arr) // 这里第一个null表示不需要绑定this, 但是也不能省略，不能直接将arr给Math, 因为min必须接受两个及以上参数
```

### 应用场景二：伪数组转化成真数组
一般用于dom节点列表、具有 length 和序号属性的伪数组对象、函数参数 arguments
```js
Array.prototype.slice.apply(fakeArray) // slice 省略参数时就是截取出所有元素，此处相当于 Array.prototype.slice.apply(fakeArray, 0, fakeArray.length)
```

** 参考文档 **
* [call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
* [apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
* [bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
