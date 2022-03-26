// sleep函数，程序等待一定时间后才能执行后续代码。
// 首先想到了定时器setTimeout,由于需要使用回调方式，不考虑

// 方案1：while循环
// const sleep=(time)=>{
//   const t1=new Date().getTime()
//   while(true){
//     const t2=new Date().getTime()
//     if(t2-t1>=time){
//       break
//     }
//   }
// }
// console.log(111)
// sleep(3000)
// console.log(222)

// 方案2：async await
const sleep=(time=0)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(true)
    },time)
  })
}
async function fn(){
  console.log(111)
  await sleep(3000)
  console.log(222)
}
fn()
