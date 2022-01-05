// 常见的属性
console.log(document.body)
console.log(document.title)
document.title='hello world'

console.log(document.head)
console.log(document.children[0])

console.log(window.location)
console.log(document.location)
console.log(window.location===document.location)//true

// 常见的方法
const imageEl=document.createElement('img')
// 等价于
// const imageEl2=new HTMLImageElement()

// 获取元素
const divEl=document.getElementById('box')
const divEl2=document.getElementsByTagName('div')[0]
const divEl3=document.querySelector('#box')
const divEl4=document.querySelectorAll('div')[0]