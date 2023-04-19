
# js树形数据查找父节点，在侧边栏菜单中的实际应用

有如下的树形结构数据，一般前端侧边栏菜单中会经常用到这样的数据，现在需要通过某一层级的节点找出来包含自身的所有父节点：
``` js
const treeData = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
    },
  },
  {
    path: '/tool',
    name: 'tool',
    children: [
      {
        path: '/tool/one',
        name: 'tool-one',
        meta: {
          title: '工具一',
        },
      },
      {
        path: '/tool/two',
        name: 'tool-two',
        meta: {
          title: '工具二',
        },
      },
      {
        path: '/tool/three',
        name: 'tool-three',
        meta: {
          title: '工具三',
        },
        children: [
          {
            path: '/tool/three/one',
            name: 'tool-three-one',
            meta: {
              title: '工具三-1',
            },
          },
          {
            path: '/tool/three/two',
            name: 'tool-three-two',
            meta: {
              title: '工具三-2',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/system',
    name: 'system',
    meta: {
      title: '系统',
    },
    children: [
      {
        path: '/system/one',
        name: 'system-one',
        meta: {
          title: '系统一',
        },
        children: [
          {
            path: '/system/one/one',
            name: 'system-one-one',
            meta: {
              title: '系统一-1',
            },
          },
          {
            path: '/system/one/two',
            name: 'system-one-two',
            meta: {
              title: '系统一-2',
            },
          },
        ],
      },
      {
        path: '/system/two',
        name: 'system-two',
        meta: {
          title: '系统二',
        },
      },
    ],
  },
]
```

开始我的思路是用递归遍历，自己先定义一个空数组，每次循环最外层的时候先置空数组，把每一级的 name 都存到数组里，如果找到了目标元素就不用再修改数据，具体代码如下：
```js
function findNames(menus, targetName = 'tool-three-two') {
  let isSuccess = false
  let names = []
  menus.map(m => {
    if (!isSuccess) {
      names = []
      getName(m, names, true)
    }
  })

  function getName(obj, arr) {
    if (isSuccess) return

    const name = obj.name
    arr.push(name)
    if (name === targetName) {
      isSuccess = true
    }

    const children = obj.children || []
    if (children.length) {
      children.map(c => {
        getName(c, arr, false)
      })
    }
  }

  return names
}
```
不过最后发现未过滤掉同级数据，相当于和目标值同级的所有 name 都被添加进去了，不过可以通过自己再过滤一遍数据来实现，方方有点笨，也能实现最后的效果。


### 终极版

最后在网上找到大神用的方法，兴高采烈地直接把人的 for 循环改成 map，死活没效果，开始还想是不是 for 和 map 有啥特殊区别，最后才反应过来 map 里的 return 并不是方法的返回值，所以一直没效。

``` js
function getNames(data, val) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] && data[i].name === val) {
      return [data[i].name]
    }
    if (data[i] && data[i].children) {
      let d = getNames(data[i].children, val)
      if (d) {
        return d.concat(data[i].name)
      }
    }
  }

  // 注意：map 里 return 并不是方法的返回值，所以下面的写法实际是无效的
  // data.map(m => {
  //   if (m && m.name === val) {
  //     return [m.name]
  //   }
  //   if (m && m.children && m.children.length) {
  //     let d = getNames(m.children, val)
  //     if (d) {
  //       return d.concat(m.name)
  //     }
  //   }
  // })
}
```

### 应用场景

树形结构一般在管理端项目的侧边栏菜单中用得比较多，刷新当前页面要求自动展开当前菜单，这也是很常见的一个需求。

iview 的菜单组件 Menu，当前选中菜单 active-name，一般直接用 this.$route.name 绑定，已展开的菜单 open-names，就需要动态来过滤出当前菜单的所有父级菜单，也就是需要用到上面的方法。注意要更新菜单的展开折叠状态需要自己在 nextTick 下调用方法 this.$refs.menu.updateOpened()，否则刷新或者首次进入时，菜单不会自动展开。