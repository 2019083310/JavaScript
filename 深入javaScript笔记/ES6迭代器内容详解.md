# ES6迭代器内容解析

### 什么是迭代器？

**迭代器**（iterator），是确使用户可在容器对象（container，例如链表或数组）上遍访的对象，使用该接口无需关心对象的内部实现细节。

- 其行为像数据库中的光标，迭代器最早出现在1974年设计的CLU编程语言中；
- 在各种编程语言的实现中，迭代器的实现方式各不相同，但是基本都有迭代器，比如Java、Python等；

**从迭代器的定义我们可以看出来，迭代器是帮助我们对某个数据结构进行遍历的对象。**

在JavaScript中，迭代器也是一个具体的对象，这个对象需要符合**迭代器协议**（iterator protocol）：

- 迭代器协议定义了产生一系列值（无论是有限还是无限个）的标准方式；
- 那么在js中这个标准就是一个特定的next方法；

**next方法有如下的要求：**

- 一个无参数或者一个参数的函数，返回一个应当拥有以下两个属性的对象：
- **done（boolean）** 
  - 如果迭代器可以产生序列中的下一个值，则为 false。（这等价于没有指定 done 这个属性。）
  - 如果迭代器已将序列迭代完毕，则为 true。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值。
-  **value**
  - 迭代器返回的任何 JavaScript 值。done 为 true 时可省略。



### 迭代器的代码练习

```javascript
//编写一个迭代器
const iterator={
  next(){
    return {done:'false',value:'abc'}
  }
}

//数组
const names=['abc','cba','nba']

let index=0
//创建一个数组迭代器
const namesIterator={
  next(){
    if(index<names.length){
      return {done:'false',value:names[index++]}
    }else{
      return {done:"true",value:undefined}
    }
  }
}

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
```



**生成迭代器的函数**

```javascript
function createArrayIterator(arr) {
  let index = 0
  return {
    next() {
      if (index < arr.length) {
        return {
          done: false,
          value: arr[index++]
        }
      } else {
        return {
          done: true,
          value: undefined
        }
      }

    }
  }
}

const names = ["abc", "cba", "nba"]
const nums = [10, 22, 33, 12]

const namesIterator = createArrayIterator(names)
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())

const numsIterator = createArrayIterator(nums)
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
```



### 可迭代对象

​	但是上面的代码整体来说看起来是有点奇怪的：我们获取一个数组的时候，需要自己创建一个index变量，再创建一个所谓的迭代器对象；事实上我们可以对上面的代码进行进一步的封装，让其变成一个可迭代对象；

什么又是可迭代对象呢？

- 它和迭代器是不同的概念；
- 当一个对象实现了iterable protocol协议时，它就是一个可迭代对象；
- 这个对象的要求是必须实现 @@iterator 方法，在代码中我们使用 Symbol.iterator 访问该属性；

当我们要问一个问题，我们转成这样的一个东西有什么好处呢？

当一个对象变成一个可迭代对象的时候，进行某些迭代操作，比如 for...of 操作时，其实就会调用它的

@@iterator 方法；



### 可迭代对象的代码

```javascript
// 创建一个迭代器对象来访问数组
const iterableObj={
  names:['abc','cba','nba'],
  [Symbol.iterator]:function(){
    let index=0
    return {
      next:()=>{
        if(index<this.names.length){
          return {done:false,value:this.names[index++]}
        }else{
          return {done:true,value:undefined}
        }
      }
    }
  }
}

//1.调用iterableObj[Symbol.iterator]函数
// const iterator = iterableObj[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// 2.for...of可以遍历的东西必须是一个可迭代对象
// const obj = {
//   name: "why",
//   age: 18
// }
for (const item of iterableObj) {
  console.log(item)
}
```



### 原生迭代器对象

​	事实上我们平时创建的很多原生对象已经实现了可迭代协议，会生成一个迭代器对象的：**String、Array、Map、Set、arguments对象、NodeList集合；**

![image-20211225094450144](D:\截图\迭代器和生成器\image-20211225094450144.png)



### 可迭代对象的应用

那么这些东西可以被用在哪里呢？

- JavaScript中语法：for ...of、展开语法（spread syntax）、yield*（后面讲）、解构赋值（Destructuring_assignment）；
- 创建一些对象时：new Map([Iterable])、new WeakMap([iterable])、new Set([iterable])、new WeakSet([iterable]);
- 一些方法的调用：Promise.all(iterable)、Promise.race(iterable)、Array.from(iterable);

![image-20211225094715453](D:\截图\迭代器和生成器\image-20211225094715453.png)



### 自定义类的迭代

在前面我们看到Array、Set、String、Map等类创建出来的对象都是可迭代对象：

- 在面向对象开发中，我们可以通过class定义一个自己的类，这个类可以创建很多的对象：

- 如果我们也希望自己的类创建出来的对象默认是可迭代的，那么在设计类的时候我们就可以添加上

  @@iterator 方法

```javascript
// 案例: 创建一个教室类, 创建出来的对象都是可迭代对象
class ClassRome{
  constructor(address,name,students){
    this.address=address
    this.name=name
    this.students=students
  }

  entry(newStudent){
    this.students.push(newStudent)
  }

  [Symbol.iterator](){
    let index=0
    return {
      next:()=>{
        if(index<this.students.length){
          return {done:false,value:this.students[index++]}
        }else{
          return {done:true,value:undefined}
        }
      },
      return:()=>{
        return {done:true,value:undefined}
      }
    }
  }
}

const classroom=new ClassRome('beijing','liu',['kobe','james','liu'])
classroom.entry('curry')

for(let item of classroom){
  console.log(item)
}
```



### 迭代器的中断

迭代器在某些情况下会在没有完全迭代的情况下中断：

- 比如遍历的过程中通过break、continue、return、throw中断了循环操作；
- 比如在解构的时候，没有解构所有的值；

那么这个时候我们想要监听中断的话，可以添加return方法：

![image-20211225101216642](D:\截图\迭代器和生成器\image-20211225101216642.png)

