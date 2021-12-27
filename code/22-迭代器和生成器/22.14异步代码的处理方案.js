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
