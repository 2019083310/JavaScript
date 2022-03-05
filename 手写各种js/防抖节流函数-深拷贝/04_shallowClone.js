// 1.Object.assign()
// const obj1={name:'coder',friend:{name:'kobe'}}
// const obj2=Object.assign({},obj1)

// obj1.name='curry'
// obj1.friend.name='james'
// console.log(obj2.name)
// console.log(obj2.friend.name)

// 2.扩展运算符
// const obj1={name:'coder',friend:{name:'kobe'}}
// const obj2={...obj1}

// obj1.name='curry'
// obj1.friend.name='james'
// console.log(obj2.name)
// console.log(obj2.friend.name)

// 3.lodash或者underscore第三方库的引入

// 4.Array.prototype.slice()

// const arr1=['coder',{name:'kobe'}]
// const arr2=arr1.slice()

// arr1[0]='curry'
// arr1[1].name='james'
// console.log(arr2)

// 5.Array.prototype.concat()
const arr1=['coder',{name:'kobe'}]
const arr2=[].concat(arr1)

arr1[0]='curry'
arr1[1].name='james'
console.log(arr2)

