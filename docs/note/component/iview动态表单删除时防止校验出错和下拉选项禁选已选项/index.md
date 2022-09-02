# iview 动态表单删除时防止校验出错和下拉选项禁选已选项

删除时通过 isDelete 字段去标识已删除的数据，iview 官方的[示例](http://v4.iviewui.com/components/form)其实也是这么干的，否则删除项后面的校验就会出错，注意最终要提交的数据自己要再去通过 isDelete 字段过滤一遍，还有就是增减按钮的逻辑需要自己额外判断。

禁选已选的下拉选项通过自己额外存一份已选的数据来判断是否禁选每条数据的下拉选项。

```vue
<template>
  <div>
    <p>动态表单删除时防止校验出错</p>
    <Form :model="form" :rules="rules" :label-width="100" class="form" ref="form">
      <FormItem label="名称" prop="name">
        <Input v-model="form.name" clearable placeholder="请输入名称">
      </FormItem>

      <div v-for="(item, index) in form.list" :key="index" class="form-item-dynamic">
        <template v-if="!item.isDelete">
          <FormItem
            :label="'港口' + index"
            :prop="'list.' + index + '.port'"
            :rules="{ required: true, message: '请选择港口', type: 'number', trigger: 'blur|change' }"
          >
            <Select
              v-model="form.list[index].port"
              clearable
              filterable
              multiple
              placeholder="请选择港口"
              @on-change="changPort($event, index)"
            >
              <Option
                v-for="(p,i) in portList"
                :value="p.id"
                :disabled="picked.includes(c.id) && (form.list[index].id !== c.id)"
              >
                {{ p.name }}
              </Option>
            </Select>
            <p class="btn-box">
              <Poptip
                v-if="showDelBtn"
                confirm
                transfer
                placement="top-end"
                title="您确定要删除吗?"
                :offset="16"
                @on-ok="onDel(index)"
              >
                <span class="btn">删除</span>
              </Poptip>
              <span class="btn" v-if="showAddIndex === index" @click="onAdd">添加</span>
            </p>
          </FormItem>
        </template>
      </div>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        list: [
          { port: '', isDelete: false }  // isDelete 初始化时不写在这儿，删除的时候要自己去 this.$set 强制更新界面
        ]
      },
      rules: {
        name: { required: true, message: '请输入', trigger: 'change|blur' },
        // phone: {
        //   required: true,
        //   trigger: 'change|blur',
        //   validator: (rule, value, callback) => {
        //     if (!value) {
        //       callback(new Error('请输入手机号'))
        //     } else if (!/^1[3-9]\d{9}$/.test(value)) {
        //       callback(new Error('手机号格式不正确'))
        //     } else {
        //       callback()
        //     }
        //   }
        // }
      },
      portList: [
        { name: '选项1', id: '1' },
        { name: '选项2', id: '2' },
        { name: '选项3', id: '3' },
        { name: '选项4', id: '4' },
        { name: '选项5', id: '5' }
      ]
      picked: [] // 存一份已选的选项，选过的就不能再选了
    }
  },

  computed: {
    // 为了保证iview的动态form校验不出错，动态校验有用到index，删了前面的后面的校验信息会跑前来
    // 所以此处删除是假删除，所以增减按钮控制需要额外判断
    showAddIndex() {
      let index = 0
      for (let i = this.form.list.length - 1; i > 0; i--) {
        if (!this.form.list[i].isDelete) {
          index = i
          break
        }
      }
      return index
    },
    showDelBtn() {
      return this.curList.length > 1
    },
    curList() {
      return this.form.list.filter(m => !m.isDelete)
    },
  },

  methods: {
    resetForm() {
        this.form = {
          name: '',
          list: [
            { port: '', isDelete: false }
          ]
        }
        this.$refs['form'].resetFields()
    },

    onAdd() {
      this.form['list'].push({ port: '', isDelete: false })
    },

    onDel(i) {
      this.form.list[i].isDelete = true

      // 删除时禁选下拉也要放出来
      let port = this.form.list[i].port
      if (port) {
        this.picked = this.picked.filter(m => m !== port)
      }
    },

    changPort() {
      let arr = []
      this.form.list.map(m => {
        if (m.port) arr.push(m.port)
      })
      this.picked = arr
    },

    onOk() {
      this.$refs['form'].validate(async (val) => {
        if (val) {
          console.log('success')
      })
    }
  }
}
</script>
<style lang='stylus' scoped>
.modal-detail
  .form
    .form-item-dynamic
      >>>.ivu-select
        width 300px
      .btn-box
        width 100px
        display inline-block
        .btn
          color $blue
          margin-left 20px
          cursor pointer
</style>
```