var arr=[1,2,3]
console.log(arr instanceof Array)//true
console.log(new Function instanceof Object)//true
console.log(new Function instanceof Function)//true

console.log(arr instanceof Object)//true
console.log(new Date instanceof Object)//true
console.log(new Date instanceof Function)//false

const F=function(){}
Object.prototype.a=function(){}
Function.prototype.b=function(){}

const f=new F()
console.log(f instanceof Object)//true

function foo(name,age){
  this.name=name
  this.age=age
}

const p=new foo('liu',18)
console.log(p)