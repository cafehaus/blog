# iview动态表单Form组件校验

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