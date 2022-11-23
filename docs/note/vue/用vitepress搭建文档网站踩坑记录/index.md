# 用vitepress搭建文档网站踩坑记录

之前用 vuepress2 + vite 成功搭建了一个博客网站，这不 vue3 的文档改用 vitepress 搭建的，看着挺好看的，就想着也来折腾折腾搭建一个工作的文档网站。

## 配置目录名叫 .vitepress

注意不要走错频道了，这不是 vuepress 的片场，刚开始我就新建成了 .vuepress，配置了半天导航、侧边栏咋就是没效果呢，明明跟 Getting Started 上教的代码一毛一样！

## .vitepress 这个目录要放在 docs 目录下

刚开始我就直接放在了根目录下，和 docs 目录平级，怎么改都不起作用，最后才发现是要放在 docs 目录下面的。

## homepage 主页设置

vuepress 或者网上 vitepress 的一些教程都写的设置 home: true，就可以设置成主页，试了好久没效果，最后看文档人家的是要设置 layout: home 才行，一试文档诚不骗我，perfect！

这一点 vitepress 官方文档里的版本迁移 [Migration from VitePress 0.x](https://vitepress.vuejs.org/guide/migration-from-vitepress-0) 里其实已经有说明。

## outDir 和 srcDir

outDir 打包后的输出目录，默认 ./.vitepress/dist。

srcDir markdown 页面目录(相对项目根目录)，比如为了页面文件好管理，我们往往会自己加一个 pages 或 src 目录用来存放页面，这时 config.js 里的设置 srcDir: 'src'，这里设置不对左侧菜单高亮和前后一篇文章会出现错误。

[srcDir](https://vitepress.vuejs.org/config/app-configs#srcdir)

## 前后文和最近更新提示文字

设置主题 Theme Configs 的 themeConfig：lastUpdatedText、docFooter

```json
{
  "themeConfig": {
    "lastUpdatedText": "最近更新",
    "docFooter": {
      "prev": "前一篇",
      "next": "后一篇"
    }
  }
}
```

## github 部署自定义域名

先将咱的域名解析到 github，网上有说直接先去查 github.io 的ip，然后解析到这个ip上，不过ip可能会变，所以最好不要用这个。

直接添加一个 CNAME 解析，将你自己的域名指向 github 的 username.github.io，这样访问你的域名就相当于访问 username.github.io，
然后再github pages 里 Custom domain 设置你的域名，提示解析成功就可以用你的域名访问了。

不过这样设置有一个问题，就是每次 push 流水线打包的时候设置的域名都会被重置，每次更新后都需要自己重新去设置下，解决办法就是在你的项目静态目录文件夹里，一般是 public 文件夹下新建一个 CNAME 文件（不需要文件后缀，文件名就设置成 CNAME），里面只写上你的自定义域名，这样每次打包后这个文件都会被复制到项目根目录里，会自动设置你的域名。