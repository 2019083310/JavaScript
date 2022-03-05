// 函数柯里化
// 指的是将函数的执行差分为一个又一个函数，每个函数的职责单一
// 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

function curring(fn) {
  function curried(...args) {

    // 判断当前已经接收的参数的个数, 接受的参数本身需要接受的参数是否已经一致了
    // 1.当已经传入的参数 大于等于 需要的参数时, 就执行函数

    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      // 没有达到个数时, 需要返回一个新的函数, 继续来接收的参数
      function curried2(...arg) {
        // 接收到参数后, 需要递归调用curried来检查函数的个数是否达到
        return curried.apply(this,args.concat(arg))
      }

      return curried2
    }
  }

  return curried
}

function sum(x, y, z) {
  return x + y + z
}

const result=curring(sum)
const res1=result(1,2)(3)
const res2=result(1)(2)(3)
const res3=result(1,2,3)
console.log(res1,res2,res3)