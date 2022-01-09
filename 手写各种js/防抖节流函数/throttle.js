// 封装节流函数
function throttle(fn,intervale,options={leading:true,trailing:false}){
  let timer=null
  let lastTime=0
  const {leading,trailing}=options

  function _throttle(...args){
    const nowTime=new Date().getTime()
    
    // leading优化
    if(!leading&&!lastTime) lastTime=nowTime
    const remainTime=intervale-(nowTime-lastTime)
    if(remainTime<=0){
      if(timer) clearTimeout(timer)

      const result=fn.apply(this,args)
      lastTime=nowTime

      return
    }

    if(trailing&&!timer){
      timer=setTimeout(()=>{
        const result=fn.apply(this,args)
        timer=null
        lastTime=!leading?0:new Date().getTime()
      },remainTime)
    }
  }

  return _throttle

}