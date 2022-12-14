# 用css径向渐变制作优惠券内圆角

电商用的优惠券一般都带有内圆角样式，实现方式也有很多种：

* 切图：最简单，但是适配性不好，要求宽高固定
* svg 和 canvas：可以任意放大缩小，有些技术含量，很多菜鸡不会，画个这种简简单单的优惠券也有点大材小用
* css 用个跟背景色一样的圆盖在上面：背景色改变，盖在上面的圆颜色也需要改变，如果后面不是纯色背景，容易露馅儿
* css 径向渐变：最优解决方案

之前也用径向渐变做过类似的圆角，但是一直对其原理不是很明白，这次又遇到优惠券需求，看到别人制作的一个背景渐变的 demo 很不错，看了一下就明白了实现原理。

### 矩形斜切角
<p>利用了 css 的线性渐变 linear-gradient 样式，线性渐变其实就是沿着一条直线分布你设置的颜色值，实现斜切角实际上就是把角度正好设置在对折线上（也就是 135° 、45°上），让渐变沿着对折线分布。</p>
<p>要切掉角上的颜色，其实也就是设置成透明 transparent 就行了，颜色本来也就有 transparent 这个色值属性，然后再根据斜切角大小设置一个大小，因为透明了，所以视觉上看着被切掉了。</p>
<p>颜色值后面跟着的 0 代表取消渐变，也就是纯色，如果不加0默认就是你设置的颜色到白色 #FFF 的一个渐变。  background-size: 50% 50% 代表每一块渐变所占的大小，都50%也就是4等份。</p>
<div class="chamfer" />

#### 线性渐变
<div class="linear-gradient" />

##### 样式说明

* background: linear-gradient(135deg, blue 0, green 30%, red 30%, pink 50%, yellow 0, orange)  bottom center;

第一个参数是角度，沿对角线所以这里是135度。

后面跟颜色值，颜色值后面还可以跟具体的位置，可以是百分比，也可以是具体的 px 像素值，如果设为 0，就是接着前面一个的位置，效果就是没有渐变效果，颜色从当前位置直接过渡了，如上面的 red 30% 也可以写成 red 0。

最后面的两个参数分别是 Y轴 和 X轴上的对齐方式，可以设置成 top\bottom\left\right\center 关键字、px像素或百分比，不设置默认就是从左上角的 0 0 坐标点开始对齐。

* background-size: 100% 100%;

长和宽大小，也可以 cover、contain，就是定义怎么平铺在盒子里，一般设置背景图常用到

* background-repeat: no-repeat;

 是否重复

### 矩形斜切内圆角
<p>明白了上面的线性渐变，其实也就很容易理解径向渐变了，径向鉴定就是从一个圆心出发沿着半径渐变，渐变颜色也是以圆形的方式向外分布，那我们将角上的那块渐变色也设置为透明，不就模拟出了内圆角了吗。</p>
<div class="chamfer-circle" />

#### 径向渐变
<div class="radial-gradient" />

径向渐变大部分和线性渐变是一样的，只不过渐变轴是从圆心沿着半径向外去渐变。

##### 样式说明
background: radial-gradient(circle at top left, red 0%, blue 30px, yellow 40%, green 0, orange 60%, pink 0, purple) top center;

第一个参数 circle at top left 用来指定圆形，如果不指定就是默认从圆心来渐变。

### 内圆角优惠券效果

<p>下面就是用内圆角实现的优惠券 demo，外面四个角上的外圆角直接给 item 设置 border-radius 就行了，还有在部分设备或布局上 background-size: 50% 50% 可能中间会出现细小的白色空隙，只要将其中一个改大点超过 50% 就能解决了：background-size: 60% 50%。</p>
<div class="coupon">
  <div class="item" :class="'item-status-' + i" v-for="(c, i) in 3" :key="i">
    <div class="money">
      <p class="num">{{ 100 - i * 10 }}<small>元</small></p>
      <span class="des">跨店满{{ 1000 - i * 100 }}元可用</span>
    </div>
    <div class="btn">立即使用</div>
  </div>
</div>

### 简洁移动端优惠券

