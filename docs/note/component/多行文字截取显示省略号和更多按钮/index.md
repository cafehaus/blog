# 多行文字截取显示省略号和更多按钮

按行数截取可以直接用css实现，但是还有两个难点，第一个是要将更多文字拼在截取的省略号最后面，这个可以用伪元素和float实现，最大的难点是怎么判断文字有没有超出，用css是没法判断出来的，只能用js通过 scrollHeight 和 clientHeight 去判断。

```vue
<template>
  <div class="page">
    <div class="berif-box" v-for="(item, index) in listData" :key="index">
      <div class="berif" :ref="'berif' + index">
        <span v-if="item.overflow" class="btn-more"> 更多>></span>
        <template v-if="index === 0">
          WordPress需要部署在服务端，如果我们只是为了看下效果或者测试开发使用，那就需要直接部署在本地。而我之所以想要在本地部署也是因为打算开发一个WordPress 的插件，在服务器上搭建和测试插件太不方便了。按照以前的思路是需要在本地安装 phpStudy、XAMMP 这类服务器软件，现在有了Docker 可就方便多了，只用安装相应镜像跑起来就可以了
        </template>
        <template v-else>
          就是 mysql 服务器上没找到叫 wordpress 这个名字的数据库
        </template>
        <!-- 未超出直接拼在内容后面 -->
        <span v-if="!item.overflow" class="btn-more-unfold"> 更多>></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: []
    }
  },

  created() {
    this.initData()
  },

  methods: {
    initData() {
      this.getListData()
    },

    getListData() {
      let list = [{}, {}]

      // 更多按钮拼在文字后面，存一个 overflow 属性去判断
      if (list.length) {
        this.$nextTick(() => {
          this.listData = list.map((m, i) => {
            // if (m.settleStatus === 0 && !m.baseScore) {
            //   let name = 'berif' + i
            //   let el = this.$refs[name]
            //   if (el && el[0] && (el[0].scrollHeight > el[0].clientHeight)) {
            //     m.overflow = true
            //   }
            // }
            m.overflow = i === 0
            return m
          })
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  width 200px
  margin 100px auto
  .berif-box
    font-size 12px
    color #666
    flex 1
    display flex
    margin-bottom 20px
    .berif
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 3
      overflow hidden
      text-overflow ellipsis
      text-align justify
      position relative
      &::before
        content ''
        float right
        height 100%
        margin-bottom -18px
      .btn-more-unfold
        // width 100%
        // height 100%
        // position absolute
        // background #fff
        color $blue
        cursor pointer
      .btn-more
        color $blue
        cursor pointer
        float right
        clear both

</style>
```

## uni 版小程序多行显示省略

uni 版的因为要兼容小程序问题比较多，下面的版本在 ios 真机上文字不显示，开发工具、h5和安卓上都是正常的，ios 上不正常的原因还没找到。

小程序上因为并没有 dom，也没有 scrollHeight 和 clientHeight，所以思路只能自己渲染一个不截取的真实元素来获取实际的高度，再去和截取后的高度比较。

```vue
<template>
  <div>
    <div class="v-text-overflow">
      <div
        :class="['text', {'text-ellipsis': !(isOverFlow && isOpen)}, {'text-height': setHeight}]"
      >
        <span v-if="isOverFlow && !isOpen" class="btn-down" @click="handleOpen">
          展开
        </span>
        <p>{{ text }}</p>

        <!-- 收起按钮 -->
        <p v-if="isOverFlow && isOpen" class="btn-up-box">
          <span class="btn-up" @click="handleOpen">
            收起
          </span>
        </p>
      </div>

      <!-- 兼容小程序获取实际文本高度 -->
      <p class="text-original">{{ text }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        isOverFlow: false,
        isOpen: false,
        setHeight: false // 需要在获取到了对比的结果后，再去设置高度 setHeight
      }
    },
    watch: {
      text: {
        handler(v) {
          this.isOverFlow = false
          this.isOpen = false
          this.setHeight = false
          v && this.init()
        },
        immediate: true
      }
    },
    methods: {
      init() {
        this.$nextTick(() => {
          let query = uni.createSelectorQuery().in(this)
          query.selectAll('.text, .text-original').boundingClientRect(res => {
            if (res[0] && res[0].height && res[1] && res[1].height) {
              this.isOverFlow = res[0].height < res[1].height
            } else {
              this.isOverFlow = false
            }
            this.setHeight = this.isOverFlow
          }).exec()
        })
      },

      handleOpen() {
        this.isOpen = !this.isOpen
        this.$emit('status', this.isOpen)
      },
    },
  }
</script>

<style lang="stylus" scoped>
.v-text-overflow
  font-size 24rpx
  color #666
  line-height 1.5
  // display flex
  position relative
  .text-original
    position absolute
    z-index -10
    opacity 0
  .text
    &::before
      content ''
      height 100%
      float right
      margin-bottom -36rpx
    .btn-down
      padding-left 20rpx
      color #999
      cursor pointer
      float right
      clear both
    .btn-up-box
      text-align right
    .arrow
      height 34rpx
      width 34rpx
    &.text-ellipsis
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 2
      overflow hidden
      text-overflow ellipsis
      // height 72rpx
      text-align justify
      &.text-height
        height 72rpx

</style>
```