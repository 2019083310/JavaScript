Function.prototype.LyApply=function(thisArg,args){
  // 1.判断thisArg是不是对象和是否为空
  thisArg=(typeof thisArg!=='null'&&typeof thisArg!=='undefined')?Object(thisArg):window

  // 2.拿到函数this
  const fn=this

  // 3.修改this并执行函数
  thisArg.fn=fn
  const result=thisArg.fn(...args)
  delete thisArg.fn

  return result
}

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

foo.LyApply(bar,[1,2])