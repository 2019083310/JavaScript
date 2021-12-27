// 这个方法主要是用来表示多个Promise相互竞争，谁先有结果，那么就使用谁的结果
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
  reject(1111)
})

const result1=Promise.race([p1,p2,p3,p4])
const result2=Promise.race([p4,p2,p3,p1])
console.log(result1)
console.log(result2)