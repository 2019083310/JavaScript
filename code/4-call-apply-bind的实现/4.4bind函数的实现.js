//bind函数在执行时，参数有一个细节，那就是可以在改变This只想的时候传递参数也可以在返回的函数调用的时候传递参数
//并且传递的参数是有顺序性的，先改变this指向的参数在返回函数的调用的时候传递的参数前面

//bind函数的封装
Function.prototype.lybind=function(thisArg,...args){
  //1.首先要获取到调用lybind的那个方法（函数）
  const fn=this//这个lybind方法被调用是隐士调用,this指向foo那个函数对象

  //2.判断要修改this指向的传入的参数是否为空或者undefined/null
  thisArg=(thisArg!==null&&thisArg!==undefined)?Object(thisArg):window

  //3.执行这个函数并得到返回结果
  function proxyFn(...argArray){
    thisArg.fn=fn
    const finialArray=[...args,...argArray]
    const res=thisArg.fn(...finialArray)
    delete thisArg.fn

    return res
  }

  return proxyFn
}

const foo=function(num1,num2){
  console.log('foo',this,num1,num2)
}
const result=foo.lybind(123)
result(15,20)