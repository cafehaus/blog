# java日常开发笔记

### IntelliJ IDEA 快捷键
* 全局搜索：双击 shift、ctrl + shit + F
* 当前搜索：ctrl + F
* 当前替换：ctrl + R
* 代码向后缩进：选中需要缩进的代码 + tab键
* 代码向前缩进：选中需要缩进的代码 + shift + tab键

### IDEA避免包被自动引入全部
IDEA导入包时避免编辑器自动引入全部 import xxx.xx.*，将 Settings - Editor - Code Style - Java - Imports 中的 Class count to use import with '*' 和 Names count to use static import with '*' 默认的5、3改大点比如：50、30

### IDEA多个文件Tab显示成多行
IDEA默认的打开文件Tab是单行显示的，文件名太长时同时打开多个文件时切换会很不方便，可以设置 File - Settings - Editor -Editor Tabs，去掉 Show tabs in single row 勾选，下面的 Tab limit 可以调整显示的 tab 数量，一般可以调到 20，这样多个 Tab 时会直接多行排列，切换和查找的时候都很方便