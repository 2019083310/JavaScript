// 为子系统的一组接口提供了一个一致的页面,定义了一个高层接口
// 比如：封装一个函数能够兼容浏览器的事件绑定

function addMyEvent(el,ev,fn){
  if(el.addEventListener){
    el.addEventListener(ev,fn,false)
  }else if (el.attachEvent){
    el.attachEvent('on'+ev,fn)
  }else{
    el['on'+ev]=fn
  }
}

// 封装一个接口

let myEvent={
  step:e=>{
    e.stopPropagation()
    e.preventDefault()
  }
}
