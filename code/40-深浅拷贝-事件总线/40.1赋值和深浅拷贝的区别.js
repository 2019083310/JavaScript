const obj={
  name:"liu",
  age:21,
  friends:{
    name:'james',
    age:30
  }
}
const info=obj
obj.name='kobe'
console.log(info.name)//kobe

// 浅拷贝
const obj2={...obj}
obj.friends.name='curry'
console.log(obj2)