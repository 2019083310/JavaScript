// console.log(111)
// async function add(){
//   console.log(222)
//   setTimeout(()=>{
//     console.log(333)
//   })
//   console.log(444)
// }

// add()
// console.log(555)

// 111-->222-->444-->555-->333

// console.log(111)
// async function add(){
//   console.log(222)
//   // 如果有await,那必须等待await执行完成之后才能向下执行,并且await后面的代码想到那个于是Promise.then()
//   await setTimeout(()=>{
//     console.log(333)
//   },2000)
//   console.log(444)
// }

// add().then(res=>{
//   console.log(666)
// })
// console.log(555)

// 111-->222-->555-->444-->666-->333

// async function add(){
//   const res=await setTimeout(()=>{
//     console.log(111)
//   })
//   console.log(res)
// }
// console.log(add())

// const p=Promise.resolve(setTimeout(()=>{
//   console.log(111)
// }))
// p.then(res=>{
//   console.log(res)
// })
// console.log(p)