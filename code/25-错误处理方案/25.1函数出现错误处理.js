function sum(num1,num2){

  // if(typeof num1!=='number'||typeof num2!=='number'){
  //   return  
  // 这种方式直接return我们的代码还会继续执行，不知道错误在哪里，会有bug
  // }

  if(typeof num1!=='number'||typeof num2!=='number'){
    throw 'parameters error'
    // throw抛出抛出异常之后，后面的代码都不会执行了
    // 这样我们就可以知道错误在哪里，进行修复
  }
  return num1+num2
}

// console.log(typeof 1)
// console.log(sum(1,2))
console.log(sum('abc',1))
console.log(111)