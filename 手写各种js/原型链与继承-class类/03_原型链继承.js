// 1.原型链继承
// 但是目前有一个很大的弊端：某些属性其实是保存在p对象上的；

// 第一，我们通过直接打印对象是看不到这个属性的；
// 第二，这个属性会被多个对象共享，如果这个对象是一个引用类型，那么就会造成问题；
// 第三，不能给Teacher传递参数，因为这个对象是一次性创建的（没办法定制化）；

// 父类构造方法
function Teacher(name,age,height){
  this.name=name
  this.age=age
  this.height=height
}

Teacher.prototype.teach=function(){
  console.log('教学')
}

// 子类构造方法
function Student(name,age,height){
  this.name=name
  this.age=age
  this.height=height
}

const p=new Teacher()
Student.prototype=p

Student.prototype.eating=function(){}

const s=new Student('coder',18,1.88)
console.log(s)
console.log(s.name)
console.log(s.teach())