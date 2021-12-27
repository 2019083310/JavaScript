function Person(name,age,friends){
  this.name=name
  this.age=age
  this.friends=friends
}

Person.prototype.eating=function(){
  console.log('在吃饭~')
}

function Student(name,age,friends,sno){
  Person.apply(this,[name,age,friends])
  this.sno=sno
}

// const p=new Person()
// Student.prototype=p
// 方法1.Student.prototype=Object.create(Person.prototype)
// 方法2.function createObject(obj){
//   const newObj={}
//   // newObj.__proto__=obj
//   Object.setPrototypeOf(newObj,obj)
//   return newObj
// }
//方法3
function createObject(obj){
  function Fn(){}
  Fn.prototype=obj
  return new Fn()
}

Student.prototype=createObject(Person.prototype)

Student.prototype.studying=function(){
  console.log('在学习~')
}

const stu=new Student('liu',21,['liu'],2019083310)
console.log(stu)
stu.eating()
