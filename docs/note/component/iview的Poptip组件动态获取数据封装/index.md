# iview的Poptip组件动态获取数据封装

需求中提示比较复杂的内容，可以基于 Poptip 二次封装，一般为了层级不受影响，会开启 transfer，默认的 slot 样式需要去全局覆盖，如果比较简单的可以直接用 style 写在行内，复杂的可考虑继续组件化封装。下面的示例在异步数据回来之前，有增加 css 加载动画，给用户更好的体验。

```vue
<template>
  <Poptip
    :trigger="trigger"
    transfer
    placement="top"
    @on-popper-show="onPopperShow"
  >
    <p style="color: #116df3; margin-bottom: 4px; cursor: pointer">详情</p>
    <template slot="content">
      <div v-if="showSpin" class="spinner" />
      <ContentInfo v-else :info="info" />
    </template>
  </Poptip>
</template>

<script>
  import ContentInfo from './content-info'
  export default {
    name: 'PoptipPrice',
    components: {
      ContentInfo,
    },
    props: {
      trigger: {
        type: String,
        default: 'hover',
      },
      item: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        showSpin: true,
        info: {},
      }
    },

    methods: {
      onPopperShow() {
        this.getList()
      },

      async getList() {
        console.log(this.item)

        let params = {
          countryCode: this.item.countryCode,
          rateVersion: this.item.rateVersion,
          serviceCode: this.item.serviceCode,
        }
        this.showSpin = true
        const res = await this.$api.testRequset(params)
        this.showSpin = false

        if (res.success && res.data) {
          let data = res.data || {}
          this.info = data
        } else {
          this.$Message.error(res.msg || res.message || '出错啦！')
        }
      },
    },
  }
</script>
<style lang='stylus' scoped>

.spinner
  width 20px
  height 20px
  margin 10px auto
  background-color #2d8cf0
  border-radius 100%
  -webkit-animation sk-scaleout 1s infinite ease-in-out
  animation sk-scaleout 1s infinite ease-in-out
@keyframes sk-scaleout
  0%
    -webkit-transform scale(0)
  100%
    -webkit-transform scale(1)
    opacity 0
@keyframes sk-scaleout
  0%
    -webkit-transform scale(0)
    transform scale(0)
  100%
    -webkit-transform scale(1)
    transform scale(1)
    opacity 0
</style>
```