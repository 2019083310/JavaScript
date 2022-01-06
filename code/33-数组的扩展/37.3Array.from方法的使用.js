// 1.Array.from()用于将类数组或者是Set/Map,还有可迭代对象转化为真正的数组

// string
console.log(String.prototype)
// 注：字符串就是一个可迭代对象
const str='kobe'
for(const item of str){
  console.log(item)
}

console.log(Array.from(str))

// set/map
const set=new Set()
set.add(1)
set.add(3)
set.add(5)
set.add(7)
console.log(Array.from(set))

//array-like
function foo(x,y){
  console.log(Array.from(arguments))
}
foo(1,3)

// ...扩展运算符
console.log([...str])
