# 前端知识查漏补缺

## CSS
* HTML和CSS都对大小写不敏感
* translate()方法只能改变x和y轴上的位移，translate3d()才能改变x、y和z轴上的位移

## js
* 闭包是一个能访问另一个函数作用域中变量的函数，一般出现在嵌套函数中。私有化变量、保存函数状态延迟执行，内存泄漏
* Object.create(null)和{}的区别，前一个会创建一个没有原型的纯净对象，很多框架会这样用，然后自己来重写{}这种形式原型上的方法
* function 函数和 var 变量都会被提升，但是注意函数会被优先提升，函数提升只是可以再当前作用域任意位置调用，注意函数内部的逻辑还是要去执行函数的位置跳入函数内部寻找作用域

### ...运算符rest剩余参数与arguments的区别？
rest 剩余参数是 ES6 中新增的，只能放在参数最末尾，是一个真数组，可以直接调用数组的方法。arguments是函数内部可以直接使用的所有参数伪数组，不能直接使用数组方法操作，不能在箭头函数中使用

### js的事件循环机制 eventloop
单线程，避免 dom 操作的视图同步问题，如果可以多线程同时操作一个 dom 元素，那浏览器不知道该咋渲染了
* 同步任务：在主线程从上到下一行一行执行
* 异步任务：会先放到任务队列里，等主线程空闲了才会去任务队列里读取任务执行

异步任务又会为微任务和宏任务：
* 宏任务：setTimeout、setInterval、DOM 事件、requestAnimationFrame、I/O 操作、UI 渲染、MessageChannel、postMessage、BroadcastChannel、setImmediate(node特有)
* 微任务：promise、process.nextTick(node特有)
先执行微任务，所有微任务执行完了再执行下一个宏任务，当前一个宏任务执行完了又会去看有没有微任务，有的话要先执行完所有微任务又才执行下一个宏任务

### 三次握手四次挥手
TCP 是面向连接的可靠的传输协议，三次握手是为了建立可靠的数据传输通道，四次挥手则是为了保证等数据完成的被接收完再关闭连接。

* 三次握手：↗↖↙，第一次发送 SYN 报文，指明初始化序列号（缩写为 ISN：Inital Sequence Number），这东西动态的每个连接都不一样，防止连接错误和攻击。第三次握手可以携带数据，因为客服端已经知道服务端收发能力没问题了。
* 四次挥手：↗↙↙↗，四次挥手可以服务端也可以客户端发起，发送第四次挥手释放连接时，需要等待 2MSL（Maximum Segment Lifetime，可译为“最长报文段寿命”），为了保证发送的最后一个ACK报文段能够成功到达对端。

## vue


## react


## TypeScript


## webpack


## vite


## 手写题目
### 手写 promise
如果理解了发布订阅者模式，手写这个 promise 就很简单了，原理都是一样的：先把事件收集到一个队列里，等某个条件触发了再把所有事件拿出来执行。几个比较难的点：

* 状态还未改变时通过发布订阅模式去收集事件
* 实例化的时候通过调用构造函数里传出来的方法去修改类里面的状态，这个叫 Revealing Constructor Pattern 暴露构造器模式
* 实例上的 then 方法是可以多次调用的，所以内部收集事件时要用数组去存，注意这里成功和失败的事件其实是需要用两个单独的队列去存的
* 链式调用 then 方法的关键是：内部的 then 方法里也要返回一个 CustomPromise，如果状态变了直接调用 resolve 出去结果，如果状态未变要收集事件时，这时要 push 一个函数进去

下面的示例代码为了理解简单，并未加 reject 进去，理解了 resolve 其实就很容易自己加进去 reject 了，还有一些 try catch 和参数判断并未加进去，可以自己根据理解完善，其他的 catch、finally、all...其实都是在 then 基础上改下就行了，最核心的就是这个 then 方法，示例里 then 的第二个参数 reject 其实也未处理，留给你自己加了。

