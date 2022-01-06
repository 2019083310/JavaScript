// 属性
// 1.RegExp.prototype.unicode表示正则表达式是否设置了u修饰符
const reg=/liu/u
console.log(reg.unicode)//true

// 2.RegExp.prototype.sticky属性表示正则表达式是否设置了y修饰符
const reg2=/liu/y
console.log(reg2.sticky)//true

// 3.RegExp.prototype.flags返回正则表达式的修饰符
console.log(reg2.flags)//y

// 方法
// String.prototype.matchAll(),可以不使用y和g修饰符
// 他返回的不是数组，而是一个迭代器，可以使用for of 遍历
const str='test1test2test3'
const reg3=/t(e)(st(\d?))/g
console.log(str.matchAll(reg3))
const iterator=str.matchAll(reg3)
for(let item of iterator){
  console.log(item)
}
