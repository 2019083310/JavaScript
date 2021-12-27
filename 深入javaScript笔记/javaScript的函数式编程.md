# javaScript的函数式编程

### 理解JavaScript纯函数

​	**函数式编程**中有一个非常重要的概念叫**纯函数**，JavaScript符合**函数式编程的范式**，所以也**有纯函数的概念**； 

在**react开发中纯函数是被多次提及**的；比如**react中组件就被要求像是一个纯函数**（为什么是像，因为还有class组件），**redux中有一个reducer的概念**，也是要求必须是一个纯函数；所以**掌握纯函数对于理解很多框架的设计**是非常有帮助的；

**纯函数的维基百科定义：**

- 在程序设计中，若一个函数符合以下条件，那么这个函数被称为纯函数：
- 此函数在**相同的输入值**时，需**产生相同的输出**。 
- 函数的输出和输入值以外的其他隐藏信息或状态无关，也和由I/O设备产生的外部输出无关。
- 该函数不能有语义上可观察的**函数副作用**，诸如“触发事件”，使输出设备输出，或更改输出值以外物件的内容等。

**当然上面的定义会过于的晦涩，所以我简单总结一下：**

1. 确定的输入，一定会产生确定的输出； 
2. 函数在执行过程中，不能产生副作用；



### 副作用的理解

**那么这里又有一个概念，叫做副作用**，什么又是**副作用**呢？

**副作用（side effect）**其实本身是医学的一个概念，比如我们经常说吃什么药本来是为了治病，可能会产生一些其他的副作用；

在计算机科学中，也引用了副作用的概念，表示在执行一个函数时，除了返回函数值之外，还对调用函数产生

了附加的影响，比如修改了全局变量，修改参数或者改变外部的存储； 

**纯函数在执行的过程中就是不能产生这样的副作用：--**副作用往往是产生bug的 “温床



### 纯函数的案例

**我们来看一个对数组操作的两个函数：**

- slice：slice截取数组时不会对原数组进行任何操作,而是生成一个新的数组；
- splice：splice截取数组, 会返回一个新的数组, 也会对原数组进行修改；
- slice就是一个纯函数，不会修改传入的参数；

![image-20211215113618056](D:\截图\函数式编程\image-20211215113618056.png)

#### 我们来自己编写几个案例，来看一下它们是否是纯函数

![image-20211215113706897](D:\截图\函数式编程\image-20211215113706897.png)

### 纯函数的优势

**为什么纯函数在函数式编程中非常重要呢？**

- 因为你可以**安心的编写**和**安心的使用**； 

- 你在**写的时候**保证了函数的纯度，只是单纯实现自己的业务逻辑即可，不需要关心传入的内容是如何获得的或

  者依赖其他的外部变量是否已经发生了修改；

- 你在**用的时候**，你确定你的输入内容不会被任意篡改，并且自己确定的输入，一定会有确定的输出； 

React中就要求我们无论是**函数还是class声明一个组件**，这个组件都必须**像纯函数一样**，**保护它们的props不被修**

**改：**

![image-20211215113848781](D:\截图\函数式编程\image-20211215113848781.png)

### JavaScript柯里化

**柯里化**也是属于**函数式编程**里面一个非常重要的概念。

**我们先来看一下维基百科的解释：**

- 在计算机科学中，**柯里化**（英语：Currying），又译为**卡瑞化**或**加里化**； 

- 是把接收多个参数的函数，变成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参

  数，而且返回结果的新函数的技术； 

- 柯里化声称 “如果你固定某些参数，你将得到接受余下参数的一个函数”； 

**维基百科的结束非常的抽象，我们这里做一个总结：**

- 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余的参数； 
- 这个过程就称之为柯里化；



### 柯里化的结构

```javascript
// function add(x, y, z) {
//   return x + y + z
// }

// var result = add(10, 20, 30)
// console.log(result)

function sum1(x) {
  return function(y) {
    return function(z) {
      return x + y + z
    }
  }
}

var result1 = sum1(10)(20)(30)
console.log(result1)

// 简化柯里化的代码
var sum2 = x => y => z => {
  return x + y + z
}

console.log(sum2(10)(20)(30))

var sum3 = x => y => z => x + y + z
console.log(sum3(10)(20)(30))
```



