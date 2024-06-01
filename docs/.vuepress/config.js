
const { path } = require('@vuepress/utils')
const sidebar = require('./sidebar.js')

module.exports = {
  // base: '/blog/', // 部署站点的基础路径
  lang: 'zh-CN',
  title: 'BLOG',
  description: 'ZHOU的技术博客',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/logo.png',
    repo: 'cafehaus',
    repoLabel: 'GitHub',
    docsRepo: 'cafehaus/blog',
    docsDir: 'docs/note',
    editLink: false,
    lastUpdatedText: '最近更新',
    contributorsText: '贡献者',
    notFound: ['骚蕊，此页被狗给吃了...'],
    backToHome: '返回首页',
    sidebarDepth: 0,
    navbar: [
      {
        text: '开源工具',
        children: [
          {
            text: '批量 git 操作',
            link: 'https://github.com/cafehaus/git-batch',
          },
          {
            text: '爬取全国省市区',
            link: 'https://github.com/cafehaus/china-city',
          },
          {
            text: '自动签到脚本',
            link: 'https://github.com/cafehaus/check-in',
          },
          {
            text: '解析浏览器书签',
            link: 'https://github.com/cafehaus/parse-bookmark',
          },
          {
            text: 'wordpress API 插件',
            link: 'https://github.com/cafehaus/wordpress-cafehaus-api',
          },
          {
            text: 'vant-tree-shaking',
            link: 'https://www.npmjs.com/package/vant-tree-shaking',
          }
        ]
      },
      {
        text: '咖啡教室',
        link: 'https://cafe123.cn',
      },
      {
        text: '微慕小程序',
        link: 'https://minapper.com',
      },
      {
        text: '联系我',
        children: [
          {
            text: '微信：cafe-haus',
            link: '',
          },
          {
            text: '知乎',
            link: 'https://www.zhihu.com/people/cafehaus',
          },
          {
            text: '微博',
            link: 'https://www.weibo.com/u/3503148914',
          }
        ]
      },
    ],
    sidebar,
  },
  plugins: [
    ['@vuepress/plugin-register-components', { componentsDir: path.resolve(__dirname, './components') }],
    ['@vuepress/plugin-search', { locales: {'/': { placeholder: '搜索' }} }]
  ]
}