```javascript
class CustomPromise {
  constructor(executor) {
    this.status = 'pending' // 状态：pending、fulfilled、rejected
    this.value = null // 外部修改状态调用 resolve、reject 时传进来的参数
    this.events = [] // 实例调用 then 方法收集的事件队列，then 可以多次调用，所以要用数组来存，用一个单独的变量来存就只会调用最后的一次
    executor(this.resolve)
  }

  resolve = (value) => {
    if (this.status === 'pending') {
      this.status = 'fulfilled'
      this.value = value
      this.events.forEach(event => {
        event(value)
      })
    }
  }

  then = (callback) => {
    return new CustomPromise((resolve) => {
      // 状态还没变的时候就要先把事件收集起来，如果变了就直接执行。
      // 实例化对象时肯定会先运行类的构造函数，如果里面都是同步代码，调用实例的 then 方法时状态已经改变了，所以直接运行就行了，如果是异步代码状态还未改变那就要先把事件收集起来
      if (this.status === 'pending') {
        this.events.push(() => {
          resolve(callback(this.value))
        })
      }
      if (this.status === 'fulfilled') {
        resolve(callback(this.value))
      }
    })
  }
}


const son = new CustomPromise((resolve) => {
  setTimeout(() => {
    const msg = '爸爸，我5秒之后运行成功了哟'
    console.log(msg)
    resolve(msg)
  }, 5000)
})

son.then(res => {
  const msg = '儿子，收到了你的来信："' + res + '"'
  console.log(msg)
  return 'then 的链式调用'
}).then(res => {
  console.log(res)
})

son.then(res => {
  const msg = '第2次调用 then："' + res + '"'
  console.log(msg)
})
```

注意 then、catch、finally 是实例上的方法，还有 resolve、reject、race、all、anyallSettled 这些定义在原型上的静态方法，可以直接 Promise.resolve 这样去使用(注意这个 resolve 不是我们上面去改变状态构造函数里的那个 resolve)，要用 static 定义在类里。

### 发布订阅设计模式
24种基本的设计模式中并没有发布订阅模式，有的说是观察者模式的一个别称，现在更倾向于把它列为一种单独的设计模式，它和观察者模式类似，在发布者和订阅者中间多了一个中心，称为调度中心、消息中心、事件通道。

```javascript
class EventCenter {
  constructor() {
    this.events = {}
  }
  subscribe(eventName, callback) {
    if (!this.events[eventName]) this.events[eventName] = []
    this.events[eventName].push(callback)
  }

  publish(eventName, ...args) {
    const events = this.events[eventName] || []
    if (events.length) {
      events.map(m => m(...args))
    }
  }
}

const instance = new EventCenter()
instance.subscribe('eat', (value) => {
  console.log('小明今天吃：' + value)
})
instance.subscribe('eat', (value) => {
  console.log('小翠今天吃：' + value)
})

instance.publish('eat', '沙糖桔')
```

### 手写 Promise.all
```js
function promiseAll(promises) {
  if (!Array.isArray(promises)) return
  const len = promises.length
  let result = []
  let count = 0

  return new Promise((resolve, reject) => {
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(res => {
        count++
        result.push(res)
        if (count === len) {
          resolve(result)
        }
      }, err => {
        return reject(err)
      })
    }
  })
}
```

### 手写 Async/Await
主要原理是 Generator + Promise：
```js
function sleep(delay) {
  return new Promise(resolve => setTimeout(resolve, delay))
}

function* generatorFn() {
  yield sleep(1000)
  console.log(1)
  yield sleep(2000)
  console.log(2)
  yield sleep(3000)
  console.log(3)
  yield sleep(4000)
  console.log(4)
}

function customeAsync(fn) {
  const gen = fn()
  return new Promise(resolve => {
    function go(val) {
      const { value, done } = gen.next(val)
      if (done) {
        return resolve(value)
      } else {
        return Promise.resolve(value).then(v => go(v))
      }
    }

    go()
  })
}

customeAsync(generatorFn)
  .then(() => {
    console.log('end')
  })
```

### 手写 Generator 生成函数
这是简单的为了模拟 generator 的效果，传进去一个返回值数组，利用闭包来保存每一步的 step 变量：

```js
function generator(list) {
  let step = 0
  return function () {
    return {
      next: function() {
        const value = list[step]
        step++

        return {
          value,
          done: step > list.length
        }
      }
    }
  }
}

const one = generator([1, 2, 3])()
const two = generator([7, 8, 9])()

console.log(one.next())
console.log(two.next())
console.log(one.next())
console.log(two.next())
console.log(one.next())
console.log(two.next())
console.log(one.next())
console.log(two.next())
// { value: 1, done: false }
// { value: 7, done: false }
// { value: 2, done: false }
// { value: 8, done: false }
// { value: 3, done: false }
// { value: 9, done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }
```

### 手写异步请求竞态取最新数据
竞态问题一般出现在前端页面搜索、分页、tab选项卡这些地方，由于网络等原因，先请求的接口有可能后返回，造成界面数据渲染错误。

主要是用到闭包去缓存一个最新的请求 id 来实现的，在闭包中函数执行完后变量并不会立即被销毁，具体可以看下面的小 demo：

