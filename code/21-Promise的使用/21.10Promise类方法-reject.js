// 这个方法用来帮助我们返回一个失败的Promise实例
// 无论我们传入什么参数都会返回一个rejected的实例
// const result=Promise.reject(1)
// const result=Promise.reject('abc')
// const result=Promise.reject({name:'liu'})
// const result=Promise.reject(new Promise((resolve,reject)=>{
//   resolve(111)
// }))
// const result=Promise.reject()
const result=Promise.reject()
console.log(result)