// function foo(){

// }
// const f1=new foo
// console.log(f1.__proto__)

function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address
}

// Person.prototype.eating = function() {
//   console.log(this.name + "在吃东西~")
// }

// Person.prototype.running = function() {
//   console.log(this.name + "在跑步~")
// }

var p1 = new Person("why", 18, 1.88, "北京市")
var p2 = new Person("kobe", 20, 1.98, "洛杉矶市")

// p1.eating()
// p2.eating()

console.log(Person.prototype)
console.log(Object.getOwnPropertyDescriptors(Person.prototype.__proto__))
// console.log(typeof Object.__proto__)
// console.log(typeof Array.__proto__)
// console.log(typeof Date.__proto__)
// console.log(typeof RegExp.__proto__)
// console.log(typeof Map.__proto__)
// console.log(typeof Number.__proto__)
// console.log(Object instanceof Function)
// console.log(Person instanceof Function)
// console.log(Function instanceof Object)
// console.log(typeof Person.__proto__)
// console.log(typeof Object.__proto__)
// console.log(typeof Function.__proto__)
console.log(Object.__proto__===Function.prototype)//true,这个毫无异议，我支持啊;
console.log(Function.__proto__===Object.prototype)//false,这个怎么解释，难道‘Function instanceof Object’仅仅只是一个概念上的骗局？
// console.log(Function instanceof Function)
console.log(Function.__proto__ === Function.prototype)