```js
function add() {
  let num = 0
  return function() {
    num++
    return num
  }
}

const fn = add()
fn()
fn()
const value = fn()
console.log(value) // 3
```

每次拿到异步数据后去对比缓存的最新 id 是不是当次请求的 id，不是的话就不 resolve 了，注意传参和 this 指向问题：
```js
function sleep(delay) {
  return new Promise(resolve => setTimeout(resolve, delay))
}

function useRequest() {
  let latestId = 0
  return function (fn, ...args) {
    const requestId = latestId + 1
    // 同步外面作用域里的最新id
    latestId = requestId
    const result = fn.call(this, ...args)
    return new Promise((resolve, reject) => {
      // fn 可能返回的不是一个 promise，为了用 then 所以这里要 Promise.resolve 包一下
      // 这里用 try catch 也可以，不过上面函数调用那就要加上 await
      Promise.resolve(result).then(res => {
        console.log('当前请求id:' + requestId)
        if (requestId === latestId) {
          resolve(res)
        }
      }, err => {
        if (requestId === latestId) {
          reject(err)
        }
      })
    })
  }
}

const req = useRequest()
req(sleep, 5000).then(e => {
  console.log(5000)
})
req(sleep, 1000).then(e => {
  console.log(1000)
})
```

### 手写 promise 异步请求并发控制
传异步或同步任务，通过限制控制每次处理的并发数
```js
function sleep(delay) {
  return new Promise(resolve => setTimeout(resolve, delay))
}

class ConcurrencyRequest {
  constructor(tasks, limit, callback) {
    this.tasks = tasks.slice()
    this.queen = new Set()
    this.limit = limit
    this.callback = callback
  }

  start() {
    const len = this.tasks.length
    if (!len) return

    while(this.queen.size < this.limit) {
      const task = this.tasks.shift()
      this.queen.add(task)
      const result = task()
      // 此种写法对于不是返回的 promise 时会报错，也可以自己判断下是不是 promise，非异步可以直接走下面 finally 里的逻辑
      // result.finally(() => {
      //   this.queen.delete(task)
      //   if (this.queen.size === 0) {
      //     this.callback()
      //   } else {
      //     this.start()
      //   }
      // })
      Promise.resolve(result).finally(() => {
        this.queen.delete(task)
        if (this.queen.size === 0) {
          this.callback()
        } else {
          this.start()
        }
      })
    }
  }

  add(task) {
    this.tasks.push(task)
    this.start()
  }
}

// 测试
const arr = [
  () => sleep(2000),
  () => sleep(5000),
  () => sleep(7000),
  () => {console.log('我是个同步任务')},
  () => sleep(5000),
]
const cr = new ConcurrencyRequest(arr, 2, () => {
  console.log('执行完了')
})
cr.start()
cr.add(() => console.log('我是第2个同步任务'))
```

### 手写 apply、call、bind
* apply
关键点：用 symbol 避免键名冲突，一般方法内部的 this 丢失，是因为我们将对象的某个方法赋值给了一个新的变量，而函数里规定谁调用 this 就指向谁，所以这里手写的关键就是要理解既然 this 是这么丢失的，那再反其道行之，再把方法临时添加回对象里调用这不就又找回 this 了，等把函数执行完了我再删掉。
```javascript
Function.prototype.customapply = function(thisArg, args) {
  // 为null或undefine时，指向全局对象
  if (thisArg === undefined || thisArg === null) thisArg = window

  // 用 Symbol 避免和原对象键名冲突
  const temporaryFn = Symbol('temporaryFn')

  // 把当前函数赋值给要绑定的对象的一个属性，调用时函数内的 this 自然就能指向那个对象了
  thisArg[temporaryFn] = this
  const result = thisArg[temporaryFn](...args) // 这里的 ...args 是展开伪数组参数传进去，...是 ES6 里的展开运算符

  // 删掉添加的临时属性
  delete thisArg[temporaryFn]

  // 返回函数执行结果
  return result
```

* call
call 只是 apply 的语法糖，apply 接收的是一个数组（或类数组对象）参数，所以函数执行的时候要自己用 ... 将数组展开传递给方法执行。而 call 是接收的一个一个的参数，所以接收参数那要用到 ES6 里的 rest 剩余参数去接收。
```javascript
Function.prototype.customcall = function(thisArg, ...args) {
  // 为null或undefine时，指向全局对象
  if (thisArg === undefined || thisArg === null) thisArg = window

  // 用 Symbol 避免和原对象键名冲突
  const temporaryFn = Symbol('temporaryFn')

  // 把当前函数赋值给要绑定的对象的一个属性，调用时函数内的 this 自然就能指向那个对象了
  thisArg[temporaryFn] = this
  const result = thisArg[temporaryFn](...args) // 这里的 ...args 是展开函数的剩余参数传进去，注意和上面 apply 的区分

  // 删掉添加的临时属性
  delete thisArg[temporaryFn]

  // 返回函数执行结果
  return result
```

