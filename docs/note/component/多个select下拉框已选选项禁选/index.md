# 多个select下拉框已选选项禁选

业务中经常会遇到表单中动态多个下拉框，要求已经选过的选项，后面的下拉框就不能再选了，可以直接利用 disabled 去禁选就行了，如果要求已选的不显示，可以通过 v-show 根据 disabled 同样的判断去隐藏掉。

如果是二次编辑信息回显时，注意也要自己先把已选的加入到 picked 数组里，可以直接调用下 handleChange 方法就行了。

### element-ui 下拉选框，可多选版本
```vue
<template>
  <div v-for="(m, i) in form.tableData" :key="i">
    <el-select
      v-model.trim="form.tableData[i].fruits"
      placeholder="请选择"
      multiple
      filterable
      collapse-tags
      @change="handleChange"
    >
      <!--禁选掉不可选的选项 -->
      <el-option
        v-for="(item, index) in fruitList"
        :key="index"
        :label="item.name"
        :value="item.id"
        :disabled="picked.includes(item.id) && !form.tableData[i].id.includes(item.id)"
      />

      <!--直接隐藏掉不可选的选项 -->
      <!--<template v-for="(item, index) in fruitList">
        <el-option
          v-show="picked.includes(item.id) && !form.tableData[i].id.includes(item.id)"
          :key="index"
          :label="item.name"
          :value="item.id"
        />
      </template> -->
    </el-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fruitList: [
          { id: 1, name: '苹果' },
          { id: 2, name: '香蕉' },
          { id: 3, name: '橙子' },
          { id: 4, name: '菠萝' },
          { id: 5, name: '榴莲' },
          { id: 6, name: '雪梨' },
          { id: 7, name: '青枣' },
          { id: 8, name: '西瓜' },
          { id: 9, name: '菠萝' },
          { id: 10, name: '荔枝' },
        ]
        form: {
          tableData: [
            { fruits: [] },
            { fruits: [] },
            { fruits: [] },
          ]
        }
      }
    },
    methods: {
      handleChange(list) {
        // if (list && list.length) {
        //   this.picked.push(...list)
        // }

        /**
         * 为了同时兼容增加和删除选项，所以每次直接遍历
         */
        let arr = []
        this.form.tableData.map(m => {
          if (m.fruits && m.fruits.length) arr.push(...m.fruits)
        })
        this.picked = arr
      },
    }
  }
</script>
```

### iveiw 下拉选框，单选版本
```vue
<template>
  <div v-for="(m, i) in form.tableData" :key="i">
    <Select
      v-model.trim="form.tableData[i].fruits"
      placeholder="请选择"
      filterable
      @on-change="handleChange"
    >
      <!--禁选掉不可选的选项 -->
      <Option
        v-for="(item, index) in fruitList"
        :key="index"
        :label="item.name"
        :value="item.id"
        :disabled="picked.includes(item.id) && !form.tableData[i].id.includes(item.id)"
      />

      <!--直接隐藏掉不可选的选项 -->
      <!--<template v-for="(item, index) in fruitList">
        <Option
          v-show="picked.includes(item.id) && !form.tableData[i].id.includes(item.id)"
          :key="index"
          :label="item.name"
          :value="item.id"
        />
      </template> -->
    </Select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fruitList: [
          { id: 1, name: '苹果' },
          { id: 2, name: '香蕉' },
          { id: 3, name: '橙子' },
          { id: 4, name: '菠萝' },
          { id: 5, name: '榴莲' },
          { id: 6, name: '雪梨' },
          { id: 7, name: '青枣' },
          { id: 8, name: '西瓜' },
          { id: 9, name: '菠萝' },
          { id: 10, name: '荔枝' },
        ]
        form: {
          tableData: [
            { fruits: null },
            { fruits: null },
            { fruits: null },
          ]
        }
      }
    },
    methods: {
      handleChange(e) {
        // if (e) {
        //   this.picked.push(e)
        // }

        /**
         * 为了同时兼容增加和删除选项，所以每次直接遍历
         */
        let arr = []
        this.form.tableData.map(m => {
          if (m.fruits) arr.push(m.fruits)
        })
        this.picked = arr
      },
    }
  }
</script>
```