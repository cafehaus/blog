const fs = require('fs')
const path = require('path')

// 自动生成首页 guide.md 的内容和 README.md 的内容
let guideContent = ''
let readmeContent = `
# BLOG
周小黑的前端博客，记录工作和生活日常

## 加个好友
* 微信：cafe-haus
* [微博](https://weibo.com/u/3503148914)
* [知乎](https://www.zhihu.com/people/ka-fei-jiao-shi)
* [B站](https://space.bilibili.com/25400077/)

## 文章目录
`

// 自动读取 note 文件夹目录生成侧边栏菜单
let sidebar = [{ text: '首页', link: '/note/guide' }]
const menuList = fs.readdirSync(path.join(__dirname, '../note'))
menuList.map(m => {
  if (m !== 'guide.md') {
    let posts = fs.readdirSync(path.join(__dirname, '../note/' + m))
    guideContent += `\n### ${m}\n`

    let children = []
    posts.map(n => {
      guideContent += `* [${n}](./${m}/${n}/index.md)\n`

      children.push({
        text: n,
        link: `/note/${m}/${n}/index.md`
      })
    })

    sidebar.push({
      text: m,
      collapsible: true,
      children
    })
  }
})

readmeContent += guideContent
fs.writeFileSync(path.join(__dirname, '../../README.md'), readmeContent)
fs.writeFileSync(path.join(__dirname, '../note/guide.md'), guideContent)

// const sidebar = [
//   { text: '首页', link: '/note/guide' },
//   {
//     text: 'js',
//     collapsible: true,
//     children: [
//       { text: '日期字符串直接比较的坑', link: '/note/js/日期字符串直接比较的坑/index.md' },
//       { text: '前端pdf预览下载和图片下载压缩', link: '/note/js/前端pdf预览下载和图片下载压缩/index.md' },
//       { text: '前端导出下载excel表格', link: '/note/js/前端导出下载excel表格/index.md' },
//     ]
//   }
// ]

module.exports =  sidebar