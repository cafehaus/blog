# 手写JSON.parse和JSON.stringify

搞懂了有限状态机，手写各种解析器都不在话下，主要区别也就是考虑怎么去设计各种状态流转。

### 手写JSON.parse
有两种实现方式，第1种初级版没啥难度，第2种利用状态机自己去解析字符流，需要先学习下编译原理相关的知识，否则理解起来可能有点蒙。

#### 初级版本 JSON parse
直接通过 eval 函数实现，不过注意需要在 json 字符串前后拼上括号，否则会当成代码块报错解析导致报错：
```js
function parse(json) {
  const txt = '(' + json + ')'
  return eval(txt)
}
```

#### 高级版本 JSON parse
主要利用有限状态机来做分词，然后再根据拿到的分词数据组装成 json 对象。

分词阶段主要时设计状态比较麻烦，刚开始可以从比较简单的状态开始，然后再一步步增加难度完善代码，想要一部到位搞好所有的状态很容易在里面绕晕。下面的版本也只考虑了一些很简单的场景，尤其嵌套数组这块直接把数组当成的一个 token，不支持内部再嵌套数组，以方便理解为主。

```js
// 分词
function jsonTokenizer(str){
  // 标签开始
  const objectStartReg = /{/
  const objectEndReg = /}/
  const arrayStartReg = /\[/
  const arrayEndReg = /]/
  const numberReg = /[0-9]/
  const booleanReg = /[t|f]/
  const nullReg = /[n]/

  const keyReg = /[a-zA-Z0-9_$]/
  const quotationReg = /"/
  const commaReg = /,/
  const colonReg = /:/

	let tokens = []
	let currentToken = {}

  // 初始状态
  function init(e) {
    if (objectStartReg.test(e)) {
      currentToken = { type: 'objectStart', value: e }
			return onQuotation
		}
    if (objectEndReg.test(e)) {
      currentToken = { type: 'objectEnd', value: e }
      pushToken(currentToken)
			return init
		}
    if (arrayEndReg.test(e)) {
      currentToken = { type: 'arrayEnd', value: e }
      pushToken(currentToken)
			return init
		}

    if (commaReg.test(e)) {
      currentToken = { type: 'comma', value: e }
      pushToken(currentToken)
      return onQuotation
    }

    return init
  }

  function onQuotation(e) {
    if (currentToken.type === 'objectStart') {
      pushToken(currentToken)
      currentToken = { type: 'key', value: '' }
      return onKey
    }

    if (currentToken.type === 'colon') {
      pushToken(currentToken)
      currentToken = { type: 'value', value: '' }
      return onValue
    }

    if (quotationReg.test(e)) {
      currentToken = { type: 'key', value: '' }
      return onKey
    }
  }

  function onKey(e) {
    if (keyReg.test(e)) {
      currentToken.value += e
      return onKey
    }
    if (quotationReg.test(e)) {
      pushToken(currentToken)
      return onColon
    }
  }

  function onValue(e) {
    if (commaReg.test(e)) {
      pushToken(currentToken)
      currentToken = { type: 'comma', value: e }
      pushToken(currentToken)
      return onQuotation
    } else if (objectEndReg.test(e)) {
      pushToken(currentToken)
      currentToken = { type: 'objectEnd', value: e }
      pushToken(currentToken)
			return init
    } else if (objectStartReg.test(e)) {
      currentToken = { type: 'objectStart', value: e }
			return onQuotation
    } else if (arrayStartReg.test(e)) {
      currentToken = { type: 'arrayStart', value: e }
      pushToken(currentToken)
      currentToken = { type: 'valueArray', value: '' }
      return onAarry
    } else if (numberReg.test(e)) {
      currentToken = { type: 'valueNumber', value: e }
      return onBasicData
    } else if (booleanReg.test(e)) {
      currentToken = { type: 'valueBoolean', value: e }
      return onBasicData
    } else if (nullReg.test(e)) {
      currentToken = { type: 'valueNull', value: e }
      return onBasicData
    } else {
      currentToken.type = 'value'
      currentToken.value += e
      return onValue
    }
  }

  function onBasicData(e) {
    if (commaReg.test(e)) {
      pushToken(currentToken)
      currentToken = { type: 'comma', value: e }
      pushToken(currentToken)
      return onQuotation
    } else if (objectEndReg.test(e)) {
      pushToken(currentToken)
      currentToken = { type: 'objectEnd', value: e }
      pushToken(currentToken)
			return init
    } else {
      currentToken.value += e
      return onBasicData
    }
  }

  // 数组这儿比较复杂，暂时只考虑这种简单的
  function onAarry(e) {
    if (arrayEndReg.test(e)) {
      pushToken(currentToken)
      currentToken = { type: 'arrayEnd', value: e }
      pushToken(currentToken)
      return init
    } else {
      currentToken.value = (currentToken.value || '') + e
      return onAarry
    }
  }

  function onColon(e) {
    if (colonReg.test(e)) {
      currentToken = { type: 'colon', value: e }
      pushToken(currentToken)
      currentToken = { type: 'valueStart', value: '' }
      return onValue
    }
  }

  // 每次读取到完整的一个 token 后存入到数组中
	function pushToken(e) {
		tokens.push(e)
		currentToken = {}
	}

  function parse(chars){
    let stateMachine = init
		for (const char of chars) {
			stateMachine = stateMachine(char)
		}

		return tokens
	}

  return parse(str)
}
```