* bind
注意和 apply、call 的区别，bind 不会立即调用，但是可以多次接收参数，所以调用的时候要拼进去两次参数
```javascript
Function.prototype.custombind = function(thisArg, ...prexArgs) {
  const self = this
  return function(...args) {
    self.call(thisArg, ...prexArgs, ...args)
  }
}
```

### 手写节流防抖

```javascript
// 防抖：等 xx 秒后才触发，如果没到时间又调用了就重新计算 xx 秒
function debounce(func, delay) {
  let timer
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      if (typeof func === 'function') func.call(this, ...args)
    }, delay)
  }
}

// 节流：先触发一次，等 xx 秒后才能再次触发
function throttle(func, delay) {
  let timer
  return function(...args) {
    if (!timer) {
      if (typeof func === 'function') func.call(this, ...args)
    }

    timer = setTimeout(() => {
      timer = null
    }, delay)
  }
}
```

### 手写模板字符串
注意用正则贪婪模式去匹配变量，否则多个的时候会把中间的全部当成变量取出来，问号跟在表示次数的匹配符后面就表示非贪婪模式：*? +? ?? {n}? {n,}? {n,m}?，还有就是可以用 eval 函数去取到字符串变量的值：

直接 replace 版本
```javascript
const name = '周小黑'
const age = 18
const txt = '请大家欢迎新同学：${age}岁的${name}'
const newTxt = txt.replace(/\$\{(\d)(.+?)\}/g, (match, p1) => {
  // match 是每次匹配到的完整的：${age}，p1、p2...是内部括号内匹配到的字符串，相当于 $1、$2... age
  // 这里直接用 eval 函数将字符串变量执行下，就能取到变量里存的值，否则直接返回还是个变量名的字符串
  // return eval(p1)
  // return (new Function('return ' + p1))()
  return setTimeout(p1)
})
console.log(newTxt)
```

exec 和递归函数版本
```javascript
const name = '周小黑'
const age = 18
const txt = '请大家欢迎新同学：${age}岁的${name}'

function templateString(str) {
  const reg = /\$\{(.+?)\}/
  if (reg.exec(str)) {
    const p1 = reg.exec(str)[1]
    const value = eval(p1)
    str = str.replace(reg, value)

    return templateString(str)
  } else {
    return str
  }
}

const newTxt = templateString(txt)
```

### 手写休眠函数
```javascript
// 一直循环占用线程版本
function sleep(delay) {
  const startTime = new Date().getTime()
  while(new Date().getTime() - startTime < delay) {
    continue
  }
}
// promise 版本
function sleep2(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}
```

### 手写 new 运算符
new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例，在内存中创建一个空对象、链接到原型、绑定 this 执行构造函数、返回对象
```javascript
function customNew(constructorFn, ...args) {
  // 创建一个空对象
  let obj = {}

  // 为对象添加属性 __proto__，将该属性链接至构造函数的原型对象
  obj.__proto__ = constructorFn.prototype

  // 将对象作为 this 的上下文，执行构造函数
  const res = constructorFn.call(obj, ...args)

  // 如果该函数没有返回对象，则返回 this
  return (res instanceof Object) ? res : obj
}

const boy = customNew(function(name, age) {
  this.name = name
  this.age = age
}, '周小黑', 18)
console.log(boy)
```

### 手写深拷贝

浅拷贝对象可以直接用 Object.assign、展开运算符...，数组可以用 slice()、展开运算符...，粗暴深拷贝可以用 JSON.parse(JSON.stringify())，项目中推荐用 lodash。自己手写其实主要就是去递归遍历，解决循环引用可以内部用 WeakMap 缓存下，每次判断有这个值就直接 return
```javascript
function deepClone(obj, map = new WeakMap()) {
  if (obj === null || obj === undefined || typeof obj !== 'object') return obj

  // 函数
  if (obj instanceof Function) return obj

  // 日期
  if (obj instanceof Date) return new Date(obj.getTime())

  // 正则
  if (obj instanceof RegExp) return new RegExp(obj)

  if (map.has(obj)) return map.get(obj)
  let cloneObj = new obj.constructor() // 直接调用构造函数初始化对象，不用自己额外判断 array/object

  // 缓存起来，解决循环引用
  map.set(obj, cloneObj)

  // for in 默认只会遍历我们自定义的属性，但如果是我们自己添加到原型上的属性是会遍历出来的
  for(const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key])
    }
  }

  return cloneObj
}

let boy = {
  name: '周小黑',
  age: 18,
  createDate: new Date(),
  hobby: ['吃肉', '睡觉', '跑步']
}

let boyTwo = deepClone(boy)
boyTwo.hobby = ['rapper', 'dance', 'coding']
console.log(boy)
console.log(boyTwo)
```

