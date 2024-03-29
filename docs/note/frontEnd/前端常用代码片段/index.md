# 前端常用代码片段

一些项目中常用的代码片段，提高开发效率

**vue 代码片段**

```json
{
	"vue template": {
        "prefix": "vue",
        "body": [
            "<template>",
            "  <div class=\"view\">",
			"  </div>",
            "</template>",
            "",
            "<script>",
			"  export default {",
			"    props: {",
			"    },",
			"    data() {",
			"      return {",
			"      }",
			"    },",
			"    computed: {",
			"    },",
			"    watch: {",
			"    },",
			"    filters: {",
			"    },",
			"    created() {",
			"    },",
			"    methods: {",
			"    },",
			"  }",
			"</script>",
            "<style lang='stylus' scoped>",
			"",
			".view",
            "  width 100%",
            "  height 100%",
            "",
            "</style>"
        ],
        "description": "vue 页面模板"
    },
	"vue table and modal template": {
        "prefix": "vue-table",
        "body": [
            "<template>",
            "  <div class=\"view\">",
			"    <div class=\"table-box\">",
			"      <Table class=\"table\" :data=\"tableData\" :columns=\"columns\">",
			"        <template slot=\"action\" slot-scope=\"{ row }\">",
			"          <Button type=\"primary\" size=\"small\" style=\"margin-right: 5px\">编辑{{ row }}</Button>",
            "          <Button size=\"small\">详情</Button>",
			"        </template>",
			"      </Table>",
			"    </div>",
			"    <VModal v-model=\"showDetail\" />",
			"  </div>",
            "</template>",
            "",
            "<script>",
			"  import VModal from '@/components/v-modal'",
			"  export default {",
			"    name: '',",
			"    components: {",
			"      VModal,",
			"    },",
			"    props: {",
			"    },",
			"    data() {",
			"      return {",
			"        page: {",
			"          index: 1,",
			"          size: 10,",
			"          total: 0,",
			"        },",
			"        loading: false,",
			"        empty: false,",
			"        tableData: [],",
			"        columns: [",
			"          { type: 'selection', width: 60, align: 'center' },",
			"          { type: 'index', width: 60, align: 'center' },",
			"          { title: '姓名', key: 'userName', width: 120, align: 'center' },",
			"          { title: '操作', slot: 'action', width: 120, align: 'center' },",
			"        ],",
			"        showDetail: false,",
			"        curRow: {},",
			"      }",
			"    },",
			"    computed: {",
			"    },",
			"    watch: {",
			"    },",
			"    filters: {",
			"    },",
			"    created() {",
			"      this.init()",
			"    },",
			"    methods: {",
			"      init() {",
			"        this.getList()",
			"      },",
			"      async getList() {",
			"        let params = {",
			"          page: this.page.index,",
			"          size: this.page.size,",
			"        }",
			"        this.loading = true",
			"        const res = await this.\\$api.getList(params)",
			"        this.loading = false",
			"        if (res.code === '200') {",
			"          let data = res.data || {}",
			"          let list = data.records || []",
			"          this.tableData = list",
			"          this.page.total = data.total",
			"          this.empty = !list.length",
			"        } else {",
			"          this.\\$Message.error(res.msg)",
			"        }",
			"      },",
			"    },",
			"  }",
			"</script>",
            "<style lang='stylus' scoped>",
            "@import '~@/styles/var'",
			"",
			".view",
            "  width 100%",
            "  height 100%",
            "",
            "</style>",
			"",
        ],
        "description": "vue 带表格和弹窗页面模板"
    }
}
```

**javascript 代码片段**

```json
{
  	"comment": {
		"prefix": "comment",
		"body": [
		   "/**",
		   "*  判断取值范围",
		   "*",
		   "*  @param {*} x 当前值",
		   "*  @param {string} arr 数据列表",
		   "*/",
		],
		"description": "生成 jsDoc 规范注释"
	},
	"pc request": {
        "prefix": "req",
        "body": [
            "async func() {",
            "  const res = await this.\\$api.name()",
			"  if (res.code === '200') {",
            "  } else {",
            "    this.\\$Message.error(res.msg)",
            "  }",
            "},",
			"",
        ],
        "description": "vue pc 端异步请求通用格式"
    },
	"mobile request": {
        "prefix": "req-m",
        "body": [
            "async func() {",
            "  const res = await this.\\$api.name()",
			"  if (res.code === '200') {",
            "  } else {",
            "    this.\\$tips.toast(res.msg)",
            "  }",
            "},",
			"",
        ],
        "description": "vue 移动端异步请求通用格式"
    }
}
```

