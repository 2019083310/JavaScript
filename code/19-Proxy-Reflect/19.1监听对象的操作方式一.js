const obj={
  name:'liu',
  age:21
}

Object.keys(obj).forEach(item=>{
  let value=obj[item]
  Object.defineProperty(obj,item,{
    get:function(){
      console.log('获取属性被监听了')
      return value
    },
    set:function(newValue){
      console.log('设置属性被监听了')
      value=newValue
    }
  })
})
obj.name='lilei'
obj.age=40
console.log(obj.name)
console.log(obj.age)