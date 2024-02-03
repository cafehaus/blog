<template>
  <div class="pagination">
    <button
      :disabled="pageNo === 1"
      @click="$emit('change-page-no', pageNo - 1)"
    >
      上一页
    </button>
    <button
      v-if="startAndEndIndex.start > 1"
      @click="$emit('change-page-no', 1)"
      :class="{ active: pageNo === 1 }"
    >
      1
    </button>
    <button v-if="startAndEndIndex.start > 2">···</button>

    <!-- 连续的页码 -->
    <template v-for="(page, index) in startAndEndIndex.end">
      <button
        v-if="page >= startAndEndIndex.start"
        :key="index"
        :class="{ active: pageNo === page }"
        @click="$emit('change-page-no', page)"
      >
        {{ page }}
      </button>
    </template>

    <button v-if="startAndEndIndex.end < totalPage - 1">···</button>
    <button
      v-if="startAndEndIndex.end < totalPage"
      :class="{ active: pageNo === totalPage }"
      @click="$emit('change-page-no', totalPage)"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo === totalPage"
      @click="$emit('change-page-no', pageNo + 1)"
    >
      下一页
    </button>

    <select
      v-model="size"
      class="select"
      @change="$emit('change-page-size', size)"
    >
      <option v-for="s in pageSizes" :key="s" :value="s">{{ s }} 条/页</option>
    </select>

    <span class="total">共 {{ total }} 条</span>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    pageNo: { // 页码
      type: Number,
      default: 1,
    },
    pageSize: { // 每页个数
      type: Number,
      default: 10,
    },
    total: { // 总条数
      type: Number,
      default: 0,
    },
    continues: { // 页码连续出现的个数
      type: Number,
      default: 5,
    },
    pageSizes: { // 每页显示个数选择器选项
      type: Array,
      default: [10, 20, 30, 40],
    },
  },
  data() {
    return {
      size: 10,
    }
  },

  computed: {
    // 总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    },

    // 计算出连续页码的起始数字与结束的数字
    startAndEndIndex() {
      const { continues, pageNo, totalPage } = this
      let start = 0, end = 0
      // 即总页数 < 连续页码
      if (continues > totalPage) {
        start = 1
        end = totalPage
      } else {
        start = pageNo - parseInt(continues / 2)
        end = pageNo + parseInt(continues / 2)
        if (start < 1) {
          start = 1
          end = continues
        }
        if (end > totalPage) {
          start = totalPage - continues + 1
          end = totalPage
        }
      }
      return { start, end }
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  font-size: 13px;
  color: var(--c-text);
  text-align: center;
  margin: 10px 0 0;
  button {
    min-width: 32px;
    height: 28px;
    padding: 0 8px;
    margin: 10px 5px 0;
    border: 0;
    border-radius: 2px;
    background: var(--c-bg-light);
    outline: none;
    display: inline-block;
    box-sizing: border-box;
    vertical-align: top;
    color: var(--c-text);
    cursor: pointer;
    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }
    &.active {
      cursor: not-allowed;
      background: var(--c-brand);
      color: #fff;
    }
  }
  .total {
    display: inline-block;
    margin-top: 10px;
    margin-left: 10px;
  }
  .select {
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    background: var(--c-bg);
    border: 1px solid var(--c-border);
    border-radius: 2px;
    padding: 0 8px;
    margin-left: 5px;
    margin-top: 10px;
    color: var(--c-text);
    line-height: 26px;
    &::-ms-expand,
    &::-webkit-scrollbar,
    &::-webkit-scrollbar-button {
      display: none;
    }
  }
}
</style>