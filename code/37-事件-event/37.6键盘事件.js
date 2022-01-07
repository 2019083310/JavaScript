console.log(KeyboardEvent.prototype)

// 主要有两个事件keyDown和keyUp,keyPress已经废弃，不要在继续使用了
// 键盘事件主要是用于document文档对象和input输入框
// 另外keyCode这个属性也已经被废弃了
document.addEventListener('keydown',(event)=>{
  //1. 键盘那个键被按下保存在event事件对象中
  // 输出的是被按下的键的名字
  console.log(event.key)

  // 2.但是Ctrl、shift、alt被保存在event.ctrlKey...中
  if(event.ctrlKey){
    console.log('ctrl被按下了')
  }
  
  // 3.要获得呗按下的键的code用event.keyCode属性
  // 输出的是被按下的键的code码
  console.log(event.keyCode )
})

document.addEventListener('keyup',(event)=>{
  if(event.key==='w'){
    console.log('w键被松开了')
  }
})