# 用css制作头像渐变边框

之前有一个头像渐变边框的需求，当时是全部用的切图，但是不同的地方可能头像大小不一样，切图适配性太差，正好这几日学了下css渐变的各种妙用，想到之前的头像边框其实可以用渐变来实现。

<small>当时用到的头像切图</small>
<p><img src="./1.png" /></p>

### 目前想到有两种实现方式：
* 用一个父盒子直接背景线性渐变，然后字里面的头像图片定位在内部就可以了
* 直接用 border-image 来实现边框渐变

### 一、background 背景 linear-gradient 实现方式

<div class="box"><img class="img" src="/images/logo.png" /></div>

这个还是比较简单，不过定位位置和圆角大小需要自己每次根据实际的尺寸来计算，而且感觉还额外多使用了一个 div 标签，不是很优雅。

### 二、border-image 实现方式

<img  class="avatar" src="/images/logo.png" />

但是这个 border-image 和 border-radius 不能同时使用，设置了边框背景，圆角就自动失效了，所以最终做出来的是一个直接的边框背景

这个样子肯定是不阔以的了，然后 发了了 clip-path 这个裁切属性，搞上去外圆角倒是又了，那里面图片的内圆角呢？图片还是个直角的，和需求有点不符。

<img  class="avatar-radius" src="/images/logo.png" />

### 最终实现方式

用 border-image 方式虽然少用了一个标签，但是没法同时实现内外圆角。最后只能在第一种方式上来进行优化，还是利用背景渐变的方式来实现，不过位置不用定位，直接用 padding 留出需要的边框宽度就行了，不需要自己每次要去计算定位位置，不过圆角还是要去根据大小计算下的。

<div class="box-nice"><img class="img-nice" src="/images/logo.png" /></div>



<style scoped>
.box {
  margin: 10px 0;
  width: 120px;
  height: 120px;
  border-radius: 20px;
  background: linear-gradient(135deg, red 0, pink 40%, yellow 70%, orange) 100% 100%;
  position: relative;
}
.img {
  width: 100px;
  height: 100px;
  background: #FFF;
  border-radius: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
}

.avatar {
  margin-top: 10px;
  width: 100px;
  height: 100px;
  border: 10px solid;
  border-image: linear-gradient(135deg, red 0, pink 40%, yellow 70%, orange) 50 stretch;
}

.avatar-radius {
  width: 100px;
  height: 100px;
  border: 10px solid;
  border-image: linear-gradient(135deg, red 0, pink 40%, yellow 70%, orange) 50 stretch;
  clip-path: inset(0 round 20px);
}

.box-nice {
  margin: 10px 0;
  width: 100px;
  height: 100px;
  padding: 10px;
  background: linear-gradient(135deg, red 0, pink 40%, yellow 70%, orange) 100% 100%;
  border-radius: 20px;
}

.img-nice {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: #FFF;
}
</style>