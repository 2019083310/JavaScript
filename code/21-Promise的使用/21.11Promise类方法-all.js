// 这个方法主要是用来处理多个Promise实例对象，进行实例对象的合并，再返回一个新的Promise实例
// 结果有传入的参数决定，如果参数都为成功，则返回的Promise实例状态为fulfilled，有一个失败，就是rejected

// 如果所有的Promise对象都成功，则把他们的返回值作为数组返回
const p1=new Promise((resolve,reject)=>{
  resolve(111)
})
const p2=new Promise((resolve,reject)=>{
  resolve(11)
})
const p3=new Promise((resolve,reject)=>{
  resolve(1)
})
const p4=new Promise((resolve,reject)=>{
  reject(111)
})

const result1=Promise.all([p1,p2,p3])
const result2=Promise.all([p1,p2,p3,p4])
console.log(result1)
console.log(result2)