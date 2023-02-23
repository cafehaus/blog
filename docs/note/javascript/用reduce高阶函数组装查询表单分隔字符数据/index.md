# 用reduce高阶函数组装查询表单分隔字符数据

### es6时代
上古时代，我们为了遍历都是用for循环，直到es6的出现，给我们带来了一系列好用的新特性，map、filter、find、findIndex、some、every...各个都是好手，使用这些高阶函数能极大的方便我们快速处理数据。

比如用map遍历接口数据，再用filter来过滤我们最终想要的数据，用find直接从一堆数据中找到我们想要的那个...

### 我和reduce的渊源
上面的那些处理数据的es6提供的api我确实经常用，但是还有一个reduce，实话说我以前没用过，但是知道有这么个东西。最开始对它有很深的影响，是我一同事在项目中老用，每次看到他写的代码，就很好奇为啥那么喜欢用这个，难道map不香吗？

### 终于发现了reduce很香
查询表单，一次输入多个参数，一般是从网站或者excel中复制，要求前端用空格、逗号或者回车切割参数，传给后端。

这个需求也很常见，之前是先用 split 分隔成数组，再用 map 遍历去掉首尾空格，最后再用 filter 来过滤下空值，但是这样需要遍历两次，如果想只用一个 map 实现，那还得额外定义个变量来储存数据。

正好项目也不太忙，于是我开始研究怎么能更优雅地实现上面的数据过滤，最终找了一圈才发现了reduce的香。

其实像这种组装数据用 reduce 就能完美解决，一般有的后端要求用户没填的参数就不传，不需要传个空字符串或者空数组这种，那我们reduce的初始值直接给成 undefined 就不会传给后端了，不过注意 push 的时候就要额外判断下了，否则会报错。

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
其实很多事情都是一样，从你知道，到你真的理解，再到你实践，最后到你发现它的香，每一次进阶你都需要经历一个阶段，凡事还是多问几个为什么！