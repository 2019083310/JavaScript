console.log(UIEvent.prototype)

// 用户界面事件主要包括文档的加载和未加载完成
// 滚动条事件以及窗口大小的变化事件

window.addEventListener('load',()=>{
  console.log('文档加载完成')
})

window.addEventListener('resize',()=>{
  console.log('窗口大小发生了变化')
})