### 柯里化的优点

#### 让函数的职责单一

​	在函数式编程中，我们其实往往希望一个函数处理的问题尽可能的单一，而不是将一大堆的处理过程交给一个

函数来处理； 那么我们是否就可以将每次传入的参数在单一的函数中进行处理，处理完后在下一个函数中再使用处理后的结果； 比如上面的案例我们进行一个修改：**传入的函数需要分别被进行如下处理**

第一个参数 + 2 、第二个参数 * 2、 第三个参数 ** 2

```javascript
// function add(x, y, z) {
//   x = x + 2
//   y = y * 2
//   z = z * z
//   return x + y + z
// }

// console.log(add(10, 20, 30))


function sum(x) {
  x = x + 2

  return function(y) {
    y = y * 2

    return function(z) {
      z = z * z

      return x + y + z
    }
  }
}

console.log(sum(10)(20)(30))
```

#### 柯里化的复用

​	另外一个使用柯里化的场景是可以帮助我们可以**复用参数逻辑**： makeAdder函数要求我们传入一个num（并且如果我们需要的话，可以在这里对num进行一些修改）； 在之后使用返回的函数时，我们不需要再继续传入num了；

```javascript
// function sum(m, n) {
//   return m + n
// }

// // 假如在程序中,我们经常需要把5和另外一个数字进行相加
// console.log(sum(5, 10))
// console.log(sum(5, 14))
// console.log(sum(5, 1100))
// console.log(sum(5, 555))

function makeAdder(count) {
  count = count * count

  return function(num) {
    return count + num
  }
}

// var result = makeAdder(5)(10)
// console.log(result)
var adder5 = makeAdder(5)
adder5(10)
adder5(14)
adder5(1100)
adder5(555)
```

### 自动柯里化函数

```javascript
//柯里化的函数实现
function lyCurrying(fn){
  function curried(...args){

    // 判断当前已经接收的参数的个数, 接受的参数本身需要接受的参数是否已经一致了
    // 1.当已经传入的参数 大于等于 需要的参数时, 就执行函数

    if(args.length>=fn.length){
      return fn.apply(this,args)
    }else{
      // 没有达到个数时, 需要返回一个新的函数, 继续来接收的参数
      function curried2(...args2){

        // 接收到参数后, 需要递归调用curried来检查函数的个数是否达到
        return curried.apply(this, args.concat(args2))
      }

      return curried2
    }
  }

  return curried
}

const curryAdd = lyCurrying(add1)

console.log(curryAdd(10, 20, 30))
console.log(curryAdd(10, 20)(30))
console.log(curryAdd(10)(20)(30))
```

### 理解组合函数

**组合（Compose）函数**是在JavaScript开发过程中一种对**函数的使用技巧、模式**： 

- 比如我们现在需要对某一个数据进行函数的调用，执行两个函数fn1和fn2，这两个函数是依次执行的；
- 那么如果每次我们都需要进行两个函数的调用，操作上就会显得重复； 
- 那么是否可以将这两个函数组合起来，自动依次调用呢？
- 这个过程就是对函数的组合，我们称之为 组合函数（Compose Function）；

![image-20211215114438257](D:\截图\函数式编程\image-20211215114438257.png)

### 实现组合函数

```javascript
function lyCompose(...fns) {
  var length = fns.length
  for (var i = 0; i < length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new TypeError("Expected arguments are functions")
    }
  }

  function compose(...args) {
    var index = 0
    var result = length ? fns[index].apply(this, args): args
    while(++index < length) {
      result = fns[index].call(this, result)
    }
    return result
  }
  return compose
}

function double(m) {
  return m * 2
}

function square(n) {
  return n ** 2
}

var newFn = lyCompose(double, square)
console.log(newFn(10))

```

