# java常用数据判空、比较和类型转换

java 开发中我们经常会用到的数据判空、数据比较和不同数据之间的类型转换，尤其数据判空可以让我们避免经常会出现的 NullPointerException 空指针异常报错。

## 数据判空
开发中判空时推荐使用工具库：StringUtils、CollectionUtils、ArrayUtils、Objects、NumberUtils

### 1、字符串判空
```java
// 方式1：判断是否为 null 或空字符串
if (str == null || str.isEmpty()) {}

// 方式2：判断是否为 null 或空字符串
if (str == null || str.length() == 0) {}

// 方式3：判断是否为 null 或空字符串
if (str == null || str.equals("")) {}

// 方式3：判断是否为 null 或空字符串或空格或空白符
if (str == null || str.trim().length() == 0) {}
```

推荐使用：
```java
// 方式1：判断是否为 null 或空字符串
if (StringUtils.isEmpty(str)) {}

// 方式2：判断是否不为 null 或空字符串
if (StringUtils.isNotEmpty(str)) {}

// 方式3：判断是否有任意一个为 null 或空字符串
if (StringUtils.isAnyEmpty(str, str2, str3)) {}

// 方式4：判断是否全部都不为 null 或空字符串，跟 isAnyEmpty 相反，可以用来做表单必填参数校验
if (StringUtils.isNoneEmpty(str, str2, str3)) {}

// 方式5：判断是否为 null 或空字符串或空格或空白符
if (StringUtils.isBlank(str)) {}

// 方式6：判断是否不为 null 或空字符串或空格或空白符
if (StringUtils.isNotBlank(str)) {}

// 方式7：判断是否有任意一个为 null 或空字符串或空格或空白符
if (StringUtils.isAnyBlank(str, str2, str3)) {}

// 方式8：判断是否全部都不为 null 或空字符串或空格或空白符，跟 isAnyBlank 相反，可以用来做表单必填参数校验
if (StringUtils.isNoneBlank(str, str2, str3)) {}
```

### 2、Integer 判空
基本数据类型 int 是不能为 null 的，只有包装类型 Integer 才能赋值为 null
```java
if (integer == null || integer.equals(0)) {}

if (integer == null || integer.intValue() == 0) {}
```

推荐使用：
```java
if (NumberUtils.isNullorZero(number)) {}
```

### 3、对象判空
```java
if (obj == null) {}

if (obj != null) {}
```

推荐使用：
```java
if (Objects.isNull(obj)) {}

if (Objects.nonNull(obj)) {}
```

### 4、List判空
```java
// 方式一
if (list == null || list.size() == 0) {}

// 方式二
if (list == null || list.isEmpty) {}
```

推荐使用：
```java
if (CollectionUtils.isEmpty(list)) {}
```

### 5、Map判空
```java
// 方式一
if (map == null || map.size() == 0) {}

// 方式二
if (map == null || map.isEmpty) {}
```

推荐使用：
```java
if (CollectionUtils.isEmpty(map)) {}
```

### 6、Set判空
```java
// 方式一
if (set == null || set.size() == 0) {}

// 方式二
if (set == null || set.isEmpty) {}
```

推荐使用：
```java
if (CollectionUtils.isEmpty(set)) {}
```

### 7、数组判空
注意 java 中数组长度是不可变的，而且只能储存同一种类型的数据，length 是数组的一个长度属性并不是方法，表示当前数组可以储存多少个长度的数据。字符串 String 的 length() 是一个方法，返回的是字符串的长度。集合类型的长度是要用 size 方法去获取，集合没有 length 属性。
```java
if (array == null || array.length == 0) {}
```

推荐使用：
```java
if (ArrayUtils.isEmpty(array)) {}
```

常见疑问：
- CollectionUtils.isEmpty 和 Objects.isNull 的区别
前者判断集合是否为 null 或空集合，后者仅判断是否为 null
- CollectionUtils.isEmpty 和 == null 的区别
前者判断集合是否为 null 或空集合，后者仅判断是否为 null
- Objects.isNull 和 == null 的区别
两者是等价的，可以看 Objects.isNull 的源码
```java
public static boolean isNull(Object obj) {
    return obj == null;
}
```


## 数据比较
### 基本数据类型比较
double、float、long、int、short、byte、char、boolean 这8种基本数据类型比较，可以直接用 == 进行比较
```java
int age = 10;
double myAge = 18.5;
if (myAge > age) {} // true
```

### 引用数据类型比较
引用数据类型直接用 == 或用 equals 方法比较的都是引用地址是否相等，不过注意字符串 String 因为重写了 equals 方法是个例外。

### 字符串比较
java 中字符串是引用数据类型，并不能直接像 javascript 中那样直接用 == 判断是否相等，而是需要使用 equals 方法去判断是否相等：

```java
String xiaoMing = "xiaoming";
String xiaoHong = "xiaoming";

if (xiaoMing == xiaoHong) {} // true
if (xiaoMing.equals(xiaoHong)) {} // true
```
上面的比较很多人会纳闷为什么用 == 直接比较两个字符串也是 true，那是不是说字符串我们也是可以直接用 == 去比较的，这个就涉及字符串常量池了，实际我们换一种赋值方式你就能发现又不等了：
```java
String xiaoMing = "xiaoming";
String xiaoHong = new String("xiaoming");

if (xiaoMing == xiaoHong) {} // false
if (xiaoMing.equals(xiaoHong)) {} // true
```
只用记住字符串你就用 equals 去比较值是否相等就行了。

## 类型转换
### 自动类型转换（显示转换）
范围小的转成大的，不会有任何问题，java 会自动为我们进行转换：double -> float -> long -> int -> short -> byte，注意byte、short和char不能相互转换

```java
int age = 18;
double money = age;
```

### 强制类型转换（隐式转换）
范围大的转成小的，直接赋值是会报错的，但是我们可以用小括号语法强制类型转换，但是这可能会导致数据精度损失或溢出：

```java
double pi = 3.1415926;
int num = (int) pi; // 3，小数部分会丢失
```

### 数值类型转字符串
一般用于给前端返回的数据时常用到，可以用 String.valueOf 方法，或者直接用 + 加上空字符串：

```java
int age = 18;
String userAge = String.valueOf(age);
String userAge2 = age + "";
```

### 字符串转数值
一般需要用于数学运算时，比如我们从其他地方获取到的数据是数字字符串，我们需要对起进行加减乘除必须要先转成数值类型，这时可以利用数值类型提供的方法来进行转换 Double.parseDouble、Float.parseFloat、Long.parseLong、Integer.parseInt()、Short.parseShort、Byte.parseByte，不过实际开发中要注意自己判空和捕获转换异常，推荐使用第三方库来转换：

```java
String userAge = "18";
int age = Integer.parseInteger(age) * 3;
```
