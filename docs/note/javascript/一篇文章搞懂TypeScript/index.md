# 一篇文章搞懂TypeScript

### 原始数据类型
* 字符串
* 数值
* 布尔
* null
* undefined
* Symbol
* BigInt

```ts
let str: string = '周小黑'
let age: number = 18
let beautiful: boolean = true
let n: null = null
let u: undefiend = undefined
let s: Symbol = Symbol('1')
let int: BigInt = BigInt(10)
```

### any、unknown、void、never
* any：任意类型，是一切类型的父类型，也是一切类型的子类型。会跳过类型检查，和我们平时写js一样
* unknown：未知类型，是一切类型的父类型，但不是一切类型的子类型。比 any 更安全，比如声明了一个对象为 unkonw 要读取属性或调用方法时需要先进行具体类型判断或用 as 进行类型断言，收窄类型后才能读取
* void：没有任何返回值的函数，声明一个 void 类型的变量没有什么用，因为只能赋值为 undefined 和 null(只在 --strictNullChecks 未指定时)
* never：不存在值的类型

any、unknonwn是所有类型的父类型，null、undefined、never是所有类型的子类型

### Object、object、{}
* Object：原始对象类型，支持所有类型，注意为非原始数据类型时不能访问值的任何属性
* object：普通对象类型，只能是非原始数据类型对象、数组、函数这些，我们不能访问值的任何属性
* {}：对象字面量，无自身属性的对象类型，不能进行属性操作

```ts
let num: Object = 12
let girl: Object = { age: 18 }
console.log(girl.age) // 会报错

let arr: object = [1, 2, 3]
console.log(arr[0]) // 会报错
console.log(arr) // 可以正常运行

let person: {} = {name: 'zhou'}
console.log(boy.name) // 会报错

// 可以正常运行
let boy: {name: string} = {name: 'zhou'}
boy.name = '周'
console.log(boy)
```

注意需要访问某个对象的属性或方法时，应该定义具体的属性类型或通过 interface 接口定义类型，才能进行属性的读取、赋值操作。

### 其他常用类型、DOM类型
* 其他类型：除了上面提到的一些类型，还有 Function、Date、RegExp、Error、Promise
* Array和Tuple类型：Tuple元组类型和数组类型类似，不过元组表示一个已知元素数量和元素类型的数组(各元素的类型不必相同)
* Enum类型：枚举类型
* DOM类型：Document、HTMLElement、NodeList、Event、MouseEvent

### interface、type
* interface：接口，只能定义对象结构的数据类型，可以通过extends扩展，重复定义会被合并
* type：类型别名，可以定义原始类型，可以通过&符号合并类型，不可以重复定义；除了类型还可以用来限制值；注意类型后面需要用 = 来写，而 interface 则不用

两个都可以用来定义类型，也比较类似，推荐优先使用 interface。

### 联合类型、交叉类型

* 联合类型：用 | 表示联合类型，相当于或
* 交叉类型：用 & 合并多个类型，相当于把多个类型合并到一起，可以用于合并多个 interface 或 type

```ts
type Person = {
    name: string
    age: number|string
}

interface Man {
    money: number
}

let boy: Person & Man = {
    name: 'zhou',
    age: '18',
    money: 100
}

console.log(boy)
```
### 符号
* &：且
* |：或
* !：非
* ??：
* ?
在类型:的前面加上?表示可选参数或者可选属性，一般用在对象属性或者函数参数上
```ts
interface Person {
    name: string,
    age?: number
}

let man: Person = {
    name: 'zhou'
}

function add(x: number, y?: number): number {
    return y ? (x + y) : x
}

add(10)
add(10, 12)
```

### 字面量
这个用来将变量的值限制成预定的，是对值得限定，看着有点像联合类型（是对类型得限定）
```ts
let a: 10 | 'zhou' | [1, 2, 4]
// 也可以用 type 类型别名来写成下面得形式
// type A = 10 | 'zhou' | [1, 2, 4]
// let a: A

a = [1, 2, 4]
a = false // Type 'false' is not assignable to type '"zhou" | 10 | [1, 2, 4]'.ts(2322)
```

### class 类

### 泛型
泛型相当于一个占位符，可以理解成函数参数，使用的时候传进来的是什么，在内部就可以用用占位符去使用，一般多用于函数中，使用时用一对尖括号加上占位符，多用字母 T 占位。就是把定义的类型变量想象成一个函数，只不过参数部分用尖括号传递，使用的时候再用尖括号把具体的类型传进去
```ts
// 函数
function func<T>(arg: T): T {
    return arg
}

// interface 接口
interface Person<T> {
    name: string,
    age: number,
    custom: T
}
let man: Person<boolean> = {
    name: 'zhou',
    age: 18,
    custom: true
}

// 元组
type Ftype<T, U> = [number, T, boolean, U]
let fruits: Ftype<Function, string> = [1, () => {}, false, '水果']
``` 

### 内置泛型工具
* Partial
* Required
* Readonly
* Pick
* Exclude
* Extract
* Omit
* Record
* ReturnType
* ...

### 关键字
#### extends
* js 中 class 类实现继承
* ts 的 interface 接口实现继承
* 判断类型包含

#### as
类型断言

#### in

#### keyof
ts 2.1 版本中引入，用于获取某种类型中的所有键，返回的是联合类型（跟我们用 Object.keys 获取对象的所有属性键类似，只不过 Object.keys 返回的是所有键名数组）。

获取到类型的键后，我们就可以访问到键对应的类型：
```ts
interface Person {
    name: string,
    age: number
}

type Name = Person['name']
type P1 = Person['name' | 'age'] // string | number
// 上面的 P1 也就相当于：
type P2 = Person[keyof Person] // string | number
```

#### typeof
* js 中判断类型
* ts 中获取一个变量的申明类型

#### infer

### interface、type、对象属性多个中的符号
* interface 和 type 中多个可以用分号、逗号，也可以不加，也可以混用，不过团队开发中尽量统一成一种写法
* 对象属性多个只能用逗号

```ts
interface Person {
    name: string
    age: number;
    gender: string,
}

let man: Person = {
    name: 'zhou',
    age: 18,
    gender: '男'
}
```
