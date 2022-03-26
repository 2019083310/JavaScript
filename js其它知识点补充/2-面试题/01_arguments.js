// 对于arguments与实参的关系
// 如果是严格模式下，他们没有关系，改变arguments不会改变实参
// 如果是非严格模式下，改变任何一个，arguments与实参都会互相影响
// 默认情况下是非严格模式
function side(arr){
  arr[0]=arr[2]
}

function fn(a,b,c){
  c=10
  side(arguments)
  return a+b+c
}

console.log(fn(1,1,1))//21


function side(arr){
  arr[0]=arr[2]
}

function fn(a,b,c=3){//c=3是es6的参数的默认值，会开启严格模式
  c=10
  side(arguments)
  return a+b+c
}

console.log(fn(1,1,1))//12