// console.log(Object('123'))
//通过Object这种方法就可以将非对象的数据类型转化为对象类型
// console.log(Number('123a'))

// console.log(Object({name:'liu'}))
//以上就涉及到类型转化

//call函数的封装
Function.prototype.lycall=function(thisArg,...args){
  //1.首先要获取到调用lycall的那个方法（函数）
  const fn=this//这个lycall方法被调用是隐士调用,this指向foo那个函数对象

  //2.判断要修改this指向的传入的参数是否为空或者undefined/null
  thisArg=(thisArg!==null&&thisArg!==undefined)?Object(thisArg):window

  //3.执行这个函数并得到返回结果
  thisArg.fn=fn
  let result=thisArg.fn(...args)
  delete thisArg.fn

  return result

}

const foo=function(num1,num2){
  console.log('foo',this,num1,num2)
}
const result=foo.lycall({name:'liu'},10,20)