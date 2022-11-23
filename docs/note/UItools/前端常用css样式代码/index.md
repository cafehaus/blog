## 前端常用css样式代码

### “好孩子”缺角小旗标

跟小时候的好孩子小贴纸一样的图标，唯一不足的地方宽度要写成固定的，不能动态宽度

<span class="tag-good">好孩子</span>

```vue
<template>
  <div>
    <span class="tag">好孩子</span>
  </div>
</template>

<style lang="stylus" scoped>
.tag
  background #57bc78
  position relative
  display inline-block
  width 60px
  padding 4px 0 0
  color #FFF
  line-height 1
  text-align center
  &::before
    content ''
    height 0
    width 0
    border-top 4px solid #57bc78
    border-right 30px solid #57bc78
    border-bottom 4px solid transparent
    border-left 30px solid #57bc78
    position absolute
    left 0
    right 0
    bottom -8px
</style>
```
### 半透明提示框变形小箭头

版型三角形用 css 样式 border 实现，变形利用 skewY

<div class="pop"></div>

```vue
<template>
  <div>
    <div class="pop"></div>
  </div>
</template>

<style lang="stylus" scoped>
.pop
  position relative
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

<input class="input" placeholder="请输入">

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

<div class="tag-box">
  <span class="tag-corner tag-corner-left-top">左上角</span>
  <span class="tag-corner tag-corner-left-bottom">左下角</span>
  <span class="tag-corner tag-corner-right-top">右上角</span>
  <span class="tag-corner tag-corner-right-bottom">右下角</span>
</div>

```vue
<template>
  <div>
    <span class="tag-corner">推荐</span>
  </div>
</template>

<style lang="stylus" scoped>
.tag-corner
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

<style scoped>
.tag-good {
  background: #57bc78;
  position: relative;
  display: inline-block;
  width: 60px;
  padding: px 0 0;
  color: #FFF;
  line-height: 2;
  text-align: center;
}

.tag-good::before {
  content: '';
  height: 0;
  width: 0;
  border-top: 4px solid #57bc78;
  border-right: 30px solid #57bc78;
  border-bottom: 4px solid transparent;
  border-left: 30px solid #57bc78;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
}

.pop {
  position: relative;
  height: 100px;
  width: 200px;
  background: rgba(0, 100, 100, .2);
  border-radius: 6px;
  padding: 10px;
}

.pop:before {
  content: '';
  position: absolute;
  left: -16px;
  top: 40%;
  border-width: 0px 0px 16px 16px;
  border-style: solid;
  border-bottom-color:rgba(0, 100, 100, .2);
  border-left-color: transparent;
  transform: skewY(-20deg);
}

.input {
  position: relative;
}

.input::-webkit-input-placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all .8s;
}

.input:focus::-webkit-input-placeholder {
  left: 0;
  transform: translate(0, -50%);
}

.tag-box {
  height: 200px;
  width: 200px;
  border: 1px solid #EEE;
  border-radius: 6px;
  position: relative;
}

.tag-corner {
  position: absolute;
  /* right: 0;
  top: 0; */
  background: #FFBD09;
  border-radius: 0 7px 0 16px;
  padding: 6px 8px;
  font-size: 12px;
  color: #FFF;
  font-weight: normal;
  line-height: 1;
}

.tag-corner::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
}

.tag-corner-left-top {
  left: 0;
  top: 0;
  border-radius: 7px 0 16px 0;
}

.tag-corner-left-top::before {
  background: radial-gradient(circle at bottom right, transparent 10px, #FFBD09 10px);
  right: -10px;
  top: 0;
}

.tag-corner-left-bottom {
  left: 0;
  bottom: 0;
  border-radius: 0 16px 0 7px;
}

.tag-corner-left-bottom::before {
  background: radial-gradient(circle at top right, transparent 10px, #FFBD09 10px);
  right: -10px;
  bottom: 0;
}

.tag-corner-right-top {
  right: 0;
  top: 0;
  border-radius: 0 7px 0 16px;
}

.tag-corner-right-top::before {
  background: radial-gradient(circle at bottom left, transparent 10px, #FFBD09 10px);
  left: -10px;
  top: 0;
}

.tag-corner-right-bottom {
  right: 0;
  bottom: 0;
  border-radius: 16px 0 7px 0;
}

.tag-corner-right-bottom::before {
  background: radial-gradient(circle at top left, transparent 10px, #FFBD09 10px);
  left: -10px;
  bottom: 0;
}
</style>
