Function.prototype.LyCall=function(thisArg,...args){
  // 1.判断拿到的thisArg是不是一个对象
  thisArg=(thisArg!==null&&thisArg!==undefined)?Object(thisArg):window

  // 2.拿到调用call方法的函数
  const fn=this

  // 3.改变this指向并调用函数
  thisArg.fn=fn
  const result=thisArg.fn(...args)

  delete thisArg.fn

  return result
}

// 测试代码
const bar={
  name:'coder',
  age:18,
  height:1.88
}

const name='kobe'

function foo(x,y){
  console.log(this.name)
  console.log(x)
  console.log(y)
}

foo.LyCall(bar,1,2)



