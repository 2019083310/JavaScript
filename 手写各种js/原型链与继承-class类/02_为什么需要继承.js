// 为什么需要有继承呢？
// 当我们有以下这个场景的时候：这个时候代码就会变得复用性很差，而且这样的数据越来越多的时候
// 会占内存，影响性能，因此需要一种方法去完善-----继承
function Teacher(name,age,height){
  this.name=name
  this.age=age
  this.height=height
}

Teacher.prototype.eating=function(){}

function Student(name,age,height){
  this.name=name
  this.age=age
  this.height=height
}

Student.prototype.eating=function(){}