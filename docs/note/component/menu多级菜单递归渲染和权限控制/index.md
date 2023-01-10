# menu多级菜单递归渲染和权限控制

一般管理端网站大部分需要控制菜单权限，建议所有菜单页面全部放在一个主路由下，全部平级，这样面对随时调整菜单位置嵌套这些前端比较容易热控制，菜单数据前端在自己来组装成树形结构。

下面示例基于 element-ui 的菜单和布局组件：

### 侧边栏菜单组件
管理端风格布局

```vue
<template>
  <el-container class="g-layout">
    <el-aside width="240px" class="g-layout-aside">
      <el-menu
        router
        unique-opened
        background-color="#333752"
        text-color="#B5B7BD"
        :default-active="$route.path"
      >
        <VSubmenu v-for="(item, index) in menus" :key="index" :item="item" />
      </el-menu>
    </el-aside>
    <el-container>
      <el-header height="60px" class="g-layout-header">我是头部</el-header>
      <el-main class="g-layout-main">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import VSubmenu from './v-submenu'
export default {
  components: {
    VSubmenu,
  },
  data() {
    return {
      menuList: [{
        id: 1,
        label: '快递',
        icon: 'menu-express',
        children: [
          {
            // id: '101',
            label: '工作台',
            icon: 'menu-workbench',
            path: '/home'
          },
          {
            id: 102,
            label: '订单管理',
            icon: 'menu-order',
            children: [
              {
                id: 1021,
                label: '订单管理',
                path: '/order'
              },
              {
                id: 1022,
                label: '取消订单',
                path: '/order/cancel'
              },
            ]
          },
        ]
      }, {
        id: 2,
        label: '地址',
        icon: 'menu-address',
        children: [
          {
            id: 201,
            label: '地址管理',
            icon: 'menu-address',
            path: '/address'
          },
          {
            id: 202,
            label: '热门地址',
            icon: 'menu-address-hot',
            path: '/address/hot'
          },
        ]
      }, {
        id: 3,
        label: '客户',
        icon: 'menu-customer',
        path: '/customer'
      }, {
        id: 4,
        label: '系统设置',
        icon: 'menu-setting',
        children: [
          {
            id: 401,
            label: '员工',
            path: '/user/staff'
          },
          {
            id: 402,
            label: '权限',
            path: '/user/permission'
          },
        ]
      }],
      menus: [],
    }
  },
  created() {
    this.getMenus()
  },

  methods: {
    async getMenus() {
      const res = await this.$axios({
        method: 'get',
        url: 'permission/codes',
      })
      if (res.code == 200) {
        // 权限 code
        const ids = res.data || []
        this.menus = this.fmtMenu(this.menuList, ids)
      } else {
        this.$message.error(res.msg || '出错啦')
      }
    },

    // 递归获取权限
    fmtMenu(menuList = [], ids = []) {
      return menuList.filter(item => {
        // 无 id 的不用权限
        return !item.id || ids.includes(item.id)
      }).map(m => {
        m = Object.assign({}, m)
        if (m.children && m.children.length) {
          m.children = this.fmtMenu(m.children, ids)
        }
        return m
      })
    },

    /**
     * el-tree 树形组件设置权限
     * 如果子节点不是全部都选中了就不需要父节点的 id
     */
    fmtSelectData() {
      let selectIds = []
      this.menus.map(m => {
        selectIds = this.fmtTree(m, this.menuIds, selectIds)
      })
      this.$refs.tree.setCheckedKeys(selectIds)
    },

    /**
     * 格式化选中id，子节点全部选中了才加上父节点
     * @param {object} item 节点数据
     * @param {array} ids 有权限的id数组
     * @param {array} arr 过滤后实际的id数组
     * @return {array} 过滤后实际的id数组
     */
    fmtTree(item, ids, arr = []) {
      const id = item.id
      if (ids.includes(id)) {
        const children = item.children
        if (children && children.length) {
          // 子节点都有时才添加父节点
          const isAll = children.every(e => ids.includes(e.id))
          if (isAll) {
            arr.push(id)
          }
          children.map(m => {
            arr = this.fmtTree(m, ids, arr)
          })
        } else {
          arr.push(id)
        }
      }
      return arr
    },
  }
}
</script>

<style lang="scss" scoped>
.g-layout {
  height: 100vh;
  background-color: #f1f3f5;
  .g-layout-aside {
    height: 100%;
    padding: 0 8px;
    background: #333752;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include scrollbar();
    .g-layout-logo {
      margin: 14px 16px;
    }
    >>>.el-menu {
      border: none;
      .el-icon-arrow-down:before {
        content: $select-arrow;
      }
      .el-menu-item.is-active {
        background: #1e5eff !important;
        border-radius: 4px;
        font-weight: bold;
        color: #FFF;
      }
      .iconsvg {
        font-size: 20px;
        vertical-align: middle;
      }
    }
  }
  .g-layout-header {
    background: #FFF;
    border: none;
  }
  .g-layout-main {
    padding: 0px;
    @include scrollbar();
  }
}
</style>
```

### 递归多级子菜单组件
理论上支持无限级
```vue
<template>
  <div>
    <el-submenu v-if="item.children && item.children.length" :index="item.label">
      <template slot="title">
        <iconsvg v-if="item.icon" :name="item.icon" />
        <span>{{ item.label }}</span>
      </template>

      <VSubmenu v-for="(sub, i) in item.children" :key="i" :item="sub" />
    </el-submenu>

    <el-menu-item v-else :index="item.path">
      <template slot="title">
        <iconsvg v-if="item.icon" :name="item.icon" />
        <span>{{ item.label }}</span>
      </template>
    </el-menu-item>
  </div>
</template>

<script>
  import VSubmenu from './v-submenu'
  export default {
    name: 'VSubmenu',
    components: {
      VSubmenu,
    },
    props: {
      item: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {}
    },
  }
</script>
```