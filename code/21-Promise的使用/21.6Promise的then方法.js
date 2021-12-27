// Promise原型对象有哪些对象方法
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype))

//1.Promise.then()的返回值---是一个对象
//1.1当返回的是一个普通的值的时候(数值、字符串、undefined、boolean、普通对象)
//这个返回的值会被作为then返回的Promise对象的resolve中的值状态为成功
// const p=new Promise((resolve,reject)=>{
//   resolve()
// })

// const result=p.then((res)=>{
//   return {
//     name:'liu'
//   }
// })
// const result2=result.then(()=>{
//   console.log('l')
// })
// console.log(result)
// console.log(result2)

//1.2当返回的是一个Promise对象的时候---then方法返回的Promise对象的状态由then方法中return的Promise
//的状态决定,then方法返回的Promise对象中的值为undefined
// const p=new Promise((resolve,reject)=>{
//   resolve()
// })

// const result=p.then(()=>{
//   return new Promise((resolve,reject)=>{
      // resolve()
//     reject()
//   })
// })
// const result2=result.then(()=>{
//   console.log('l')
// },()=>{
//   console.log('2')
// })

// console.log(result)
// console.log(result2)

//1.3当返回的是一个对象，并且对象中有then方法,实现了thenable
//什么是thenable，可以暂时这样理解，这个对象中有then方法就可以了

//这个时候这个返回的对象中的then方法会被自动执行，
// 里面的返回结果决定then方法返回的Promise对象的状态
//如果这个时候then方法里什么都没返回，则状态为pending
// const p=new Promise((resolve,reject)=>{
//   resolve()
// })

// const result=p.then((res)=>{
//   return  {
//     then:function(resolve,reject){
      // resolve(2222)
      // reject(2222)
      // return 1
//     }
//   }
// })
// const result2=result.then(()=>{
//   console.log('l')
// })
// console.log(result)
// console.log(result2)

//2.Promise.then方法的所有then方法，在Promise对象返回状态时都会按顺序执行
// const promise=new Promise((resolve,reject)=>{
//   resolve(1111)
// })


// promise.then(res => {
//   console.log("res1:", res)
// })

// promise.then(res => {
//   console.log("res2:", res)
// })

// promise.then(res => {
//   console.log("res3:", res)
// })