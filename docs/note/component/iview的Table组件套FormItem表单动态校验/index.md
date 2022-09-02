# iview的Table组件套FormItem表单动态校验

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