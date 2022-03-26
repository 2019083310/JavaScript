// 首先，看一下同步函数如何处理
// 定义加减乘除四个同步函数
// 对于reduce函数,如果不传preValue，那么数组的第一个元素arr[0]，会作为preValue
// currValue会从数组的第二个元素开始
const add=x=>x+5;
const sub=x=>x-5;
const mult=x=>x*5;
const division=x=>x/5;

const pipeFunctions=(...fns)=>{
  return fns.reduce((preFn,curFn)=>{
    return (...args)=>{
      const res=preFn(...args)
      return curFn(res)
    }
  })
}

const targetFn=pipeFunctions(add,sub,mult,division)
console.log(targetFn)
console.log(targetFn(5))//5

// 对于异步函数来说
// 定义一个异步函数
const asyncFn=(v)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(v)
    },Math.random()*1000)
  })
}

const add2=async x=>await asyncFn(x+5);
const sub2=async x=>await asyncFn(x-5);
const mult2=async x=>await asyncFn(x*5);
const division2=async x=>await asyncFn(x/5);

const pipeFunctions2=(...fns)=>{
  return fns.reduce((preFn,curFn)=>{
    return async(...args)=>{
      const res=await preFn(...args)
      return curFn(res)
    }
  })
}

const targetFn2=pipeFunctions2(add2,sub2,mult2,division2)
console.log(targetFn2(5))//5
