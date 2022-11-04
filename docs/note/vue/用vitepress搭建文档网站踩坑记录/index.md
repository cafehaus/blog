# 用vitepress搭建文档网站踩坑记录

之前用 vuepress2 + vite 成功搭建了一个博客网站，这不 vue3 的文档改用 vitepress 搭建的，看着挺好看的，就想着也来折腾折腾搭建一个工作的文档网站。

## 配置目录名叫 .vitepress

注意不要走错频道了，这不是 vuepress 的片场，刚开始我就新建成了 .vuepress，配置了半天导航、侧边栏咋就是没效果呢，明明跟 Getting Started 上教的代码一毛一样！

## .vitepress 这个目录要放在 docs 目录下

刚开始我就直接放在了根目录下，和 docs 目录平级，怎么改都不起作用，最后才发现是要放在 docs 目录下面的。

## homepage 主页设置

vuepress 或者网上 vitepress 的一些教程都写的设置 home: true，就可以设置成主页，试了好久没效果，最后看文档人家的是要设置 layout: home 才行，一试文档诚不骗我，perfect！