function throttle(fn,interval,options={leading:true,trailing:false}){
  let lastTime=0
  const {leading,trailing}=options
  let timer=null

  function _throttle(...args){
    const nowTime=new Date().getTime()

    // leading优化
    if(!leading&&!lastTime) lastTime=nowTime
    
    let remainTime=interval-(nowTime-lastTime)
    if(remainTime<=0){
      if(timer){
        clearTimeout(timer)
        timer=null
      }

      // 参数优化
      fn.apply(this,args)
      lastTime=nowTime

      return
    } 

    // 优化trailing
    if(!timer&&trailing){
      timer=setTimeout(()=>{
        // 参数优化
        fn.apply(this,args)
        timer=null
        lastTime=!leading?0:new Date().getTime()
      },remainTime)
    }
  }

  return _throttle
}