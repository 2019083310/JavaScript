//3.原型式继承函数

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

Student.prototype=Object.create(Teacher.prototype)

Student.prototype.eating=function(){}

const s=new Student('coder',18,1.88)
console.log(s)
console.log(s.name)
s.teach()