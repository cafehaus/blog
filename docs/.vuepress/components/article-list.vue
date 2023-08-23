<template>
  <div>
    <div class="article-list">
      <a
        v-for="(item, index) in pageList"
        :key="index"
        class="article-item"
        :href="item.link"
      >
        <p class="title">{{ item.title }}</p>
        <p class="time">{{ item.createTime }}</p>
      </a>
    </div>

    <!-- 分页 -->
    <pagination
      :page-no="page.index"
      :page-size="page.size"
      :total="page.total"
      :continues="3"
      @change-page-no="getPageNo"
      @change-page-size="getPageSize"
    />
  </div>
</template>

<script>
import pagination from './pagination.vue'
export default {
  components: {
    pagination,
  },
  name: 'article-list',
  data() {
    return {
      articleList: [],
      pageList: [],
      page: {
        index: 1,
        size: 10,
        total: 0,
      },
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.articleList=[
  {
    "title": "vuepress博客自动生成分页文章列表",
    "createTimestamp": 1692707848000,
    "createTime": "2023-08-22",
    "link": "/note/vue/vuepress博客自动生成分页文章列表/index.html"
  },
  {
    "title": "java练习项目记录笔记",
    "createTimestamp": 1691475835000,
    "createTime": "2023-08-08",
    "link": "/note/java/java练习项目记录笔记/index.html"
  },
  {
    "title": "用docker和nginx部署前端项目访问本地java网关gateway服务",
    "createTimestamp": 1690530582000,
    "createTime": "2023-07-28",
    "link": "/note/java/用docker和nginx部署前端项目访问本地java网关gateway服务/index.html"
  },
  {
    "title": "SpringBoot本地上传文件到resources目录永久保存下载的最佳实践",
    "createTimestamp": 1689920549000,
    "createTime": "2023-07-21",
    "link": "/note/java/SpringBoot本地上传文件到resources目录永久保存下载的最佳实践/index.html"
  },
  {
    "title": "java学习笔记",
    "createTimestamp": 1689430981000,
    "createTime": "2023-07-15",
    "link": "/note/java/java学习笔记/index.html"
  },
  {
    "title": "vue自定义指令监听元素是否进入父元素视窗内",
    "createTimestamp": 1688622958000,
    "createTime": "2023-07-06",
    "link": "/note/vue/vue自定义指令监听元素是否进入父元素视窗内/index.html"
  },
  {
    "title": "利用径向渐变radial-gradient封装stylus、sass函数制作半圆透明切角效果",
    "createTimestamp": 1685419814000,
    "createTime": "2023-05-30",
    "link": "/note/css/利用径向渐变radial-gradient封装stylus、sass函数制作半圆透明切角效果/index.html"
  },
  {
    "title": "element-ui图标偶现乱码问题的原因和修复方法",
    "createTimestamp": 1685013913000,
    "createTime": "2023-05-25",
    "link": "/note/UItools/element-ui图标偶现乱码问题的原因和修复方法/index.html"
  },
  {
    "title": "javascript函数的call、apply和bind的原理及作用详解",
    "createTimestamp": 1684476143000,
    "createTime": "2023-05-19",
    "link": "/note/javascript/javascript函数的call、apply和bind的原理及作用详解/index.html"
  },
  {
    "title": "element-ui表格组件el-table多选时报错",
    "createTimestamp": 1683544591000,
    "createTime": "2023-05-08",
    "link": "/note/UItools/element-ui表格组件el-table多选时报错/index.html"
  },
  {
    "title": "axios拦截器封装：await遇上reject时catch的优雅处理方式",
    "createTimestamp": 1682595039000,
    "createTime": "2023-04-27",
    "link": "/note/javascript/axios拦截器封装：await遇上reject时catch的优雅处理方式/index.html"
  },
  {
    "title": "前端跨浏览器标签页数据共享解决方案",
    "createTimestamp": 1682078767000,
    "createTime": "2023-04-21",
    "link": "/note/javascript/前端跨浏览器标签页数据共享解决方案/index.html"
  },
  {
    "title": "js树形数据查找父节点，在侧边栏菜单中的实际应用",
    "createTimestamp": 1681908172000,
    "createTime": "2023-04-19",
    "link": "/note/javascript/js树形数据查找父节点，在侧边栏菜单中的实际应用/index.html"
  },
  {
    "title": "vue用v-on动态绑定事件名需要2.6以上版本才有效",
    "createTimestamp": 1681318152000,
    "createTime": "2023-04-13",
    "link": "/note/vue/vue用v-on动态绑定事件名需要2.6以上版本才有效/index.html"
  },
  {
    "title": "胖仙测试课程目录",
    "createTimestamp": 1679919192000,
    "createTime": "2023-03-27",
    "link": "/note/test/胖仙测试课程目录/index.html"
  },
  {
    "title": "t-design组件踩坑记",
    "createTimestamp": 1679918893000,
    "createTime": "2023-03-27",
    "link": "/note/UItools/t-design组件踩坑记/index.html"
  },
  {
    "title": "公司SpringBoot微服务java项目本地运行笔记",
    "createTimestamp": 1679918876000,
    "createTime": "2023-03-27",
    "link": "/note/java/公司SpringBoot微服务java项目本地运行笔记/index.html"
  },
  {
    "title": "前端常用技能",
    "createTimestamp": 1678878607000,
    "createTime": "2023-03-15",
    "link": "/note/frontEnd/前端常用技能/index.html"
  },
  {
    "title": "前端装逼词汇",
    "createTimestamp": 1678878607000,
    "createTime": "2023-03-15",
    "link": "/note/frontEnd/前端装逼词汇/index.html"
  },
  {
    "title": "前端项目目录结构",
    "createTimestamp": 1678878607000,
    "createTime": "2023-03-15",
    "link": "/note/frontEnd/前端项目目录结构/index.html"
  },
  {
    "title": "python的flask项目环境安装和本地运行",
    "createTimestamp": 1678878594000,
    "createTime": "2023-03-15",
    "link": "/note/python/python的flask项目环境安装和本地运行/index.html"
  },
  {
    "title": "input输入unicode零宽字符前端踩坑",
    "createTimestamp": 1677753997000,
    "createTime": "2023-03-02",
    "link": "/note/javascript/input输入unicode零宽字符前端踩坑/index.html"
  },
  {
    "title": "toFixed和Math.round既不是四舍五入也不是银行家舍入法",
    "createTimestamp": 1677067049000,
    "createTime": "2023-02-22",
    "link": "/note/javascript/toFixed和Math.round既不是四舍五入也不是银行家舍入法/index.html"
  },
  {
    "title": "用reduce高阶函数组装查询表单分隔字符数据",
    "createTimestamp": 1676978651000,
    "createTime": "2023-02-21",
    "link": "/note/javascript/用reduce高阶函数组装查询表单分隔字符数据/index.html"
  },
  {
    "title": "用单例模式封装canvas环形进度条",
    "createTimestamp": 1676892400000,
    "createTime": "2023-02-20",
    "link": "/note/component/用单例模式封装canvas环形进度条/index.html"
  },
  {
    "title": "vue项目中webpack-dev-server的open和host0.0.0.0配置冲突",
    "createTimestamp": 1676463449000,
    "createTime": "2023-02-15",
    "link": "/note/buildTool/vue项目中webpack-dev-server的open和host0.0.0.0配置冲突/index.html"
  },
  {
    "title": "vue的data函数中访问this的坑",
    "createTimestamp": 1676463431000,
    "createTime": "2023-02-15",
    "link": "/note/vue/vue的data函数中访问this的坑/index.html"
  },
  {
    "title": "webpack本地axios接口代理一直不生效",
    "createTimestamp": 1676352097000,
    "createTime": "2023-02-14",
    "link": "/note/buildTool/webpack本地axios接口代理一直不生效/index.html"
  },
  {
    "title": "防抖节流和休眠函数",
    "createTimestamp": 1675945395000,
    "createTime": "2023-02-09",
    "link": "/note/javascript/防抖节流和休眠函数/index.html"
  },
  {
    "title": "前端常见避坑",
    "createTimestamp": 1675945383000,
    "createTime": "2023-02-09",
    "link": "/note/frontEnd/前端常见避坑/index.html"
  },
  {
    "title": "tdesign动态表单校验和自动滚动到错误处",
    "createTimestamp": 1674019854000,
    "createTime": "2023-01-18",
    "link": "/note/component/tdesign动态表单校验和自动滚动到错误处/index.html"
  },
  {
    "title": "element-ui下拉框el-select多选出现滚动条闪现",
    "createTimestamp": 1673674627000,
    "createTime": "2023-01-14",
    "link": "/note/UItools/element-ui下拉框el-select多选出现滚动条闪现/index.html"
  },
  {
    "title": "a标签下载图片谷歌chrome浏览器无反应",
    "createTimestamp": 1673271195000,
    "createTime": "2023-01-09",
    "link": "/note/javascript/a标签下载图片谷歌chrome浏览器无反应/index.html"
  },
  {
    "title": "menu多级菜单递归渲染和权限控制",
    "createTimestamp": 1673004710000,
    "createTime": "2023-01-06",
    "link": "/note/component/menu多级菜单递归渲染和权限控制/index.html"
  },
  {
    "title": "浏览器书签bookmark转json格式",
    "createTimestamp": 1672673963000,
    "createTime": "2023-01-02",
    "link": "/note/node/浏览器书签bookmark转json格式/index.html"
  },
  {
    "title": "我的书签bookmark",
    "createTimestamp": 1671774744000,
    "createTime": "2022-12-23",
    "link": "/note/frontEnd/我的书签bookmark/index.html"
  },
  {
    "title": "多个select下拉框已选选项禁选",
    "createTimestamp": 1671709069000,
    "createTime": "2022-12-22",
    "link": "/note/component/多个select下拉框已选选项禁选/index.html"
  },
  {
    "title": "webpack代理proxy配置",
    "createTimestamp": 1671554677000,
    "createTime": "2022-12-21",
    "link": "/note/buildTool/webpack代理proxy配置/index.html"
  },
  {
    "title": "封装业务中常用的公共上传组件",
    "createTimestamp": 1671536846000,
    "createTime": "2022-12-20",
    "link": "/note/component/封装业务中常用的公共上传组件/index.html"
  },
  {
    "title": "iview和element-ui复选框模拟单选效果",
    "createTimestamp": 1671536749000,
    "createTime": "2022-12-20",
    "link": "/note/component/iview和element-ui复选框模拟单选效果/index.html"
  },
  {
    "title": "前端常用vue组件代码",
    "createTimestamp": 1671429731000,
    "createTime": "2022-12-19",
    "link": "/note/frontEnd/前端常用vue组件代码/index.html"
  },
  {
    "title": "前端常用代码片段",
    "createTimestamp": 1671429731000,
    "createTime": "2022-12-19",
    "link": "/note/frontEnd/前端常用代码片段/index.html"
  },
  {
    "title": "前端常用工具函数",
    "createTimestamp": 1671429731000,
    "createTime": "2022-12-19",
    "link": "/note/frontEnd/前端常用工具函数/index.html"
  },
  {
    "title": "前端常用正则表达式",
    "createTimestamp": 1671429731000,
    "createTime": "2022-12-19",
    "link": "/note/frontEnd/前端常用正则表达式/index.html"
  },
  {
    "title": "前端开发常用英文单词",
    "createTimestamp": 1671429731000,
    "createTime": "2022-12-19",
    "link": "/note/frontEnd/前端开发常用英文单词/index.html"
  },
  {
    "title": "前端查看日志",
    "createTimestamp": 1671429731000,
    "createTime": "2022-12-19",
    "link": "/note/frontEnd/前端查看日志/index.html"
  },
  {
    "title": "前端项目中的各种配置文件一览",
    "createTimestamp": 1671429731000,
    "createTime": "2022-12-19",
    "link": "/note/frontEnd/前端项目中的各种配置文件一览/index.html"
  },
  {
    "title": "每日好文推荐",
    "createTimestamp": 1671429094000,
    "createTime": "2022-12-19",
    "link": "/note/frontEnd/每日好文推荐/index.html"
  },
  {
    "title": "前端开发规范",
    "createTimestamp": 1671428086000,
    "createTime": "2022-12-19",
    "link": "/note/frontEnd/前端开发规范/index.html"
  },
  {
    "title": "前端开发效率",
    "createTimestamp": 1671427770000,
    "createTime": "2022-12-19",
    "link": "/note/frontEnd/前端开发效率/index.html"
  },
  {
    "title": "前端团队协作",
    "createTimestamp": 1671427759000,
    "createTime": "2022-12-19",
    "link": "/note/frontEnd/前端团队协作/index.html"
  },
  {
    "title": "uniapp常见踩坑记录",
    "createTimestamp": 1671378482000,
    "createTime": "2022-12-18",
    "link": "/note/uniapp/uniapp常见踩坑记录/index.html"
  },
  {
    "title": "vue老项目sass和element-ui开发踩坑",
    "createTimestamp": 1671023053000,
    "createTime": "2022-12-14",
    "link": "/note/vue/vue老项目sass和element-ui开发踩坑/index.html"
  },
  {
    "title": "node_modules目录中的bin文件夹",
    "createTimestamp": 1671023020000,
    "createTime": "2022-12-14",
    "link": "/note/node/node_modules目录中的bin文件夹/index.html"
  },
  {
    "title": "小程序开发和设计注意事项",
    "createTimestamp": 1671023010000,
    "createTime": "2022-12-14",
    "link": "/note/miniapp/小程序开发和设计注意事项/index.html"
  },
  {
    "title": "用SpringBoot开发java程序和部署笔记",
    "createTimestamp": 1670088092000,
    "createTime": "2022-12-04",
    "link": "/note/java/用SpringBoot开发java程序和部署笔记/index.html"
  },
  {
    "title": "windows中cmd和PowerShell批处理命令",
    "createTimestamp": 1669997607000,
    "createTime": "2022-12-03",
    "link": "/note/windows/windows中cmd和PowerShell批处理命令/index.html"
  },
  {
    "title": "windows系统开发常用cmd命令学习",
    "createTimestamp": 1669997607000,
    "createTime": "2022-12-03",
    "link": "/note/windows/windows系统开发常用cmd命令学习/index.html"
  },
  {
    "title": "win右键菜单vscode打开当前目录",
    "createTimestamp": 1669997607000,
    "createTime": "2022-12-03",
    "link": "/note/windows/win右键菜单vscode打开当前目录/index.html"
  },
  {
    "title": "编写bat文件在windows上自动执行cmd命令",
    "createTimestamp": 1669997607000,
    "createTime": "2022-12-03",
    "link": "/note/windows/编写bat文件在windows上自动执行cmd命令/index.html"
  },
  {
    "title": "windows和linux系统上查看历史终端命令",
    "createTimestamp": 1669899288000,
    "createTime": "2022-12-01",
    "link": "/note/windows/windows和linux系统上查看历史终端命令/index.html"
  },
  {
    "title": "uniapp中scroll-view局部滚动的各种场景",
    "createTimestamp": 1669873951000,
    "createTime": "2022-12-01",
    "link": "/note/uniapp/uniapp中scroll-view局部滚动的各种场景/index.html"
  },
  {
    "title": "vue-router的hash模式和history模式",
    "createTimestamp": 1669804197000,
    "createTime": "2022-11-30",
    "link": "/note/vue/vue-router的hash模式和history模式/index.html"
  },
  {
    "title": "京东轻量云主机测评体验",
    "createTimestamp": 1669701395000,
    "createTime": "2022-11-29",
    "link": "/note/server/京东轻量云主机测评体验/index.html"
  },
  {
    "title": "vue-cli-service的命令行参数",
    "createTimestamp": 1669644740000,
    "createTime": "2022-11-28",
    "link": "/note/vue/vue-cli-service的命令行参数/index.html"
  },
  {
    "title": "用Jest做前端单元测试",
    "createTimestamp": 1669268679000,
    "createTime": "2022-11-24",
    "link": "/note/test/用Jest做前端单元测试/index.html"
  },
  {
    "title": "前端常用css样式代码",
    "createTimestamp": 1669183003000,
    "createTime": "2022-11-23",
    "link": "/note/css/前端常用css样式代码/index.html"
  },
  {
    "title": "用css制作渐变内外阴影漂亮按钮",
    "createTimestamp": 1669109648000,
    "createTime": "2022-11-22",
    "link": "/note/css/用css制作渐变内外阴影漂亮按钮/index.html"
  },
  {
    "title": "vue中computed动态设置background背景图无效",
    "createTimestamp": 1669022445000,
    "createTime": "2022-11-21",
    "link": "/note/css/vue中computed动态设置background背景图无效/index.html"
  },
  {
    "title": "开发和发布自己的wordpress插件到官方插件库完全指南",
    "createTimestamp": 1668616219000,
    "createTime": "2022-11-17",
    "link": "/note/wordpress/开发和发布自己的wordpress插件到官方插件库完全指南/index.html"
  },
  {
    "title": "代码注释利器jsDoc",
    "createTimestamp": 1668426903000,
    "createTime": "2022-11-14",
    "link": "/note/javascript/代码注释利器jsDoc/index.html"
  },
  {
    "title": "用css制作头像渐变圆角边框",
    "createTimestamp": 1668334684000,
    "createTime": "2022-11-13",
    "link": "/note/css/用css制作头像渐变圆角边框/index.html"
  },
  {
    "title": "用css径向渐变制作优惠券内圆角",
    "createTimestamp": 1668059980000,
    "createTime": "2022-11-10",
    "link": "/note/css/用css径向渐变制作优惠券内圆角/index.html"
  },
  {
    "title": "用JMeter做接口压力测试",
    "createTimestamp": 1667886888000,
    "createTime": "2022-11-08",
    "link": "/note/test/用JMeter做接口压力测试/index.html"
  },
  {
    "title": "用vitepress搭建文档网站踩坑记录",
    "createTimestamp": 1667575943000,
    "createTime": "2022-11-04",
    "link": "/note/vue/用vitepress搭建文档网站踩坑记录/index.html"
  },
  {
    "title": "node学习笔记记录",
    "createTimestamp": 1667479731000,
    "createTime": "2022-11-03",
    "link": "/note/node/node学习笔记记录/index.html"
  },
  {
    "title": "用electron打包前端应用初体验",
    "createTimestamp": 1665985095000,
    "createTime": "2022-10-17",
    "link": "/note/electron/用electron打包前端应用初体验/index.html"
  },
  {
    "title": "前端框架中index.html中的变量语法",
    "createTimestamp": 1665938636000,
    "createTime": "2022-10-17",
    "link": "/note/html/前端框架中index.html中的变量语法/index.html"
  },
  {
    "title": "全屏PC端侧边栏浮窗工具条",
    "createTimestamp": 1665634498000,
    "createTime": "2022-10-13",
    "link": "/note/component/全屏PC端侧边栏浮窗工具条/index.html"
  },
  {
    "title": "python学习笔记记录",
    "createTimestamp": 1664881913000,
    "createTime": "2022-10-04",
    "link": "/note/python/python学习笔记记录/index.html"
  },
  {
    "title": "react和TypeScript开发项目问题记录",
    "createTimestamp": 1663077306000,
    "createTime": "2022-09-13",
    "link": "/note/react/react和TypeScript开发项目问题记录/index.html"
  },
  {
    "title": "iview动态表单删除时防止校验出错和下拉选项禁选已选项",
    "createTimestamp": 1662114713000,
    "createTime": "2022-09-02",
    "link": "/note/component/iview动态表单删除时防止校验出错和下拉选项禁选已选项/index.html"
  },
  {
    "title": "vue中文本字符串实现换行",
    "createTimestamp": 1662098086000,
    "createTime": "2022-09-02",
    "link": "/note/vue/vue中文本字符串实现换行/index.html"
  },
  {
    "title": "iview动态表单Form组件校验",
    "createTimestamp": 1662097351000,
    "createTime": "2022-09-02",
    "link": "/note/component/iview动态表单Form组件校验/index.html"
  },
  {
    "title": "iview多重循环表单form校验",
    "createTimestamp": 1662097351000,
    "createTime": "2022-09-02",
    "link": "/note/component/iview多重循环表单form校验/index.html"
  },
  {
    "title": "iview的Poptip组件动态获取数据封装",
    "createTimestamp": 1662097351000,
    "createTime": "2022-09-02",
    "link": "/note/component/iview的Poptip组件动态获取数据封装/index.html"
  },
  {
    "title": "iview的Table组件套FormItem表单动态校验",
    "createTimestamp": 1662097351000,
    "createTime": "2022-09-02",
    "link": "/note/component/iview的Table组件套FormItem表单动态校验/index.html"
  },
  {
    "title": "iview表格Table组件跨页勾选数据",
    "createTimestamp": 1662097351000,
    "createTime": "2022-09-02",
    "link": "/note/component/iview表格Table组件跨页勾选数据/index.html"
  },
  {
    "title": "多行文字截取显示省略号和更多按钮",
    "createTimestamp": 1662097351000,
    "createTime": "2022-09-02",
    "link": "/note/component/多行文字截取显示省略号和更多按钮/index.html"
  },
  {
    "title": "步骤条和展开收起折叠面板",
    "createTimestamp": 1662097351000,
    "createTime": "2022-09-02",
    "link": "/note/component/步骤条和展开收起折叠面板/index.html"
  },
  {
    "title": "用driverjs制作用户页面操作步骤引导",
    "createTimestamp": 1662097351000,
    "createTime": "2022-09-02",
    "link": "/note/component/用driverjs制作用户页面操作步骤引导/index.html"
  },
  {
    "title": "通过component标签动态加载组件",
    "createTimestamp": 1662097351000,
    "createTime": "2022-09-02",
    "link": "/note/component/通过component标签动态加载组件/index.html"
  },
  {
    "title": "通过hosts文件修改本地域名映射",
    "createTimestamp": 1661952032000,
    "createTime": "2022-08-31",
    "link": "/note/project/通过hosts文件修改本地域名映射/index.html"
  },
  {
    "title": "探寻webpack打包vue项目特别慢问题",
    "createTimestamp": 1661427268000,
    "createTime": "2022-08-25",
    "link": "/note/buildTool/探寻webpack打包vue项目特别慢问题/index.html"
  },
  {
    "title": "用swift开发ios移动端app应用初体验",
    "createTimestamp": 1661011954000,
    "createTime": "2022-08-21",
    "link": "/note/ios/用swift开发ios移动端app应用初体验/index.html"
  },
  {
    "title": "mysql中执行sql语句报语法错误引出的代码空格问题",
    "createTimestamp": 1660369868000,
    "createTime": "2022-08-13",
    "link": "/note/database/mysql中执行sql语句报语法错误引出的代码空格问题/index.html"
  },
  {
    "title": "vscode编辑器Volar插件导致vue自定义标签不变颜色",
    "createTimestamp": 1660276325000,
    "createTime": "2022-08-12",
    "link": "/note/project/vscode编辑器Volar插件导致vue自定义标签不变颜色/index.html"
  },
  {
    "title": "本地localhost不同服务token被覆盖",
    "createTimestamp": 1660012301000,
    "createTime": "2022-08-09",
    "link": "/note/project/本地localhost不同服务token被覆盖/index.html"
  },
  {
    "title": "wordpress插件开发",
    "createTimestamp": 1658405647000,
    "createTime": "2022-07-21",
    "link": "/note/wordpress/wordpress插件开发/index.html"
  },
  {
    "title": "iview数字输入组件InputNumber",
    "createTimestamp": 1657876151000,
    "createTime": "2022-07-15",
    "link": "/note/UItools/iview数字输入组件InputNumber/index.html"
  },
  {
    "title": "node匿名函数自调用立即执行的坑",
    "createTimestamp": 1657876135000,
    "createTime": "2022-07-15",
    "link": "/note/javascript/node匿名函数自调用立即执行的坑/index.html"
  },
  {
    "title": "解析excel表格数据并自定义校验",
    "createTimestamp": 1657703037000,
    "createTime": "2022-07-13",
    "link": "/note/javascript/解析excel表格数据并自定义校验/index.html"
  },
  {
    "title": "iview组件默认样式覆盖",
    "createTimestamp": 1657108882000,
    "createTime": "2022-07-06",
    "link": "/note/UItools/iview组件默认样式覆盖/index.html"
  },
  {
    "title": "那些相见恨晚的工作技巧",
    "createTimestamp": 1656067040000,
    "createTime": "2022-06-24",
    "link": "/note/project/那些相见恨晚的工作技巧/index.html"
  },
  {
    "title": "iview组件踩坑记",
    "createTimestamp": 1655824945000,
    "createTime": "2022-06-21",
    "link": "/note/UItools/iview组件踩坑记/index.html"
  },
  {
    "title": "Docker踩坑记录",
    "createTimestamp": 1655812627000,
    "createTime": "2022-06-21",
    "link": "/note/project/Docker踩坑记录/index.html"
  },
  {
    "title": "日常工作每日记录",
    "createTimestamp": 1655724179000,
    "createTime": "2022-06-20",
    "link": "/note/project/日常工作每日记录/index.html"
  },
  {
    "title": "flutter初体验demo踩坑指南",
    "createTimestamp": 1654773686000,
    "createTime": "2022-06-09",
    "link": "/note/flutter/flutter初体验demo踩坑指南/index.html"
  },
  {
    "title": "ES模块导入引发的vue未定义变量报错",
    "createTimestamp": 1654517693000,
    "createTime": "2022-06-06",
    "link": "/note/vue/ES模块导入引发的vue未定义变量报错/index.html"
  },
  {
    "title": "电脑上打不开github解决办法",
    "createTimestamp": 1653995983000,
    "createTime": "2022-05-31",
    "link": "/note/project/电脑上打不开github解决办法/index.html"
  },
  {
    "title": "开发打包ios应用",
    "createTimestamp": 1653995983000,
    "createTime": "2022-05-31",
    "link": "/note/uniapp/开发打包ios应用/index.html"
  },
  {
    "title": "前端pdf预览下载和图片下载压缩",
    "createTimestamp": 1653962395000,
    "createTime": "2022-05-31",
    "link": "/note/javascript/前端pdf预览下载和图片下载压缩/index.html"
  },
  {
    "title": "前端导出下载excel表格",
    "createTimestamp": 1653962395000,
    "createTime": "2022-05-31",
    "link": "/note/javascript/前端导出下载excel表格/index.html"
  },
  {
    "title": "日期字符串直接比较的坑",
    "createTimestamp": 1653962395000,
    "createTime": "2022-05-31",
    "link": "/note/javascript/日期字符串直接比较的坑/index.html"
  },
  {
    "title": "根据字符串中的范围判断当前值",
    "createTimestamp": 1653962395000,
    "createTime": "2022-05-31",
    "link": "/note/javascript/根据字符串中的范围判断当前值/index.html"
  },
  {
    "title": "各端开发打包发布完整指南",
    "createTimestamp": 1653962395000,
    "createTime": "2022-05-31",
    "link": "/note/uniapp/各端开发打包发布完整指南/index.html"
  },
  {
    "title": "安卓模拟器接口抓包教程",
    "createTimestamp": 1653962395000,
    "createTime": "2022-05-31",
    "link": "/note/uniapp/安卓模拟器接口抓包教程/index.html"
  },
  {
    "title": "开发字节抖音小程序踩坑记",
    "createTimestamp": 1653962395000,
    "createTime": "2022-05-31",
    "link": "/note/uniapp/开发字节抖音小程序踩坑记/index.html"
  },
  {
    "title": "开发安卓APP踩坑记",
    "createTimestamp": 1653962395000,
    "createTime": "2022-05-31",
    "link": "/note/uniapp/开发安卓APP踩坑记/index.html"
  },
  {
    "title": "用Docker搭建运行本地WordPress",
    "createTimestamp": 1653907986000,
    "createTime": "2022-05-30",
    "link": "/note/project/用Docker搭建运行本地WordPress/index.html"
  },
  {
    "title": "在微信小程序里使用自定义字体",
    "createTimestamp": 1653647793000,
    "createTime": "2022-05-27",
    "link": "/note/miniapp/在微信小程序里使用自定义字体/index.html"
  },
  {
    "title": "PATH系统环境变量",
    "createTimestamp": 1653638514000,
    "createTime": "2022-05-27",
    "link": "/note/project/PATH系统环境变量/index.html"
  },
  {
    "title": "video视频高度设置百分比在微信小程序中直接不显示",
    "createTimestamp": 1653561102000,
    "createTime": "2022-05-26",
    "link": "/note/miniapp/video视频高度设置百分比在微信小程序中直接不显示/index.html"
  },
  {
    "title": "短信链接直接打开微信小程序踩坑",
    "createTimestamp": 1653561102000,
    "createTime": "2022-05-26",
    "link": "/note/miniapp/短信链接直接打开微信小程序踩坑/index.html"
  },
  {
    "title": "Git使用技巧",
    "createTimestamp": 1653561102000,
    "createTime": "2022-05-26",
    "link": "/note/project/Git使用技巧/index.html"
  },
  {
    "title": "工作中常用工具和技术合集",
    "createTimestamp": 1653561102000,
    "createTime": "2022-05-26",
    "link": "/note/project/工作中常用工具和技术合集/index.html"
  },
  {
    "title": "根据环境设置请求地址和接口代理",
    "createTimestamp": 1653561102000,
    "createTime": "2022-05-26",
    "link": "/note/project/根据环境设置请求地址和接口代理/index.html"
  },
  {
    "title": "vue中的v-model刨根问底",
    "createTimestamp": 1646812117000,
    "createTime": "2022-03-09",
    "link": "/note/vue/vue中的v-model刨根问底/index.html"
  },
  {
    "title": "用vuepress2搭建自己的github网站",
    "createTimestamp": 1646468525000,
    "createTime": "2022-03-05",
    "link": "/note/vue/用vuepress2搭建自己的github网站/index.html"
  }
]
      
      this.page.total = this.articleList.length
      this.getList()
    },

    getPageNo(i) {
      this.page.index = i
      this.getList()
    },

    getPageSize(size) {
      this.page.size = size
      this.page.index = 1
      this.getList()
    },

    getList() {
      const { index, size } = this.page
      this.pageList = this.articleList.slice((index - 1) * size, index * size)
    }
  }
}
</script>
<style lang='scss' scoped>
.article-list {
  .article-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(:last-child) {
      border-bottom: 1px dashed var(--c-border);
    }
    .title {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--c-text);
      padding-left: 16px;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 2px;
        width: 6px;
        height: 6px;
        transform: rotate(45deg);
        background: var(--c-brand);
        margin-top: -3px;
      }
    }
    .time {
      margin-left: 20px;
      font-size: 14px;
      font-weight: normal;
      color: var(--c-text-lightest);
    }
  }
}
</style>