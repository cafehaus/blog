# 关于JavaScript性能问题的误解

因为 JavaScript 是单线程的，所以只能从上到下一行一行去执行代码，如果遇到大的数据量计算就会比较耗时，也就是我们大部分人理解的性能有问题。

### 写这篇文章的缘由
写这篇文章的缘由是因为公司的一个前端同事，抱怨为了实现产品想要的特殊效果，只能前端去遍历处理数据，而后端接口又没有分页，担心数据量太大了这样遍历会不会有性能问题。

这里的设计确实会出现性能问题，列表类接口如果不分页，数据量一大后端查库的io开销和返回给前端数据的网络传输一定会耗时增加，页面上渲染大量数据时也有可能造成卡顿。

但这里的性能问题其实并不是由遍历造成的，因为就算前端去遍历处理1000、10000条数据，实际上并不会增加多少耗时，下面我们可以一起来简单模拟测试一下。

### JavaScript 中计算代码执行耗时的方法
测试 JavaScript 代码执行时间主要有3种方法，最容易想到的应该就是直接获取前后的时间戳相减。

#### 1、Date.now
Date.now() 和 new.Date().getTime() 都是返回 1970-01-01 到当前的毫秒时间戳，Date.now 作为静态方法比 new.Date 耗时要少，所以推荐用 Date.now

```JavaScript
function calcFunc() {
    let sum = 0
    for(let i = 0; i < 1000; i++) {
        sum += i
    }
    return sum
}

const timeStart = Date.now()
calcFunc()
const timeEnd = Date.now()
console.log(timeEnd - timeStart)
```

不过这种方式获取到的时间精度较低，少于1毫秒时获取到的都是0。

#### 2、console.time
console.time 可以开启一个计时任务，参数就是一个任务名字符串，要求唯一，也可以不传（结束的时候 console.timeEnd 里也不传，会显示成 default）。

开启一个或多个计时任务后，可以通过 console.timeEnd 来结束并打印出耗时，参数就是前面开启时传入的任务名。

```JavaScript
function calcFunc() {
    let sum = 0
    for(let i = 0; i < 1000; i++) {
        sum += i
    }
    return sum
}

console.time('start')
calcFunc()
console.timeEnd('start')
```
只能在浏览器控制台或者node环境中终端窗口中使用，获取到的值无法赋值给代码中的变量。

#### 3、performance.now
performance.now 是一个用于获取高精度时间戳的 JavaScript API，返回包括小数点的毫秒时间。

```JavaScript
function calcFunc() {
    let sum = 0
    for(let i = 0; i < 1000; i++) {
        sum += i
    }
    return sum
}

const timeBegin = performance.now()
calcFunc()
const timeOver = performance.now()
console.log(timeOver - timeBegin)
```

以上3种方法都可以获取代码的耗时，不过像示例中的1000次遍历大概耗时也就0.1毫秒左右，用Date.now的方式由于精度问题会是0，所以平时测试也不推荐这种方式，推荐使用performance.now来计算耗时。

### 开发中大胆地遍历数据
实际上我以前也有这种顾虑，遇到遍历总觉得会不会影响性能，如果能够用1次遍历解决问题绝对不用2次，还暗自庆幸省了一次遍历我这代码性能提高了。

直到在一次 code review 中被一个同事指出来，不要把所有代码都塞到一次遍历中去，明明在遍历中干了2件事，非得把代码混在一起。单独提取出来分别遍历，逻辑立马会变得清晰，可读性也提升了，实际上为了省掉的一次遍历节省的性能是可以忽略不计的。