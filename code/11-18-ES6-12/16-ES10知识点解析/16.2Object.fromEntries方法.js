// const obj={
//   name:"liu",
//   age:21
// }
// const newArr=Object.entries(obj)
// console.log(newArr)

// const newObj=Object.fromEntries(newArr)
// console.log(newObj)

// Object.fromEntries的应用场景
const queryString = 'name=liu&age=21&height=1.88'
const queryParams = new URLSearchParams(queryString)
// console.log(queryParams)
for (const param of queryParams) {
  console.log(param)
}

const paramObj = Object.fromEntries(queryParams)
console.log(paramObj)