### 手写JSON.parse和JSON.stringify
JSON.parse 比较简单，可以直接通过 eval 函数就能实现，不过注意需要在 json 字符串前后拼上括号，否则会当成代码块报错解析导致报错：
```js
function parse(json) {
  const txt = '(' + json + ')'
  return eval(txt)
}
```

除此之外，还可以用状态机去实现解析

### 手写 instanceof
判断数据类型的3中方法：
* typeof：只能判断基本数据类型
* Object.prototype.toString.call()：不能判断自定义构造函数创建的对象
* instanceof：不是用于检测数据类型的，而是用来检测当前实例是否属于这个类，无法检测基本数据类型，原理就是通过原型链一直找，判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。如果手动修改了原型会导致检测错误，如将某个自定义对象 prototype 连接到 Array，那最后检测出来的就是数组。
```js
function customInstanceof(obj, constructor) {
  const proto = Object.getPrototypeOf(obj)
  const prototype = constructor.prototype
  while(true) {
    if (!proto) return false
    if (proto === prototype) {
      return true
    } else {
      proto = Object.getPrototypeOf(proto)
    }
  }
}
```

### 手写数组扁平化，支持设置展开多少级别

初级版，直接利用数组的 flat 方法
```js
function arrayFlat(arr, level = 1) {
  return Array.isArray(arr) ? arr.flat(level) : arr
}
```

利用 reduce 方法和递归思想，如果层级大于要求的直接返回原始值
```js
var arr = [1,2,3,[1,2,3,4,[2,3,4]]]

function arrayFlat(arr, level = 1) {
  if (level > 0) {
    return arr.reduce((pre, value) => {
      const current = Array.isArray(value) ? arrayFlat(value, level - 1) : value
      return pre.concat(current)
    }, [])
  } else {
    return arr.slice()
  }
}
```

### 手写 webpack
### 手写 react
### 手写 vue
### 手写 vite
### 手写 vue-router、react-router
### 手写 vuex、redux

## 开放题

### 工作中遇到的难题，怎么解决的过程？
工作中大部分的需求还是都能轻松应对，也有极少比较难处理的需求，如果是技术上面比较难实现的，一方面自己会寻找和思考有没有其他可行的替代方案，然后主动找产品、需求方确认是否可以接受，另一方面可能也会求助公司更高级别的开发、架构师。在工作中其实是很希望遇到这类比较难的需求的，比较有挑战性，一般遇到这类需求，事后也会继续寻找有没有其他好的方案，写一篇相关的总结文档，下次再遇到了也能轻松应对。对于技术，我可能不会像以前那么纠结于代码的实现：怎么写优雅、怎么写更好？会综合考虑开发的时间和具体获得的收益，能在有限的时间内找到一个性价比最高的实现方式，按时上线需求为公司创造出实际价值，我觉得这就是一个好的开发。

### 线上出现bug，怎么解决？
界面兼容性：一般收到反馈后会立即询问具体的笔记本或者手机型号，第一时间去复现解决
逻辑性的错误：这个一般出现在业务逻辑上，可能是前后端对业务的理解有误，这个会第一时间去找到具体的需求方、产品核对业务逻辑，然后找到具体需求的后端、测试一块复现协商怎么快速解决
前端代码性错误：前端我们有加线上监控，出现问题会第一时间收到报错提醒邮件，这个出现问题也一般集中在上线后的一段时间，所以我们之前也是要求每次上完线要及时关注监控平台，这类主要是一些前端代码报错或者兼容性问题，因为有加 sourcemap，所以定位和解决也会很快。
看到了出现的问题，如果自己熟悉的第一时间会去排查修复，不熟悉的也会第一时间@相关的开发去看一下，然后有影响到客户使用流程的，也会先让公司客服告知客户其他端可以正常使用此功能，修复后也会第一时间通知相关同事，然后如果是比较严重的线上事故，我们每周也是会要求开会复盘。