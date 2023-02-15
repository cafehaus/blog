# vue的data函数中访问this的坑

在 vue 的 data 函数中直接用 this 去访问其他变量设置变量的初始值，代码如下：
```vue
<template>
  <div class="page">
    当前序号：{{ activeTab }}
  </div>
</template>

<script>
  import config from '@/config'
  export default {
    data() {
      // console.log(this)
      return {
        isProdEnv: config.env === 'pro' // true,
        activeTab: this.isProdEnv ? 1 : 2,
      }
    },
  }
</script>
```
config.env 此时确实是 pro，那页面上的 activeTab 此时是 1 吗？如果你回答是，那恭喜踩坑，实际上页面上显示的是 2。

### 原因

因为此时并未初始化完成，即在取值时 vue 还未进行代理和监听（此时 isProdEnv 还未代理到 this 上），所以 this.isProdEnv 等于 undefined，页面上也就会显示2了。

### 改良版本

实际上要这样设置初始值，在 data 中我们不能用 this 去访问其他变量，这里的场景可以直接在 data 外面判断设置，或者放在生命周期里去赋值：

```vue
<template>
  <div class="page">
    当前序号：{{ activeTab }}
  </div>
</template>

<script>
  import config from '@/config'
  export default {
    data() {
      const isProdEnv = config.env === 'pro'
      return {
        isProdEnv,
        activeTab: isProdEnv ? '1' : '2',
      }
    },
    creat() {
      // this.activeTab = this.isProdEnv ? '1' : '2'
    }
  }
</script>
```
