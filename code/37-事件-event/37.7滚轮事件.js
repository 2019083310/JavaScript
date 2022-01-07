console.log(WheelEvent.prototype)

// 滚轮事件主要是对鼠标的滚轮进行事件监听
// 滚轮事件mousewheel,滚轮事件会伴随浏览器的滚动条一起滚动，这是浏览器的默认行为
// 如果不希望有默认行为的发生，可以取消默认行为

// 火狐浏览器不支持mousewheel,火狐浏览器的是DomMouseScroll
document.addEventListener('mousewheel',(event)=>{
  console.log('滚轮事件触发了')
  // event.wheelData中保存着滚轮的方向,只看正负，不看大小
  console.log(event.wheelDelta)
})