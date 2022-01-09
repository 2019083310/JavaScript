// 1.JSON序列化的方法
// 但是不能实现对函数等其它数据类型的深拷贝
const obj={
  name:'liu',
  age:21,
  add(){
    console.log('a')
  },
  friends:{
    name:'james'
  }
}

const info=JSON.parse(JSON.stringify(obj))
obj.friends.name='kobe'
console.log(info.friends.name)//james
console.log(info)//{ name: 'liu', age: 21, friends: { name: 'james' } }