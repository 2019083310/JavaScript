// 如题：
// var foo=function(...args){}//要求实现函数体
// var f1=foo(1,2,3)
// f1.getValue()//6
// var f2=foo(1,2,3)
// f2.getValue()//6
// var f3=foo(1)(2)(3)(4)
// f3.getValue()//10

function foo(...args) {
  let newArr = [...args]

  function interval(...arg) {
    newArr = [...newArr, ...arg]
    return interval
  }

  interval.getValue = function () {
    return newArr.reduce((pre, cur) => {
      return pre + cur
    })
  }

  return interval
}

var f1 = foo(1, 2, 3)
console.log(f1.getValue()) //6
var f2 = foo(1, 2, 3)
console.log(f2.getValue())//6
var f3 = foo(1)(2)(3)(4)
console.log(f3.getValue()); //10