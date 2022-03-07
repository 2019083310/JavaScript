// 防抖函数的封装

// 他的原理就是通过定时器
// 在事件触发之后如果没有再次触发事件，那么发送请求
// 如果由事件触发，那么就取消上一次请求
function debounce(fn, delay, resultCallback, immediate = false) {

  let timer = null

  let inInvoke = false

  function _debounce(...args) {
    if (timer) {
      clearTimeout(timer)
    }

    if (immediate && !inInvoke) {
      const result = fn.apply(this, args)
      resultCallback(result)
      inInvoke=true
    } else {
      timer = setTimeout(() => {
        const result = fn.apply(this, args)
        resultCallback(result)
        inInvoke=false
        timer=null
      }, delay)
    }
  }

  // 封装取消请求
  _debounce.cancel=function(){
    if(timer){
      clearTimeout(timer)
      timer=null
      inInvoke=false
    }
  }

  return _debounce
}