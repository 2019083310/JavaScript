function throttle(fn,interval,options={leading:true,trailing:false}){
  let lastTime=0
  const {leading,trailing}=options

  function _throttle(){
    const nowTime=new Date().getTime()

    // leading优化
    if(!leading&&!lastTime) lastTime=nowTime
    
    let remainTime=interval-(nowTime-lastTime)
    if(remainTime<=0){
      fn()
      lastTime=nowTime
    } 
  }

  return _throttle
}