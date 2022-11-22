
# vue中computed动态设置background背景图无效

要求页面背景图片根据后端接口返回动态设置，如果接口没有数据就设置成一个默认的，提测了发现后台设置了，接口也拿到了最新的图片数据，但是页面上死活不更新，demo 代码如下：

```vue
<template>
  <div
    class="page"
    :style="{
      background: '#F5F5F5 url(' + bgImg + ') center top/750rpx 679rpx no-repeat',
      backgroundSize: 'contain'
    }"
  >
  </div>
</template>
<script>
  export default {
    data() {
      return {
        bg: '',
        defImg: 'https:xxx.com/defImg.png'
      }
    },
    computed: {
      bgImg() {
        return this.bg || this.defImg
      }
    },
    created() {
      this.getBgImg()
    },
    methods: {
      getBgImg() {
        setTimeout(() => {
          this.bg = 'https:xxx.com/bg.png'
        }, 3000)
      }
    }
  }
</script>
```

各种能想到的方法都用上了，$set、watch 强制更新...还是没用，而且明明图片数据已经拿到最新的了，直接用 img 标签在页面上显示没问题。

### 原因

最终在图片的链接里才找到原因，图片路径中带了英文括号，如下：

```js
const img = 'https://xxx.oss-cn-shenzhen.aliyuncs.com/1594608689685983234_1593551517779288065_1635854539(1) (1).jpg'
```

而上面的背景图样式又是直接用的 backgorund url(图片地址) 这样去设置的，晃眼一看好像没啥区别，url() 里的地址带不带引号其实也都是可以，然后路径中也有英文括号，应该是冲突直接造成样式无效了，测试用中文括号没问题。

### 解决办法

* 上传的图片路径避免出现括号
* 背景图 background 设置 url 里面的地址加上引号(推荐)

网上还有人提出对图片路径中的括号进行转义，尝试了encodeURI 和 encodeURIComponent(这个才会对英文括号进行编码，前面一个不会编码英文括号)编码图片地址，然后图片都不显示。

结论：看来设置背景图时，任何时候都加上引号，是一个好习惯！