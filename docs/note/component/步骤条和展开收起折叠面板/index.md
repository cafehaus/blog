# 步骤条和展开收起折叠面板

```vue
<template>
  <div class="step">
    <div class="step-item" v-for="(itm,idx) in stepList" :key="idx" :class="'step-item-status'+ itm.status">
      <span class="step-item-icon">
        <Icon v-if="itm.status === 1" type="ios-checkmark-circle" />
        <Icon v-else type="ios-checkmark-circle-outline" />
      </span>

      <div class="collapse">
        <div class="collapse-header" :class="'collapse-header-warning'+ itm.warningLevel">
          <p class="collapse-header-left">
            <span>到达目的国</span>
          </p>
          <p class="collapse-header-right">
            <span class="btn-more" :class="{'btn-more-active': itm.showContent}" @click="itm.showContent = !itm.showContent">{{ itm.showContent ? '收起' : '展开' }} <Icon type="md-arrow-dropdown" /></span>
          </p>
        </div>

        <div class="collapse-content" v-if="itm.showContent">
          我是显示的内容
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stepList: [
        { showContent: false, estimateDate: [{}, {}, {}], realDate: [{}, {}], status: 1, warningLevel: 0 },
        { showContent: false, status: 1, warningLevel: 1 },
        { showContent: false, status: 1, warningLevel: 2 },
        { showContent: false, status: 2, warningLevel: 3 },
        { showContent: false, status: 3 }
      ]
    }
  },

  methods: {}
}
</script>
<style lang="stylus" scoped>
$blue = #116DF3

.step
  margin-top 14px
  .step-item
    position relative
    display flex
    justify-content space-between
    padding-bottom 10px
    &:not(:last-child):before
      content ''
      height calc(100% - 34px)
      width 0
      border-left 1px dashed #D8D8D8
      position absolute
      left 15px
      top 50px
    &.step-item-status2
      .step-item-icon
        color #FF4C21
    &.step-item-status3
      .step-item-icon
        color #DDD
    .step-item-icon
      font-size 32px
      line-height 60px
      color $main-color
    .collapse
      flex 1
      margin-left 20px
      &-header
        background #F1F3F5
        border-radius 6px
        display flex
        justify-content space-between
        align-items center
        padding 20px
        box-sizing border-box
        border 2px solid #F1F3F5
        &.collapse-header-warning1
          border 2px solid rgb(255,237,89)
        &.collapse-header-warning2
          border 2px solid rgb(255,183,91)
        &.collapse-header-warning3
          border 2px solid rgb(255,64,64)
        &-left
          display flex
          align-items center
          font-size 16px
          font-weight bold
          line-height 1
          >>>.ivu-icon
            margin-left 4px
            font-size 20px
            font-weight bold
            color #FC3A17
        &-right
          display flex
          align-items center
          font-weight normal
          .tag-abnormal
            display inline-block
            height 20px
            border-radius 10px
            padding 0 7px
            background #FF7700
            margin-right 10px
            color #FFF
            line-height @height
          .tag-follow
            display inline-block
            height 20px
            border-radius 10px
            padding 0 7px
            background $blue
            margin-right 10px
            color #FFF
            line-height @height
          .btn-more
            cursor pointer
            color $blue
            >>>.ivu-icon
              font-size 18px
              display inline-block
              transition all .3s
            &.btn-more-active
              >>>.ivu-icon
                transform rotate(180deg)
      &-content
        .subtitle
          margin 16px 0 10px
        .date
          display flex
          flex-wrap wrap
          &-item
            border 1px dashed #EEE
            padding 20px
            border-radius 8px
            margin-right 10px
            text-align center
            .des
              color #a3a3a3
          &-item-btn
            border 1px dashed #EEE
            padding 20px
            border-radius 8px
            cursor pointer
            >>>.ivu-icon
              font-size 24px

</style>
```
