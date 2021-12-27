// var name = 'liu'
// var age = 21

// function sum(num1, num2) {
//   return num1 + num2
// }

const moduleB=(function(){
  const name='liu'
  const age=21

  return {
    name,
    age
  }
})()