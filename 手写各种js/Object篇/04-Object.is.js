// Object.is()方法是新增的方法
// 主要是弥补了NaN===NaN和=0===-0的缺陷

Object.LyIs=function(x,y){
  if(x===y){
    return x!==0||1/x===1/y
  }

  return x!==x&&y!==y
}

// 测试
console.log(Object.LyIs(NaN,NaN))//true
console.log(Object.LyIs(+0,-0))//false
console.log(Object.LyIs('1',1))//false
