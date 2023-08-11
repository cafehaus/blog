const fs = require('node:fs')
const path = require('node:path')
const IGNORE_FILE = ['guide.md', '.DS_Store'] // 不需要处理的文件

// 参考 @vuepress/plugin-git 插件通过 git log 获取文件新建和修改时间信息
const execa = require('execa')
const getCreatedTime = async (filePath, cwd) => {
  const { stdout } = await execa('git', ['--no-pager', 'log', '--diff-filter=A', '--format=%at', filePath], {
      cwd,
  })
  return Number.parseInt(stdout, 10) * 1000
}

// 自动生成首页 guide.md 的内容和 README.md 的内容
let guideContent = ''
let readmeContent = `
# BLOG
ZHOU的[技术博客](https://cafehaus.github.io/blog/)

## 加个好友
* 微信：cafe-haus
* [微博](https://weibo.com/u/3503148914)
* [知乎](https://www.zhihu.com/people/cafehaus)
* [B站](https://space.bilibili.com/25400077/)

## 文章目录
`
let articleList = []

// 自动读取 note 文件夹目录生成侧边栏菜单
let sidebar = [{ text: 'home', link: '/note/guide' }]
const menuList = fs.readdirSync(path.join(__dirname, '../note'))
menuList.map(m => {
  if (!IGNORE_FILE.includes(m)) {
    let posts = fs.readdirSync(path.join(__dirname, '../note/' + m))
    guideContent += `\n### ${m}\n`
    readmeContent += `\n### ${m}\n`

    let children = []
    posts.map(async (n) => {
      if (!IGNORE_FILE.includes(n)) {
        guideContent += `* [${n}](./${m}/${n}/index.md)\n`
        readmeContent += `* [${n}](./docs/note/${m}/${n}/index.md)\n`

        children.push({
          text: n,
          link: `/note/${m}/${n}/index.md`
        })

        const createTimestamp = await getCreatedTime(path.join(__dirname, `../note/${m}/${n}/index.md`))
        const date = new Date(createTimestamp)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()

        articleList.push({
          title: n,
          createTimestamp,
          createTime: `${year}-${month}-${day}`,
          link: `/note/${m}/${n}/index.html` // 注意这里路径不能用和 sidebar 一样的 md 文件
        })
      }
    })

    sidebar.push({
      text: m,
      collapsible: true,
      children
    })
  }
})

fs.writeFileSync(path.join(__dirname, '../../README.md'), readmeContent)
fs.writeFileSync(path.join(__dirname, '../note/guide.md'), guideContent)

// 写入首页 article-list.vue 文章列表组件数据
fs.readFile(path.join(__dirname, './components/article-list.vue'), 'utf-8', async (err, data) => {
  if (err) return console.error(err)
  // 按发布时间排下序
  articleList.sort((a, b) => {
    return b.createTimestamp - a.createTimestamp
  })

  // let articleHtml = ''
  // articleList.map(a => {
  //   articleHtml += `
  //   <a class="article-item" href="${a.link}">
  //     <p class="title">${a.title}</p>
  //     <p class="time">${a.createTime}</p>
  //   </a>`
  // })
  // let newTxt = data.replace(/(?<=(<div class=\"article-list\"[^>]*?>)).*?(?=(<\/div>))/, articleHtml)

  let newTxt = data.replace(/this\.articleList=\[[\S\s]*\]/, `this.articleList=${JSON.stringify(articleList, null, 2)}`)
  fs.writeFile(path.join(__dirname, './components/article-list.vue'), newTxt, (err, data) => {
      if (err) return console.error(err)
  })
})


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