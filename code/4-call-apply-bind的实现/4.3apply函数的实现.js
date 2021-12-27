//apply函数的实现有一个注意点，那就是参数问题，apply的参数只能是数组形式
// 如果为一个参数的时候也必须是数组，否则会报错

//apply函数的封装
Function.prototype.lyapply=function(thisArg,argArray){
  //1.首先要获取到调用lyapply的那个方法（函数）
  const fn=this//这个lyapply方法被调用是隐士调用,this指向foo那个函数对象

  //2.判断要修改this指向的传入的参数是否为空或者undefined/null
  thisArg=(thisArg!==null&&thisArg!==undefined)?Object(thisArg):window

  //3.执行这个函数并得到返回结果
  //还要判断参数是否为空
  thisArg.fn=fn
  let result
  if(!argArray){
    result=thisArg.fn()
  }else{
    result=thisArg.fn(...argArray)
  }
  delete thisArg.fn

  return result

}

const foo=function(num1,num2){
  console.log('foo',this,num1,num2)
}
const result=foo.lyapply(123)