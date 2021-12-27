const name='liu'
const age=21

function sum(num1,num2){
  return num1+num2
}

// 方式一：module.exports形式
// module.exports={
//   name,
//   age,
//   sum
// }

// 方式二：exports形式
exports.name=name
exports.age=age
exports.sum=sum