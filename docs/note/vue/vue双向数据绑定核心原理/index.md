# vue双向数据绑定核心原理

vue 很大的一个优势就是双向数据绑定，而在 react 或小程序中是需要我们自己手动 setState、setData 去修改视图数据。

vue2 中利用的 Object.defineProperty 去劫持对象属性的 getter 和 setter，所以 data 函数里需要返回一个对象，如果没有在 data 里定义的属性是不会双向绑定的，因为没有被劫持。

双向数据绑定还用到了设计模式中的发布/订阅模式，当触发 getter 的时候去做依赖收集，触发 setter 时去通知执行收集的对应依赖回调。

### Object.defineProperty

使用语法：Object.defineProperty(obj, prop, descriptor)，具体使用参考下方 demo。

注意里面单独用到了一个 value 变量来存 age 的值，如果不这样直接在 get 函数里写 person.age 来取值会又触发 get 死循环了。而 set 里直接通过修改 value 的值就能改变 person 的 age 属性值，是因为我们用到了一个外部的 value 变量，set 里直接修改 value 的值，当要去值时 get 里其实就是返回的这个 value。

```js
let person = {
    name: '周小黑',
    age: 18
}

let value = person.age

Object.defineProperty(person, 'age', {
    get() {
        console.log('获取age:' + value)
        return value
    },
    set(e) {
        console.log('修改age:' + e)
        value = e
    }
})

console.log(person.age) // 18
person.age = 20
console.log(person.age) // 20
```

### 依赖收集和执行
当数据变动时要做的所有操作，我们需要提前收集起来，当真的发生变动时，才有东西拿出来执行。

双向数据绑定简单点理解也就是当一个属性值变动时，我们需要程序自动去做一些依赖当前值的操作，具体参考下方 demo：

```js
let person = {
    name: '周小黑',
    age: 18
}

let value = person.age

Object.defineProperty(person, 'age', {
    get() {
        console.log('获取age:' + value)
        return value
    },
    set(e) {
        console.log('修改age:' + e)
        value = e
        action()
    }
})

function action() {
    console.log('我是数据变动要执行的操作')
    const val = person.age *  1000
    person.money = val
    console.log(person)
}

person.age = 20
// 修改age:20
// 我是数据变动要执行的操作
// 获取age:20
// { name: '周小黑', age: [Getter/Setter], money: 20000 }
```
为了简单模拟，当 person 的 age 发生变动时，我们往 person 里新增一个 money 属性。

这里的代码执行逻辑：我们提前定义了一个要执行操作的 action 函数，当我们修改 age 属性的时候会触发 set，触发 set 时就说明数据发生了变动，直接在 set 里执行一下 action 函数就行了。

不过上面的代码还有一个明显的问题，就是 action 函数并不是自动去收集的，总不能每一个属性我们都自已额外定义一个 action1、action2...操作函数吧。

### 自动依赖收集

为了实现自动收集依赖我们在上面代码的基础上改造一下，通过封装一个 onChange 公共函数来专门收集依赖，它的参数就是一个要执行操作的 function：

```js
let person = {
    name: '周小黑',
    age: 18
}

let value = person.age

Object.defineProperty(person, 'age', {
    get() {
        console.log('获取age:' + value)
        return value
    },
    set(e) {
        console.log('修改age:' + e)
        value = e
        action()
    }
})

let action = null
const onChange = (callback) => {
    action = callback
    callback() // 这里可以默认先执行一次初始化
}
onChange(() => {
    console.log('我是数据变动要执行的操作')
    const val = person.age *  1000
    person.money = val
    console.log(person)
})

person.age = 20
// 我是数据变动要执行的操作
// 获取age:18
// { name: '周小黑', age: [Getter/Setter], money: 18000 }
// 修改age:20
// 我是数据变动要执行的操作
// 获取age:20
// { name: '周小黑', age: [Getter/Setter], money: 20000 }
```

当调用依赖收集函数 onChange 时我们先将依赖收集到外部的 action 里，当修改 age 触发 set 时，我们直接执行下 action 就行了，这样就可以实现多个依赖回调的收集。

不过上面的代码还是有问题：需要自己手动调用 onChange 函数，只会执行最后一次调用 onChange 收集的回调，而且不管是不是当前的依赖属性发生变化都会执行。下面继续改造：

