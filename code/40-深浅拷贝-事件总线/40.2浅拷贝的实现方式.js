// 1.扩展运算符
// let obj1 = { name: 'Kobe', address:{x:100,y:100}}
// let obj2= {... obj1}
// obj1.address.x = 200
// obj1.name = 'wade'
// console.log('obj2',obj2) // obj2 { name: 'Kobe', address: { x: 200, y: 100 } }

// 2.Object.assign()方法
// let obj1 = { person: {name: "kobe", age: 41},sports:'basketball' }
// let obj2 = Object.assign({}, obj1)
// obj2.person.name = "wade"
// obj2.sports = 'football'
// console.log(obj1) // { person: { name: 'wade', age: 41 }, sports: 'basketball' }

// 3.借用lodash库实现浅拷贝

// 4.Array.prototype.concat()
// let arr = [1, 3, {
//   username: 'kobe'
//   }]
// let arr2 = arr.concat()   
// arr2[2].username = 'wade'
// console.log(arr) //[ 1, 3, { username: 'wade' } ]

// 5.Array.prototype.slice()
let arr = [1, 3, {
  username: ' kobe'
  }];
let arr3 = arr.slice();
arr3[2].username = 'wade'
console.log(arr); // [ 1, 3, { username: 'wade' } ]