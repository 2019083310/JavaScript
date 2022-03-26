// 如题：
var date = new Date()

console.log(1, new Date() - date)

setTimeout(() => {
  console.log(2, new Date() - date)
}, 500)

// 这里的then方法中函数是一个立即执行执行函数
// 重点：then方法是同步执行的，传入then方法的回调函数是异步执行的
Promise.resolve().then(console.log(3, new Date - date))

while (new Date() - date < 1000) {}

console.log(4, new Date() - date)

//1  0--->3  1--->4  1000--->2  1001
