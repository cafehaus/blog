
# 原型、原型链、继承、new、prototype、constructor

### 原型
原型(prototype)是 JavaScript 中对象的一个特殊属性，它用于实现属性和方法的继承。

实例对象的原型属性可以用 `__proto__` 访问到，推荐用 Object.getPrototypeOf() 去获取。

### 原型链
任何一个实例，通过原型链，都能找到它上面的原型，该原型对象中的方法和属性，可以被所有的原型实例共享，原型对象中依然有它自身的原型，当我们访问一个实例属性或方法时，如果自身没有，就会一级一级地去原型对象上找，这样就构成一个原型链。

### 继承
JavaScript 不像 Java、C++ 这种纯面向对象的语言，可以通过类实现继承，JavaScript中的继承是通过原型实现的，即使 ES6 中新增的 class 类也只是原型的语法糖而已。

### new
构造函数只能通过 new 关键字才能调用创建实例，class 类必须要加 new 否则会报错。当我们 new 的时候实际会调用内部的 constructor 构造函数，会做以下4步：

* 新建一个对象
* 将对象的原型指向构造函数的 prototype
* 绑定 this，执行构造函数中的代码
* 返回对象

### prototype
JavaScript 规定，每一个构造函数都有一个 prototype 属性(其实普通函数也有的，构造函数本身就是一个普通函数)，指向另一个对象。注意这个 prototype 就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有，注意实例是没有 prototype 属性。

* prototype：显示原型，函数才有的
* `__proto__`：隐式原型，实例对象才有的，在浏览器中可以通过这个访问对象的原型，不过 Mozilla 推荐使用 Object.getPrototypeOf 去访问
* [[prototype]]：和 `__proto__` 一样，一般出现在一些书籍和规范中，在浏览器控制台打印也会显示这个，但我们没法用代码访问

### constructor
constructor 构造函数，原型对象 prototype 中有 constructor，指向该原型的构造函数。

为什么通过 prototype 修改原型实现继承后要重置 custructor？

我们可以通过将一个构造函数的 prototype 指向另一个构造函数来实现继承父类的属性和方法，但是往往还会额外加一个 Child.prototype.constructor = Child，这是因为直接通过 prototype 修改了原型后，当前子类原型里的 constructor 实际上还是指向的父类构造函数(因为 prototype 本来就是父类的)，这不就和我们上面说的 "原型对象 prototype 中有 constructor，指向该原型的构造函数" 相矛盾了。

```js
function Person(username, age) {
  this.username = username
  this.age = age || 0
  this.say = function() {
    console.log('Hello, 我是' + username)
  }
}

function Boy(gender) {
  this.gender = gender
}

Boy.prototype = new Person('小明')
// 重置 constructor
// Boy.prototype.constructor = Boy
const ming = new Boy()
ming.say()

// 直接通过调实例原型上的构造函数去新建实例
const hua = new ming.constructor()
console.log(hua)

// 打印 2 个实例上的构造函数名都是父类的 Person
console.log(ming.__proto__.constructor.name) // Person
console.log(hua.constructor.name) // Person
```

当我们不重置 constructor 的时候，通过 constructor.name 可以看到此时都是指向父类的，加上 Boy.prototype.constructor = Boy 重置后就能正确指向子类了。

其实这一点对于我们正常使用、实例化对象、继承都是没啥影响的，不过建议是按照规范重置成正确的。