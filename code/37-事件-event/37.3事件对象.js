const divEl=document.querySelector('#box')
const spanEl=document.querySelector('#san')

// 事件对象是默认传递给函数的参数，里面有很多关于鼠标的点击，键盘，屏幕滚动条位置等信息
// 常用的事件对象的属性
divEl.addEventListener('click',(event)=>{
  // 注意；IE浏览器是将event作为window的属性保存
  event=event||window.event

  console.log(event)
  // 1.event.target---发生事件的目标
  console.log(event.target)

  // 2.event.type---发生事件的类型
  console.log(event.type)

  // 3.event.bubbles---表示事件是否冒泡
  console.log(event.bubbles)

  // 4.event.clientX/event.clientY
  // 表示鼠标点击的x,y轴坐标，是相对于当前窗口
  console.log(event.clientX)
  console.log(event.clientY)

  // 5.event.pageX/pageY---鼠标点击的坐标，相对于整个页面
  console.log(event.pageX)
  console.log(event.pageY)

  // 6.event.scrollX/scrollY
  console.log(event.screenX)
  console.log(event.screenY)

  // 除了这些还有键盘的一些属性
})