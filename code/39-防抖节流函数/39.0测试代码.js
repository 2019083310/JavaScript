// function foo(a,b){
//   console.log(a,b)
// }
// foo(...[1,2])

function bar(...args){
  // console.log(...args)
  function test(args){
    console.log(args)
  }
  test(...args)
}

bar(1,2,3)