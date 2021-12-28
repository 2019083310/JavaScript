console.log('foo模块被执行了')

setTimeout(()=>{
  console.log('定时器，延时异步操作')
},10000)

export function sum(num1){
  console.log(num1)
}