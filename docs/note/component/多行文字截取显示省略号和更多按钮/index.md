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