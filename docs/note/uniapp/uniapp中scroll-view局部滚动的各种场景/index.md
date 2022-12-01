# uniapp 中 scroll-view 局部滚动的各种场景

### uni 文档中 scroll-view 说明
可滚动视图区域，用于区域滚动。使用竖向滚动时，需要给 scroll-view 一个固定高度，通过 css 设置 height；使用横向滚动时，需要给 scroll-view 添加 white-space: nowrap; 样式。

### 微信小程序文档中 scroll-view 说明
可滚动视图区域。使用竖向滚动时，需要给scroll-view一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。

### 场景一：布局中已知高度局部滚动
一般页面布局中某个模块需要局部滚动，以横向滚动更多，纵向滚动其实也类似。这个也是 scroll-view 最简单的用法，纵向滚动直接设置一个已知的固定高度 height 就行了，没啥难度。

### 场景二：整个布局上、中、下3个模块布局，中间局部滚动
常见整个页面布局，需要中间部分直接自适应屏幕然后局部滚动。这个实现稍微难一点：

* js 实现：直接获取到屏幕的整个高度，然后减去上下模块的高度就是中间的 scroll-view 高度了。
```js
// 获取屏幕可用高度
let screenHeight = uni.getSystemInfoSync().windowHeight
```
* css 实现：外层盒子直接 flex 布局，主轴改为 column 纵向，然后中间部分在 scroll-view 标签外面再套一个div，这个div 的 flex 设为 1 自动设置高度，然后 scroll-view 的 height 设为 100%。不过注意最外层的盒子一定要是已知高度的，像整个页面这种其实也是已知高度，否则无效。
```vue
<template>
  <div class="page">
    <div class="top" />
    <div class="center">
      <scroll-view style="height: 100%;"></scroll-view>
    </div>
    <div class="bottom" />
  </div>
<template>
<style>
.page {
  display: flex;
  flex-direction: column;
}

.top {
  height: 100px;
  background: green;
}

.bottom {
  height: 100px;
  background: red;
}

.center {
  flex: 1;
}
</style>
```

### 场景三：未知高度局部滚动
这个就有点难度了，其实就是我们 pc 上常用的设置最大高度 max-height，如果超过了最大高度则出现滚动条，很不幸在小程序这种方式滚动不了。

一般用在弹窗中比较多，设置一个固定高度确实可以实现，但是内容较少时会出现大量留白，用纯 css 我是没找到实现方式，因为需要动态获取到内容的高度才知道要给 scroll-view 设置多高。

```vue
<template>
  <div class="pop">
    <div class="header">我是标题</div>
    <scroll-view :style="'height:' + height + 'px'">
      <div id="scroll-content"></div>
    </scroll-view>
    <div class="footer">确定</div>
  </div>
<template>
<script>
export default {
  data() {
    return {
      height: 200 // 默认滚动高度
    }
  },
  mounted() {
    // 实际弹窗中应该是在弹窗显示时去计算高度，此处仅作示例
    this.calcHeight()
  },
  methods: {
    calcHeight() {
      let view = uni.createSelectorQuery().select('#scroll-content')
      view.boundingClientRect(res => {
        const h = res.height
        let height = this.height
        if (h > 0 && h <= this.height) {
          height = h
        }

        this.height = height
      }).exec()
    }
  }
}
</script>
```
