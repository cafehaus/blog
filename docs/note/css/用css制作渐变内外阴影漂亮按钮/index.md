# 用css制作渐变内外阴影漂亮按钮

渐变 + 边框 + 内阴影 + 外阴影制作的圆角按钮，一般可能都是直接找UI要切图，其实用样式也是可以直接写出这样的按钮的，大小适配也可以自己自由控制。

<span class="beautiful-btn">立即确认</span>

<style>
/* 漂亮的按钮 */
.beautiful-btn {
  display: inline-block;
  box-sizing: border-box;
  height: 40px;
  padding: 0 60px;
  border-radius: 20px;
  border: 2px solid #FFF;
  background: linear-gradient(172deg, #FFBAAF 0%, #FD4025 100%);
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
  line-height: 36px;
  box-shadow: 0 2px 7px 0 rgba(255, 87, 63, .2), inset 2px 3px 0 0 rgba(226, 31, 3, .24);
}
</style>