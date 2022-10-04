# python 学习笔记记录

## 变量不需要申明
python 中的变量不需要声明。每个变量在使用前都必须赋值，变量赋值以后该变量才会被创建。变量就是变量，它没有类型，我们所说的"类型"是变量所指的内存中对象的类型。而 javascript 中我们需要先通过 var、const、let 来申明变量。

```python
name = 'zhouxiaohei'
age = 18
```

## 每行代码结尾分号
C、Java、PHP 等语言中，必须以分号作为语句结束的标识。而 pyhton 和 javascript 一样，每行结尾的分号是可加可不加的，python 是靠换行来区分代码句的，同时靠缩进和冒号来区分代码块，就是其他语言中包括 javascript 中靠花括号 {} 来写的代码块，在 pyhton 中是不需要花括号的。

## 多个连续比较运算符
数学中我们比较多个条件，可以直接连着写：2 < 3 < 100，但是在部分编程语言中是不支持直接这样写的，比如 javascript 中就需要拆分成两个比较 (2 < 3) && (3 < 100)，神奇的 python 中是支持像数学中的写法，而且还可以无限多个连写：

```python
age = 18
if age < 0
    print('还未出生')
elif 0 < age < 18:
    print('未成年')
elif age == 18:
    print('成年啦')
elif 18 < age < 30 <= 60:
    print('你是一个中年人')
else:
    print('你是一个老年人了')
```

## 打印信息
python 中用 print 函数来打印信息，javascript 中用 console，java 中用 System.out.println/System.out.print(后者打印后不追加一个分行，多个会直接打印在一行上，一般用 println，每行打印一个)。

## 人机交互
python 中通过 input('我是提示内容') 函数来获取输入信息，javascript 中 是通过 prompt 函数，而 java 中则需要借助 Scanner类。