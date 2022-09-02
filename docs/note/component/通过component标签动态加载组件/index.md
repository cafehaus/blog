# 通过 component 标签动态加载组件

一般用在 tab 选项卡切换动态加载相应的内容，还可用 keep-alive 缓存组件，比直接用 v-if、v-show 去控制优雅高级！

```vue
<template>
  <div class="page">
    <div class="container">
      <div class="tab">
        <p
          class="tab-item"
          v-for="(item, index) in tabList"
          :key="index"
          :class="{ active: tabActive === item.value }"
          @click="changeTab(item.value)"
        >
          {{ item.label }}
        </p>
      </div>

      <keep-alive>
        <component :is="tabActive" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import CompOne from './comp-one'
  import CompTwo from './comp-two'

  export default {
    components: {
      CompOne,
      CompTwo,
    },
    data() {
      return {
        tabActive: 'CompOne',
        tabList: [
          { label: '菜单一', value: 'CompOne' },
          { label: '菜单二', value: 'CompTwo' },
        ],
      }
    },

    created() {},

    methods: {
      changeTab(value) {
        this.tabActive = value
      },
    },
  }
</script>

<style lang="stylus" scoped>
.page
  .container
    background #FFF
    border-radius 8px
    padding 0 20px 20px 20px
  .tab
    display flex
    justify-content flex-start
    padding 0 0 20px
    .tab-item
      user-select none
      height 40px
      padding 0 14px
      border-radius 8px
      line-height 40px
      text-align center
      cursor pointer
      font-size 14px
      font-weight 400
      color #5B5C5D
      position relative
      display flex
      align-items center
      justify-content center
      &.active
        background #FFD121
        font-size 14px
        font-weight bold
        color #161718
      &:hover
        background #FFD121
      &:not(:first-child)
        margin-left 20px
        &:before
          content ''
          position absolute
          left -10px
          width 1px
          height 14px
          background #D8D8D8
</style>
```