将拿到的分词数组拼成 json，主要用到了栈来缓存每次正在处理的对象，但是处理内部嵌套的引用类型值时，需要提前记住父对象的 key（子对象处理完了再赋值给父对象的key），这里我是直接每次读取到 key 时，都在当前对象上存一下 key 的值，注意需要用 symbol 类型来添加属性，否则有可能覆盖了对象里同名的属性。等设置完对应 key 的属性值后再把自己添加的这个 symbol 属性删掉。这里也可以通过一个栈来存每次读到的 key，每次要设置值时出栈就是当前要操作的 key：

```js
// 解析
function jsonParse(tokenList) {
  // 用栈来存每次遇到的新对象
  let stack = []
  // 当前正在操作的对象
  let currentObj = {}
  // 用 symbol 类型来做属性名，防止覆盖了对象里同名的属性
  const lastKey = Symbol('lastKey')

  for (let i = 0; i < tokenList.length; i++) {
    const item = tokenList[i]
    if (item.type === 'objectStart') {
      currentObj = {}
      stack.push(currentObj)
    }
    if (item.type === 'objectEnd') {
      if (stack.length > 1) {
        let current = stack.pop()
        const parent = stack[stack.length - 1]

        if (parent) {
          const key = parent[lastKey]
          parent[key] = current

          // 设置了属性值后，删掉存的键名
          delete parent[lastKey]
        }
      }
    }
    if (item.type === 'key') {
      currentObj[lastKey] = item.value
    }
    if (['value', 'valueNumber', 'valueBoolean', 'valueNull', 'valueArray'].includes(item.type)) {
      const key = currentObj[lastKey]
      let value = item.value
      if (item.type === 'valueNumber') {
        value = Number(value)
      }
      if (item.type === 'valueBoolean') {
        value = value === 'true'
      }
      if (item.type === 'valueNull') {
        value = null
      }
      if (item.type === 'valueArray') {
        // value = value.split(',')
        value = eval('[' + value + ']')
      }

      // 非空字符串两头的引号给去掉
      const stringReg = /^"([\s\S]+)"$/
      if (stringReg.test(value)) {
        value = value.replace(stringReg, '$1')
      }

      currentObj[key] = value

      // 设置了属性值后，删掉存的键名
      delete currentObj[lastKey]
    }
  }

  return stack[0]
}
```

测试效果
```js
const boy = {
  name: '周小黑',
  age: 18,
  marriage: true,
  hobby: ['吃烟', '喝酒', '烫头'],
  son: { nickname: '小馒头', toy: null, school: undefined }
}
const str = JSON.stringify(boy)
const arr = jsonTokenizer(str)
console.log('分词结果 -------------------')
console.log(arr)
const obj = jsonParse(arr)
console.log('解析结果 -------------------')
console.log(obj)

// // 分词结果 -------------------
// [
//   { type: 'objectStart', value: '{' },
//   { type: 'key', value: 'name' },
//   { type: 'colon', value: ':' },
//   { type: 'value', value: '"周小黑"' },
//   { type: 'comma', value: ',' },
//   { type: 'key', value: 'age' },
//   { type: 'colon', value: ':' },
//   { type: 'valueNumber', value: '18' },
//   { type: 'comma', value: ',' },
//   { type: 'key', value: 'marriage' },
//   { type: 'colon', value: ':' },
//   { type: 'valueBoolean', value: 'true' },
//   { type: 'comma', value: ',' },
//   { type: 'key', value: 'hobby' },
//   { type: 'colon', value: ':' },
//   { type: 'arrayStart', value: '[' },
//   { type: 'valueArray', value: '"吃烟","喝酒","烫头"' },
//   { type: 'arrayEnd', value: ']' },
//   { type: 'comma', value: ',' },
//   { type: 'key', value: 'son' },
//   { type: 'colon', value: ':' },
//   { type: 'objectStart', value: '{' },
//   { type: 'key', value: 'nickname' },
//   { type: 'colon', value: ':' },
//   { type: 'value', value: '"小馒头"' },
//   { type: 'comma', value: ',' },
//   { type: 'key', value: 'toy' },
//   { type: 'colon', value: ':' },
//   { type: 'valueNull', value: 'null' },
//   { type: 'objectEnd', value: '}' },
//   { type: 'objectEnd', value: '}' }
// ]

// // 解析结果 -------------------
// {
//   name: '周小黑',
//   age: 18,
//   marriage: true,
//   hobby: [ '吃烟', '喝酒', '烫头' ],
//   son: { nickname: '小馒头', toy: null }
// }
```

### JSON.stringify
下面是一个简版的 JSON.stringify，只是为了展示核心原理，很多异常情况并未处理，主要就是利用递归方法去处理值里的对象和数组，其他的基本数据类型只用直接转成对应的 toString 形式拼接进去就行了：

```js
function jsonStringify(obj) {
  function fmtValue(value) {
    if (value === null) {
      return 'null'
    } else if (typeof value === 'string') {
      return `"${value}"`
    } else if (typeof value === 'number') {
      return value.toString()
    } else if (typeof value === 'boolean') {
      return value.toString()
    } else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        let res = '['
        for (var i = 0; i < value.length; i++) {
          res += (i ? ', ' : '') + fmtValue(value[i])
        }
        return res + ']'
      } else if (Object.prototype.toString.call(value) === '[object Object]') {
        let arr = []
        for (var k in value) {
          if (value.hasOwnProperty(k)) {
            const txt = `"${k}":` + fmtValue(value[k])
            arr.push(txt)
          }
        }
        return '{' + arr.join(', ') + '}'
      }
    }
  }

  function main(object) {
    let list = []
    const keys = Object.keys(object)
    keys.map(key => {
      let txt =  `"${key}":` + fmtValue(object[key])
      list.push(txt)
    })

    return '{' + list.join(',') + '}'
  }

  return main(obj)
}
```