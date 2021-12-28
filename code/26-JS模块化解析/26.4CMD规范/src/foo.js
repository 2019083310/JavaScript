define(function(require,exports,module){
  const name='liu'
  const age=21
  function sum(num1,num2){
    console.log(num1+num2)
  }

  module.exports={
    name,
    age,
    sum
  }
})