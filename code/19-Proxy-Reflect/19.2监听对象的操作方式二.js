const obj={
  name:'liu',
  age:21
}

const proxyObj=new Proxy(obj,{
  get:function(target,key,receiver){
    console.log('get方法被访问了----')
    return target[key]
  },
  set:function(target,key,newValue,receiver){
    console.log('set方法被访问了----')
    target[key]=newValue
  }
})

console.log(proxyObj.name)
console.log(proxyObj.name='kobe')
console.log(proxyObj.age)
console.log(proxyObj.age=40)
