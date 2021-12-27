const obj={
  name:"liu",
  age:21
}

const objProxy=new Proxy(obj,{
  set:function(target,key,newValue){
    console.log('set捕捉器被调用了')
    target[key]=newValue
  },
  get:function(target,key){
    console.log('get捕捉器被调用了')
    return target[key]
  },
  deleteProperty:function(target,key){
    console.log('deleteProperty捕捉器被调用了')
    return delete target[key]
  },
  has:function(target,key){
    console.log('has捕捉器被调用了')
    return key in target
  },
  setPrototypeOf:function(target,newValue={name:'liu'}){
    console.log('setPrototypeOf捕捉器被调用了')
    return Object.setPrototypeOf(target,newValue)
  },
  getPrototypeOf(target){
    console.log('getPrototypeOf捕捉器呗调用了')
    // return null
    return Object.getPrototypeOf(target)
  },
  preventExtensions:function(target){
    console.log('preventExtensions被调用了')
    // return Object.preventExtensions(target)
    return true
  }
})

console.log('name' in objProxy)
console.log(objProxy.name)
console.log(objProxy.age)
console.log(delete objProxy.name)
console.log(obj)
console.log(objProxy.name='kobe')
console.log(obj)
// console.log(objProxy.preventExtensions())
objProxy.name='liu'
// console.log(objProxy.setPrototypeOf(obj))
// console.log(objProxy.getPrototypeOf(obj))
console.log(Reflect.getPrototypeOf(objProxy))
console.log(Reflect.setPrototypeOf(objProxy,{name:'liu'}))
console.log(Reflect.getPrototypeOf(objProxy))