console.log(globalThis)

setTimeout(() => {
  console.log(this) //window
}, 1000)

//promise.then()方法内部的This永远指向window，无论什么时候，除非外面有东西包裹，也就是执行最顶层的对象
const p = new Promise((resolve, reject) => {
  resolve(1)
})
p.then((res) => {
  console.log(this) //window
})
// p.then(function (res) {
//   console.log(this) //window
// })