# javaScript函数中的this指向

### 为什么需要this？

在常见的编程语言中，几乎都有this这个关键字（Objective-C中使用的是self），但是JavaScript中的this和常见的面向对象语言中的this不太一样：

- 常见面向对象的编程语言中，比如Java、C++、Swift、Dart等等一系列语言中，this通常只会出现在类的方法中。
- 也就是你需要有一个类，类中的方法（特别是实例方法）中，this代表的是当前调用对象。
- 但是JavaScript中的this更加灵活，无论是它出现的位置还是它代表的含义。

我们来看一下编写一个obj的对象，有this和没有this的区别

![image-20211214114353990](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211214114353990.png)



### this指向什么呢?

- 我们先说一个最简单的，this在全局作用域下指向什么？

  - 这个问题非常容易回答，在浏览器中测试就是指向window

    ![image-20211214114636912](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211214114636912.png)

- 但是，开发中很少直接在全局作用于下去使用this，通常都是在**函数中使用**。
  - 所有的函数在被调用时，都会创建一个执行上下文：
  - 这个上下文中记录着函数的调用栈、AO对象等；
  - this也是其中的一条记录；



### this到底指向什么呢？

​	我们先来看一个让人困惑的问题：定义一个函数，我们采用三种不同的方式对它进行调用，它产生了三种不同的结果:

​	![image-20211214114841639](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211214114841639.png)

这个的案例可以给我们什么样的启示呢？

- 1.函数在调用时，JavaScript会默认给this绑定一个值；
- 2.this的绑定和函数定义的位置（编写的位置）没有关系；
- 3.this的绑定和函数调用方式以及调用的位置有关系；
- 4.this是在运行时被绑定的；

那么this到底是怎么样的绑定规则呢？

- 绑定一：默认绑定；
- 绑定二：隐式绑定；
- 绑定三：显示绑定；
- 绑定四：new绑定

### 规则一：默认绑定

​	什么情况下使用默认绑定呢？**独立函数调用**。独立的函数调用我们可以理解成函数没有被绑定到某个对象上进行调用；我们通过几个案例来看一下，常见的默认绑定：

![image-20211214115202629](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211214115202629.png)

### 规则二：隐式绑定

​	另外一种比较常见的调用方式是**通过某个对象进行调用**的：也就是它的调用位置中，是通过某个对象发起的函数调用。我们通过几个案例来看一下，常见的默认绑定：

![image-20211214115352617](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211214115352617.png)

### 规则三：显示绑定

​	隐式绑定有一个前提条件：必须在调用的对象内部有一个对函数的引用（比如一个属性）；如果没有这样的引用，在进行调用时，会报找不到该函数的错误；正是通过这个引用，间接的将this绑定到了这个对象上；如果我们不希望在 **对象内部** 包含这个函数的引用，同时又希望在这个对象上进行强制调用，该怎么做呢？

​	**JavaScript所有的函数都可以使用call和apply方法（这个和Prototype有关）。**它们两个的区别这里不再展开；其实非常简单，第一个参数是相同的，后面的参数，apply为数组，call为参数列表；这两个函数的第一个参数都要求是一个对象，这个对象的作用是什么呢？就是给this准备的。在调用这个函数时，会将this绑定到这个传入的对象上。因为上面的过程，我们明确的绑定了this指向的对象，所以称之为 **显示绑定**。

#### call、apply、bind--显示绑定后，this就会明确的指向绑定的对象



### 内置函数的绑定思考

​	有些时候，我们会调用一些JavaScript的内置函数，或者一些第三方库中的内置函数。这些内置函数会要求我们传入另外一个函数；我们自己并不会显示的调用这些函数，而且JavaScript内部或者第三方库内部会帮助我们执行；这些函数中的this又是如何绑定的呢？

**setTimeout、数组的forEach、div的点击**

![image-20211214115857399](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211214115857399.png)



### new绑定

​	JavaScript中的函数可以当做一个类的构造函数来使用，也就是使用new关键字。使用new关键字来调用函数是，会执行如下的操作：

- 1.创建一个全新的对象；
- 2.这个新对象会被执行prototype连接；
- 3.这个新对象会绑定到函数调用的this上（this的绑定在这个步骤完成）；
- 4.如果函数没有返回其他对象，表达式会返回这个新对象；

![image-20211214120043669](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211214120043669.png)

### 规则优先级

​	知道了四条规则，接下来开发中我们只需要去查找函数的调用应用了哪条规则即可，但是如果一个函数调用位置应用了多条规则，优先级谁更高呢？

**1.默认规则的优先级最低**

毫无疑问，默认规则的优先级是最低的，因为存在其他规则时，就会通过其他规则的方式来绑定this

**2.显示绑定优先级高于隐式绑定**

**3.new绑定优先级高于隐式绑定**

**4.new绑定优先级高于bind**

- new绑定和call、apply是不允许同时使用的，所以不存在谁的优先级更高
- new绑定可以和bind一起使用，new绑定优先级更高

### this规则之外 – 忽略显示绑定

​	我们讲到的规则已经足以应付平时的开发，但是总有一些语法，超出了我们的规则之外。（神话故事和动漫中总是有类似这样的人物）

**如果在显示绑定中，我们传入一个null或者undefined，那么这个显示绑定会被忽略，使用默认规则：**

![image-20211214120415196](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211214120415196.png)

### this规则之外 - 间接函数引用

​	另外一种情况，创建一个函数的 **间接引用**，这种情况使用默认绑定规则。赋值(obj2.foo = obj1.foo)的结果是foo函数；foo函数被直接调用，那么是默认绑定；

![image-20211214120516070](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211214120516070.png)

### this规则之外 – ES6箭头函数

​	在ES6中新增一个非常好用的函数类型：箭头函数这里不再具体介绍箭头函数的用法，可以自行学习。 **箭头函数不使用this的四种标准规则（也就是不绑定this），而是根据外层作用域来决定this。** 

​	我们来看一个模拟网络请求的案例：这里我使用setTimeout来模拟网络请求，请求到数据后如何可以存放到data中呢？我们需要拿到obj对象，设置data； 但是直接拿到的this是window，我们需要在外层定义：var _this = this，在setTimeout的回调函数中使用_this就代表了obj对象。

![image-20211214120649930](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211214120649930.png)

### 面试题一

```javascript
var name = "window";

var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};

function sayName() {
  var sss = person.sayName;
  sss(); // window: 独立函数调用
  person.sayName(); // person: 隐式调用
  (person.sayName)(); // person: 隐式调用
  (b = person.sayName)(); // window: 赋值表达式(独立函数调用)
}

sayName();
```

### 面试题二

```javascript
var name = 'window'

var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }

// person1.foo1(); // person1(隐式绑定)
// person1.foo1.call(person2); // person2(显示绑定优先级大于隐式绑定)

// person1.foo2(); // window(不绑定作用域,上层作用域是全局)
// person1.foo2.call(person2); // window

// person1.foo3()(); // window(独立函数调用)
// person1.foo3.call(person2)(); // window(独立函数调用)
// person1.foo3().call(person2); // person2(最终调用返回函数式, 使用的是显示绑定)

// person1.foo4()(); // person1(箭头函数不绑定this, 上层作用域this是person1)
// person1.foo4.call(person2)(); // person2(上层作用域被显示的绑定了一个person2)
// person1.foo4().call(person2); // person1(上层找到person1)
```

