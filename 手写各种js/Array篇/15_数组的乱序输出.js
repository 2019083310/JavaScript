// 要求：数组的顺序输出0-99
// 如下题：这个题是乱序输出的

// 要求：只能修改setTimeout到Math.floor,不能修改Math.floor,不能引用全局变量

function print(n){
  setTimeout(()=>{
    console.log(n)
    return ()=>{}
  },Math.floor(Math.random()*1000))
}
for(let i=0;i<100;i++){
  print(i)
}

// 方法1：立即执行函数
// function print(n){
//   setTimeout((()=>{
//     console.log(n)
//     return ()=>{}
//   })(),Math.floor(Math.random()*1000))
// }
// for(let i=0;i<100;i++){
//   print(i)
// }

// 方法2：setTimeout的第三个参数,第三个参数会作为setTimeout第一个参数函数的参数
// function print(n){
//   setTimeout(()=>{
//     console.log(n)
//     return ()=>{}
//   },10,Math.floor(Math.random()*1000))
// }
// for(let i=0;i<100;i++){
//   print(i)
// }