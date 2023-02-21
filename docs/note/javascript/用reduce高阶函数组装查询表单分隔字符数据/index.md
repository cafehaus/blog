# 用reduce高阶函数组装查询表单分隔字符数据

查询表单，一次输入多个参数，一般是从网站或者excel中复制，要求前端用空格、逗号或者回车切割参数，传给后端。

这个需求也很常见，之前是先用 split 分隔成数组，再用 map 遍历去掉首尾空格，最后再用 filter 来过滤下空值，但是这样需要遍历两次，如果想只用一个 map 实现，那还得额外定义个变量来储存数据。

其实像这种组装数据直接用 reduce 就能完美解决，一般有的后端要求用户没填的参数就不传，不需要传个空字符串或者空数组这种，那我们reduce的初始值直接给成 undefined 就不会传给后端了，不过注意 push 的时候就要额外判断下了，否则会报错。

用回车、中英文逗号或空格分隔字符正则：/\n+|,|，|\s+/g

利用 reduce 过滤组装数据 demo：
```js
let a = [' ', '1  ', 'zhou', '  ']
let b = a.reduce((m, n) => {
  if (n) {
    const txt = n.trim()
    if (txt) m.push(txt)
  }
  return m
}, [])
console.log(b) // ['1', 'zhou']
```

项目中使用完整示例代码：
```js
// 请求数据
async query() {
  const { orderIds, names } = this.queryForm
  let params = {
    page: this.page.index,
    size: this.page.size,
  }
  this.fmtParams(params, 'orderIds', orderIds)
  this.fmtParams(params, 'names', names)

  const res = await this.$axios({
    method: 'post',
    url: 'cafe123/api/info',
    data: params,
  })
  if (res.success) {
    console.log(res)
  }
}

// 格式化参数
fmtParams(params, key, val) {
  // if (val) {
  //   params[key] = val.split(/\n+/g).map(a => a.trim()).filter(a => a)
  // }
  if (val) {
    // 初始值设为 undefined，未填写有效数据时不需要传参数，如都是敲的空格、回车
    // 以回车、中英文逗号或空格分隔
    const list = val.split(/\n+|,|，|\s+/g)
    params[key] = list.reduce((m, n) => {
      if (n) {
        const txt = n.trim()
        if (txt) {
          if (!m) m = []
          m.push(txt)
        }
      }
      return m
    }, undefined)
  }
}
```