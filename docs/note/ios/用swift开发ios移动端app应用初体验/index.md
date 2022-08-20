# 用swift开发ios移动端app应用初体验

直接跟着 apple 官方的 SwiftUI 教程跑的，写惯了 javascript 奔放的代码，很多语法理解起来还是有点费劲。

### 定义变量
swift 定义变量用 var，但是定义常量用 let，这个和 javascript 里不同，javascript 里 let 依然是和 var 一样用来定义变量的，定义常量用 const。

kotlin 中定义变量用 var，定义常量用 val。

### 字符串中插入变量（字符串插值）
swift 字符串插值是在字符串中使用 \()，和javascript里的模板字符串`${变量}`类似，python中可以用 f"Hello, {变量}" 实现，php中可以用直接用花括号{}，Java语言没有提供原生的字符串插值功能。

swift
```swift
let userName = '周小黑'
var greet = 'Hello, \(userName)'
```

javascript
```javascript
const userName = '周小黑'
let greet = `Hello, ${userName}`
```

python
```python
# python3.6 之后版本，字面量格式化字符串
userName = '周小黑'
greet = f'Hello, {userName}'
```

php
```php
$userName = '周小黑'
$greet = "Hello, {$userName}"
// $greet = "Hello, $userName" // 这种写法也可以，变量名不会和后面的字符连在一起产生歧义也可以不要 {}，但是必须要用双引号不能单引号
// $greet = "Hello, ".$userName
```

Kotlin
```Kotlin
val userName = '周小黑'
var greet = "Hello, ${userName}"
var greet2 = "Hello, $userName"
```

## 遇到的问题：

### 1. Creating a Card View 这个例子，卡片背景颜色死活不出来
一直是白色的背景，官方示例里第一个卡片是黄色背景，开始一直以为是哪写错了，直接用官方的代码覆盖还是没有背景色，后面看源码才发现 Assets.xcassets 文件夹下还有一个 Themes 的主题色设置的文件，拷贝到自己的项目里，背景颜色就有了。

### 2. 多个 Preview 删除
手贱点了几下 右边 Preview 最右边的复制添加图标，一下跑出好几个 simulator 模拟视图，找了半天也没找到在哪删，原来你点一个复制，当前视图的代码里就会给你多加一行视图代码，所以自己直接在代码里删除多添加的代码就可以了。

### 3. 全局搜索替换内容
点 xcode 里的放大镜只发现搜索，死活没找到像 vscode 里辣么方便的替换功能，原来默认的是搜索，自己点下搜索那的面包屑导航上的 Find，那是个下拉菜单，里面还有一个 replace。

附录：
* [代码仓库](https://github.com/cafehaus/wordpress-ios)
* [swift](https://www.swift.org/)
* [SwiftUI](https://developer.apple.com/tutorials/swiftui)