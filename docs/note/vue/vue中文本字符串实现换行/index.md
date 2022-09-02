# vue中文本字符串实现换行

vue 中文本换行，br 标签要用 v-html 去渲染才会生效。普通字符串想直接换行，可以通过 \n 和 css 里的 white-space: pre-line/pre-wrap/pre 实现文本字符串换行

```vue
<template>
  <div>
    <p v-html="htmlTxt">
    <p class="p">{{ txt }}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        htmlTxt: '我是<br />周小黑',
        txt: '我是\n周小黑',
      }
    }
  }
</script>
<style>
.p {
  white-space: pre-line; /* pre-line/pre-wrap/pre */
}
</style>
```

如果还有一些逻辑判断或者要绑定事件，就只能自己通过一定的规则去先解析成数组，再用 v-for 去循环渲染，这样就可以实现任何自己想要的自定义效果，v-html 去直接渲染标签不太推荐，即使要用也要自己先过滤掉里面的 style 和 script 标签内容，否则有可能影响到你的页面