```js
let person = {
    name: '周小黑',
    age: 18
}

let value = person.age

Object.defineProperty(person, 'age', {
    get() {
        onCollect('age')
        console.log('获取age:' + value)
        return value
    },
    set(e) {
        console.log('修改age:' + e)
        value = e
        onExecute('age')
    }
})

let action = null
const onChange = (callback) => {
    action = callback
    callback() // 这里可以默认先执行一次初始化
}

// 收集所有依赖的盒子
const eventBox = {}
// 收集依赖
function onCollect(key) {
    let arr = eventBox[key] || []
    arr.push(action)
    eventBox[key] = arr
}
// 执行
function onExecute(key) {
    let arr = eventBox[key] || []
    arr.map(fn => fn())
}

onChange(() => {
    console.log('我是数据变动要执行的操作')
    const val = person.age *  1000
    person.money = val
    console.log(person)
})

onChange(() => {
    console.log('我是数据变动要执行的操作2')
    const val = person.age *  2000
    person.money = val
    console.log(person)
})

onChange(() => {
    console.log('我是数据变动要执行的操作，但是我没有任何依赖')
})

person.age = 20
// 我是数据变动要执行的操作
// 获取age:18
// { name: '周小黑', age: [Getter/Setter], money: 18000 }
// 我是数据变动要执行的操作2
// 获取age:18
// { name: '周小黑', age: [Getter/Setter], money: 36000 }
// 我是数据变动要执行的操作，但是我没有任何依赖
// 修改age:20
// 我是数据变动要执行的操作
// 获取age:20
// { name: '周小黑', age: [Getter/Setter], money: 20000 }
// 我是数据变动要执行的操作2
// 获取age:20
// { name: '周小黑', age: [Getter/Setter], money: 40000 }
```

定义了一个 eventBox 的对象来存所有属性的依赖回调，当触发 get 时调用 onCollect 收集依赖到盒子里，当修改数据触发 set 时，再从 eventBox 盒子里拿出对应属性的依赖回调来执行。

上面的代码其实并不难，可能最难理解的是在 get 里到底是怎么完成自动依赖收集的，当我们调用 onChange 的时候，此时外部的 action 里存的就是当前要收集的依赖回调（记住这里很关键），如果回调内部有触发 get（比如上面代码里通过 person.age 获取年龄），那就会走到内部的 get 函数里，我们只用在 get 里调用一下 onCollect 把 action 收集到 eventBox 盒子对应的 key 值里就行了，如果还是不能理解可以打断点运行一下代码就明白了。

其实到这里你也就基本能明白 vue 的双向数据绑定实现原理和步骤了：getter 里自动收集依赖到一个盒子里，setter 里再拿出收集的对应依赖遍历执行，核心不就是发布/订阅模式。

### vue3 里的 proxy
vue2 中是用的 Object.defineProperty 来劫持对象的 getter、setter，vue3 中换成了 proxy，其实核心原理还是上面那些，只不过收集和执行依赖换到 proxy 里去劫持 getter、setter 了而已。

上面的 demo 换成 proxy 来实现：
```js
let person = {
    name: '周小黑',
    age: 18
}

let value = person.age

const proxyPerson = new Proxy(person, {
    get(target, key) {
        onCollect(key)
        console.log('获取' + key)
        return target[key]
    },
    set(target, key, newValue) {
        target[key] = newValue
        console.log('修改' + key + ':' + newValue)
        onExecute(key)
    }
})

let action = null
const onChange = (callback) => {
    action = callback
    callback() // 这里可以默认先执行一次初始化
}

// 收集所有依赖的盒子
const eventBox = {}
// 收集依赖
function onCollect(key) {
    let arr = eventBox[key] || []
    arr.push(action)
    eventBox[key] = arr
}
// 执行
function onExecute(key) {
    let arr = eventBox[key] || []
    arr.map(fn => fn())
}

onChange(() => {
    console.log('我是数据变动要执行的操作')
    const val = proxyPerson.age *  1000
    proxyPerson.money = val
    console.log(proxyPerson)
})

onChange(() => {
    console.log('我是数据变动要执行的操作2')
    const val = proxyPerson.age *  2000
    proxyPerson.money = val
    console.log(proxyPerson)
})

onChange(() => {
    console.log('我是数据变动要执行的操作，但是我没有任何依赖')
})

proxyPerson.age = 20
```