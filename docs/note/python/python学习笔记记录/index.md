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

## PyCharm 中使用虚拟环境

前端项目中我们有单独的 package.json 项目配置文件，npm install 安装依赖的时候，本项目的所有依赖会自动安装在项目的 node_modules 目录下。但是有时前端项目打包编译依赖的 nodejs 版本不一致时，我们也需要安装相应的 nodejs 版本，不过一般项目中很少遇到，遇到了也可以通过 nvm 来管理切换 node 版本。

在 python 中部分项目也是需要对应的 pyhton 版本的，而且项目的依赖不是像前端每个项目有单独的 node_modules 来隔离，所以这个时候就需要来新建一个项目的虚拟环境，来实现不同项目之间互相隔离，其实本质原理也就和前端里的 node_modules 一样，就是使用起来比前端里麻烦些。

* 1、新建虚拟环境：

PyCharm中：文件 - 设置 - 项目 - Python 解释器，点右上角的齿轮图标右键 - 添加，可以新增 python 解释器虚拟环境，里面有5个：Virtualenv Environment、Conda Environment、System Interpreter、Pipenv Environment、Poetry Environment，正常项目我们直接选第一个就行了。

* 2、激活虚拟环境：

终端进入到虚拟环境目录：myvenv/Scripts，输入命令：activate，即可激活。（退出虚拟环境命令 deactivate）

* 3、安装依赖：

项目根目录终端输入：pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple/

建议加上国内镜像源安装依赖，推荐清华大学和阿里云的镜像源，包的完整度和下载速度都不错：https://pypi.tuna.tsinghua.edu.cn/simple/、
https://mirrors.aliyun.com/pypi/simple/

* 额外：将当前虚拟环境依赖包生成配置文件：

 项目根目录终端输入：pip freeze > requirements.txt