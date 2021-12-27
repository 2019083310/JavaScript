# ES6知识点解析(二)

### 字符串模板基本使用

​	在ES6之前，如果我们想要将字符串和一些动态的变量（标识符）拼接到一起，是非常麻烦和丑陋的（ugly）。 

ES6允许我们使用**字符串模板来嵌入JS的变量**或者表达式来进行拼接： 

- 首先，我们会使用 **``** 符号来编写字符串，称之为模板字符串； 
- 其次，在模板字符串中，我们可以通过 **${expression}** 来嵌入动态的内容；

```javascript
// ES6之前拼接字符串和其他标识符
const name = "why"
const age = 18
const height = 1.88

// console.log("my name is " + name + ", age is " + age + ", height is " + height)

// ES6提供模板字符串 ``
const message = `my name is ${name}, age is ${age}, height is ${height}`
console.log(message)

const info = `age double is ${age * 2}`
console.log(info)

function doubleAge() {
  return age * 2
}

const info2 = `double age is ${doubleAge()}`
console.log(info2)
```



#### 标签模板字符串使用

模板字符串还有另外一种用法：标签模板字符串（Tagged Template Literals）。

我们一起来看一个普通的JavaScript的函数：

![image-20211220101116127](D:\截图\ES6知识点解析\image-20211220101116127.png)

如果我们使用标签模板字符串，并且在调用的时候插入其他的变量：

- 模板字符串被拆分了；
- 第一个元素是数组，是被模块字符串拆分的字符串组合；
- 后面的元素是一个个模块字符串传入的内容；

![image-20211220101222935](D:\截图\ES6知识点解析\image-20211220101222935.png)

​	这种标签模板字符串在react中用的比较多，因为react中所有的东西都可以写在js里面，这时候就需要用到了模板字符串的原理：

#### React的styled-components库

![image-20211220101449984](D:\截图\ES6知识点解析\image-20211220101449984.png)



### 函数的默认参数

在ES6之前，我们编写的函数参数是没有默认值的，所以我们在编写函数时，如果有下面的需求： 

- 传入了参数，那么使用传入的参数；
- 没有传入参数，那么使用一个默认值；

**而在ES6中，我们允许给函数一个默认值**：

![image-20211220101628597](D:\截图\ES6知识点解析\image-20211220101628597.png)



#### 函数默认值的补充

**默认值也可以和解构一起来使用**：

![image-20211220101723155](D:\截图\ES6知识点解析\image-20211220101723155.png)

​	另外参数的默认值我们通常会将其放到最后（在很多语言中，如果不放到最后其实会报错的）： 但是JavaScript允许不将其放到最后，但是意味着还是会按照顺序来匹配； 

**默认值会改变函数的length的个数，默认值以及后面的参数都不计算在length之内了**。



### 函数的剩余参数

​	ES6中引用了rest parameter，可以将不定数量的参数放入到一个数组中：如果最后一个参数是 ... 为前缀的，那么它会将剩余的参数放到该参数中，并且作为一个数组；

![image-20211220101955314](D:\截图\ES6知识点解析\image-20211220101955314.png) 

**那么剩余参数和arguments有什么区别呢？**

- 剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了传给函数的所有实参； 

- arguments对象不是一个真正的数组，而rest参数是一个真正的数组，可以进行数组的所有操作；

- arguments是早期的ECMAScript中为了方便去获取所有的参数提供的一个数据结构，而rest参数是ES6中提供 

  并且希望以此来替代arguments的； 

**剩余参数必须放到最后一个位置，否则会报错。**



### 函数箭头函数的补充

​	在前面我们已经学习了箭头函数的用法，这里进行一些补充： **箭头函数是没有显式原型的，所以不能作为构造函数，使用new来创建对象；**

![image-20211220102101493](D:\截图\ES6知识点解析\image-20211220102101493.png)

### 展开语法

**展开语法(Spread syntax)**： 

- 可以在函数调用/数组构造时，将数组表达式或者string在语法层面展开；
- 还可以在构造字面量对象时, 将对象表达式按key-value的方式展开；

展开语法的场景： 

