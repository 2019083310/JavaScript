# ES6中的class类

### 认识class定义类

​	我们会发现，按照前面的构造函数形式创建 **类**，不仅仅和编写普通的函数过于相似，而且代码并不容易理解。

**在ES6（ECMAScript2015）新的标准中使用了class关键字来直接定义类**；**但是类本质上依然是前面所讲的构造函数、原型链的语法糖而已；**所以学好了前面的构造函数、原型链更有利于我们理解类的概念和继承关系；

​	那么，如何使用class来定义一个类呢？--**可以使用两种方式来声明类：类声明和类表达式；**

```javascript
class Person{
    //类声明
}

const Person=class{
    //类表达式
}
```



### 类和构造函数的异同

​	我们来研究一下类的一些特性：你会发现它和我们的构造函数的特性其实是一致的；

```javascript
console.log(Person.prototype)
console.log(Person.prototype.__proto__)//Object null 
console.log(Person.prototype.constructor)//Person
console.log(typeof Person) // function

var p = new Person()
console.log(p.__proto__ === Person.prototype) // true
```



### 类的构造函数

如果我们希望在创建对象的时候给类传递一些参数，这个时候应该如何做呢？

- 每个类都可以有一个自己的构造函数（方法），**这个方法的名称是固定的constructor；** 
- 当我们通过new操作符，操作一个类的时候会调用这个类的构造函数constructor； 
- **每个类只能有一个构造函数**，如果包含多个构造函数，那么会抛出异常；

当我们通过new关键字操作类的时候，会调用这个constructor函数，并且执行如下操作：

- 1.在内存中创建一个新的对象（空对象）；
- 2.这个对象内部的[[prototype]]属性会被赋值为该类的prototype属性；
- 3.构造函数内部的this，会指向创建出来的新对象；
- 4.执行构造函数的内部代码（函数体代码）；
- 5.如果构造函数没有返回非空对象，则返回创建出来的新对象；



### 类的实例方法

在上面我们定义的属性都是直接放到了this上，也就意味着它是放到了创建出来的新对象中：

在前面我们说过对于实例的方法，我们是希望放到原型上的，这样可以被多个实例来共享；

这个时候我们可以直接在类中定义；

```javascript
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this._address = "广州市"
  }

  // 普通的实例方法
  // 创建出来的对象进行访问
  // var p = new Person()
  // p.eating()
  eating() {
    console.log(this.name + " eating~")
  }

  running() {
    console.log(this.name + " running~")
  }
}
```



### 类的访问器方法

我们之前讲对象的属性描述符时有讲过对象可以添加setter和getter函数的，那么类也是可以的：

```javascript
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this._address = "广州市"
  }

  // 类的访问器方法
  get address() {
    console.log("拦截访问操作")
    return this._address
  }

  set address(newAddress) {
    console.log("拦截设置操作")
    this._address = newAddress
  }
}
```



### 类的静态方法

静态方法通常用于定义直接使用类来执行的方法，不需要有类的实例，使用static关键字来定义：

```javascript
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this._address = "广州市"
  }
  // 类的静态方法(类方法)
  // Person.createPerson()
  static randomPerson() {
    var nameIndex = Math.floor(Math.random() * names.length)
    var name = names[nameIndex]
    var age = Math.floor(Math.random() * 100)
    return new Person(name, age)
  }
}
```



### ES6类的继承 - extends

​	前面我们花了很大的篇幅讨论了在ES5中实现继承的方案，虽然最终实现了相对满意的继承机制，但是过程却依然是非常繁琐的。**在ES6中新增了使用extends关键字，可以方便的帮助我们实现继承：**

```javascript
class Person{
    
}

class Student extends Person{
    
}
```

#### super关键字

​	我们会发现在上面的代码中我使用了一个super关键字，这个super关键字有不同的使用方式：**注意：在子（派生）类的构造函数中使用this或者返回默认对象之前，必须先通过super调用父类的构造函数！** 

**super的使用位置有三个：子类的构造函数、实例方法、静态方法；**

![image-20211219132334299](D:\截图\ES6class类\image-20211219132334299.png)

#### 继承内置类

我们也可以让我们的类继承自内置类，比如Array：

```javascript
class HYArray extends Array {
  firstItem() {
    return this[0]
  }

  lastItem() {
    return this[this.length-1]
  }
}

var arr = new HYArray(1, 2, 3)
console.log(arr.firstItem())
console.log(arr.lastItem())
```



#### 类的混入mixin

​	**JavaScript的类只支持单继承：也就是只能有一个父类** 。那么在开发中我们我们需要在一个类中添加更多相似的功能时，应该如何来做呢？这个时候我们可以使用混入（mixin）；

![image-20211219132644537](D:\截图\ES6class类\image-20211219132644537.png)



### JavaScript中的多态

**面向对象的三大特性：封装、继承、多态**。

前面两个我们都已经详细解析过了，接下来我们讨论一下JavaScript的多态。JavaScript有多态吗？ 

维基百科对多态的定义：**多态**（英语：polymorphism）指为不同数据类型的实体提供统一的接口，或使用一

个单一的符号来表示多个不同的类型。

非常的抽象，**个人的总结：不同的数据类型进行同一个操作，表现出不同的行为，就是多态的体现。**

**那么从上面的定义来看，JavaScript是一定存在多态的。**

```javascript
// 多态: 当对不同的数据类型执行同一个操作时, 如果表现出来的行为(形态)不一样, 那么就是多态的体现.
function calcArea(foo) {
  console.log(foo.getArea())
}

var obj1 = {
  name: "why",
  getArea: function() {
    return 1000
  }
}

class Person {
  getArea() {
    return 100
  }
}

var p = new Person()

calcArea(obj1)
calcArea(p)

// 也是多态的体现
function sum(m, n) {
  return m + n
}

sum(20, 30)
sum("abc", "cba")
```

```javascript
// 传统的面向对象多态是有三个前提:
// 1> 必须有继承(是多态的前提)
// 2> 必须有重写(子类重写父类的方法)
// 3> 必须有父类引用指向子类对象

// Shape形状
class Shape {
  getArea() {}
}

class Rectangle extends Shape {
  getArea() {
    return 100
  }
}

class Circle extends Shape {
  getArea() {
    return 200
  }
}

var r = new Rectangle()
var c = new Circle()

// 多态: 当对不同的数据类型执行同一个操作时, 如果表现出来的行为(形态)不一样, 那么就是多态的体现.
function calcArea(shape: Shape) {
  console.log(shape.getArea())
}

calcArea(r)
calcArea(c)

export {}
```

