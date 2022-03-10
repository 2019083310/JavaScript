function mySetTimeout(fn,t){
  let timer=null
  function interval(){
    fn()
    timer=setTimeout(interval,t)
  }
  interval()
  return {
    cancel:()=>{
      clearTimeout(timer)
    }
  }
}

// let a=mySetTimeout(()=>{
//   console.log(111);
// },1000)
// let b=mySetTimeout(() => {
//   console.log(222)
// }, 1000)

setTimeout(()=>{
  console.log(11)
},1000)