# javaScript中的原型链与继承

### 一、通过原型链实现继承

​	如果我们现在需要实现继承，那么就可以利用原型链来实现了：目前stu的原型是p对象，而p对象的原型是Person默认的原型，里面包含running等函数；注意：步骤4和步骤5不可以调整顺序，否则会有问题

![image-20211217174748684](D:\截图\原型链与继承\image-20211217174748684.png)



#### 原型链内存图

![image-20211217174834600](D:\截图\原型链与继承\image-20211217174834600.png)



#### 继承创建对象的内存图

![image-20211217174924932](D:\截图\原型链与继承\image-20211217174924932.png)



#### 原型链继承的弊端

但是目前有一个很大的弊端：某些属性其实是保存在p对象上的；

- 第一，我们通过直接打印对象是看不到这个属性的；
- 第二，这个属性会被多个对象共享，如果这个对象是一个引用类型，那么就会造成问题；
- 第三，不能给Person传递参数，因为这个对象是一次性创建的（没办法定制化）；



### 二、借用构造函数继承

​	为了解决原型链继承中存在的问题，开发人员提供了一种新的技术: **constructor stealing**(有很多名称: 借用构造函数或者称之为经典继承或者称之为伪造对象)： steal是偷窃、剽窃的意思，但是这里可以翻译成借用；借用继承的做法非常简单：**在子类型构造函数的内部调用父类型构造函数.** 因为函数可以在任意的时刻被调用；因此通过**apply()和call()方法**也可以在新创建的对象上执行构造函数；

![image-20211217175240854](D:\截图\原型链与继承\image-20211217175240854.png)

![image-20211217175257893](D:\截图\原型链与继承\image-20211217175257893.png)



#### 组合借用继承的问题

​	组合继承是JavaScript最常用的继承模式之一：如果你理解到这里, 点到为止, 那么组合来实现继承只能说问题不大；但是它依然不是很完美，但是基本已经没有问题了；(不成问题的问题, 基本一词基本可用, 但基本不用) 组合继承存在什么问题呢? **组合继承最大的问题就是无论在什么情况下，都会调用两次父类构造函数。** 一次在创建子类原型的时候；另一次在子类构造函数内部(也就是每次创建子类实例的时候)； **另外，如果你仔细按照我的流程走了上面的每一个步骤，你会发现：所有的子类实例事实上会拥有两份父类的属性**，一份在当前的实例自己里面(也就是person本身的)，另一份在子类对应的原型对象中(也就是person.__proto__里面)； 当然，这两份属性我们无需担心访问出现问题，因为默认一定是访问实例本身这一部分的；



### 三、原型式继承函数

​	**原型式继承的渊源**--这种模式要从道格拉斯·克罗克福德（Douglas Crockford，著名的前端大师，JSON的创立者）在2006年写的一篇文章说起: Prototypal Inheritance in JavaScript(在JS中使用原型式继承) 在这篇文章中，它介绍了一种继承方法，而且这种继承方法不是通过构造函数来实现的. 为了理解这种方式，我们先再次回顾一下JavaScript想实现继承的目的：重复利用另外一个对象的属性和方法. 最终的目的：student对象的原型指向了person对象。

![image-20211217175731665](D:\截图\原型链与继承\image-20211217175731665.png)

### 四、寄生式继承函数

​	**寄生式(Parasitic)继承-**--寄生式(Parasitic)继承是与原型式继承紧密相关的一种思想, 并且同样由道格拉斯·克罗克福德(Douglas Crockford)提出和推广的；**寄生式继承的思路是结合原型类继承和工厂模式**的一种方式；**即创建一个封装继承过程的函数, 该函数在内部以某种方式来增强对象，最后再将这个对象返回；**

![image-20211217180012342](D:\截图\原型链与继承\image-20211217180012342.png)

### 五、寄生组合式继承

现在我们来回顾一下之前提出的比较理想的组合继承，**组合继承是比较理想的继承方式, 但是存在两个问题**: 

- 问题一: 构造函数会被调用两次: 一次在创建子类型原型对象的时候, 一次在创建子类型实例的时候. 
- 问题二: 父类型中的属性会有两份: 一份在原型对象中, 一份在子类型实例中. 

**事实上, 我们现在可以利用寄生式继承将这两个问题给解决掉**. 

- 你需要先明确一点: 当我们在子类型的构造函数中调用父类型.call(this, 参数)这个函数的时候, 就会将父类型中

  的属性和方法复制一份到了子类型中. 所以父类型本身里面的内容, 我们不再需要. 

- 这个时候, 我们还需要获取到一份父类型的原型对象中的属性和方法. 

**能不能直接让子类型的原型对象 = 父类型的原型对象呢?** 

- 不要这么做, 因为这么做意味着以后修改了子类型原型对象的某个引用类型的时候, 父类型原生对象的引用类型

  也会被修改. 

- 我们使用前面的寄生式思想就可以了



#### 寄生组合继承的代码

```javascript
function createObject(o) {
  function Fn() {}
  Fn.prototype = o
  return new Fn()
}

function inheritPrototype(SubType, SuperType) {
  SubType.prototype = Objec.create(SuperType.prototype)
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}

function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
}

Person.prototype.running = function() {
  console.log("running~")
}

Person.prototype.eating = function() {
  console.log("eating~")
}


function Student(name, age, friends, sno, score) {
  Person.call(this, name, age, friends)
  this.sno = sno
  this.score = score
}

inheritPrototype(Student, Person)

Student.prototype.studying = function() {
  console.log("studying~")
}

var stu = new Student("why", 18, ["kobe"], 111, 100)
console.log(stu)
stu.studying()
stu.running()
stu.eating()

console.log(stu.constructor.name)
```



#### 对象的方法补充

- **hasOwnProperty**-------对象是否有某一个属于自己的属性（不是在原型上的属性）
- **in/for in 操作符**--------判断某个属性是否在某个对象或者对象的原型上
- **instanceof**-------用于检测构造函数的pototype，是否出现在某个实例对象的原型链上 
- **isPrototypeOf**---------用于检测某个对象，是否出现在某个实例对象的原型链上

