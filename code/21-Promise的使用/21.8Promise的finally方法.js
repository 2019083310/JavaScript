// 无论Promise对象无论变成fulfilled还是reject状态，最终都会被执行的代码
const p=new Promise((resolve,reject)=>{
  // resolve(111)
  resolve(2222)
})

p.then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.log(err)
}).finally(()=>{
  console.log('啥也不是')
})

console.log(Object.getOwnPropertyDescriptors(Promise))
console.log(Object.getOwnPropertyDescriptors(Promise.prototype))