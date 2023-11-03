<template>
  <div class="bookmark" :class="{'bookmark-box': isRoot}">
    <div
      v-for="(item, index) in children"
      :key="index"
      class="bookmark-item"
      :class="{'bookmark-item-title': item.nodeName === 'h3'}"
    >
      <bookmark
        v-if="item.children && item.children.length && !['h3', 'a'].includes(item.nodeName)"
        :children="item.children"
        :is-root="false"
      />
      <template v-else>
        <h4 v-if="item.nodeName === 'h3'" class="bookmark-title">{{ item.children[0].textContent }}</h4>
        <div v-else-if="item.nodeName === 'a'" class="bookmark-item-card" @click="goto(item.attributes.href)">
          <div class="bookmark-info">
            <img :src="item.attributes.icon || '/images/logo.png'" class="bookmark-img" />
            <span class="bookmark-name">{{ item.children[0].textContent }}</span>
          </div>
          <p class="bookmark-des">{{ item.children[0].textContent }}</p>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import bookmarkData from '../../note/frontEnd/我的书签bookmark/bookmark.json'
export default {
  props: {
    children: {
      type: Array,
      default: () => {
        const book = bookmarkData.children[0].children[1].children
        // 深度克隆下，否则每次切换页面回来都会删除列表最后一个
        let list = JSON.parse(JSON.stringify(book))
        // 把第一个百度删掉，最后一个"文档"会经常用放到最前面
        list[0] = list.splice(list.length - 1, 1)[0]
        return list
      },
    },
    isRoot: { // 是否根节点，用来添加额外的样式
      type: Boolean,
      default: true,
    },
  },
  name: 'bookmark',
  data() {
    return {}
  },
  methods: {
    goto(url) {
      window.open(url)
    },
  }
}
</script>
<style lang='scss' scoped>
.bookmark {
  .bookmark-item {
    .bookmark {
      display: flex;
      flex-wrap: wrap;
      .bookmark-item-title {
        width: 100%;
        margin-left: 16px;
        .bookmark-title {
          color: var(--c-text-lighter);
        }
      }
    }
    .bookmark-item-card {
      border-radius: 6px;
      padding: 10px;
      width: 206px;
      margin-left: 16px;
      margin-bottom: 16px;
      overflow: hidden;
      border: 1px solid var(--c-border);
      cursor: pointer;
      .bookmark-info {
        display: flex;
        align-items: center;
        .bookmark-img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .bookmark-name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1;
          margin-left: 10px;
          font-size: 14px;
          font-weight: bold;
          color: var(--c-brand);
        }
      }
      .bookmark-des {
        font-size: 12px;
        color: var(--c-text-quote);
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin: 10px 0 0 0;
        height: 42px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .bookmark {
    .bookmark-item {
      .bookmark {
        display: block;
      }
      .bookmark-item-card {
        width: auto;
        .bookmark-des {
          height: auto;
        }
      }
    }
  }
}
</style>