左右布局，中间虚线分割，分割处上下有个内凹半圆，也是很常见的移动端优惠券布局：
```vue
<template>
  <div class="coupon-item">
    <div class="coupon-item-l">
      <p class="tag">满减券</p>
      <p class="c-name">双十一跨店满减</p>
      <p>优惠封顶50元，领完即止，先到先得，快叫上你的小伙伴来领取吧</p>
      <p>2022-04-09至2022-08-05</p>
    </div>
    <div class="coupon-item-r">
      <p class="price">100<span class="unit">元</span></p>
      <p>优惠封顶50元</p>
      <p class="btn">去使用</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CouponItem',
    props: {
      item: {
        type: Object,
        default: () => ({})
      },
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>
$radialGradient($positon = 'right')
  if $positon == 'right'
    background radial-gradient(circle at top left, #FFF, #FFF 0) top left,
    radial-gradient(circle at top right, transparent 10rpx, #FFF 0) top right,
    radial-gradient(circle at bottom right, transparent 10rpx, #FFF 0) bottom right,
    radial-gradient(circle at bottom left, #FFF, #FFF 0) bottom left
  if $positon == 'left'
    background radial-gradient(circle at top left, transparent 10rpx, #FFF 0) top left,
    radial-gradient(circle at top right, #FFF, #FFF 0) top right,
    radial-gradient(circle at bottom right, #FFF, #FFF 0) bottom right,
    radial-gradient(circle at bottom left, transparent 10rpx, #FFF 0) bottom left
  background-size 52% 52%
  background-repeat no-repeat

.coupon-item
  border-radius 20rpx
  overflow hidden
  margin-bottom 20rpx
  display flex
  justify-content space-between
  &.disabled
    .coupon-item-l,
    .coupon-item-r
      opacity 0.6
    .coupon-item-l .tag
      background #C1C1C1
      color #FFF
    .coupon-item-r .price
      color #666
  .coupon-item-l
    $radialGradient('right')
    padding 36rpx 32rpx
    font-size 24rpx
    color #999999
    line-height 36rpx
    position relative
    flex 1
    &::after
      content ''
      border-left 1px dashed #D8D8D8
      position absolute
      right 0
      top 20rpx
      bottom 20rpx
    .tag
      position absolute
      top 0
      left 0
      min-width 100rpx
      font-size 20rpx
      padding 0 20rpx
      line-height 30rpx
      color #8A2626
      text-align center
      background #FFEAE7
      box-sizing border-box
      border-radius 16rpx 0 16rpx 0
    .c-name
      font-size 32rpx
      color $black
      line-height 46rpx
    p
      &:not(:first-child)
        margin-top 8rpx
  .coupon-item-r
    width 226rpx
    padding 36rpx 22rpx
    box-sizing border-box
    text-align center
    font-size 22rpx
    color #999999
    line-height 33rpx
    display flex
    flex-direction column
    justify-content center
    flex-shrink 0
    $radialGradient('left')
    .price
      font-size 60rpx
      color #FC3A17
      line-height 1
      .unit
        font-size 28rpx
    .btn
      font-size 28rpx
      color #161718
      line-height 52rpx
      background linear-gradient(176deg, #FEDD75 0%, #FDC837 100%)
      border-radius 27rpx
      width 156rpx
      margin 11rpx auto 0
      border 2rpx solid transparent
      &.active
        background #FFFCE6
        border 2rpx solid #FDD664
        color #2B2C32
        justify-content center
        .img
          width 38rpx
          height 38rpx !important
          margin-right 7rpx
</style>
```
### PC端双边内凹半圆波浪纹优惠券
左右布局，一边背景的双侧是内凹半圆波浪纹：
```vue
<template>
  <div class="coupon-item">
    <div class="coupon-item-left">
      <div class="coupon-item-inner">
        <p class="coupon-item-num">100<small class="coupon-item-unit">元</small></p>
        <div class="coupon-item-condition">跨店每满300减40哟</div>
      </div>
    </div>
    <div class="coupon-item-right">
      <div class="coupon-item-info">
        <p class="coupon-item-title">双十一满减券</p>
        <p class="coupon-item-des">优惠封顶50元，领完即止，先到先得，快叫上你的小伙伴来领取吧</p>
        <p class="coupon-item-date">有效期：2022-04-09至2022-08-05</p>
      </div>

      <div v-if="canAction" class="coupon-item-action">
        <p class="coupon-item-btn">去使用</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CouponItem',
    data() {
      return {}
    },
    methods: {}
  }
</script>
<style lang='stylus' scoped>
$gradient-start = #FE754E
$gradient-end = #F8481F

.coupon-item
  display flex
  border-radius 6px 12px 12px 6px
  overflow hidden
  min-height 120px
  &-left
    width 216px
    padding 0 6px
    border-radius 6px
    overflow hidden
    .coupon-item-inner
      background linear-gradient(to right, $gradient-start, $gradient-end)
      padding 10px
      height 100%
      color #FFF
      text-align center
      display flex
      flex-direction column
      justify-content center
      align-items center
      position relative
      &:before
        content ''
        position absolute
        left -6px
        top 0
        bottom 0
        width 6px
        background radial-gradient(6px circle at 0 50%, transparent, transparent 3px, $gradient-start 3px)
        background-repeat repeat-y
        background-size 12px 9px
        background-position 0 0
      &:after
        content ''
        position absolute
        right -6px
        top 0
        bottom 0
        width 6px
        background radial-gradient(6px circle, transparent, transparent 3px, $gradient-end 3px)
        background-repeat repeat-y
        background-size 12px 9px
        background-position 0 0
      .coupon-item-num
        font-size 36px
        font-weight bold
        line-height 1
        .coupon-item-unit
          font-size 14px
          font-weight normal
      .coupon-item-condition
        font-size 14px
        font-weight 400
        line-height 1.5
        &:nth-of-type(1)
          margin-top 10px
  &-right
    flex 1
    // height 100%
    padding 15px 30px
    display flex
    align-items center
    justify-content space-between
    background #fff5f2
    margin-left -6px
    .coupon-item-info
      .coupon-item-title
        font-size 18px
        color #161718
        line-height 1.5
        margin-bottom 12px
      .coupon-item-des
        font-size 14px
        color #5B5C5D
        line-height 1.5
      .coupon-item-date
        font-size 14px
        font-weight 400
        color #C1C1C1
        line-height 1
        margin-top 6px
    .coupon-item-action
      margin-left 20px
      .coupon-item-btn
        flex-shrink 0
        width 120px
        height 48px
        background #FC331C
        border-radius 24px
        font-size 16px
        font-weight bold
        color #FFFFFF
        line-height 48px
        text-align center
        cursor pointer
</style>
```

