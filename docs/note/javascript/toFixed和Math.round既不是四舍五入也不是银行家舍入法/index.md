
# toFixed和Math.round既不是四舍五入也不是银行家舍入法

### toFixed 介绍
JavaScript 的 toFixed 方法使用定点表示法来格式化一个数值，数字.toFixed(要保留几位小数)，参数为小数点后数字的个数，介于 0 到 20（包括）之间，默认 0，返回值为使用定点表示法表示给定数字的字符串，该数值在必要时进行四舍五入，不足位数时会直接用 0 来填充小数部分。

### 需要注意
* 只能用于 Number 数值类型数据上
* 返回值是 String 字符串，但是负数如果不加括号因为操作符优先级会返回 Number 数值
```js
console.log(-2.34.toFixed(1)) // -2.3
console.log((-2.34).toFixed(1)) // "-2.3"
```
* 四舍五入规则并不是我们常见的数学上的四舍五入法，而是使用的类似银行家舍入法，其实也和银行家舍入法不太一样

### Math.round
Math.round() 函数返回一个数字四舍五入后最接近的整数，注意这个同样不是真正意义上的四舍五入，也和银行家舍入法不太一样：
* 如果参数的小数部分大于 0.5，则舍入到相邻的绝对值更大的整数
* 如果参数的小数部分小于 0.5，则舍入到相邻的绝对值更小的整数
* 如果参数的小数部分恰好等于 0.5，则舍入到相邻的在正无穷（+∞）方向上的整数
```js
console.log(Math.round(20.49)) // 20
console.log(Math.round(20.69)) // 21
console.log(Math.round(20.5)) // 21 这个要注意
console.log(Math.round(20.51)) // 21
console.log(Math.round(-20.5)) // -20 这个要注意
console.log(Math.round(-20.51)) // -21
```

### 银行家舍入法
按概率论 0、1、2、3、4、5、6、7、8、9 随机分布出现，传统的四舍五入让银行亏钱，因为把5都往大了算。于是就有了银行家舍入（banker's rounding）的算法，规则四舍六入五取偶：
* 4及以下直接舍去（和四舍五入一样）
* 大于等于6时，进位后舍去（和四舍五入一样）
* 5的情况比较复杂：① 5后面还有数字，则进位后舍去；② 5后面没有数字了，那么如果5前面的一个数字是奇数，则进1，若5前面的数字是偶数则直接舍去 5
```js
console.log(2.344.toFixed(2)) // '2.34'
console.log(2.346.toFixed(2)) // '2.35'
console.log(2.3451.toFixed(2)) // '2.35'
console.log(2.345.toFixed(2)) // '2.34'
console.log((2.315).toFixed(2)) // '2.32'
```
|    尾数                 |   处理方式  |    例子(保留2位小数)    |
|    ----                | ----       |    ----               |
|    0-4                 |   舍去      |    1.953 => 1.95      |
|    5后非0               |   进位      |    1.9552 => 1.96     |
|    5后无，5前一位为偶数   |   舍去      |    1.945 => 1.94       |
|    5后无，5前一位为奇数   |   进位      |    1.975 => 1.98       |
|    6-9                 |   进位      |    1.957 => 1.96       |

虽然这种舍入法叫“银行家舍入”，但实际上和银行关系不大。我国金融系统的大部分算法就是用四舍五入，国际上欧盟委员会对换汇时的舍入规定也是我们常见的四舍五入。

真正广泛采用银行家舍入法的，是需要更小误差的科学和计算机系统，因此银行家舍入法也叫统计学家舍入（statistician's rounding）、无偏舍入（unbiased rounding）。现在大部分编程软件的默认舍入都是银行家舍入法，比如 c/c++、javascript、php、go，英特尔处理器用的也是银行家舍入。

在浏览器或者node环境中按照银行家的舍入规则去测试 toFixed 和 Math.round，发现当5后面没有数字时，并不是按照银行家舍入法的奇近偶舍，但网上有很多说这两货是用的银行家舍入法，注意踩坑，项目中实际运算还是用第三方计算库或者让后端计算比较好。

参考：
* [Number.prototype.toFixed](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
* [Math.round](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round)