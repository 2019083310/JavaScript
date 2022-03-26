function Foo(){

  // 构造函数的属性
  Foo.a=function(){
    console.log(1)
  }

  // this对象的属性
  this.a=function(){
    console.log(2)
  }
}

// 原型的属性
Foo.prototype.a=function(){
  console.log(3)
}

// 构造函数的属性
Foo.a=function(){
  console.log(4)
}

Foo.a()//4
let obj=new Foo()
obj.a()//2
Foo.a()//1