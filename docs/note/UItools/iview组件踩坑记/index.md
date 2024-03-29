## iview 组件踩坑记

### Modal 弹窗中再弹窗，关闭一个后禁止页面滚动会失效
Modal 弹窗的禁止滚动是用 scrollable 和 lockScroll 来设置是否弹窗后面的页面可以滚动，但是如果是在已经禁止滚动的弹窗中再弹这一个，关闭的时候会导致动态移除了 body 上的 overflow：hidden，会导致当前没关闭的弹窗一下后面的页面可以滚动了，所以可以直接加个判断，当前弹窗已经禁止滚动了，子弹窗的禁止滚动就设置成允许滚动，只用设置 lockScroll 这一个参数就行了

### Modal 弹窗中的 Form 表单里的 Select 下拉选择组件校验问题

Form 表单默认的 async-validator 校验，校验规则里如果不指定数据类型，默认是 String，但是下拉选项里的枚举值后端有时会弄成 Number，所以要自己指定 type: 'number'，否则校验会一直不通过。

校验触发 trigger 一般直接选的用 change，输入的用 blur。

注意 Modal + Form + Select时，如果 trigger: 'change'，关闭弹窗或显示弹窗的时候，Select 的 on-change 事件有时会被莫名其妙触发，然后会触发校验，解决方法：① 将 trigger 改成 blur；② 弹出或关闭时都自己手动重置下表单校验 this.$refs['form'].resetFields()

```vue
<template>
  <Modal
    :value="value"
    title="编辑"
    @on-cancel="close"
    @on-ok="onOk"
  >
    <Form :model="form" :rules="rules" :label-width="100" class="form" ref="form">
      <FormItem label="类型" prop="type">
        <Select v-model="form.type" clearable placeholder="请选择类型">
          <Option :value="1">大船</Option>
          <Option :value="2">灰机</Option>
          <Option :value="3">卡车</Option>
        </Select>
      </FormItem>
      <FormItem label="名称" prop="name">
        <Input v-model="form.name" placeholder="请输入名称" />
      </FormItem>
    </Form>
  </Modal>
</template>

<script>
export default {
  name: 'modal-edit',
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
      form: {
        type: null,
        name: ''
      },
      rules: {
        type: [{ required: true, message: '请选择类型', type: 'number', trigger: 'change|blur' }],
        name: [{ required: true, message: '请输入名称', trigger: 'change|blur' }]
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
      loading: false
    }
  },

  computed: {
    isEdit() {
      return !!this.curRow.id
    }
  },

  watch: {
    value(v) {
      if (v) {
        if (this.isEdit) {
          let { type, name } = this.curRow
          this.form = {
            type,
            name
          }
        } else {
          this.form = {
            type: null,
            name: ''
          }
        }
        this.$refs['form'].resetFields()
      } else {
        this.$refs['form'].resetFields()
      }
    }
  },

  methods: {
    onOk() {
      this.$refs['form'].validate(async (val) => {
        if (val) {
          console.log('success')
        }
      })
    },

    close() {
      this.$emit('input', false)
    }
  }
}
</script>
<style lang='stylus' scoped>
</style>
```

### Menu、MenuItem菜单组件不能自动展开和异步控制渲染当前页刷新不能选中

手风琴模式，通过路由跳转到二级菜单，二级菜单不会自动展开，需要用户手动点一下，解决方式是去监听路由变化，然后调用 updateOpened 强制更新菜单展开。

在当前页面选中刷新，切当前菜单有异步控制渲染，会造成不能选中，解决办法监听异步值，调用 updateActiveName 强制更新

```vue
<template>
  <Menu ref="menu" active-name="1-2" :open-names="['1']">
    <Submenu name="1">
      <MenuItem name="1-1">Option 1</MenuItem>
      <MenuItem name="1-2">Option 2</MenuItem>
    </Submenu>
    <Submenu name="2">
      <MenuItem name="2-1">Option 3</MenuItem>
      <MenuItem v-if="showMenu" name="2-2">Option 4</MenuItem>
    </Submenu>
    <MenuItem name="3">Option 5</MenuItem>
  </Menu>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  watch: {
    $route(v) {
      this.$nextTick(() => {
        this.$refs.menu && this.$refs.menu.updateOpened()
      })
    },
    showMenu(v) {
      // 页面刷新会造成不能选中，异步控制造成选中的类名 ivu-menu-item-active 不能加到 MenuItem 上去
      if (v) {
        this.$nextTick(() => {
          this.$refs.menu && this.$refs.menu.updateActiveName()
        })
      }
    },
  },
  create() {
    // 模拟异步
    setTimeout(() => {
      this.showMenu = true
    }, 10000)
  }
}
</script>
```

