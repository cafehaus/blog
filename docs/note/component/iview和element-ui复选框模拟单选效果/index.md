# iview和element-ui复选框模拟单选效果

之所以有这种骚操作，只是因为 UI 小姐姐喜欢把单选操作做成这两个 UI 库里的复选框，要么自己封装，要么可以简单的参考如下直接来个障眼法

### element-ui 版本

```vue
<template>
  <el-checkbox-group v-model="form.fruit" @change="handleChange($event, 'fruit')">
    <el-checkbox label="苹果"></el-checkbox>
    <el-checkbox label="香蕉"></el-checkbox>
  </el-checkbox-group>
</template>
<script>
export default {
  data() {
    return {
      form: {
        fruit: []
      }
    }
  },
  methods: {
    // 模拟单选，参数 key 是一般页面有多个这种单选可直接复用
    handleChange(e, key) {
      if (e.length > 1) {
        this.form[key] = []
        let i = e.length - 1
        this.form[key] = [e[i]]
      }
    }
  }
}
</script>
```

### iview 版本(view-design)
```vue
<template>
  <CheckboxGroup v-model="form.fruit" @on-change="handleChange($event, 'fruit')">
    <Checkbox label="苹果"></Checkbox>
    <Checkbox label="香蕉"></Checkbox>
  </CheckboxGroup>
</template>
<script>
export default {
  data() {
    return {
      form: {
        fruit: []
      }
    }
  },
  methods: {
    handleChange(e, key) {
      if (e.length > 1) {
        this.form[key] = []
        let i = e.length - 1
        this.form[key] = [e[i]]
      }
    }
  }
}
</script>
```