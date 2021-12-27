//Promise.resolve()方法会帮助我们返回一个Promise实例对象
//1.如果参数是一个数值、boolean、undefined、普通对象
// const result=Promise.resolve(1)
// const result=Promise.resolve('abc')
const result=Promise.resolve({name:"liu"})

//2.如果参数是一个Promise对象--他的状态有Promise的状态决定
// const result=Promise.resolve(new Promise((resolve,reject)=>{
  // resolve(1111)
  // reject(22222)
// }))
// console.log(result)

//3.参数是一个对象且实现了thenable功能
// 如果没有调用resolve()或者reject()那么状态为pending，值为undefined
// 有调用则为rejected/fulfilled
// const result=Promise.resolve({
//   then:function(resolve,reject){
    // resolve(1111)
    // reject(2222)
//     return 11111
//   }
// })

console.log(result)