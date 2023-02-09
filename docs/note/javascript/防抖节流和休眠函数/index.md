# 防抖节流和休眠函数

## 防抖
防抖原理是在一定时间内，只有最后一次操作，再过延迟的时间后执行，一般用于防止用户多次重复点击按钮，只会触发最后一次

### 防抖正常版
下面这种是比较常见的版本，利用了 js 的闭包原理，注意 vue 项目中使用时，需要写成 myFunc: debounce(function(){}, 1000)，vue 的 methods 里是一个对象，所有方法都是这个对象的属性。

需要注意的是 debounce 里传入的方法不能是箭头函数，因为内部有绑定 this。

```js
/**
 * 防抖正常版
 *
 * @param {Function} func 要执行的函数
 * @param {Number} delay 延时时间
 * @return null
 */
function debounce(func, delay = 500) {
  let timer
  return function() {
    // 注意区别 ...args剩余参数和arguments对象
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      typeof func === 'function' && func.apply(this, args) // 绑定 this，指向vue
    }, delay)
  }
}
```

使用示例：
```vue
<template>
  <span @click="handleSubmit">点我</span>
</template>
<script>
  // 导入防抖正常版
  import debounce from './debounce'
  export default {
    methods: {
      handleSubmit: debounce(function() {
        console.log('点了我')
      }, 2000)
    }
  }
</script>
```

### 防抖自由版
这个版本的防抖，利用 ES Module 模块作用域的原理，将定时器变量定义在模块内，不需要处理 this 问题，而且可以在 vue 的方法内部使用。

如果觉得上面的正常版写法比较别扭，或者只是方法内部的一部分逻辑需要防抖，就可以使用这个版本像调用普通函数一样使用。

```js
let timer

/**
 * 防抖自由版
 *
 * @param {Function} func 要执行的函数
 * @param {Number} delay 延时时间
 * @return null
 */
function debounce(func, delay = 500) {
  const args = arguments
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    typeof func === 'function' && func()
  }, delay)
}

export default debounce
```

使用示例：
```vue
<template>
  <span @click="handleSubmit">点我</span>
</template>
<script>
  // 导入防抖自由版
  import debounce from './debounce'
  export default {
    methods: {
      handleSubmit() {
        console.log(1)
        debounce(() => {
          console.log(2)
        }, 3000)
        console.log(3)
      }
    }
  }
</script>
```

## 节流
节流原理是在一定时间内，只能触发一次，一般只触发第一次，当然也可以是最后一次，这里示例只写了最简单的主要逻辑，方便理解，还可以自己额外封装是否默认触发一次。

下面两个版本的原理和使用示例和防抖的一样，可直接参考上面的。

### 节流正常版
```js
/**
 * 节流正常版
 *
 * @param {Function} func 要执行的函数
 * @param {Number} delay 延时时间
 * @return null
 */
function throttle(func, delay = 500) {
  let timer
  return function() {
    const args = arguments
    if (!timer) {
      typeof func === 'function' && func(args)
      timer = setTimeout(() => {
        timer = null
      }, delay)
    }
  }
}
export default throttle
```

### 节流自由版
```js
let timer
/**
 * 节流自由版
 *
 * @param {Function} func 要执行的函数
 * @param {Number} delay 延时时间
 * @return null
 */
function throttle(func, delay = 500) {
  if (!timer) {
    typeof func === 'function' && func()
    timer = setTimeout(() => {
      timer = null
    }, delay)
  }
}
export default throttle
```

## 休眠函数

也叫延时函数，类似 Java、C++、Python 里的 sleep 休眠函数，在项目中和 async/await 配合使用可直接休眠程序，休眠的时间后才会执行后面的逻辑。

除了用来时间红绿灯，或者替代 setTimeout 嵌套问题，暂时没想到其他使用场景。

```js
// sleep 休眠函数
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
```
