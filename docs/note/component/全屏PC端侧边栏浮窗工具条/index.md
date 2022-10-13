# 全屏PC端侧边栏浮窗工具条

工具条 sider-bar 组件:
```vue
<template>
  <div>
    <div class="sider-bar" :class="{'sider-bar-banner': isBanner}" v-if="isShow">
      <!-- 系统公告 -->
      <div class="notice" v-if="noticeList.length">
        <div class="banner" v-if="isBanner">
          <div>
            <p>系</p>
            <p>统</p>
            <p>公</p>
            <p>告</p>
          </div>
          <i class="iconfont icon-arrow-circle-left" />
          <i class="iconfont icon-arrow-circle-right" />
        </div>
        <div class="content">
          <p class="sub-title" v-if="!isBanner">系统公告</p>
          <div
            v-for="(item, index) in noticeList"
            :key="index"
            class="item"
            :class="{'item-unread': item.readFlag !== 1}"
            @click="goDetail(item.announcementInfoId, '公告')"
          >
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>

      <!-- 帮助文档 -->
      <div class="question" v-if="helpDocList.length">
        <div class="banner" v-if="isBanner">
          <div>
            <p>帮</p>
            <p>助</p>
            <p>文</p>
            <p>档</p>
          </div>
          <i class="iconfont icon-arrow-circle-left" />
          <i class="iconfont icon-arrow-circle-right" />
        </div>
        <div class="content">
          <p class="sub-title" v-if="!isBanner">帮助文档</p>
          <div
            v-for="(item, index) in helpDocList"
            :key="index"
            class="item"
            @click="goDetail(item.helpDocId, '帮助文档')"
          >
            <i class="iconfont icon-faq" />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
    isBanner: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      noticeList: [],
      helpDocList: [],
    }
  },
  created() {
    this.initData()
  },

  methods: {
    initData() {
      this.getAnnouncementList()
      this.getHelpDocList()
    },

    // 获取公告
    async getAnnouncementList() {
      const res = await this.$api.getAnnouncementList({
        page: 1,
        size: 10,
      })

      if (res.code === '200') {
        let list = res.data.records || []
        this.noticeList = list
        this.$emit('on-show', 'showNotice', !!this.noticeList.length)
      } else {
        this.$Message.error(res.msg)
      }
    },

    // 获取帮助文档
    async getHelpDocList() {
      const res = await this.$api.getSubHelpDocsList()

      if (res.code === '200') {
        let list = res.data || []
        this.helpDocList = list.filter(m => m.showInPage === 1)
        this.$emit('on-show', 'showHelpDoc', !!this.helpDocList.length)
      } else {
        this.$Message.error(res.msg)
      }
    },

    // 去公告详情
    goDetail(id, type) {
      let newPage = null
      let url = ''
      if (type === '公告') {
        newPage = this.$router.resolve({ name: 'notice-detail' })
        url = `${newPage.href}?id=${id}`
      }
      if (type === '帮助文档') {
        newPage = this.$router.resolve({ name: 'help-document' })
        url = `${newPage.href}?helpDocId=${id}`
      }
      window.open(url, '_blank')

      // 点击了的去掉小红点
      if (type === '公告') {
        setTimeout(() => {
          this.getAnnouncementList()
        }, 2000)
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
  .sider-bar
    width 250px
    margin-left 12px
    .sub-title
      color #333
      font-size 16px
      font-weight 500
      line-height 1
      position relative
      padding-left 10px
      margin-bottom 10px
      height 16px
      &::before
        content ''
        height 100%
        width 4px
        background $base-color
        position absolute
        left 0
    .banner
      position absolute
      left -28px
      top 0
      z-index 7
      background #FFF
      width 28px
      border 1px solid #1890FF
      box-sizing border-box
      text-align center
      cursor pointer
      div
        padding 6px 0
        p
          font-size 14px
          color #333
          font-weight bold
          line-height 1.4
      .iconfont
        display block
        height @width
        width 100%
        background #1890FF
        color #FFF
        &.icon-arrow-circle-left
          display none
    .notice
      width 250px
      background #FFF
      padding 20px 12px 20px 20px
      line-height 2
      position relative
      margin-bottom 12px
      z-index 8
      .item
        p
          no-wrap()
          cursor pointer
          width 100%
        &.item-unread
          position relative
          &::before
            content ''
            position absolute
            left -8px
            top 50%
            margin-top -2px
            height 4px
            width 4px
            border-radius 50%
            background $base-color

    .question
      width 250px
      background #FFF
      padding 20px 12px 20px 20px
      line-height 2
      position relative
      z-index 7
      .item
        display flex
        align-items center
        .iconfont
          font-size 12px
          color $dblue
          margin-right 4px
        p
          no-wrap()
          cursor pointer
          width 100%

  .sider-bar-banner
    .notice
      min-height 118px
      position fixed
      top 62px
      right -250px
      box-shadow 0px 2px 4px 0px rgba(0, 0, 0, 0.3)
      cursor pointer
      transition all 0.3s
      &:hover
        right 0
        .icon-arrow-circle-left
          display block
        .icon-arrow-circle-right
          display none
    .question
      min-height 118px
      position fixed
      top 200px
      right -250px
      box-shadow 0px 2px 4px 0px rgba(0, 0, 0, 0.3)
      cursor pointer
      transition all 0.3s
      &:hover
        right 0
        .icon-arrow-circle-left
          display block
        .icon-arrow-circle-right
          display none
</style>
```

在页面中使用 sider-bar 组件：
```vue
<template>
  <div>
    <div class="wrapper m-fullscreen">
      <div class="content">
        <div class="content-inner">
          <div class="body">
            我是页面主体内容区
          </div>

          <!-- 公告/帮助文档 -->
          <div class="sider"><SiderBar :is-show="showSiderBar" @on-show="onShowSider" /></div>
        </div>

        <!-- 浮动公告/帮助文档 -->
        <div class="sider-banner"><SiderBar :is-show="showSiderBar" @on-show="onShowSider" :is-banner="true" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import SiderBar from './sider-bar'

export default {
  components: { SiderBar },
  data() {
    return {
      showNotice: true,
      showHelpDoc: true,
    }
  },

  computed: {
    showSiderBar() { // 控制是否显示公告和帮助文档，默认要先显示，否则组SiderBar件内的 created 不会执行
      return this.showNotice || this.showHelpDoc
    },
  },

  methods: {
    onShowSider(type, val) {
      this[type] = val
    },
  },
}
</script>

<style lang="stylus" scoped>
.m-fullscreen
  display flex
  padding-bottom 12px
  > .sidebar
    width 200px
  > .content
    width 100%
    box-sizing border-box
    padding 12px 12px 0
    overflow-x hidden
  .content
    position relative
    .content-inner
      display flex
      .sider
        flex-shrink 0

      .body
        flex 1
        width 100%
    .sider-banner
      display none

  // 屏幕宽度小于
  @media screen and (max-width 1440px)
    .content
      .sider-banner
        display block
      .content-inner
        .sider
          display none
</style>
```