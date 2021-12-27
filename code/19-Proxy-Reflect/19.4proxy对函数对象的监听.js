function foo(a,b){
  console.log(a,b)
  console.log(this)
}

const fooProxy=new Proxy(foo,{
  apply:function(target,thisArg,argArray){
    console.log("对foo函数进行了apply调用")
    return target.apply(thisArg, argArray)
  },
  construct:function(target,argArray,newTarget){
    console.log("对foo函数进行了new调用")
    return new target(...argArray)
  }
})

fooProxy.apply({name:'liu'},[1,300])
new fooProxy(1,3)