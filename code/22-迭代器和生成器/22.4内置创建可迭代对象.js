//1.数组
// const names = ['abc', 'cba', 'nba']

// for (const item of names) {
//   console.log(item)
// }

//2.集合Set
// const set = new Set()
// set.add(1)
// set.add(2)
// set.add(3)
// for(const item of set){
//   console.log(item)
// }

// 3.字典Map
// const map=new Map()
// map.set('name','liu')
// map.set('age',21)

// for(let item of map){
//   console.log(item)
// }

// 4。伪数组--arguments
// function add(){
//   console.log(arguments)
//   for(let item of arguments){
//     console.log(item)
//   }
// }

// add(1,2,3,4,5)

//这里说明自定义的伪数组是不可以的,但是如果自定的伪数组中有实现可迭代的方法是可以的
// const weiShuZu={name:'liu',age:21,length:2}
// for(let item of weiShuZu){
//   console.log(item)
// }

//但是这里的伪数组是可以的,这是因为系统实现了他的可迭代方法
// const btnS=document.getElementsByTagName('button')
// console.log(btnS)
// for(let item of btnS){
//   console.log(item)
// }

// 5.字符串
const str='abc'
for(let item of str){
  console.log(item)
}