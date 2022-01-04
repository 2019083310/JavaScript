// 1.常见的属性
// console.log(window.screenX)
// console.log(window.screenY)

// window.addEventListener("scroll", () => {
//   console.log(window.scrollX, window.scrollY)
// })

// console.log(window.outerHeight)
// console.log(window.innerHeight)

// 2.常见的方法
// const scrollBtn=document.querySelector('#scroll')
// scrollBtn.onclick=function(){
//   // 1.scrollTo
//   window.scrollTo({top:500})
// window.addEventListener('click',()=>{
  // window.scrollTo({top:500})

  // 2.close()
  // window.close()

  // 3.open()
  // window.open('http://www.baidu.com')
// })

// 3.常见的事件
window.onload=function(){
  console.log('window窗口加载完成')
}

window.onfocus=function(){
  console.log('window窗口获得焦点')
}

window.onblur=function(){
  console.log('window窗口失去焦点')
}