# call-apply-bind函数的实现

### call函数的实现

```javascript
// console.log(Object('123'))
//通过Object这种方法就可以将非对象的数据类型转化为对象类型
// console.log(Number('123a'))

// console.log(Object({name:'liu'}))
//以上就涉及到类型转化

//call函数的封装
Function.prototype.lycall=function(thisArg,...args){
  //1.首先要获取到调用lycall的那个方法（函数）
  const fn=this//这个lycall方法被调用是隐士调用,this指向foo那个函数对象

  //2.判断要修改this指向的传入的参数是否为空或者undefined/null
  thisArg=(thisArg!==null&&thisArg!==undefined)?Object(thisArg):window

  //3.执行这个函数并得到返回结果
  thisArg.fn=fn
  let result=thisArg.fn(...args)
  delete thisArg.fn

  return result

}

const foo=function(num1,num2){
  console.log('foo',this,num1,num2)
}
const result=foo.lycall({name:'liu'},10,20)
```

![image-20211214150225443](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211214150225443.png)

### apply函数的实现

```javascript
//apply函数的实现有一个注意点，那就是参数问题，apply的参数只能是数组形式
// 如果为一个参数的时候也必须是数组，否则会报错

//apply函数的封装
Function.prototype.lyapply=function(thisArg,argArray){
  //1.首先要获取到调用lyapply的那个方法（函数）
  const fn=this//这个lyapply方法被调用是隐士调用,this指向foo那个函数对象

  //2.判断要修改this指向的传入的参数是否为空或者undefined/null
  thisArg=(thisArg!==null&&thisArg!==undefined)?Object(thisArg):window

  //3.执行这个函数并得到返回结果
  //还要判断参数是否为空
  thisArg.fn=fn
  let result
  if(!argArray){
    result=thisArg.fn()
  }else{
    result=thisArg.fn(...argArray)
  }
  delete thisArg.fn

  return result

}

const foo=function(num1,num2){
  console.log('foo',this,num1,num2)
}
const result=foo.lyapply({name:'liu'},[20])
```

![image-20211214150636233](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211214150636233.png)

### bind函数的实现

```javascript
//bind函数在执行时，参数有一个细节，那就是可以在改变This只想的时候传递参数也可以在返回的函数调用的时候传递参数
//并且传递的参数是有顺序性的，先改变this指向的参数在返回函数的调用的时候传递的参数前面

//bind函数的封装
Function.prototype.lybind=function(thisArg,...args){
  //1.首先要获取到调用lybind的那个方法（函数）
  const fn=this//这个lybind方法被调用是隐士调用,this指向foo那个函数对象

  //2.判断要修改this指向的传入的参数是否为空或者undefined/null
  thisArg=(thisArg!==null&&thisArg!==undefined)?Object(thisArg):window

  //3.执行这个函数并得到返回结果
  function proxyFn(...argArray){
    thisArg.fn=fn
    const finialArray=[...args,...argArray]
    const res=thisArg.fn(...finialArray)
    delete thisArg.fn

    return res
  }

  return proxyFn
}

const foo=function(num1,num2){
  console.log('foo',this,num1,num2)
}
const result=foo.lybind(123)
result(15,20)
```

![image-20211214151529145](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211214151529145.png)

### 补充arguments的基本使用



#### **认识arguments**

**arguments** 是一个 对应于 **传递给函数的参数** 的 **类数组(array-like)对象**。

![image-20211214151806115](D:\截图\call-apply-bind函数的实现\image-20211214151806115.png)

array-like意味着它不是一个数组类型，而是一个对象类型：

- 但是它却拥有数组的一些特性，比如说length，比如可以通过index索引来访问；
- 但是它却没有数组的一些方法，比如forEach、map等；

![image-20211214151835253](D:\截图\call-apply-bind函数的实现\image-20211214151835253.png)



#### arguments转成array

```javascript
function foo(){
  console.log(arguments)

  // const arr=[1,2,3,4,5,6]
  // const obj={
  //   name:'liu'
  // }
  //注：对象只能for  in 循环拿到key，不能用for of循环,但是伪数组可以for of循环拿到value
  //数组两种循环方法都可以

  let newArray=[]
  //1.方法一循环遍历
  // for(let item of arguments){
  //   newArray.push(item)
  // }
  
  //2.方法二使用Array.prototype.slice.call()方法
  // newArray=Array.prototype.slice.call(arguments)

  //或者
  // newArray=[].slice.call(arguments)

  //3.方法三使用ES6新增的Array.from()方法
  // newArray=Array.from(arguments)

  //4.方法四使用ES6新增的Object.values方法
  // newArray=Object.values(arguments)

  //5.方法五使用扩展运算符
  // newArray=[...arguments]
  
  console.log(newArray)
}

foo(2,3,4,5,6)
```



#### Array中的slice方法的实现

```javascript
Array.prototype.lySlice=function(start,end){
  const arr=this
  start = start || 0
  end = end || arr.length
  const newArray=[]
  for(let i=start;i<end;i++){
    newArray.push(arr[i])
  }

  return newArray
}

const newArray = Array.prototype.lySlice.call(["aaaa", "bbb", "cccc"], 1, 3)
console.log(newArray)
```



#### 箭头函数不绑定arguments

![image-20211214154144372](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211214154144372.png)