/*
  new的执行过程
  1.创建一个对象obj
  2.将对象的__proto__属性赋值为构造函数的prototype属性
  3.将该对象赋值给this
  4.执行构造函数函数体的代码
  5.返回新对象
*/

const _new=function(func,...args){
  if(typeof func!=='function'){
    throw 'func must be a function'
  }

  let obj=Object.create(func.prototype)
  //或者如下
  // function foo(){}
  // foo.prototype=func.prototype
  // foo.prototype.constructor=func 

  // let obj=new foo()

  let result=func.apply(obj,args)

  if(typeof result==='object'&&result!==null||typeof result==='function'){
    return result
  }else{
    return obj
  }
}

function Person(name,sex){
  this.name=name
  this.sex=sex
}

Person.prototype.showInfo=function(){
  console.log(this.name,this.sex)
}

const p=_new(Person,'coder','男')

console.log(p)