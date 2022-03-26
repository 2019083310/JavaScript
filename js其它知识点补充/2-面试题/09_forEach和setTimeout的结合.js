// 如题：
// 补充一点：数组也是对象，用索引去访问数组的元素的时候，a[0]，我们的索引是字符串string,而不是数值Number
// const list=[1,2,3]
// const square=num=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(num*num)
//     },1000)
//   })
// }
// function test(){
//   list.forEach(async x=>{
//     const res=await square(x)
//     console.log(res)
//   })
// }
// test()
//1-->4-->9一秒后同时输出
// forEach循环的原理是对于每个循环的元素，都会为他创建一个匿名的立即执行函数同时执行
// 上面的代码相当于
// list.forEach((x)=>{
//   (async (x)=>{
//     const res=await square(x)
//     console.log(res)
//   })(1)
//   (async (x)=>{
//     const res=await square(x)
//     console.log(res)
//   })(2)
//   (async (x)=>{
//     const res=await square(x)
//     console.log(res)
//   })(3)
// })
// 他们同时执行，互不干扰,相当于是并行的

// 改为一秒一秒输出  可用for循环或者for of 他们是串行的，前一个执行完才能执行后一个
// const list=[1,2,3]
// const square=num=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(num*num)
//     },1000)
//   })
// }
// async function test(){
  // 1.for of
  // for(const item of list){
  //   const res=await square(item)
  //   console.log(res)
  // }

  // 2. for循环
  // for(let i=0;i<list.length;i++){
  //   const res=await square(list[i])
  //   console.log(res)
  // }
// }
// test()

// 解决办法三：promise的链式调用
const list=[1,2,3]
const square=num=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(num*num)
    },1000)
  })
}
let promise=Promise.resolve()
function test(i){
  if(i===list.length) return;
  promise=promise.then(async ()=>{
    const res=await square(list[i])
    console.log(res)
  })
  test(i+1)
}
test(0)
