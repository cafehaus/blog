# vue老项目sass和element-ui开发踩坑

公司的一个各种依赖比较老的项目，习惯了之前的iview和stylus开发，刚接手还是有很多不习惯的地方。

### 项目部分依赖
* element-ui：2.2.2
* sass：1.26.1
* sass-loader：7.3.1
* webpack: 3.6.0
* vue: 2.5.2
* vue-router: 3.0.1
* vuex: 3.0.1

### sass
sass 之前用的 node-sass，替换成 sass（dart-sass）^1.56.1 版本后，深度选择器 ::v-deep 覆盖 element-ui 组件样式死活无效，降到 1.26.1 版本并且用 >>> 才生效了。

element-ui 2.2.2 版本的 el-input-number 数字输入框的 placeholder 无效，升级到 2.15.11会报错找不到这个文件：element-ui/lib/theme-chalk/index.css，去源码包里查看也确实没有 lib 这个文件夹，直接更新到截止2022年12月9日最新的 2.15.12版本就可以了。

注意用样式 content 去覆盖element-ui的官方组件图标，不同的版本的字体图标的 content 码是不一样的，比如覆盖下拉框右侧的箭头，不同版本要去看 el-icon-arrow-up 的实际content值。

sass(dart-sass)、sass-loader配置自动导入全局变量文件，sass-loader v8以下版本是 data，v8是prependData，最新的v10中是 additionalData。对应这个项目中要用：

```json
{
  "sass": {
    "data": `@import "@/styles/var.scss";` // 引入全局变量
  }
}
```

# Button
连续多个按钮组件 el-button，除了第一个会自动加上10px的左边距，如果不想要就得自己覆盖掉样式，或者中间加个占位标签阻止连续。

# Form
form 表单校验的trigger要写成数组 trigger: ['blur', 'change']，不是之前的老写的 trigger:'blur|change'，iview的也是一个数组。除了通过自定义的 validator 去自定义校验，如邮箱可以直接用type属性 type: 'email'，还可以直接用pattern定义个正则去校验。

多选框如果用 el-checkbox-group 包起来，v-model 的值如果不是数组类型，组件在页面上会直接不显示。

覆盖选择框 el-select 右侧的箭头图标，升级element-ui 版本，图标的content值可能发生变化，可以放到全局的 var.scss 中定义一个变量去统一维护。

下拉选择框 el-select 多选默认会撑高输入框，可加上 collapse-tags 属性就会只显示一个，其他全部折叠起来，跟 iview 下拉框组件的 max-tag-coun 类似(iview这个更高级点，还可以自己设置最多显示的个数)。

async-validator 自定义校验的 validator 参数位置为 (rule, value, callback)。

数字输入框组件 el-input-number 有个默认值为0，设置为 null 还是会是0，只能设置成 undefined；和 iview 的 input-number 组件正好相反，iview 设置成 undefined 会显示成 1，要设置成 null 才能置空。

select 组件的搜索过滤 filterable，默认是根据 label 来匹配的，不指定 label 时会默认跟 value 一样，所以 el-option 记得要设置 label 属性

el-form 表单中 el-date-picker 日期时间选择器校验规则，不要改成 type: 'date'，改成日期类型后如果不是直接选择的，比如直接赋值的日期时间字符串 2023-01-01 12:32:18，触发校验会报错 getTime is not a function

Form 表单校验不通过时，有滚动条自动跳转到错误的元素位置：el-form、el-collapse、el-dialog、el-table
```javascript
submit () {
  this.$refs.form.validate(vali => {
    if (vali) {
      console.log('ok')
    } else {
      this.scrollToError()
    }
  })
}

scrollToError() {
  function scrollIntoView() {
    const elements = document.getElementsByClassName('is-error')
    if (elements && elements.length) {
      elements[0].scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      })
    }
  }

  const tableErr = !(this.isCheck && !this.form.supplierId)
  // 如果折叠面板折叠了自动展开
  if (tableErr && this.active && !this.active.includes('2')) {
    this.active.push('2')
  }

  this.$nextTick(() => {
    // 表格里的表单有错误时表格自动滚动到最右边
    if (tableErr) {
      const table = this.$refs['el-table']
      const w = table.bodyWidth
      table.bodyWrapper.scrollLeft = Number(w.replace('px',''))

      // 滚动到表格中时，要先更新表格的滚动条
      this.$nextTick(() => {
        scrollIntoView()
      })
    } else {
      scrollIntoView()
    }
  })
}
```

el-input 直接加 v-model.trim 会导致输入框无法输入空格，这样字符串中间的空格也不能输入了，人家隔壁 iview 都是可以的

### Menu
el-menu 菜单组件刷新或者跳转到其他菜单，不能自动展开和选中当前菜单项，加一个属性 :default-active="$route.path" 就可以解决了，iview 里要自己手动去调一下更新菜单的方法 this.$refs.menu.updateOpened()

### Table
el-table 表格组件的 slot-scope 插槽中序号是 $index，iview 中才是 index

### 日期时间选择组件 el-date-picker 禁选当前时间之前的时间
设置 picker-options 属性，disabledDate 禁选日期，selectableRange 设置可选时分秒
```vue
<template>
  <div>
    <el-date-picker
      v-model="form.date"
      type="datetime"
      :picker-options="pickerOptions"
      placeholder="请选择时间"
    >
   </el-date-picker>
</div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        date: ''
      },
      pickerOptions: {
        disabledDate(date) {
          return date.getTime() < Date.now() - 8.64e7
        },
        // Mon Dec 19 2022 12:32:04 GMT+0800 (中国标准时间)
        selectableRange: `${Date().split(' ')[4]} - 23:59:59`
      },
    }
  },
}
</script>
```
