<template>
    <div class="pagination">
      <button
        :disabled="pageNo == 1"
        @click="$emit('getPageNo', pageNo - 1)"
      >
        上一页
      </button>
      <button
        v-if="startNumAndEndNum.start > 1"
        @click="$emit('getPageNo', 1)"
        :class="{ active: pageNo == 1 }"
      >
        1
      </button>
      <button v-if="startNumAndEndNum.start > 2">···</button>
   
      <!-- 连续的页码 -->
      <template v-for="(page, index) in startNumAndEndNum.end">
        <button
          v-if="page >= startNumAndEndNum.start"
          :key="index"
          :class="{ active: pageNo == page }"
          @click="$emit('getPageNo', page)"
        >
          {{ page }}
        </button>
      </template>
   
      <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
      <button
        v-if="startNumAndEndNum.end < totalPage"
        :class="{ active: pageNo == totalPage }"
        @click="$emit('getPageNo', totalPage)"
      >
        {{ totalPage }}
      </button>
      <button
        @click="$emit('getPageNo', pageNo + 1)"
        :disabled="pageNo == totalPage"
      >
        下一页
      </button>

      <select
        v-model="size"
        class="select"
        @change="$emit('getPageSize', size)"
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
        return Math.ceil(this.total / this.pageSize);
      },
   
      // 计算出连续页码的起始数字与结束的数字
      startNumAndEndNum() {
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
    text-align: center;
    margin: 20px 0 40px;
    button {
      margin: 0 5px;
      background: var(--c-bg-light);
      color: var(--c-text);
      outline: none;
      border-radius: 2px;
      padding: 0 8px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 32px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;
      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }
      &.active {
        cursor: not-allowed;
        background-color: var(--c-brand);
        color: #fff;
      }
    }
    .total {
      font-size: 13px;
      line-height: 28px;
      margin-left: 10px;
    }
    .select {
      appearance: none;
      -webkit-appearance: none;
      outline: none;
      border: 1px solid var(--c-border);
      border-radius: 2px;
      padding: 0 8px;
      font-size: 13px;
      line-height: 26px;
      &::-ms-expand,
      &::-webkit-scrollbar,
      &::-webkit-scrollbar-button {
        display: none;
      }
    }
  }
  </style>