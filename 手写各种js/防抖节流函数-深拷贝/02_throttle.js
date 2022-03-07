// 封装节流函数
// 节流函数就是用时间差实现的remainTime=nowTime-lastTime>10
// 他跟防抖不同，节流是按照自己的时间频率触发事件

function throttle(fn,interval,options={immediate:true,trailing:false}){

  let lastTime=0
  let timer=null
  const {immediate,trailing,resultCallBack}=options

  function _throttle(...args){
    let nowTime=new Date().getTime()
    
    // leading优化
    if(!immediate&&lastTime){
      lastTime=nowTime
    }

    let remainTime=interval-(nowTime-lastTime)

    if(remainTime<=0){

      if(timer){
        clearTimeout(timer)
        timer=null
      }

      const result=fn.apply(this,args)
      lastTime=nowTime
      if(resultCallBack){
        resultCallBack(result)
      }

      return
    }

    // trailing优化
    if(!timer&&trailing){
      timer=setTimeout(()=>{
        const result=fn.apply(this,args)
        if(resultCallBack) resultCallBack(result)

        timer=null
        lastTime=!leading?0:new Date().getTime()
      },remainTime)
    }
  }

  _throttle.cancel=function(){
    if(timer) clearTimeout(timer)
    timer=null
    lastTime=0
  }

  return _throttle

}
