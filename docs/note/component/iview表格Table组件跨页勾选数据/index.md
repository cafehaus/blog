# iview表格Table组件跨页勾选数据

```vue
<template>
  <div class="view">
    <Table
      :columns="columns"
      :data="tableData"
      @on-select-all-cancel="handleCancelSelectAll"
      @on-select-all="handleSelectAll"
      @on-select="handleSelect"
      @on-select-cancel="handleCancel"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { type: 'selection', width: 60, align: 'center', fixed: 'left' },
        { title: '订单号', key: 'orderId', width: 120, fixed: 'left' },
        {
          title: '状态',
          key: 'status',
          width: 140,
          fixed: 'right',
          render: (h, params) => {
            let orderType = +params.row.orderType
            let invstatus = params.row.invoiceStatus
            if (invstatus === '1') { return h('span', { style: { color: '#666' } }, orderType === 6 ? '待确认' : '待开船') }
            if (invstatus === '2') { return h('span', { style: { color: '#356CED' } }, '待开票') }
            if (invstatus === '3') {
              return h('div', {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              }, [
                h('span', { style: { color: '#666' } }, '已申请开票'),
                h('Icon', {
                  props: {
                    type: 'ios-arrow-forward',
                    size: '14',
                  },
                  style: {
                    cursor: 'pointer',
                    padding: '10px',
                  },
                  on: {
                    click: () => {
                      this.curInvInfo = params.row
                      this.showInvDetailModal = true
                    },
                  },
                })])
            }
            if (invstatus === '4') {
              return h('div', {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              }, [
                h('span', { style: { color: '#666' } }, '开票完成'),
                h('Icon', {
                  props: {
                    type: 'ios-arrow-forward',
                    size: '14',
                  },
                  style: {
                    cursor: 'pointer',
                    padding: '10px',
                  },
                  on: {
                    click: () => {
                      this.curInvInfo = params.row
                      this.showInvDetailModal = true
                    },
                  },
                })])
            }
          },
        },
      ],
      tableData: [],
      selectData: [],
    }
  },

  created() {
    this.initData()
  },

  methods: {
    initData() {
      this.getInvoiceList()
    },

    // 订单列表
    async getInvoiceList(page = 1, size = 10) {
      let params = {
        page,
        size,
      }

      const res = await this.$api.getList(params)
      this.loading = false
      if (res.code === '200') {
        let data = res.data
        this.tableData = data.records || []

        // 切换分页，重新勾选已选过的
        this.updateChecked()
      } else {
        this.$Message.error(res.msg)
      }
    },

    // 选中
    handleSelect(selection, row) {
      this.selectData.push(row)
    },

    // 取消选中
    handleCancel(selection, row) {
      for (let i = 0; i < this.selectData.length; i++) {
        if (this.selectData[i].orderId === row.orderId) {
          this.selectData.splice(i, 1)
        }
      }
    },

    // 全选
    handleSelectAll(selection) {
      // 合并去重，先选择了几项再点全选bug
      this.selectData.push(...selection.filter(item => !this.selectData.some(m => m.orderId === item.orderId)))
    },

    // 取消全选
    handleCancelSelectAll() {
      this.selectData = this.selectData.filter(item => !this.tableData.some(m => item.orderId === m.orderId))
    },

    // 更新选中状态 _checked
    updateChecked() {
      for (let i = 0; i < this.tableData.length; i++) {
        this.tableData[i]._checked = false
        for (let j = 0; j < this.selectData.length; j++) {
          if (this.selectData[j].orderId === this.tableData[i].orderId) {
            this.tableData[i]._checked = true
          }
        }
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
</style>
```