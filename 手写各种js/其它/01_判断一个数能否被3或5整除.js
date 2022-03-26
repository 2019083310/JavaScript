// 输入一个整数，如果能够被3整除，则输出 Fizz
// 如果能够被5整除，则输出 Buzz
// 如果既能被3整数，又能被5整除，则输出 FizzBuzz
function fizzBuzz(n){
  if(n%3===0&&n%5===0){
    return 'fizzBuzz'
  }else if(n%3===0){
    return 'fizz'
  }else if(n%5===0){
    return 'buzz'
  }else{
    return n
  }
}


console.log(fizzBuzz(10))
console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))