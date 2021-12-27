// var name='kobe'
// var age=40
// function add(num1,num2){
//   return num1+num2
// }

const moduleA=(function(){
  const name='kobe'
  const age=40

  return {
    name,
    age
  }
})()