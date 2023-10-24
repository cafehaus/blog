# 前端开发中web和移动端动画的常见实现方式

前端动画一般在展示性网站、交互操作或者移动端活动页面使用比较多，可能对于大部分前端平时只会用 css 里的 transition 动画，其实前端动画还有很多实现方式，下面是常见的几种形式：

* css 动画
* js 动画
* SVG 动画
* Canvas 动画
* WebGL 动画
* gif 动图
* 图片+位移模拟动画
* 视频
* flash 动画

### css 动画
css 动画应该是前端工作中用得最多的，兼具性能和丰富的动画效果，很多常见的第三方动画库也都是基于 css 实现的。

#### transition 动画
用来实现 DOM 元素形变或位移动画，也是大部分前端工作中最常用的动画形式，一般 web 上很多交互操作动效都是用这个实现的，简单好用。

#### animation 关键帧动画
css3 里新出的关键帧动画，比 transition 强大数倍，可以实现各种酷炫的动画效果。关键帧的意思就是我们只需要定义动画的几个关键节点的值，animation 会自动根据计时函数插值计算出来中间的步骤，实现比较平滑的动画效果，使用时需要配合 @keyframes 来定义关键帧。

animation 是以下8个属性的简写形式：
* animation-name：要绑定的 @keyframes 关键帧动画名
* animation-duration：动画时长
* animation-timing-function：动画计时函数、速度曲线，可以用预制关键字或者cubic-bezier()函数自定义贝塞尔曲线、steps()函数直接设置要多少步
* animation-delay：动画开始前延迟的时长
* animation-iteration-count：动画次数，无限循环 infinite
* animation-direction：设置是否可以反向播放动画
* animation-fill-mode：设置 CSS 动画在执行之前和之后如何将样式应用于其目标，一般用来解决动画停止后界面闪现问题
* animation-play-state：设置动画是运行还是暂停，可以配合 js 来实现中途让动画停止

animation 的简写其实也没啥规则，就是直接往后面随便堆，css会有一套自己的解析规则来直接从里面取，具体可以参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)，看着脑阔痛，推荐还是别简写了。

### js 动画
严格来说 js 动画不算一个单独的动画，因为一般需要利用 js 里的定时器配合像 DOM 元素、Canvas 才能实现动画效果。

#### setTimeout 定时器
通过 setTimout、setInterval 定时器不断更新元素的状态位置等来实现动画，要求画面的更新频率要达到大部分屏幕要求的每秒60次才能让肉眼看到比较流畅的，受不同屏幕和定时器执行时间影响，动画中间容易出现丢帧的情况。

```js
setInterval(function() {
  // 执行动画任务
}, 1000 / 60)
```

#### requestAnimationFrame 定时器
除了定时器还有 HTML5 新出的 requestAnimationFrame，专门为实现高性能的帧动画而设计的一个API。它的作用就是告诉浏览器你希望执行一个动画，让浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用 requestAnimationFrame()，这样就能实现动画效果了。

和 setTimeout 定时器类似，requestAnimationFrame 也可以通过 cancelAnimationFrame 取消回调函数请求。相比 setTimeout 有两点优势：
* 跟屏幕刷新频率保持一致，不会出现像 setTimeout 丢帧的情况
* 性能更好，运行在后台标签页或者隐藏的 <iframe> 里时，requestAnimationFrame() 会被暂停调用以提升性能和电池寿命

```js
function animate() {
  // 执行动画任务
  requestAnimationFrame(animate)
}
requestAnimationFrame(animate)
```

上面代码实际使用的时候注意回调函数的 this 指向，最好用箭头函数去定义。

### SVG 动画
SVG（Scalable Vector Graphics）可伸缩矢量图形，基于 xml 语法，和我们常见的 png、jpg 等位图相比，它的文件容量较小，在进行放大、缩小或旋转等操作时图象不会失真。

HTML5 中是支持内联 SVG 的，所以我们可以将 svg 标签当作 html 标签直接在页面结构中使用，成为 DOM 的一部分，然后用 JavaScript 和 CSS 都是可以对其进行操作的，所以 css 的动画效果也都是可以直接作用在 svg 元素上的。

除此之外，SVG 中也自带 animate 元素，可以直接用来创建动画，css 中的动画效果也都能用其实现，相比 css 动画 svg 可以实现出更加复杂的动画效果，如路径动画、描边动画等，很多网站的 logo 动画就是用 svg 来实现的。

### Canvas 动画
使用 canvas 绘制动画原理就是，配合 js 定时器不断的绘制擦除图形，当绘制的速度够快，看上去就像动起来了一样，适合用来实现一些复杂的自定义场景动画。

### WebGL 动画
WebGL 在前端领域也是一项很热门的技术，它可以在网页上绘制和渲染三维图形，并且让用户与其进行交互。前面我们提到的各种动画都是基于 2D 的二维图形动画，像 css 动画中虽然也有 z 轴的概念，但是和真实的三维效果还是有很大差距的。

像常见的线上看房开车、全景展示、产品展示等都有用到 WebGL 技术，其中大名鼎鼎的三维模型库 Three.js 应该很多人都听过，开发成本比较高，即使有经验的前端工程师也需要系统学习后才能上手。

### gif 动图
设计师直接导出 gif 动图，适合一些简单的动画，直接利用 PS 里的动作就可以完成制作，基本没啥前端工作量，简单适配性好不过容易出现颜色失真或者边缘出现锯齿。

### 图片+位移模拟动画
这个其实跟 gif 图类似，只不过把 gif 图的每一帧导出成单独的 png 图片再拼成雪碧图，前端利用 css 的 transition、animation 来做位移模拟实现动画的效果，跟以前放电影有点类似，把静态的图片在一个固定的视窗内不断移动，让人看着就像动起来了一样。

### 视频
直接放一个 video 视频，有的展示性网站会采用这种方式，直接整块网页背景放个 video 视频，让人看着像动画的效果，实现简单有音画效果，但是视频往往会很大。

### flash 动画
flash 动画是一种基于 Adobe Flash 技术创建的动态图像或影片，它可以在网页中播放。flash 动画通常包含矢量图形、位图、音频、视频等多种元素，具有高质量的图像和动态效果。不过会影响网页的性能，特别是在移动设备或低端设备上，现在差不多灭绝了，属于过时了的技术。