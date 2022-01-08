function debounce(fn,delay,immediate=false,resultCallback){
  let timer=null
  // console.log(this)//window

  // 定义控制立即执行的变量,false表示没有执行过
  let isInvoke=false
  // 真正的处理函数
  function _debounce(...args){
    // 取消事件执行操作
    if(timer) clearTimeout(timer)

    // console.log(this)//element元素
    if(immediate&&!isInvoke){
      const result=fn.apply(this,args)
      resultCallback(result)
      isInvoke=true
    }else{
      // 延迟执行
      timer=setTimeout(()=>{
        const result=fn.apply(this,args)
        resultCallback(result)
        timer=null
        isInvoke=false
      },delay)
    }
  }

  // 封装取消请求
  _debounce.cancel=function(){
    if(timer) clearTimeout(timer)
    timer=null
    isInvoke=false
  }

  return _debounce
}