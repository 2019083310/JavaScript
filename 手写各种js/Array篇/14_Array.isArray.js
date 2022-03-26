// 如何判断某一个值是数组
// 1.instanceof方法
const arr=[]
console.log(arr instanceof Array)//true

// 2.Array.isArray()
// 3.Object.prototype.toString.call()
console.log(Object.prototype.toString.call(arr))
