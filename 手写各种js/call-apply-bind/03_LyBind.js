// 这里的bind函数和call和apply不同
// bind函数会返回一个改变this指向后的函数，并且参数即可以改变this的时候传，也可以调用返回函数的时候传
Function.prototype.LyBind=function(thisArg,...args){
  // 1.判断thisArg类型
  thisArg=(thisArg!==null&&thisArg!==undefined)?Object(thisArg):window

  // 2.拿到函数
  const fn=this

  // 3.返回一个函数
  function bindCallBack(...arg){
    thisArg.fn=fn
    const result=thisArg.fn(...[...args,...arg])

    delete thisArg.fn
    return result
  }

  return bindCallBack
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
  console.log(arguments)
}

const callBack=foo.LyBind(bar,1,2)
callBack(3,4)