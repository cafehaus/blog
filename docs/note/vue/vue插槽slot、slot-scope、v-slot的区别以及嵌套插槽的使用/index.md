# vue插槽slot、slot-scope、v-slot的区别以及嵌套插槽的使用

### slot
slot 在英语中作为名词时表示：（可投入东西的）狭长孔，狭槽；（在一系列事件中为某事安排的）时间，空档；（组织、团体等中的）位置，职位。在 vue 中翻译成插槽：vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 Web Components 规范草案，将 slot 元素作为承载分发内容的出口。

可以将 slot 理解成一个占位的东西，我们提前在模板中放置一个占位的标记，当其他地方要使用模板时就可以通过标记再传进来具体的内容，这样就可以实现更强的复用能力。

slot 在 vue 1.x 和 2.x 版本中都是支持的，但 vue 3 中已经被官方废弃了。

### slot-scope
scope 英语翻译成：范围，领域。slot-scope 也就是插槽作用域，你可能会有疑问为什么会用这么个东西？

在 vue 中父组件通过 slot 传入子组件时，父组件中的 slot 里的内容只能访问父组件作用域里的数据（父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的），但是此时如果我们又想访问子组件中的数据怎么办呢？这就要用到 slot-scope 这个家伙了。

印象最深的应该就是 element-ui 中的 table 组件了，在渲染表格行时我们经常需要用到 slot-scope 来获取当前行的数据，其实这里就是我们上面说到的场景：
```html
<template>
  <el-table :data="tableData">
    <el-table-column label="序号">
      <template slot-scope="scope">
        <span>{{ scope.$index + 1 }}</span>
      </template>
    </el-table-column>
    <el-table-column label="姓名">
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="年龄">
      <!-- 支持直接通过 {} 去解构数据 -->
      <template slot-scope="{row}">
        <span>{{ row.age }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>
```
slot-scope 主要也是配合 slot 一块使用，在 2.x 版本中都是支持的，但 vue 3 中已经被官方废弃了。

### v-slot
vue 2.6.0 中引入，为具名插槽和作用域插槽提供新的统一的语法 v-slot 指令，用来代替 slot 和 slot-scope，所以如果 vue 使用的是 2.6 之后的版本就推荐直接使用 v-slot 了。

### 单个插槽
单个插槽最简单，一般适用于比较简单的单个自定义内容渲染，子组件：
```html
<div class="son">
  <h3>我是子组件</h3>
  <slot>我是默认内容，如果爸爸你不给我传东西我就显示这里的内容</slot>
</div>
<script>
  export default {
    name: 'Child'
  }
</script>
```
父组件：
```html
<div class="father">
  <h3>我是父组件</h3>
  <Child>
    <p>儿子，我是爸爸给你传的内容</p>
  </Child>
</div>
<script>
  import Child from './Child.vue'
  export default {
    components: {
      Child
    }
  }
</script>
```

### 具名插槽
有时我们需要在子组件中提前定义多个占位符，这样就需要为每个占位符起一个名字，然后父组件中就可以直接通过这个名字来找到自己的位置了。也就是多个 slot 时，我们就需要给每个 slot 加一个 name 名字，允许有一个不加名字（其实如果不加他有一个默认的 default 名字，父组件中没有被其他 slot 包含的内容都会被当成这个没有名字的 default 里的内容）。子组件：
```html
<div class="son">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot name="main"></slot>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
<script>
  export default {
    name: 'Child'
  }
</script>
```
父组件：
```html
<div class="father">
  <h3>我是父组件</h3>
  <Child>
    <template slot="header">
      <h1>我是 header</h1>
    </template>

    <template v-slot:main>
      <p>我是 main</p>
    </template>

    <template v-slot:default>
      <p>A paragraph for the main content.</p>
    </template>

    <template #footer>
      <p>我是 footer</p>
    </template>
  </Child>
</div>
<script>
  import Child from './Child.vue'
  export default {
    components: {
      Child
    }
  }
</script>
可以直接通过 slot="xx" 去找到子组件中自己占位符，不过推荐用最新的 v-solt 指令，而且还可以通过 # 进一步来简写，就相当与 @ 代替 v-on，冒号 : 代替 v-bind 一样。没有名字的默认插槽可以通过 slot="default" 或者 v-slot:default 去找到自己的位置，或者啥也不写 Child 标签中只要没有被其他 slot 包裹的内容都是默认插槽的。
```

### 作用域插槽
也就是我们上面说到的 slot-scope，只不过新旧语法上有点差异，在子组件中直接在 slot 标签上绑定上数据属性：
```html
<div class="son">
  <h3>我是子组件</h3>
  <slot :user="user"></slot>
</div>
<script>
  export default {
    name: 'Child',
    data() {
      return {
        user: {
          name: 'zhou',
          age: 18
        }
      }
    }
  }
</script>
```
父组件：
```html
<div class="father">
  <h3>我是父组件</h3>
  <!-- 旧语法，2.6 之后不推荐使用了-->
  <Child>
    <template slot-scope="scope">
      <p>姓名：{{ scope.user.name }}</p>
      <p>年龄：{{ scope.user.age }}</p>
    </template>
  </Child>

  <!-- 新语法-->
  <Child>
    <template v-slot="scope">
      <p>姓名：{{ scope.user.name }}</p>
      <p>年龄：{{ scope.user.age }}</p>
    </template>
  </Child>
</div>
<script>
  import Child from './Child.vue'
  export default {
    components: {
      Child
    }
  }
</script>
```

### 嵌套作用域插槽
一般用于第三方组件的二次封装，我们需要在一个作用域插槽中再嵌套一个作用域插槽，比如在 element-ui 的 table 组件上二次封装：
```html
<div class="son">
  <el-table :data="tableData">
    <el-table-column label="序号">
      <template slot-scope="scope">
        <span>{{ scope.$index + 1 }}</span>
      </template>
    </el-table-column>
    <el-table-column v-if="$slots.action" label="操作">
      <template slot-scope="{row}">
        <slot name="action" :row="row" />
      </template>
    </el-table-column>
  </el-table>
</div>
<script>
  export default {
    name: 'Child',
    data() {
      return {
        tableData: []
      }
    }
  }
</script>
```
$slots 用来访问被插槽分发的内容，每个具名插槽有其相应的 property (例如：v-slot:foo 中的内容将会在 vm.$slots.foo 中被找到)，所以上面我们可以通过 $slots.action 来判断父组件中有这个插槽时才渲染。

父组件：
```html
<div class="father">
  <h3>我是父组件</h3>
  <Child>
    <template slot="action" slot-scope="{ row }">
      <span @click="handleEdit(row)">编辑</span>
    </template>
  </Child>
</div>
<script>
  import Child from './Child.vue'
  export default {
    components: {
      Child
    },
    methods: {
      handleEdit(row) {
        console.log(row)
      }
    }
  }
</script>
```
注意上面父组件中我们并没有用推荐的最新的 v-slot 指令，是因为我项目中用到的 element-ui 版本是 2.13.2，刚开始想用 v-slot 发现一直没效果，最终翻源码才发现 element-ui 2.13.2 版本中的 vue 是 2.5 的，而 v-slot 是 vue 2.6 中才引入的，所以如果想在插槽中使用最新的 v-slot 指令，记得看下 vue 的版本哟。