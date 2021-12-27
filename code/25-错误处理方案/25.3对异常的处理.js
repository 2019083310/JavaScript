//1.如果不对异常进行处理的话，那么这个异常就会一层一层向外抛出错误，最后抛出到最顶层的函数
// 如果最顶层的函数也没有对异常进行处理，那么程序就会报错，不会顺利执行

// function foo(){
//   throw new Error('异常错误')
// }

// function bar(){
//   foo()
// }

// function test(){
//   bar()
// }

// function demo(){
//   test()
// }

// demo()

// 2.第二种方法是对错误进行异常捕获try...catch语法
// function add(type){
//   if(type===0){
//     throw new Error('type类型错误')
//   }
//   return type
// }

// try{
//   add(0)
// }catch(err){
//   console.log(err)
//   console.log(add(1))
// }finally{
//   console.log('ye')
// }