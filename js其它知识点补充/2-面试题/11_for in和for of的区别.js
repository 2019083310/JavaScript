// for in 会遍历原型上的属性，但是是可枚举的属性
// 遍历数组是遍历的索引，遍历对象遍历的Key
// Object,Array这些对象及原型上的属性和方法都是不可枚举的
// 遍历的key是字符串形式，数组也是对象
Object.prototype.a='1'
const obj={
  name:'coder',
  age:18,
  [Symbol('aaa')]:'aaa'//Symbol属性不可枚举
}
for(const o in obj){
  console.log(o)
}
// Object.getOwnPropertySymbols(obj)//得到的是一个数组,里面的值是Symbol
for(const s of Object.getOwnPropertySymbols(obj)){
  console.log(obj[s])
}
// console.log(Object.getOwnPropertyDescriptors(obj))
// console.log(Object.getOwnPropertyDescriptors(Object))
// console.log(Object.getOwnPropertyDescriptors(Object.prototype))

const arr=[1,2,3,4]
for(const index in arr){
  console.log(index)
  console.log(arr[index])
}
// console.log(Object.getOwnPropertyDescriptors(Array))

// for of只能遍历可迭代对象，并且不会遍历原型上的属性
// 可迭代对象:字符串、数组、伪数组arguments/NodeList、Set、Map