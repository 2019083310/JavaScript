//1.Promise.catch()也会返回一个新的Promise实例对象，
// 这个返回的新的Promise的状态无论Promise.catch()返回的是什么类型的值，新的Promise实例的
// 状态都是fulfilled,只有里面抛出异常才会是rejected,包括返回的是一个失败的promise实例

// const p=new Promise((resolve,reject)=>{
//   reject(1111)
// })

// const result=p.catch((err)=>{
  // console.log(err)
  // return 111
  // return {
  //   name:'liu'
  // }
  // return new Promise((resolve,reject)=>{
  //   reject(1111)
  // })
  // throw new TypeError('失败')
// }).then((res)=>{
//   console.log('res:',res)
// }).catch((err)=>{
//   console.log('err：',err)
// })

// console.log(result)

//2.当Promise执行reject()的时候，有多个catch()方法，也会按照顺序全部执行
// const p=new Promise((resolve,reject)=>{
//   reject(1111)
// })

// p.catch((err)=>{
//   console.log('err1:',err)
// })
// p.catch((err)=>{
//   console.log('err2:',err)
// })
// p.catch((err)=>{
//   console.log('err3:',err)
// })

//3.Promise中的异常穿透：就是说如果有多个调用链，则在其中返回如果有rejected状态的时候
// 会立即执行最后的catch()函数，跳过所有的then()方法
// const p=new Promise((resolve,reject)=>{
//   reject(1111)
// })

// p.then((res)=>{
// }).then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log('err')
// })