### 参考资料
* [10个demo示例学会CSS3 radial-gradient径向渐变
](https://www.zhangxinxu.com/wordpress/2017/11/css3-radial-gradient-syntax-example/)

<style>
/* 矩形斜切角 */
.chamfer {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, transparent 15px, red 0) top left,
  linear-gradient(-135deg, transparent 15px, blue 0) top right,
  linear-gradient(-45deg, transparent 15px, green 0) bottom right,
  linear-gradient(45deg, transparent 15px, orange 0) bottom left;
  background-size: 50px 50%;
  background-repeat: no-repeat;
}

.linear-gradient {
  width: 120px;
  height: 120px;
  border: 1px solid #CCC;
  background: linear-gradient(135deg, blue 0, green 30%, red 30%, pink 50%, yellow 0, orange) bottom center no-repeat;
  background-size: 50% 50%;
}

/* 矩形斜切内圆角 */
.chamfer-circle {
  width: 140px;
  height: 140px;
  background: radial-gradient(circle at top left, transparent 15px, red 0) top left,
  radial-gradient(circle at top right, transparent 15px, blue 0) top right,
  radial-gradient(circle at bottom right, transparent 15px,green 0) bottom right,
  radial-gradient(circle at bottom left, transparent 15px, orange 0) bottom left;
  background-size: 70px 50%;
  background-repeat: no-repeat;
}

.radial-gradient {
  width: 160px;
  height: 160px;
  border: 1px solid #CCC;
  background: radial-gradient(circle at top left, red 0%, blue 30px, yellow 40%, green 0, orange 60%, pink 0, purple) top center no-repeat;
  background-size: 50% 50%;
}

/* 内圆角优惠券 */
.coupon {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 28px;
  grid-row-gap: 28px;
}

.item {
  text-align: center;
  color: #8A2626
}

.money {
  border-radius: 8px;
  padding: 20px 12px;
  background: radial-gradient(circle at top left, #FFF2D4, #FFF2D4 0) top left,
  radial-gradient(circle at top right, #FFF2D4, #FFF2D4 0) top right,
  radial-gradient(circle at bottom right, transparent 8px, #FFF2D4 0) bottom right,
  radial-gradient(circle at bottom left, transparent 8px, #FFF2D4 0) bottom left;
  background-size: 60% 50%;
  background-repeat: no-repeat;
}

.num {
  font-size: 30px;
  font-weight: bold;
  margin: 0;
}

.num small {
  font-size: 12px;
}

.des {
  font-size: 12px;
}

.btn {
  border-radius: 8px;
  padding: 20px 12px;
  background: radial-gradient(circle at top left, transparent 8px, #FFE4A7 0) top left,
  radial-gradient(circle at top right, transparent 8px, #FFE4A7 0) top right,
  radial-gradient(circle at bottom right, #FFE4A7, #FFE4A7 0) bottom right,
  radial-gradient(circle at bottom left, #FFE4A7, #FFE4A7 0) bottom left;
  background-size: 60% 50%;
  background-repeat: no-repeat;
  font-size: 14px;
  color: #8A2626;
  font-weight: 500;
  line-height: 1;
}
</style>