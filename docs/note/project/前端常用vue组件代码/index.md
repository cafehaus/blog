# 前端常用vue组件代码

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
# 用户页面操作步骤引导提示

[driver.js](https://github.com/kamranahmedse/driver.js)
```bash
# npm i driver.js
# yarn add driver.js

import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'

export default {
  data() {
    return {
      driver: null,
      steps: [
        {
          element: '.guide-1', // 对应需要显示的id获取class
          popover: {
            title: ' ',
            description: '我是第一个步骤',
            position: 'bottom'
          }
        },
        {
          element: '.guide-2',
          popover: {
            title: ' ',
            description: '我是第二步',
            position: 'bottom'
          },
          padding: 5
        }
      ]
    }
  },

  mounted() {
    setTimeout(() => {
      this.init()
    }, 0)
    // this.$nextTick(() => {
    //   this.init()
    // })
  },

  destroyed() {
    // driver.reset()
    this.driver = null
  },

  methods: {
    init() {
      this.driver = new Driver({
        className: 'driver-popover', // className to wrap driver.js popover
        animate: true, // Animate while changing highlighted element
        opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
        padding: 10, // Distance of element from around the edges
        allowClose: false, // Whether clicking on overlay should close or not
        overlayClickNext: false, // Should it move to next step on overlay click
        doneBtnText: '完成', // Text on the final button
        closeBtnText: '关闭', // Text on the close button for this step
        nextBtnText: '下一步', // Next button text for this step
        prevBtnText: '上一步', // Previous button text for this step
        onHighlightStarted: (Element) => {
          Element.node.style.pointerEvents = 'none'
        },
        onDeselected: (Element) => {
          Element.node.style.pointerEvents = 'auto'
        }
      })
      this.driver.defineSteps(this.steps)
      this.driver.start(0)
    }
  }
}
```
## iview表格Table组件跨页勾选数据

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

## iview动态表单Form组件校验

v-form.vue组件：
```vue
<template>
  <div class="form-box">
    <Form class="form" :label-width="0" label-position="left" ref="form" :model="formData">
      <h2>方案{{ formIndex + 1 }}</h2>
      <h3>降价条件</h3>
      <div class="form-item-box">
        <span class="label">询价未下单间隔</span>
        <FormItem
          prop="startTime"
          :rules="{ required: true, validator: (rule, value, callback) => validateRule(rule, value, callback, 'startTime'), type: 'number', trigger: 'blur|change' }"
        >
          <InputNumber v-model="formData.startTime" :min="1" :max="1440" :precision="0" :disabled="!isEdit" placeholder="请输入起始时间（分）" />
        </FormItem>
        <span class="line">-</span>
        <FormItem
          prop="endTime"
          :rules="{ required: true, validator: (rule, value, callback) => validateRule(rule, value, callback, 'endTime'), type: 'number', trigger: 'blur|change' }"
        >
          <InputNumber v-model="formData.endTime" :min="1" :max="1440" :precision="0" :disabled="!isEdit" placeholder="请输入结束时间（分）" />
        </FormItem>
      </div>

      <h3>执行方案</h3>
      <div class="form-item-box" v-for="(itm, idx) in formData.executeSchemes" :key="idx">
        <span class="label">最小总价</span>
        <FormItem
          :prop="'executeSchemes.' + idx + '.minTotalPrice'"
          :rules="{ required: true, validator: (rule, value, callback) => validateRule(rule, value, callback, 'minTotalPrice', idx), type: 'number', trigger: 'blur|change' }"
        >
          <InputNumber v-model="itm.minTotalPrice" :min="1" :max="99999" :precision="0" :disabled="!isEdit" placeholder="请输入最小总价" />
        </FormItem>

        <span class="label label-margin">最大总价</span>
        <FormItem
          :prop="'executeSchemes.' + idx + '.maxTotalPrice'"
          :rules="{ required: true, validator: (rule, value, callback) => validateRule(rule, value, callback, 'maxTotalPrice', idx), type: 'number', trigger: 'blur|change' }"
        >
          <InputNumber v-model="itm.maxTotalPrice" :min="1" :max="99999" :precision="0" :disabled="!isEdit" placeholder="请输入最大总价" />
        </FormItem>

        <span class="label label-margin">降价金额</span>
        <FormItem
          :prop="'executeSchemes.' + idx + '.minReducePrice'"
          :rules="{ required: true, validator: (rule, value, callback) => validateRule(rule, value, callback, 'minReducePrice', idx), type: 'number', trigger: 'blur|change' }"
        >
          <InputNumber v-model="itm.minReducePrice" :min="1" :max="99999" :precision="0" :disabled="!isEdit" placeholder="请输入最小金额" />
        </FormItem>
        <span class="line">-</span>
        <FormItem
          :prop="'executeSchemes.' + idx + '.maxReducePrice'"
          :rules="{ required: true, validator: (rule, value, callback) => validateRule(rule, value, callback, 'maxReducePrice', idx), type: 'number', trigger: 'blur|change' }"
        >
          <InputNumber v-model="itm.maxReducePrice" :min="1" :max="99999" :precision="0" :disabled="!isEdit" placeholder="请输入最大金额" />
        </FormItem>
        <Poptip
          v-if="formData.executeSchemes.length > 1 && isEdit"
          confirm
          transfer
          title="你确定要删除此执行方案吗?"
          @on-ok="onDel('2', formIndex, idx)"
        >
          <Icon
            type="md-close-circle"
            size="24"
            color="#ccc"
            class="btn-remove"
          />
        </Poptip>
      </div>
      <p class="btn-add" @click="onAdd('2', formIndex)" v-if="formData.executeSchemes.length <= 4 && isEdit">
        <Icon type="md-add-circle" size="16" color="#2d8cf0" />新增执行方案
      </p>
    </Form>
    <Poptip
      v-if="isEdit"
      confirm
      transfer
      placement="bottom-end"
      title="你确定要删除此方案吗?"
      @on-ok="onDel('1', formIndex)"
    >
      <Icon
        type="md-close-circle"
        size="28"
        color="#ccc"
        class="btn-remove"
      />
    </Poptip>
  </div>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      default: () => ({})
    },
    formIndex: {
      type: Number,
      default: 0
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },

  methods: {
    // 新增
    onAdd(e, i) {
      this.$emit('on-add', e, i)
    },

    // 删除
    onDel(e, i, j) {
      this.$emit('on-del', e, i, j)
    },

    async onValidate() {
      let res = await this.$refs.form.validate()
      return res
    },

    // 校验
    validateRule(rule, value, callback, type, idx) {
      let start = this.formData.startTime
      let end = this.formData.endTime

      // 起始时间
      if (type === 'startTime') {
        if (value) {
          if (end && (start >= end)) {
            callback(new Error('起始时间需小于结束时间'))
          } else {
            callback()
          }
        } else {
          callback(new Error('请输入起始时间'))
        }
      }

      // 结束时间
      if (type === 'endTime') {
        if (value) {
          if (start && (end <= start)) {
            callback(new Error('结束时间需大于起始时间'))
          } else {
            callback()
          }
        } else {
          callback(new Error('请输入结束时间'))
        }
      }

      if (!idx && idx !== 0) return // 不加这个判断下面的idx会报错
      let minT = this.formData.executeSchemes[idx].minTotalPrice
      let maxT = this.formData.executeSchemes[idx].maxTotalPrice
      let minR = this.formData.executeSchemes[idx].minReducePrice
      let maxR = this.formData.executeSchemes[idx].maxReducePrice

      // 最小总价
      if (type === 'minTotalPrice') {
        if (value) {
          if (maxT && (minT >= maxT)) {
            callback(new Error('最小总价需小于最大总价'))
          } else {
            callback()
          }
        } else {
          callback(new Error('请输入最小总价'))
        }
      }

      // 最大总价
      if (type === 'maxTotalPrice') {
        if (value) {
          if (minT && (maxT <= minT)) {
            callback(new Error('最大总价需大于最小总价'))
          } else {
            callback()
          }
        } else {
          callback(new Error('请输入最大总价'))
        }
      }

      // 最小降价金额
      if (type === 'minReducePrice') {
        if (value) {
          if (maxR && (minR >= maxR)) {
            callback(new Error('最小金额需小于最大金额'))
          } else {
            callback()
          }
        } else {
          callback(new Error('请输入最小降价金额'))
        }
      }

      // 最大降价金额
      if (type === 'maxReducePrice') {
        if (value) {
          if (minR && (maxR <= minR)) {
            callback(new Error('最大金额需大于最小金额'))
          } else {
            callback()
          }
        } else {
          callback(new Error('请输入最大降价金额'))
        }
      }
    },

    // 重置校验
    onResetField() {
      this.$refs.form.resetFields()
    },
  },
}
</script>

<style lang="stylus" scoped>
  .form-box
    margin-bottom 10px
    position relative
    .form
      background #FFF
      width 100%
      border-radius 4px
      padding 16px
      margin 0 auto
      h3
        color #999
        font-weight normal
        margin 10px 0
      .label
        position relative
        padding-bottom 24px
        margin-right 10px
        &:before
          content '*'
          color red
          position absolute
          left -4px
          top -4px
        &.label-margin
          margin-left 40px
      .line
        margin 0 10px 24px
 
      .form-item-box
        display flex
        align-items center
        >>>.ivu-icon
          margin-left 6px
          margin-bottom 24px
        >.ivu-poptip
          .btn-remove
            cursor pointer

    >.ivu-poptip
      position absolute
      right -6px
      top -6px
      .btn-remove
        cursor pointer

  .btn-add
    display inline-block
    margin-top 8px
    cursor pointer
    color #2d8cf0
    text-align center
    >>>.ivu-icon
      margin-right 2px
  >>>.ivu-form-item,
  >>>.ivu-input-number
    width 160px !important

</style>
```

使用 v-form 表单组件：

```vue
<template>
  <div class="view">
    <section class="content">
      <VForm
        v-for="(item, index) in listData"
        :key="index"
        :form-data="item"
        :form-index="index"
        :is-edit="isEdit"
        :ref="'form' + index"
        @on-add="onAdd"
        @on-del="onDel"
      />
      <p class="btn-add" @click="onAdd('1')">
        <Icon type="md-add-circle" size="20" color="#2d8cf0" />新增方案
      </p>
    </section>
  </div>
</template>

<script>
import VForm from './v-form'
export default {
  components: {
    VForm
  },
  data() {
    return {
      isEdit: false,
      listData: [{
        executeSchemes: [{
          minTotalPrice: null,
          maxTotalPrice: null,
          minReducePrice: null,
          maxReducePrice: null
        }]
      }],
    }
  },

  created() {
    this.initData()
  },

  methods: {
    initData() {
    },

    // 新增
    onAdd(e, i) {
      if (e === '1') { // 1 新增方案 2 新增执行方案
        if (this.listData.length === 5) {
          this.$Message.warning('最多只能新增5个方案哟！')
          return
        }

        this.listData.push({
          startTime: null,
          endTime: null,
          executeSchemes: [{
            minTotalPrice: null,
            maxTotalPrice: null,
            minReducePrice: null,
            maxReducePrice: null
          }]
        })
      }
      if (e === '2') {
        this.listData[i].executeSchemes = this.listData[i].executeSchemes || []
        this.listData[i].executeSchemes.push({
          minTotalPrice: null,
          maxTotalPrice: null,
          minReducePrice: null,
          maxReducePrice: null
        })
      }
    },

    // 删除
    onDel(e, i, j) {
      if (e === '1') { // 1 新增方案 2 新增执行方案
        // if (this.listData.length === 1) {
        //   this.$Message.warning('不能再删啦！')
        //   return
        // }
        this.listData.splice(i, 1)
      }
      if (e === '2') {
        if (this.listData[i].executeSchemes.length === 1) {
          this.$Message.warning('不能再删啦！')
          return
        }
        this.listData[i].executeSchemes.splice(j, 1)
        // 刪除執行方案后重新校验下，prop通过index去绑定的，会出错
        this.$nextTick(() => {
          this.$refs['form' + i][0].onValidate()
        })
      }
    },

    // 保存
    async onSave() {
	  // TODO：此处应该在 v-form 组件里用 promise 来返回校验结果
      // 验证表单
      let arr = []
      await this.listData.forEach(async (item, index) => { // 验证结果是异步的，前面记得加 await
          const res = await this.$refs['form' + index][0].onValidate()
          arr.push(!!res)
          if (index === this.listData.length - 1) {
            let flag = arr.every(item => {
              return item === true
            })
            if (flag) {
              this.submitInfo()
            } else {
              this.$Message.warning('请完善所有必填项')
            }
          }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  .btn-add
    margin-top 16px
    cursor pointer
    font-size 14px
    color #2d8cf0
    line-height 1
    font-weight 600
    display flex
    align-items center
    >>>.ivu-icon
      margin-right 2px

</style>
```

## iview的Table组件套FormItem表单动态校验

```vue
<template>
  <Modal
    :value="value"
    title="订单信息"
    width="1000"
    class="modal-detail"
    @on-cancel="close"
  >
    <Form :model="form" :rules="rules" :label-width="0" class="form" ref="form">
      <FormItem label="名称" prop="name" :label-width="80">
        <Input v-model="form.name" placeholder="请输入名称" />
      </FormItem>

      <h3 class="subtitle">表格一</h3>
      <Table class="table" border :columns="columns" :data="form.tableData">
        <template slot="weight" slot-scope="{ index }">
          <FormItem
            :title="error['tableData.' + index + '.weight']"
            :prop="'tableData.' + index + '.weight'"
            :rules="{ required: true, validator: (rule, value, callback) => validateRule(rule, value, callback, 'weight', index, 'tableData'), type: 'number', trigger: 'blur|change' }"
            :show-message="false"
            :label-width="0"
          >
            <InputNumber
              v-model="form.tableData[index].weight"
              :min="0.01"
              :max="9999"
              :precision="2"
              :active-change="false"
              placeholder="请输入重量"
            />
          </FormItem>
        </template>
        <template slot="length" slot-scope="{ index }">
          <FormItem
            :title="error['tableData.' + index + '.length']"
            :prop="'tableData.' + index + '.length'"
            :rules="{ required: true, validator: (rule, value, callback) => validateRule(rule, value, callback, 'length', index, 'tableData'), type: 'number', trigger: 'blur|change' }"
            :show-message="false"
            :label-width="0"
          >
            <InputNumber
              v-model="form.tableData[index].length"
              :min="0.01"
              :max="9999"
              :precision="2"
              :active-change="false"
              placeholder="请输入"
            />
          </FormItem>
        </template>

        <template slot="action" slot-scope="{ index }">
          <div class="table-action">
            <Icon
              v-if="form.tableData && form.tableData.length === (index + 1)"
              type="ios-add-circle-outline"
              size="20"
              color="#1890ff"
              @click="onAdd('tableData')"
            />
            <Poptip
              v-if="form.tableData && form.tableData.length > 1"
              confirm
              transfer
              placement="top-end"
              title="你确定要删除此项吗?"
              :offset="16"
              @on-ok="onDel(index, 'tableData')"
            >
              <Icon type="ios-remove-circle-outline" size="20" color="#999" />
            </Poptip>
          </div>
        </template>
      </Table>

      <h4 class="subtitle">表格二</h4>
      <Table class="table" border :columns="columnsTwo" :data="form.tableDataTwo">
        <template slot="weight" slot-scope="{ index }">
          <FormItem
            :title="error['tableDataTwo.' + index + '.weight']"
            :prop="'tableDataTwo.' + index + '.weight'"
            :rules="{ required: true, validator: (rule, value, callback) => validateRule(rule, value, callback, 'weight', index, 'tableDataTwo'), type: 'number', trigger: 'blur|change' }"
            :show-message="false"
            :label-width="0"
          >
            <InputNumber
              v-model="form.tableDataTwo[index].weight"
              :min="0.01"
              :max="9999"
              :precision="2"
              :active-change="false"
              placeholder="请输入重量"
            />
          </FormItem>
        </template>
        <template slot="length" slot-scope="{ index }">
          <FormItem
            :title="error['tableDataTwo.' + index + '.length']"
            :prop="'tableDataTwo.' + index + '.length'"
            :rules="{ required: true, validator: (rule, value, callback) => validateRule(rule, value, callback, 'length', index, 'tableDataTwo'), type: 'number', trigger: 'blur|change' }"
            :show-message="false"
            :label-width="0"
          >
            <InputNumber
              v-model="form.tableDataTwo[index].length"
              :min="0.01"
              :max="9999"
              :precision="2"
              :active-change="false"
              placeholder="请输入"
            />
          </FormItem>
        </template>

        <template slot="action" slot-scope="{ index }">
          <div class="table-action">
            <Icon
              v-if="form.tableDataTwo && form.tableDataTwo.length === (index + 1)"
              type="ios-add-circle-outline"
              size="20"
              color="#1890ff"
              @click="onAdd('tableDataTwo')"
            />
            <Poptip
              v-if="form.tableDataTwo && form.tableDataTwo.length > 1"
              confirm
              transfer
              placement="top-end"
              title="你确定要删除此项吗?"
              :offset="16"
              @on-ok="onDel(index, 'tableDataTwo')"
            >
              <Icon type="ios-remove-circle-outline" size="20" color="#999" />
            </Poptip>
          </div>
        </template>
      </Table>

      <FormItem label="备注" :label-width="40">
        <Input v-model="form.remark" type="textarea" placeholder="请输入备注" />
      </FormItem>
    </Form>

    <footer slot="footer">
      <Button @click="close">关闭</Button>
      <Button type="primary" @click="onOk">保存</Button>
    </footer>
  </Modal>
</template>

<script>
export default {
  name: 'modal-form',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    curRow: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      error: {}, // 触发校验时存一份错误数据，table 里不好展示错误信息，给 FormItem 加一个 title 属性，鼠标放上时可以看到校验提示
      form: {
        name: '',
        remark: '',
        tableData: [{ weight: null, length: null }],
        tableDataTwo: [{ weight: null, length: null }]
      },
      rules: {
        name: { required: true, message: '请输入名称', trigger: 'change|blur' }
      },
      columns: [
        { title: '重量', slot: 'weight', align: 'center' },
        { title: '长度', slot: 'length', align: 'center' },
        { title: '操作', slot: 'action', align: 'center', width: 100 }
      ],
      columnsTwo: [
        { title: '重量', slot: 'weight', align: 'center' },
        { title: '长度', slot: 'length', align: 'center' },
        { title: '操作', slot: 'action', align: 'center', width: 100 }
      ]
    }
  },

  watch: {
    value(v) {
      if (v) {
        this.initData()
      } else {
        this.form = {
          name: '',
          remark: '',
          tableData: [{ weight: null, length: null }],
          tableDataTwo: [{ weight: null, length: null }]
        }
        this.$refs['form'].resetFields()
      }
    }
  },

  methods: {
    initData() {},

    onOk() {
      this.$refs['form'].validate(async (val) => {
        if (val) {
          console.log('success')
        }
      })
    },

    onAdd(key) {
      this.form[key].push({ weight: null, length: null })
    },

    onDel(i, key) {
      this.form[key].splice(i, 1)
      // this.this.$refs['form'].validate()

      // 因为动态表单校验域有用到序号 index，所以删除的时候删除项后面的数据校验就会出错
      // 循环去将后面的项重新校验一遍
      this.$nextTick(() => {
        if (i < this.form[key].length) {
          for (let j = i; j < this.form[key].length; j++) {
            let keys = ['weight', 'length']
            keys.map(m => {
              this.$refs['form'].validateField(`${key}.${j}.${m}`)
            })
          }
        }
      })
    },

    // 校验
    validateRule(rule, value, callback, type, idx, key) {
      let field = `${key}.${idx}.${type}` // 校验域

      if (value) {
        this.error[field] = ''
        callback()
      } else {
        this.$set(this.error, field, '请输入')
        callback(new Error('请输入'))
      }
    },

    close() {
      this.$emit('input', false)
    }
  }
}
</script>
<style lang='stylus' scoped>
.modal-detail
  .subtitle
    font-size 12px
    color #495060
    margin-bottom 10px
    padding-left 10px
    position relative
    &:before
      content '*'
      color #ed3f14
      position absolute
      top -3px
      left 2px
    &:not(:first-child)
      margin-top 20px

  .form
    .form-row
      display flex
      justify-content space-between
      >>>.ivu-input-number
        width 180px
    .table
      margin-bottom 20px
      >>>.ivu-table-cell
        padding 0 8px
      >>>.ivu-form-item
        margin-bottom 0
      .table-action
        .ivu-icon
          cursor pointer
          &.ivu-icon-ios-remove-circle-outline
            margin-left 4px
</style>
```

## 全屏PC端侧边来浮窗工具条

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

## iview的Poptip组件动态获取数据封装

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

## 通过 component 标签动态加载组件

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

## 步骤条和展开收起折叠面板

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
