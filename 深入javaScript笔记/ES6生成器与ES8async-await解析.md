# ES6生成器与async/await内容解析

### 什么是生成器？

​	生成器是ES6中新增的一种函数控制、使用的方案，它可以让我们更加灵活的控制函数什么时候继续执行、暂停执行等。平时我们会编写很多的函数，这些函数终止的条件通常是返回值或者发生了异常。

**生成器函数也是一个函数，但是和普通的函数有一些区别：** 

- 首先，生成器函数需要在function的后面加一个符号：*
- 其次，生成器函数可以通过yield关键字来控制函数的执行流程： 
- 最后，生成器函数的返回值是一个Generator（生成器）：
  - 生成器事实上是一种特殊的迭代器；
  - MDN：Instead, they return a special type of iterator, called a **Generator**.



### 生成器函数执行

我们发现上面的生成器函数foo的执行体压根没有执行，它只是返回了一个生成器对象。

- 那么我们如何可以让它执行函数中的东西呢？调用next即可； 
- 我们之前学习迭代器时，知道迭代器的next是会有返回值的；
- 但是我们很多时候不希望next返回的是一个undefined，这个时候我们可以通过yield来返回结果；

![image-20211225155109330](D:\截图\迭代器和生成器\image-20211225155109330.png)



### 生成器传递参数 – next函数

函数既然可以暂停来分段执行，那么函数应该是可以传递参数的，我们是否可以给每个分段来传递参数呢？

- 答案是可以的；
- 我们在调用next函数的时候，可以给它传递参数，那么这个参数会作为上一个yield语句的返回值；
- 注意：也就是说我们是为本次的函数代码块执行提供了一个值；

![image-20211225155233933](D:\截图\迭代器和生成器\image-20211225155233933.png)



### 生成器提前结束 – return函数

​	还有一个可以给生成器函数传递参数的方法是通过return函数**：return传值后这个生成器函数就会结束，之后调用next不会继续生成值了。**

```javascript
function* foo(num) {
  console.log("函数开始执行~")

  const value1 = 100 * num
  console.log("第一段代码:", value1)
  const n = yield value1

  const value2 = 200 * n
  console.log("第二段代码:", value2)
  const count = yield value2

  console.log("函数执行结束~")
  return "123"
}

const generator = foo(10)

console.log(generator.next())

// 第二段代码的执行, 使用了return
// 那么就意味着相当于在第一段代码的后面加上return, 就会提前终端生成器函数代码继续执行
console.log(generator.return(15))
console.log(generator.next())
console.log(generator.next())
```



### 生成器抛出异常 – throw函数

除了给生成器函数内部传递参数之外，也可以给生成器函数内部抛出异常：

- 抛出异常后我们可以在生成器函数中捕获异常；
- 但是在catch语句中不能继续yield新的值了，但是可以在catch语句外使用yield继续中断函数的执行；

```javascript
function* foo() {
  console.log("代码开始执行~")

  const value1 = 100
  try {
    yield value1
  } catch (error) {
    console.log("捕获到异常情况:", error)

    yield "abc"
  }

  console.log("第二段代码继续执行")
  const value2 = 200
  yield value2

  console.log("代码执行结束~")
}

const generator = foo()
const result = generator.next()
generator.throw("error message")

// const result = generator.next()
```



### 生成器替代迭代器

```javascript
// 1.生成器来替代迭代器
function* createArrayIterator(arr) {
  // 第一种写法
  // for(let i=0;i<arr.length;i++){
  //   yield arr[i]
  // }

  // 第二种写法
  // for(let item of arr){
  //   yield item
  // }

  // 第三种写法
  // yield* arr

}

// const names=['abc','cba','nba']
// const namesIterator=createArrayIterator(names)

// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())

// 2.创建一个函数，这个函数可以迭代一个范围内的数字
//10 20
function* createRangeIterator(start, end) {
  let index = start
  while (index < end) {
    yield index++
  }

  // let index = start
  // return {
  //   next: function() {
  //     if (index < end) {
  //       return { done: false, value: index++ }
  //     } else {
  //       return { done: true, value: undefined }
  //     }
  //   }
  // }
}

// const rangeIterator = createRangeIterator(10, 20)
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())

// 3.class案例
class ClassRome{
  constructor(address,name,students){
    this.address=address
    this.name=name
    this.students=students
  }

  entry(newStudent){
    this.students.push(newStudent)
  }

  *[Symbol.iterator](){
    yield* this.students
  }
}

const classRome=new ClassRome('beijing','liu',['james','kobe','curry'])
for(let item of classRome){
  console.log(item)
}
```



