// 2.借用构造函数继承
// 强调: 借用构造函数也是有弊端:
// 1.第一个弊端: Person函数至少被调用了两次
// 2.第二个弊端: s的原型对象上会多出一些属性, 但是这些属性是没有存在的必要

// 父类构造方法
function Teacher(name,age){
  this.name=name
  this.age=age
}

Teacher.prototype.teach=function(){
  console.log('教学')
}

// 子类构造方法
function Student(name,age,height){
  Teacher.apply(this,[name,age])
  this.height=height
}

const p=new Teacher()
Student.prototype=p

Student.prototype.eating=function(){}

const s=new Student('coder',18,1.88)
console.log(s)
console.log(s.name)
console.log(s.teach())