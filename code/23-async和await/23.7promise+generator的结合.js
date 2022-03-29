function promise1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('1')
    },1000)
  })
}

function promise2(value){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('2'+value)
    },1000)
  })
}

function* readFile(){
  const value=yield promise1()
  const result=yield promise2(value)
  return result
}

function asyncGen(fn){
  const gen=fn()//调用传入的生成器函数，返回生成器对象

  return new Promise((resolve)=>{
    // 首次调用gen.next()方法返回一个{value:  done}
    const {value,done}=gen.next()

    // value是一个promise对象
    value.then(res=>{
      // 同时第二次调用gen.next()方法时传入上一次结果的返回值
      const {value,done}=gen.next(res)

      value.then(resolve)
    })
  })
}

asyncGen(readFile).then(res=>console.log(res))