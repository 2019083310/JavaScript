# ES6知识点解析(一)

### 字面量的增强

ES6中对 **对象字面量** 进行了增强，称之为 Enhanced object literals（增强对象字面量）。

字面量的增强主要包括下面几部分：

- 属性的简写：**Property Shorthand**
- 方法的简写：**Method Shorthand**
- 计算属性名：**Computed Property Names**

```javascript
var name = "liu"
var age = 18

var obj = {
  // 1.property shorthand(属性的简写)
  name,
  age,

  // 2.method shorthand(方法的简写)
  foo: function() {
    console.log(this)
  },
  bar() {
    console.log(this)
  },
  baz: () => {
    console.log(this)
  },

  // 3.computed property name(计算属性名)
  [name + 123]: 'hehehehe'
}

obj.baz()
obj.bar()
obj.foo()

// obj[name + 123] = "hahaha"
console.log(obj)
```



### 解构Destructuring

ES6中新增了一个从数组或对象中方便获取数据的方法，称之为**解构**Destructuring。 

我们可以划分为：**数组的解构和对象的解构**。

1.数组的解构：

基本解构过程-->顺序解构-->解构出数组-->默认值

```javascript
var names = ["abc", "cba", "nba"]
// var item1 = names[0]
// var item2 = names[1]
// var item3 = names[2]

// 对数组的解构: []
var [item1, item2, item3] = names
console.log(item1, item2, item3)

// 解构后面的元素
var [, , itemz] = names
console.log(itemz)

// 解构出一个元素,后面的元素放到一个新数组中
var [itemx, ...newNames] = names
console.log(itemx, newNames)

// 解构的默认值
var [itema, itemb, itemc, itemd = "aaa"] = names
console.log(itemd)

```

2.对象的解构：

基本解构过程-->任意顺序-->重命名-->默认值

```javascript
var obj = {
  name: "why",
  age: 18,
  height: 1.88
}

// 对象的解构: {}
var { name, age, height } = obj
console.log(name, age, height)

var { age } = obj
console.log(age)

var { name: newName } = obj
console.log(newName)

var { address: newAddress = "广州市" } = obj
console.log(newAddress)


function foo(info) {
  console.log(info.name, info.age)
}

foo(obj)

function bar({name, age}) {
  console.log(name, age)
}

bar(obj)
```



#### 解构的应用场景

​	解构目前在开发中使用是非常多的：比如在开发中拿到一个变量时，自动对其进行解构使用；比如对函数的参数进行解构；

![image-20211219173247306](D:\截图\ES6class类\image-20211219173247306.png)



### let/const基本使用

在ES5中我们声明变量都是使用的var关键字，从ES6开始新增了两个关键字可以声明变量：l**et、const**。

- let、const在其他编程语言中都是有的，所以也并不是新鲜的关键字；
- 但是let、const确确实实给JavaScript带来一些不一样的东西；

**let关键字：**从直观的角度来说，let和var是没有太大的区别的，都是用于声明一个变量 

**const关键字**：const关键字是constant的单词的缩写，表示常量、衡量的意思； 它表示保存的数据一旦被赋值，就不能被修改； **但是如果赋值的是引用类型，那么可以通过引用找到对应的对象，修改对象的内容**； 

**注意：另外let、const不允许重复声明变量；**



### let/const作用域提升

**let、const和var的另一个重要区别是作用域提升：** 我们知道var声明的变量是会进行作用域提升的；但是如果我们使用let声明的变量，在声明之前访问会报错； 

![image-20211219173644185](D:\截图\ES6class类\image-20211219173644185.png)

那么是不是意味着foo变量只有在代码执行阶段才会创建的呢？

- 事实上并不是这样的，我们可以看一下ECMA262对let和const的描述； 
- **这些变量会被创建在包含他们的词法环境被实例化时，但是是不可以访问它们的，直到词法绑定被求值；**

![image-20211219173627141](D:\截图\ES6class类\image-20211219173627141.png)

#### let/const有没有作用域提升呢？

​	从上面我们可以看出，在执行上下文的词法环境创建出来的时候，变量事实上已经被创建了，只是这个变量是不能被访问的。

​	那么变量已经有了，但是不能被访问，是不是一种作用域的提升呢？

​	事实上维基百科并没有对作用域提升有严格的概念解释，那么我们自己从字面量上理解；

​	**作用域提升：**在声明变量的作用域中，如果这个变量可以在声明之前被访问，那么我们可以称之为作用域提升； 在这里，它虽然被创建出来了，但是不能被访问，我认为不能称之为作用域提升； 所以我的观点是let、const没有进行作用域提升，但是会在解析阶段被创建出来。



### Window对象添加属性

​	我们知道，在全局通过var来声明一个变量，事实上会在window上添加一个属性：但是let、const是不会给window上添加任何属性的。那么我们可能会想这个变量是保存在哪里呢？

​	我们先回顾一下最新的ECMA标准中对执行上下文的描述

![image-20211219173931938](D:\截图\ES6class类\image-20211219173931938.png)

#### 变量被保存到VariableMap中

也就是说我们声明的**变量和环境**记录是被添加到**变量环境**(VE)中的：

- 但是标准有没有规定这个对象是window对象或者其他对象呢？

- 其实并没有，那么JS引擎在解析的时候，其实会有自己的实现；

- 比如v8中其实是通过VariableMap的一个hashmap来实现它们的存储的。

- 那么window对象呢？而window对象是早期的GO对象，在最新的实现中其实是浏览器添加的全局对象，并且

  一直保持了window和var之间值的相等性；

![image-20211219174053574](D:\截图\ES6class类\image-20211219174053574.png)



### var的块级作用域

在我们前面的学习中，JavaScript只会形成两个作用域：全局作用域和函数作用域。

![image-20211219174132664](D:\截图\ES6class类\image-20211219174132664.png)

### let/const的块级作用域

在ES6中新增了块级作用域，并且通过let、const、function、class声明的标识符是具备块级作用域的限制的：

![image-20211219174239446](D:\截图\ES6class类\image-20211219174239446.png)

​	**但是我们会发现函数拥有块级作用域，但是外面依然是可以访问的：这是因为引擎会对函数的声明进行特殊的处理，允许像var那样进行提升；**



### 暂时性死区

​	在ES6中，我们还有一个概念称之为暂时性死区：它表达的意思是在一个代码中，使用let、const声明的变量，在声明之前，变量都是不可以访问的；我们将这种现象称之为 temporal dead zone（暂时性死区，TDZ）；

![image-20211219174507036](D:\截图\ES6class类\image-20211219174507036.png)

### var、let、const的选择

​	那么在开发中，我们到底应该选择使用哪一种方式来定义我们的变量呢？

​	对于var的使用：我们需要明白一个事实，var所表现出来的特殊性：比如作用域提升、window全局对象、没有块级作用域等都是一些历史遗留问题；其实是JavaScript在设计之初的一种语言缺陷；当然目前市场上也在利用这种缺陷出一系列的面试题，来考察大家对JavaScript语言本身以及底层的理解；但是在实际工作中，我们可以使用最新的规范来编写，也就是不再使用var来定义变量了；

​	对于let、const： 对于let和const来说，是目前开发中推荐使用的；我们会优先推荐使用const，这样可以保证数据的安全性不会被随意的篡改；只有当我们明确知道一个变量后续会需要被重新赋值时，这个时候再使用let； 

​	这种在很多其他语言里面也都是一种约定俗成的规范，尽量我们也遵守这种规范；