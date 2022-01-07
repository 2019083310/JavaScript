console.log(MouseEvent.prototype)

// 鼠标事件主要包括：鼠标的移入移出，鼠标的拖拽，鼠标的点击等
// click：单击事件
// dblclick：双击事件
// mousedown：按下鼠标键时触发
// mouseup：释放按下的鼠标键时触发
// mousemove：鼠标移动事件
// mouseover：移入事件
// mouseout：移出事件
// mouseenter：移入事件
// mouseleave：移出事件
// contextmenu：右键事件
const divEl=document.querySelector('#box')

// 1.单击事件
// divEl.addEventListener('click',()=>{
//   console.log('div元素被点击了')
// })

// 2.鼠标移入移出事件
// divEl.addEventListener('mouseenter',()=>{
//   console.log('鼠标移入到了div中')
// })

// divEl.addEventListener('mouseleave',()=>{
//   console.log('鼠标移出到了div中')
// })

// 3.鼠标拖拽事件
let speed=10
// divEl.addEventListener('mousedown',()=>{
//   console.log('div元素被拖拽')
// })

divEl.addEventListener('mousemove',()=>{
  // divEl.style.marginLeft=speed+'px'+10
})

// divEl.addEventListener('mouseup',()=>{
//   console.log('div元素被松开了')
// })

// 4.双击事件
// divEl.addEventListener('dblclick',()=>{
//   console.log('div元素被双击了')
// })
