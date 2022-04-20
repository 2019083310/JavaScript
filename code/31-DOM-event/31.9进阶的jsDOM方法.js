// 浏览器中默认选择的是标准盒模型
// document.documentElement会返回一个文档对象，html根元素

// document文档本身的各个尺寸
// window.scrollX--水平滚动条滚动的位移px
// window.scrollY--垂直滚动条滚动的位移px
// window.innerHTML--浏览器视口的高度包括水平滚动条
// document.documentElement.clientHeight---视口的高度，不包括水平滚动条的高度/控制台
// window.innerWidth---浏览器视口的宽度，包括垂直滚动条
// document.body.clientHeight--整个body部分的高度，整个页面并不是可视区域,不包括body的margin
// document.body.offsetHeight--整个body部分的高度，整个页面并不是可视区域,包括body的margin
// document.documentElement.scrollTop---整个页面的top距离

// 事件对象的鼠标尺寸
// event.pageX/pageY---是相对于页面,有兼容性
// event.clientX/clientY---相对于可视窗口，无兼容性
// event.offsetX/offsetY---相当于当前元素的鼠标的位移
// event.scrollX/scrollY---相对于计算机屏幕

// dom元素的试图尺寸
// offsetX/offsetY---相对于定位父元素
// offsetHeight/offsetWidth---本身的宽度和高度--包括外边距
// clientHeight/clientWidth---不包括外边距
// scrollWidth/scrollHeight---内容不超出盒子的真实宽度和高度

// 1-getBoundingClientRect()--缺点每次都会从新计算引发重回和回流
// 它会返回元素的大小及其相对于视口的位置，返回的是一个对象。对象中包含八个属性:
// left、right、top、bottom、width、height、x、y
// 基本每个浏览器都可以兼容这个方法、用来判断元素是否在可视区域
// top、left、right、bottom都是相对于浏览器的左上角来计算的  x===left   y===top
// 如果盒子不全在可视区域内，top/y为负值

// 2-IntersectionObserver
// 它提供了一种异步观察目标元素与其祖先元素或顶级文档视口的交叉状态
// 交叉状态指的是元素在整个视口的占比，全都在就是100%,在一半就是50%....

// 2.1-用法
// 是一个构造函数，用法接受两个参数:callback,option
// obj.observe(观察的元素)//开始观察，可以观察多个元素
// obj.unobserve(element)停止观察某个元素
// obj.disconnect()关闭观察器

// 2.2-callback的执行时机,一种是目标元素刚刚进入视口(可见)，另一种是完全离开(不可见)
// new IntersectionObserver(entries=>{
//   console.log(entries)
// })
// 参数:entries是一个数组，每个成员都是IntersectionObserverEntry对象,如果观察了两个元素，就有两个这样的对象

// 2.3-IntersectionObserverEntry对象
// {
//   time: 3893.92,//可见性发生变化的时间，时间戳
//   rootBounds: ClientRect {//getBoundingClientRect()方法的返回值---根元素的矩形区域信息
//     bottom: 920,
//     height: 1024,
//     left: 0,
//     right: 1024,
//     top: 0,
//     width: 920
//   },
//   boundingClientRect: ClientRect {//目标元素的矩形区域信息
//      // ...
//   },
//   intersectionRect: ClientRect {//目标元素与视口(或根元素)的交叉信息
//     // ...
//   },
//   intersectionRatio: 0.54,//目标元素的可见比例
//   target: element//观察的dom元素
// }

// 2.4-第二个参数option
// 两个重要的属性:threshold和root
// 2.4.1 threshold决定了什么时候触发回调函数，是一个数组，每个成员默认为[0],即交叉比为0时触发回到函数
// {//自定义数组
//   threshold:[0,0.25,0.5,0.75,1]
// }
// 2.4.2 root指定目标元素所在的容器节点(即根元素)
// 注意:容器元素必须为目标元素的祖先节点,如果不传则使用顶级文档窗口

// 2.5例子
// const io=new IntersectionObserver(entries=>{
//   console.log(entries)
// },{
//   threshold:[0,0.25,0.5,0.75,1],
// })

// io.observe(document.querySelector('#box1'))
// io.observe(document.querySelector('#box2'))
// console.log(io.root)//null默认值相对于顶级窗口

// 2.6-优点--可以判断一个元素是否在是口里，不会引发重绘和回流,可以做懒加载和无限滚动
// 缺点--兼容性不兼容ie

// 3-createNodeIterator--可以输出页面所有的元素--兼容性好
// 参数:1:root--遍历起始处的根节点
// 2:whatToShow是一个可选性的节点过滤器

// 3.1-用法
// const body=document.getElementsByTagName('body')[0]
// const it=document.createNodeIterator(body)//返回一个新的NodeIterator对象--节点迭代对象
// let root=it.nextNode()
// while(root){
//   console.log(root)
//   root=it.nextNode()
// }

// 4-DOMContentLoaded---兼容性很好
// 4.1它是当我们的HTML文档被完全加载和解析完成之后，DOMContentLoaded事件被触发，无需等待样式表、图像、被完全加载
// 加载和解析指的是我们的HTML文件被浏览器解析为DOM树之后
// 而我们浏览器之后还会做:DOM+CSSOM=renderTree+Layout=Print
// js会阻塞DOM的生成，就是在解析html文档时，如果遇到script标签，就会优先执行js代码
// 但是js可以获取元素的样式，对其操作，因此，js代码执行前也要先构建CSSOM树

// 4.2因此，我们如果想要页面尽快显示，我们可以使用异步脚本defer和async
// defer会在页面解析完之后立即执行，并且多个script标签的执行顺序与定义位置有关
// async会在js加载完成之后立即执行而不关心html解析

//4.3defer和async对DOMContentLoaded的影响
// DomContentLoaded事件会在defer脚本执行完成之后执行
// 而async脚本会在DOMContentLoaded触发之后执行

// 4.4DomContentLoaded事件与Load事件的区别
// Load事件是在所有资源都加载完毕之后才会执行
// DomContentLoaded事件是在html被解析之后立即执行

// 4.4使用
// document.addEventListener('DOMContentLoaded',()=>{
//   console.log('DOM fully loaded and parsed')
// })


// 5-MutationObserver
// 是一个内建对象html5，它观察DOM元素，并在检测到更改时触发回调

// 用法
// 选择需要观察变动的节点
const targetNode=document.querySelector('div')

// 观察器的配置--需要观察什么
const config={
  attributes:true,
  childList:true,
  subTree:true
}

// 当观察到变动时执行的回调函数
const callback=function(mutationsList,observer){
  for(let mutation of mutationsList){
    if(mutation.type==='childList'){
      console.log('A child node has been added or removed')
    }else if(mutation.type==='attributes'){
      console.log('The'+mutation.attributeName+'attribute was modified')
    }
  }
}

// 创建一个观察器实例
const observer=new MutationObserver(callback)

// 配置开始观察的目标节点
observer.observe(document,config)

// 停止观察
// observer.disconnect()
