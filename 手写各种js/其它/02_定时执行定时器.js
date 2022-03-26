// 写一个setInterval(fn,a,b,n),每次间隔a,a+b,a+2b,a+nb的时间执行fn,执行n次后,关闭定时器

function MySetInterval(fn,a,b,n){
  let timer=null
  let flag=0
  timer=setInterval(()=>{
    if(flag===n){
      clearInterval(timer)
    }
    fn()
    flag++
  },(a+flag*b)*1000)
}

function add(){
  console.log(111)
}

MySetInterval(add,1,2,5)