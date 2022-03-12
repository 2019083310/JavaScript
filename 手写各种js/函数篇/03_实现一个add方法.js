// 题目描述:实现一个 add 方法 使计算结果能够满足如下预期： add(1)(2)(3)()=6 add(1,2,3)(4)()=10
// 其实就是考函数柯里化

// function add(){
//   const _args=[...arguments]
//   function fn(){
//     _args.push(...arguments)
//     return fn
//   }

//   fn.toString=function(){
//     if(!_args.length){
//       return
//     }
//     return _args.reduce((sum,cur)=>{
//       sum+cur
//     },0)
//   }

//   return fn
// }

function add(...args) {
  let allArgs = [...args];
  function fn(...newArgs) {
    allArgs = [...allArgs, ...newArgs];
    return fn;
  }
  fn.toString = function () {
    if (!allArgs.length) {
      return;
    }
    return allArgs.reduce((sum, cur) => sum + cur);
  };
  return fn;
}


console.log(add(1)(2)(3).toString())
add(1,2,3)