### 异步处理方案

```javascript
//request.js
function requestData(url){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(url)
    },2000)
  })
}

// 需求
// 1 > url:liu -> res:liu
// 2 > url:res + 'aaa'-> res:liuaaa
// 3 > url:res + 'bbb'-> res:liuaaabbb

// 1.第一种方案：回调地狱
// requestData('liu').then(res=>{
//   requestData(res+'aaa').then(res=>{
//     requestData(res+'bbb').then(res=>{
//       console.log(res)
//     })
//   })
// })

// 2.第二种方案:Promise中的then
// requestData('liu').then(res=>{
//   return requestData(res+'aaa')
// }).then(res=>{
//   return requestData(res+'bbb')
// }).then(res=>{
//   console.log(res)
// })

// 3.第三种方案:Promise+generator
function* getData(){
  const res1=yield requestData('liu')
  const res2=yield requestData(res1+'aaa')
  const res3=yield requestData(res2+'bbb')
  console.log(res3)
}

// 1 > 手动执行生成器函数
// const generator=getData()
// generator.next().value.then(res=>{
//   generator.next(res).value.then(res=>{
//     generator.next(res).value.then(res=>{
//       generator.next(res)
//     })
//   })
// })

// 2.自己封装一个自动执行的函数
// function execGenerator(getFn){
//   const generator=getFn()
//   function exec(res){
//     const result=generator.next(res)
//     if(result.done){
//       return result.value
//     }
//     result.value.then(res=>{
//       exec(res)
//     })
//   }

//   exec()
// }

// execGenerator(getData)

// 3> 第三方包co自动执行
const co=require('co')
co(getData)

// 4.第四种方案:async/await
// async function getData(){
//   const res1=await requestData('liu')
//   const res2=await requestData(res1+'aaa')
//   const res3=await requestData(res2+'bbb')
//   console.log(res3)
// }
// getData()
```



### 异步函数 async function

async关键字用于声明一个异步函数：

- async是asynchronous单词的缩写，异步、非同步；
- sync是synchronous单词的缩写，同步、同时；

async异步函数可以有很多中写法：

![image-20211225155814177](D:\截图\迭代器和生成器\image-20211225155814177.png)



### 异步函数的执行流程

异步函数的内部代码执行过程和普通的函数是一致的，默认情况下也是会被同步执行。

**异步函数有返回值时，和普通函数会有区别：**

- 情况一：异步函数也可以有返回值，但是异步函数的返回值会被包裹到Promise.resolve中；
- 情况二：如果我们的异步函数的返回值是Promise，Promise.resolve的状态会由Promise决定；
- 情况三：如果我们的异步函数的返回值是一个对象并且实现了thenable，那么会由对象的then方法来决定；

如果我们在async中抛出了异常，那么程序它并不会像普通函数一样报错，而是会作为Promise的reject来传递；



### await关键字

async函数另外一个特殊之处就是可以在它内部使用await关键字，而普通函数中是不可以的。

await关键字有什么特点呢？

- 通常使用await是后面会跟上一个表达式，这个表达式会返回一个Promise； 
- 那么await会等到Promise的状态变成fulfilled状态，之后继续执行异步函数； 

- 如果await后面是一个普通的值，那么会直接返回这个值； 
- 如果await后面是一个thenable的对象，那么会根据对象的then方法调用来决定后续的值； 
- 如果await后面的表达式，返回的Promise是reject的状态，那么会将这个reject结果直接作为函数的Promise的reject值；