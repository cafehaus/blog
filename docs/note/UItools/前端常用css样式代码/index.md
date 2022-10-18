## 前端常用css样式代码

### 半透明提示框变形小箭头

版型三角形用 css 样式 border 实现，变形利用 skewY

```vue
<template>
  <div>
    <div class="pop"></div>
  </div>
</template>

<style lang="stylus" scoped>
.pop
  position position
  height 100px
  width 200px
  background rgba(255, 255, 255, .9)
  border-radius 6px
  padding 10px
  &:before
    content ''
    position absolute
    left -16px
    top 40%
    border-width 0px 0px 16px 16px
    border-style solid
    border-bottom-color rgba(255, 255, 255, .9)
    border-left-color transparent
    transform skewY(-20deg)
</style>
```

### input输入框placeholder提示文字聚焦动画

placeholder文字默认居中，当光标聚焦后placeholder文字移动到最左边

```vue
<template>
  <div>
    <input class="input" placeholder="请输入">
  </div>
</template>

<style lang="stylus" scoped>
.input
  // text-align center
  position relative
  &::-webkit-input-placeholder
    // color red !important
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    transition all .8s
  &:focus
    &::-webkit-input-placeholder
      // color green !important
      left 0
      transform translate(0, -50%)
</style>
```
如果想要搜索框文字居中，直接 text-align:center 就可以了，一般移动端的搜索框用得比较多

### radial-gradient 径向渐变去做外圆角

适合需要外圆角的各种背景图标

```vue
<template>
  <div>
    <span class="tag">推荐</span>
  </div>
</template>

<style lang="stylus" scoped>
.tag
  position absolute
  right 0
  top 0
  background #FFBD09
  border-radius 0 7px 0 16px
  padding 6px 8px
  font-size 12px
  color #FFF
  font-weight normal
  line-height 1
  &::before
    content ''
    position absolute
    width 10px
    height 10px
    left -10px
    top 0
    background #000
    // 左上角
    background radial-gradient(circle at 0 100%, transparent 10px, #FFBD09 10px)
    // 左下角
    // background radial-gradient(circle at 0 0, transparent 10px, #FFBD09 10px)
    // 右上角
    // background radial-gradient(circle at 100% 100%, transparent 10px, #FFBD09 10px)
    // 右下角
    // background radial-gradient(circle at 100% 0, transparent 10px, #FFBD09 10px)
</style>
```
