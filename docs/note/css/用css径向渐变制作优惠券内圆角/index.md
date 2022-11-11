# 用css径向渐变制作优惠券内圆角

电商用的优惠券一般都带有内圆角样式，实现方式也有很多种：

* 切图：最简单，但是适配性不好，要求宽高固定
* svg 和 canvas：可以任意放大缩小，有些技术含量，很多菜鸡不会，画个这种简简单单的优惠券也有点大材小用
* css 用个跟背景色一样的圆盖在上面：背景色改变，盖在上面的圆颜色也需要改变，如果后面不是纯色背景，容易露馅儿
* css 径向渐变：最优解决方案

之前也用径向渐变做过类似的圆角，但是一直对齐原理不是很明白，这次又遇到优惠券需求，看到别人制作的一个背景渐变的 demo 很不错，看了一下就明白了的实现原理了。

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

<style>
/* 矩形斜切角 */
.chamfer {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, transparent 15px, red 0) top left,
  linear-gradient(-135deg, transparent 15px, blue 0) top right,
  linear-gradient(-45deg, transparent 15px, green 0) bottom right,
  linear-gradient(45deg, transparent 15px, orange 0) bottom left;
  background-size: 50px 50px;
  background-repeat: no-repeat;
}

.linear-gradient {
  width: 120px;
  height: 120px;
  border: 1px solid #CCC;
  background: linear-gradient(135deg, blue 0, green 30%, red 30%, pink 50%, yellow 0, orange) bottom center;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}

/* 矩形斜切内圆角 */
.chamfer-circle {
  width: 140px;
  height: 140px;
  background: radial-gradient(circle at top left, transparent 15px, red 0) top left,
  radial-gradient(circle at top right, transparent 15px, blue 0) top right,
  radial-gradient(circle at bottom right, transparent 15px,green 0) bottom right,
  radial-gradient(circle at bottom left, transparent 15px, orange 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}

.radial-gradient {
  width: 160px;
  height: 160px;
  border: 1px solid #CCC;
  background: radial-gradient(circle at top left, red 0%, blue 30px, yellow 40%, green 0, orange 60%, pink 0, purple) top center;
  background-size: 50% 50%;
  background-repeat: no-repeat;
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