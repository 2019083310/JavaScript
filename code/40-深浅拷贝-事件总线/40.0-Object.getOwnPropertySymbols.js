const s1=Symbol('aaa')
const s2=Symbol('bbb')

const obj={
  name:'liu',
  age:21,
  [s1]:'coder',
  [s2]:'coderwhy'
}

// Symbol作为key是不会被遍历出来的
for(let item in obj){
  console.log(item)
}
console.log(Object.keys(obj))

// Object.getOwnPropertySymbol()
console.log(Object.getOwnPropertySymbols(obj))
for(let sKeys of Object.getOwnPropertySymbols(obj)){
  console.log(sKeys)
}