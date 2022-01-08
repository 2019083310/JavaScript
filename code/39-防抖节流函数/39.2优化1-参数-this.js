function debounce(fn,delay){
  let timer=null
  // console.log(this)//window

  // 真正的处理函数
  function _debounce(...args){
    // console.log(this)//element元素
    
    // 取消事件执行操作
    if(timer) clearTimeout(timer)
    timer=setTimeout(()=>{
      fn.apply(this,args)
    },delay)
  }

  return _debounce
}