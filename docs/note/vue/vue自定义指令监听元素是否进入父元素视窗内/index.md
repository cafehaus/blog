
# vue自定义指令监听元素是否进入父元素视窗内

### 需求背景
一个每行3列的列表布局，列表中的每一项有一个已读/未读状态，只要展现在了用户的视窗内就算已读状态了。

想到的方案：
* 直接监听滚动高度，根据滚动距离来计算是否展现在页面内
* 借助第三方插件，找到一个 vue-check-view，不过只能监听整个 window 视窗的页面滚动，如果想监听某个元素的内部滚动是否可见没法实现

刚开始直接用的 vue-check-view，但是因为项目是用 electron 开发的桌面应用，布局上需要在列表父盒子上实现滚动。然后想到h5里新出的监听元素是否进入视口的 IntersectionObserver，一看好像可以满足，在借助 vue 的自定义指令来封装成一个自定义指令使用。

> 除了核心功能默认内置的指令 (v-model 和 v-show)，Vue 也允许注册自定义指令。注意，在 Vue2.0 中，代码复用和抽象的主要形式是组件。然而，有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。

一般涉及 dom 的操作，我们都可以通过自定义指令来实现，比如点击文本直接复制到粘贴板、按钮权限的判断（无权限时隐藏或禁用）...这一点一般通过指令钩子函数的第一个参数 el 就能实现。

但是，有时我们除了对 dom 的操作外，还需要实现对 vue 页面 data 数据的修改、methods 里方法的调用，或者一些额外的参数需要传到指令里来进行判断的...这时我们就可以借助第二个参数 binding 来实现，binding.value 就是我们写在指令 = 后面的东西，可以传递函数、对象、数值、字符串、布尔任意类型（注意和 binding.expression 的区别）。

### 监听元素是否进入某个视口自定义指令

监听元素是否进入某个视口自定义指令，可以通过 root 参数传入父视口的选择器，不传就默认是相对于浏览器window窗口。适用于元素懒加载、埋点上报、查看了修改状态。

viewport.js
```js
export default {
  inserted(el, binding, vnode) {
    const value = binding.value
    const isObject = Object.prototype.toString.call(value) === '[object Object]'
    const func = isObject ? value.callback : value
    const isFunc = func && typeof func === 'function'

    const selector = isObject ? value.root : null
    const threshold = isObject ? value.threshold : 1
    const options = {
      root: selector ? document.querySelector(selector) : null, // 指定根(root)元素，未指定或 null 则默认为浏览器视窗
      threshold: threshold || 1, // 监听目标与边界盒交叉区域的比例值 0-1
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 执行回调方法
          isFunc && func()

          // 停止监听
          observer.unobserve(el)
        }
      })
    }, options)

    // 开始监听元素
    observer.observe(el)
  },
}
```

#### 使用方式

 * 使用方式一：v-viewport="handleViewport" 直接绑定一个回调方法
 * 使用方式二：v-viewport="{callback: handleViewport, root: '#scroll', threshold: 0.8}" 绑定一个对象自定义各项配置

```vue
<template>
  <div class="list">
    <div
      v-for="(item, index) in 100"
      :key="index"
      class="item"
      v-viewport="handleViewport(index)"
    >
      我是第 {{ index }} 个
    </div>
  </div>
</template>
<script>
import viewport from 'xx/viewport.js'
export default {
  directives: {
    viewport
  },
  methods: {
    handleViewport(i) {
      console.log(`第${i}个进入视窗内`)
    }
  }
}
</script>
<style>
.list {
  height: 400px;
  overflow-y: auto;
}

.item {
  height: 100px;
  background: green;
  margin-bottom: 10px;
}
</style>
```

 * [vue 自定义指令](https://v2.cn.vuejs.org/v2/guide/custom-directive.html)
 * [MDN IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/IntersectionObserver)