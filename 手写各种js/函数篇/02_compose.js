// 组合函数

function lyCompose(...fns){
  const length=fns.length
  for(let i=0;i<length;i++){
    if(typeof fns[i]!=='function'){
      throw new Error('fn not is a function')
    }
  }

  function compose(...args){
    let index=0
    let result=length?fns[index].apply(this,args):args
    while(++index<length){
      result=fns[index].apply(this,[result])
    }

    return result
  }

  return compose
}

function fn1(x){
  return x+1
}
function fn2(x){
  return x+2
}
function fn3(x){
  return x+3
}
function fn4(x){
  return x+4
}

// 实现
const res=lyCompose(fn1,fn2,fn3,fn4)
console.log(res(1))//11