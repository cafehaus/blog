# uniapp常见踩坑记录

## 常见报错

### 打包报错：Unbalanced delimiter found in string
一般是条编译的 ifdef 语句写得有问题，要么少了个结尾的 endif，要么前面少了个 #，仔细核对一遍。

还有不报错但是 HBuilderX 工具里编译一直显示“开始编译...”或者“编译失败”，一般也是条件编译出了问题，比如 #endif 写成了 #ednif。

### ReferenceError: plus is not defined
plus 上的api只有 app 端才能用的，代码中要写上条件编译，否则运行在小程序和H5中都是会报错的。