### select组件加了filterable选择后输入框的值前后有空格的问题

可搜索 filterable 设置成 true 后，选择后输入框的值前后有空格会多出很多空格，造成显示错乱

<img src="./2.png" />

最后发现是代码格式化的问题，加了 filterable 后选项 Option 里的文字不要换行，只要格式化换行了就会造成前后空格：
```vue
<template>
    <!-- 有问题的写法 -->
    <Select
        v-model="form.name"
        :filterable="true"
        clearable
        transfer
    >
        <Option
            v-for="(n, i) in options"
            :value="n.value"
            :key="i"
        >
            {{ n.name }}
        </Option>
    </Select>

    <!-- 推荐显示正常的写法：版本1 -->
    <Select
        v-model="form.name"
        :filterable="true"
        clearable
        transfer
    >
        <Option v-for="(n, i) in options" :value="n.value" :key="i">{{ n.name }}</Option>
    </Select>


    <!-- 推荐显示正常的写法：版本2 -->
    <Select
        v-model="form.name"
        :filterable="true"
        clearable
        transfer
    >
        <Option v-for="(n, i) in options" :value="n.value" :key="i" :label="c.name" />
    </Select>

    <!-- 额外发现的问题 -->
    <!-- 如果用了 Option 来自定义选项内容，记得一定要给 Option 加上 label 来指定选中后的显示值，否则选中后会出现选不中或者显示出自定义选项里面的全部内容 -->
    <Select
        v-model="form.name"
        :filterable="true"
        clearable
        transfer
    >
        <Option v-for="(n, i) in options" :value="n.value" :key="i" :label="n.name">
            <span>{{ n.name }}</span>
            <span style="float:right;color:#ccc">{{ n.statusName }}</span>
        </Option>
    </Select>
</template>
```
微信小程序里的 text 组件之前也遇到类似的问题，text 组件里的文字如果换行格式化，空格也会被保留，造成页面布局错乱。

### page 分页组件

切换页数的 on-page-size-change 事件监听页数改变，我们一般会直接将传过来的 size 赋值给页数，然后手动载获取一下数据。但是这里 iview 有坑：在页码非第一页时会自动去触发页码改变事件获取数据，如果我们手动再去获取一次，其实会调用两次接口，如果是第一页，iview又不会主动去获取数据，通过查看组件源码：

```js
// 页码改变
changePage (page) {
    if (this.disabled) return;
    if (this.currentPage != page) { // 在第一页改变页码时不会主动去获取数据
        this.currentPage = page;
        this.$emit('update:current', page);
        this.$emit('on-change', page);
    }
},

// 页数改变
onSize (pageSize) {
    if (this.disabled) return;
    this.currentPageSize = pageSize;
    this.$emit('on-page-size-change', pageSize);
    this.changePage(1);
},
```

改变页码获取数据时，最好加一个判断 this.page.index === 1 的判断再手动去获取数据或者自己手动改下 index = 1 再去获取数据，否则 在末尾几页触发 handlePageSize 在 index 还没变的时候去获取实际没有的页数数据会返回空（而这次的异步接口如果比自动触发的晚显示可能造成页面暂无数据）

```js
handlePage(pageNum) {
    this.page.index = pageNum
    this.getList()
},

handlePageSize(size) {
    this.page.size = size

    // 页码为非1时会自动触发获取数据
    if (this.page.index === 1) this.getList()

    // 或者下面这样（不过非第一页会调两次接口，不推荐）
    // this.page.index = 1
    // this.getList()
},
```

### Form 表单里的 InputNumber 组件校验一直不通过

明明输入框里已经有值了，校验一直报红，看控制台还报错：
```js
[Vue warn]: Invalid prop: type check failed for prop "value". Expected Number with value 1, got String with value "1"
```

<img src="./1.png" />

这里就是因为初始赋值的时候，直接将数值字符串直接赋值给了 InputNumber，Form 表单里的校验规则 rules 里又有指定 type 为 number，类型不一致导致校验不通过。