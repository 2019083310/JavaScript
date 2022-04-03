// 能否让一个变量，同时等于1&&2&&3?
// if(a==1&&a==2&&a==3){
//   console.log(true)
// }

// 方法1:defineProperty
// let a=1
// const obj={
//   a:1
// }
// Object.defineProperty(obj,'a',{
//   configurable:true,
//   enumerable:true,
//   get(){
//     return a++
//   },
//   set(value){
//     a=value
//   }
// })
// if(obj.a==1&&obj.a==2&&obj.a==3){
//   console.log(true)
// }

// 方法2:with语句
// let a = 1
// with({
//   get a(){
//     return a++
//   }
// }) {
//   if (a == 1 && a == 2 && a == 3) {
//     console.log(true)
//   }
// }

// 方法3:toString()方法
// let a={
//   a:1,
//   toString(){
//     return this.a++
//   }
// }
// if(a==1&&a==2&&a==3){
//   console.log(true)
// }

// 方法4:数组的toString方法调用join()方法
const a=[1,2,3]
a.join=a.shift
if(a==1&&a==2&&a==3){
  console.log(true)
}