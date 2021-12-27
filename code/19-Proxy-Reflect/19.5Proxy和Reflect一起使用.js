const obj={
  name:'liu',
  age:21
}

const objProxy=new Proxy(obj,{
  get(target,key){
    return Reflect.get(target,key)
  },
  set(target,key,newValue){
    Reflect.set(target,key,newValue)
  }
})

console.log(objProxy.name)
console.log(objProxy.name='kobe')