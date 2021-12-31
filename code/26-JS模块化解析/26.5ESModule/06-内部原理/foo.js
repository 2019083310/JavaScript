// console.log('foo被执行了')

let name='kobe'
let age=40

function add(num1,num2){
  console.log(num1+num2)
}

setTimeout(()=>{
  name='liu'
  age=21,
  add=()=>{console.log('1111')}
  console.log(name)
  console.log(age)
},100)

// console.log(name)
// console.log(age)
// export {
//   name,
//   age,
//   add
// }

export default {
  name,
  age,
  add
}