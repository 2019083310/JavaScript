const box=document.querySelector('#box')

console.log(box)
console.log(box.__proto__)
console.log(Element)


// HTML中所有的属性、注释、元素、文档都被称为节点
// 他们都继承自Node节点
// Node节点又继承自EventTarget

// Node类的原型
console.log(Node.prototype)
console.log(Node instanceof Function)//true

// EventTarget的原型
console.log(EventTarget.prototype)
console.log(EventTarget instanceof Function)//true

console.log(Node.prototype instanceof Object)//true
console.log(Node.__proto__)

// class Student{
//   constructor(name,age){
//     this.name=name
//     this.age=age
//   }
// }

// class Person{
//   constructor(name,age){
//     this.name=name
//     this.age=age
//   }
// }

// const s=new Student('liu',21)
// console.log(s)
// console.log(s.__proto__.__proto__.__proto__)//null
// console.log(s.__proto__.prototype)//undefined