

# javaScript中的call、apply、bind函数以及this指向问题的详解

​	call、apply、bind这三个方法都可以用来改变this的指向。三者最大的区别是call和apply会改变this的指向并且立即执行函数，但是bind方法不会立即执行函数，而是会返回this改变后的函数。

### fn.call()

当call方法执行的时候会做三个事情：

- 1.首先要把操作的函数中的this关键字变为call方法第一个传递的参数。
- 2.把call方法第二个及以后的参数获取到
- 3.把要操作的函数执行，并且把第二个以后传递进来的实参传递给函数

#### call**中的细节**：

**1.非严格模式**：

**如果不传参数，或者第一个参数是`null`或`nudefined`，`this`都指向`window`**

```javascript
 let fn = function(a,b){
        console.log(this,a,b);
    }
    let obj = {name:"obj"};
    fn.call(obj,1,2);    // this:obj    a:1         b:2
    fn.call(1,2);        // this:1      a:2         b:undefined
    fn.call();           // this:window a:undefined b:undefined
    fn.call(null);       // this=window a=undefined b=undefined
    fn.call(undefined);  // this=window a=undefined b=undefined

```

**2.严格模式：**

**第一个参数是谁，this就指向谁，包括null和undefined，如果不传参数this就是undefined**

```javascript
    "use strict"
    let fn = function(a,b){
        console.log(this,a,b);
    }
    let obj = {name:"obj"};
    fn.call(obj,1,2);   // this:obj        a:1          b:2
    fn.call(1,2);       // this:1          a:2          b=undefined
    fn.call();          // this:undefined  a:undefined  b:undefined
    fn.call(null);      // this:null       a:undefined  b:undefined
    fn.call(undefined); // this:undefined  a:undefined  b:undefined
```

### fn.apply()

**apply和call基本上一致，唯一区别在于传参方式**：apply把需要传递给fn的参数放到一个数组（或者类数组）中传递进去，虽然写的是一个数组，但是也相当于给fn一个个的传递

```javascript
fn.call(obj, 1, 2);
fn.apply(obj, [1, 2]);
```

### fn.bind()

**bind：语法和call一模一样，区别在于立即执行还是等待执行，bind不兼容IE6~8**

```javascript
fn.call(obj, 1, 2); // 改变fn中的this，并且把fn立即执行
fn.bind(obj, 1, 2); // 改变fn中的this，fn并不执行
```

bind函数会返回一个this改变后的函数

```javascript
var a = {
    user:"追梦子",
    fn:function(e,d,f){
        console.log(this.user); //追梦子
        console.log(e,d,f); //10 1 2
    }
}
var b = a.fn;
var c = b.bind(a,10);
c(1,2);
```

### this指向问题

​	首先必须要说的是，**this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁**，**实际上this的最终指向的是那个调用它的对象（**这句话有些问题，后面会解释为什么会有问题，虽然网上大部分的文章都是这样说的，虽然在很多情况下那样去理解不会出什么问题，但是实际上那样理解是不准确的，所以在你理解this的时候会有种琢磨不透的感觉**）**，那么接下来我会深入的探讨这个问题。

​	为什么要学习this？如果你学过面向对象编程，那你肯定知道干什么用的，另外在JavaScript中这是必须要掌握的，不能不会噢。

#### 例子1

```js
function a() {
    var user = "追梦";
    console.log(this.user); //undefined
    console.log(this); //Window
}
a();
```

按照我们上面说的this最终指向的是调用它的对象，这里的函数a实际是被Window对象所点出来的，下面的代码就可以证明。

```js
function a(){
    var user = "追梦";
    console.log(this.user); //undefined
    console.log(this);　　//Window
}
window.a();
```

和上面代码一样吧，其实alert也是window的一个属性，也是window点出来的。

#### 例子2

```js
var o = {
    user:"追梦",
    fn:function(){
        console.log(this.user);  //追梦
    }
}
o.fn();
```

这里的this指向的是对象o，因为你调用这个fn是通过o.fn()执行的，那自然指向就是对象o，这里再次强调一点，this的指向在函数创建的时候是决定不了的，在调用的时候才能决定，谁调用的就指向谁，一定要搞清楚这个。

其实例子1和例子2说的并不够准确，下面这个例子就可以推翻上面的理论。

#### 如果要彻底的搞懂this必须看接下来的几个例子

```javascript
var o = {
    user:"追梦",
    fn:function(){
        console.log(this.user); //追梦
    }
}
window.o.fn();
```

