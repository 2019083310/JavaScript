// 你不知道的JavaScript
function foo(el) {
  console.log(el,this.id)
}

var obj = {
  id:'awesome'
}

var nums = [1,2,3]
nums.forEach(foo,obj)


// splice方法
// 1.删除操作
const arr=[1,2,3,4,5]
arr.splice(0,1)
console.log(arr)

// 2.插值操作
arr.splice(0,0,1)
console.log(arr)

arr.splice(0,0,1,2)
console.log(arr)

// 3.修改操作
arr.splice(0,1,3)
console.log(arr)