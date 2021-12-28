define(function(){
  const name='liu'
  const age=21
  function sum(num1,num2){
    console.log(num1+num2)
  }

  require(['bar'],function(bars){
    console.log('foo',bars)
  })

  return {
    name,
    age,
    sum
  }
})