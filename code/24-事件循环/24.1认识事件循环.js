// setTimeout(()=>{
//   console.log(111)  
// },2000)

// setTimeout(()=>{
//   console.log(2222)
// },1000)


// 注意:dom操作改变样式是同步操作，不是异步的。对于requestAnimationFrame是等到微任务队列请空之后立即执行它

console.log("script start")

// 业务代码
setTimeout(function() {

}, 1000)

console.log("后续代码~")


console.log("script end")