这段代码和上面的那段代码几乎是一样的，但是这里的this为什么不是指向window，如果按照上面的理论，最终this指向的是调用它的对象，这里先说个而外话，window是js中的全局对象，我们创建的变量实际上是给window添加属性，所以这里可以用window点o对象。

这里先不解释为什么上面的那段代码this为什么没有指向window，我们再来看一段代码。

```js
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //12
        }
    }
}
o.b.fn();
```

**这里同样也是对象o点出来的，但是同样this并没有执行它，那你肯定会说我一开始说的那些不就都是错误的吗**？其实也不是，只是一开始说的不准确，接下来我将补充一句话，我相信你就可以彻底的理解this的指向的问题。

1、如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window，这里需要说明的是在js的严格版中this指向的不是window，但是我们这里不探讨严格版的问题。

2、如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。

3、如果一个函数中有this，**这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象，**例子3可以证明，如果不相信，那么接下来我们继续看几个例子。

```js
var o = {
    a:10,
    b:{
        // a:12,
        fn:function(){
            console.log(this.a); //undefined
        }
    }
}
o.b.fn();
```

尽管对象b中没有属性a，这个this指向的也是对象b，因为this只会指向它的上一级对象，不管这个对象中有没有this要的东西。

还有一种比较**特殊的情况**，看下面这个例子：

```js
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //undefined
            console.log(this); //window
        }
    }
}
var j = o.b.fn;
j();
```

这里this指向的是window，是不是有些蒙了？其实是因为你没有理解一句话，这句话同样至关重要。

**this永远指向的是最后调用它的对象**，也就是看它执行的时候是谁调用的，例子4中虽然函数fn是被对象b所引用，但是在将fn赋值给变量j的时候并没有执行所以最终指向的是window，这和例子3是不一样的，例子3是直接执行了fn。

this讲来讲去其实就是那么一回事，只不过在不同的情况下指向的会有些不同，上面的总结每个地方都有些小错误，也不能说是错误，而是在不同环境下情况就会有不同，所以我也没有办法一次解释清楚，只能你慢慢地的去体会。

### 构造函数版this

```js
function Fn(){
    this.user = "追梦";
}
var a = new Fn();
console.log(a.user); //追梦
```

这里之所以对象a可以点出函数Fn里面的user是因为**new关键字可以改变this的指向**，将这个this指向对象a，为什么我说a是对象，因为用了new关键字就是创建一个对象实例，理解这句话可以想想我们的例子3，我们这里用变量a创建了一个Fn的实例（相当于复制了一份Fn到对象a里面），此时仅仅只是创建，并没有执行，而调用这个函数Fn的是对象a，那么this指向的自然是对象a，那么为什么对象a中会有user，因为你已经复制了一份Fn函数到对象a中，用了new关键字就等同于复制了一份。

除了上面的这些以外，我们还可以自行改变this的指向，就是上面讲解的三种方法。

#### 更新一个小问题当this碰到return时

```js
function Fn()  
{  
    this.user = '追梦';  
    return {};  
}
var a = new Fn;  
console.log(a.user); //undefined
```

再看一个

```js
function Fn()  
{ 
    this.user = '追梦';  
    return function(){};
}
var a = new Fn;  
console.log(a.user); //undefined
```

再来

```javascript
function Fn()  
{  
    this.user = '追梦';  
    return 1;
}
var a = new Fn;  
console.log(a.user); //追梦
function Fn()  
{  
    this.user = '追梦';  
    return undefined;
}
var a = new Fn;  
console.log(a.user); //追梦
```

什么意思呢？

**如果返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例。**

```js
function Fn()  
{  
    this.user = '追梦';  
    return undefined;
}
var a = new Fn;  
console.log(a); //fn {user: "追梦"}
```

**还有一点就是虽然null也是对象，但是在这里this还是指向那个函数的实例，因为null比较特殊**。

```js
function Fn()  
{  
    this.user = '追梦';  
    return null;
}
var a = new Fn;  
console.log(a.user); //追梦
```

### 知识点补充

- 在严格版中的默认的this不再是window，而是undefined。
- new操作符会改变函数this的指向问题，虽然我们上面讲解过了，但是并没有深入的讨论这个问题，网上也很少说，所以在这里有必要说一下。

```js
function Fn(){
    this.num = 1;
}
var a = new Fn();
console.log(a.num); //1
```

为什么this会指向a？首先new关键字会创建一个空的对象，然后会自动调用一个函数apply方法，将this指向这个空对象，这样的话函数内部的this就会被这个空的对象替代。

注意: 当你new一个空对象的时候,js内部的实现并不一定是用的apply方法来改变this指向的,这里我只是打个比方而已。