// 所谓事件代理就是通过其他元素来监听所代理的元素的事件
// 这个事件代理的应用场景是，当你的页面上有很多比如a标签
// 你想给所有的a标签来绑定一个事件，这个时候你可以用事件代理

// 用法
// console.log(Node.prototype)

const divEl=document.querySelector('#box2')
// console.log(Element.prototype)
divEl.addEventListener('click',(event)=>{
  // console.log(event)
  event.preventDefault()
  // 获取被点击的元素
  const target=event.target
  // 判断是不是想要代理的对象
  if(target.nodeName==='A'){
    alert(target.innerHTML+'被点击了')
  }
})