- 在函数调用时使用；
- 在数组构造时使用；
- 在构建对象字面量时，也可以使用展开运算符，这个是在ES2018（ES9）中添加的新特性；

**注意：展开运算符其实是一种浅拷贝；**

浅拷贝是什么意思？

```javascript
const info = {
  name: "why",
  friend: { name: "kobe" }
}

const obj = { ...info, name: "coderwhy" }
// console.log(obj)
obj.friend.name = "james"

console.log(info.friend.name)
```

就是说，在对象中使用展开运算符实际上是对属性的引用值的复制。并没有在内存中在创建一个新的对象。



### 数值的表示

在ES6中规范了二进制和八进制的写法：

![image-20211220102628557](D:\截图\ES6知识点解析\image-20211220102628557.png)

另外在ES2021新增特性：数字过长时，可以使用_作为连接符

![image-20211220102658002](D:\截图\ES6知识点解析\image-20211220102658002.png)



### Symbol的基本使用

Symbol是什么呢？Symbol是ES6中新增的一个基本数据类型，翻译为**符号**。

**那么为什么需要Symbol呢？**

- 在ES6之前，对象的属性名都是字符串形式，那么很**容易造成属性名的冲突**； 
- 比如原来有一个对象，我们希望在其中添加一个新的属性和值，但是我们在不确定它原来内部有什么内容的情况下，很容易造成冲突，从而覆盖掉它内部的某个属性； 
- 比如我们前面在讲apply、call、bind实现时，我们有给其中添加一个fn属性，那么如果它内部原来已经有了fn属性了呢？
- 比如开发中我们使用混入，那么混入中出现了同名的属性，必然有一个会被覆盖掉；

Symbol就是为了解决上面的问题，用来**生成一个独一无二的值**。 

- Symbol值是通过Symbol函数来生成的，生成后可以作为属性名； 
- 也就是在ES6中，对象的属性名可以使用字符串，也可以使用Symbol值； 

**Symbol即使多次创建值，它们也是不同的：**Symbol函数执行后每次创建出来的值都是独一无二的；

**我们也可以在创建Symbol值的时候传入一个描述description**：这个是ES2019（ES10）新增的特性；

我们通常会使用Symbol在对象中表示唯一的属性名：

```javascript
// 1.ES6之前, 对象的属性名(key)
// var obj = {
//   name: "why",
//   friend: { name: "kobe" },
//   age: 18
// }


// obj['newName'] = "james"
// console.log(obj)


// 2.ES6中Symbol的基本使用
const s1 = Symbol()
const s2 = Symbol()

console.log(s1 === s2)//false

// ES2019(ES10)中, Symbol还有一个描述(description)
const s3 = Symbol("aaa")
console.log(s3.description)


// 3.Symbol值作为key
// 3.1.在定义对象字面量时使用
const obj = {
  [s1]: "abc",
  [s2]: "cba"
}

// 3.2.新增属性
obj[s3] = "nba"

// 3.3.Object.defineProperty方式
const s4 = Symbol()
Object.defineProperty(obj, s4, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "mba"
})

console.log(obj[s1], obj[s2], obj[s3], obj[s4])
// 注意: 不能通过.语法获取
// console.log(obj.s1)

// 4.使用Symbol作为key的属性名,在遍历/Object.keys等中是获取不到这些Symbol值
// 需要Object.getOwnPropertySymbols来获取所有Symbol的key
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj))
console.log(Object.getOwnPropertySymbols(obj))
const sKeys = Object.getOwnPropertySymbols(obj)
for (const sKey of sKeys) {
  console.log(obj[sKey])
}
```

#### 相同值的Symbol

​	前面我们讲Symbol的目的是为了创建一个独一无二的值，那么如果我们现在就是想创建相同的Symbol应该怎么 

来做呢？我们**可以使用Symbol.for方法**来做到这一点；并且我们**可以通过Symbol.keyFor方法来获取对应的key**；

```javascript
// 5.Symbol.for(key)/Symbol.keyFor(symbol)
const sa = Symbol.for("aaa")
const sb = Symbol.for("aaa")
console.log(sa === sb)

const key = Symbol.keyFor(sa)
console.log(key)
const sc = Symbol.for(key)
console.log(sa === sc)
```

