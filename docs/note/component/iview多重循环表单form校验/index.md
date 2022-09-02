# iview多重循环表单form校验

多重循环主要是处理 prop 的编写方式，一级循环 prop：${一级list的key}.' + ${一级index} + '.${list的字段key}'，而二级循环 prop：${一级list的key}.' + ${一级index} + '.${二级subList的key}' + ${二级subIndex} + '.${二级subList的字段key}'，更多级依次往下循环。

注意如果循环表单可以增减，注意删除一定要用假删除，自己增加一个 isDelete 之类的字段去判断是否已经删除，因为动态表单校验里的 prop 有用到循环序号 index，如果直接删除数组数据，会导致后面的校验跑到前面来，从而校验出错，除非自己每次删除后都重置表单校验。

```vue
<template>
  <div>
    <h4>iview多重循环表单form校验</h4>
    <Form :model="form" :rules="rules" :label-width="100" class="form" ref="form">
      <FormItem label="名称" prop="name">
        <Input
          v-model="form.name"
          clearable
          filterable
          placeholder="请输入名称"
        />
      </FormItem>
      <div v-for="(itm, idx) in form.friendList" :key="idx">
        <h5 class="label">{{ `${itm.portCode}(${itm.portRegional})` }}</h5>
        <FormItem
          label="朋友名称"
          :prop="'friendList.' + idx + '.friendName'"
          :rules="{ required: true, message: '请输入朋友名称', trigger: 'blur|change' }"
        >
          <Input
            v-model="form.friendName"
            clearable
            filterable
            placeholder="请输入朋友名称"
          />
        </FormItem>

        <template v-for="(p, subIdx) in itm.phoneList">
          <FormItem
            :key="subIdx"
            label="手机号"
            :prop="'friendList.' + idx + '.phoneList.' + subIdx + '.phone'"
            :rules="{ required: true, validator: validatePhone, trigger: 'blur|change' }"
          >
            <Input
              v-model="p.phone"
              clearable
              filterable
              placeholder="请输入手机号"
            />
          </FormItem>
        </template>
      </div>
    </Form>

    <Button type="primary" @click="submit">提交</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        list: []
      },
      rules: {
        name: { required: true, message: '请输入名称', trigger: 'change|blur' },
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
      }
    }
  },

  methods: {
    validatePhone(rule, value, callback) {
      if (!value) {
        callback(new Error('请输入手机号'))
      } else if (!/^1[3-9]\d{9}$/.test(value)) {
        callback(new Error('手机号格式不正确'))
      } else {
        callback()
      }
    },

    submit() {
      this.$refs['form'].validate(val => {
        if (val) {
          console.log('校验成功')
        }
      })
    },

    resetForm() {
      this.$refs['form'].resetFields()
    }
  }
}
</script>
<style>
</style>
```