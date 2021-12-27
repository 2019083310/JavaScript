// with语句: 可以形成自己的作用域
// function foo(){
//   var message='hello'
//   console.log(message)
// }
// foo()
const obj={
  name:'liu',
  message:'world'
}

function foo(){
  // var message='hello'
  with(obj){
    console.log(message)
  }
}
foo()

with(obj){
  console.log(name)
}