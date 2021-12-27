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

//额外补充：slice方法的实现
// Array.prototype.lySlice=function(start,end){
//   const arr=this
//   start = start || 0
//   end = end || arr.length
//   const newArray=[]
//   for(let i=start;i<end;i++){
//     newArray.push(arr[i])
//   }

//   return newArray
// }

// const newArray = Array.prototype.lySlice.call(["aaaa", "bbb", "cccc"], 1, 3)
// console.log(newArray)


// let obj={
//   name:'liu'
// }
// console.log([...obj])
//扩展运算符不能用于对象，可以用于伪数组