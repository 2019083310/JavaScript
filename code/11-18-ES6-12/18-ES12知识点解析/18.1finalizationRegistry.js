// ES12: FinalizationRegistry类
const fRegistry=new FinalizationRegistry((value)=>{
  console.log('注册在fRegistry的对象, 某一个被销毁',value)
})

let obj={
  name:'liu',
  age:21
}

let info={
  name:"kobe",
  age:41
}
fRegistry.register(obj,'obj')
fRegistry.register(info,'info')

obj=null
info=null
