# 手写promise

看了全网手写 promise 的，大部分对于新手还是比较难理解的，其中几个比较难的点：

* 状态还未改变时通过发布订阅模式去收集事件
* 实例化的时候通过调用构造函数里传出来的方法去修改类里面的状态，这个叫 Revealing Constructor Pattern 暴露构造器模式
* 实例上的 then 方法是可以多次调用的，所以内部收集事件时要用数组去存，注意这里成功和失败的事件其实是需要用两个单独的队列去存的
* 链式调用 then 方法的关键是：内部的 then 方法里也要返回一个 CustomPromise，如果状态变了直接调用 resolve 出去结果，如果状态未变要收集事件时，这时要 push 一个函数进去

### 观察者/发布订阅模式
如果理解了发布订阅模式，手写这个 promise 就很简单了，原理都是一样的：先把事件收集到一个队列里，等某个条件触发了再把所有事件拿出来执行。24种基本的设计模式中并没有发布订阅模式，有的说是观察者模式的一个别称，现在更倾向于把它列为一种单独的设计模式，它和观察者模式类似，在发布者和订阅者中间多了一个中心，称为调度中心、消息中心、事件通道。

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

### Revealing Constructor Pattern 暴露构造器模式
promise 里修改状态就用到了 Revealing Constructor Pattern，其实就是通过构造函数将类内部的方法传出去，实例化对象的时候就可以调用修改内部的状态，可以直接看下面的小 demo：

```javascript
class Person {
  constructor(executor) {
    this.gender = '男'
    // 直接执行构造器传进来的方法，再把内部修改性别的方法作为参数传出去给构造实例时调用
    executor(this.setGender)
  }

  // 注意这里用箭头函数，否则外部调用时 this 丢失会报错，用普通函数要自己 bind 一下 this
  setGender = (e) => {
    this.gender = e
    console.log('此人的性别是：' + this.gender)
  }
}

const instance = new Person((func) => {
  console.log('我要开始造人了')
  func('太监')
})
```

### promise 核心功能版
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
      this.events.forEach(event => {
        event(value)
      })
    }
  }

  then = (callback) => {
    // 状态还没变的时候就要先把事件收集起来，如果变了就直接执行。
    // 实例化对象时肯定会先运行类的构造函数，如果里面都是同步代码，调用实例的 then 方法时状态已经改变了，所以直接运行就行了，如果是异步代码状态还未改变那就要先把事件收集起来
    if (this.status === 'pending') {
      this.events.push(callback)
    }
    if (this.status === 'fulfilled') {
      callback(this.value)
    }
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
  console.log('儿子，收到了你的来信："' + res + '"')
})
```

### promise 支持 then 链式调用版
支持链式调用不能直接返回 this，返回 this 的话每次调用的都是同一个了，要返回一个新的 promise 实例，注意收集事件时，这时要 push 一个函数进去，不能像上面的核心版本直接 push 进去回调函数：

```javascript
class CustomPromise {
  constructor(executor) {
    this.status = 'pending'
    this.value = null
    this.events = []
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