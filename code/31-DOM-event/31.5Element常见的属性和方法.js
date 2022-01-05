const divEl=document.querySelector('#box')

// 常见的属性
console.log(divEl.id)
console.log(divEl.tagName)
console.log(divEl.children)
console.log(divEl.className)
console.log(divEl.classList)
console.log(divEl.clientHeight)
console.log(divEl.clientWidth)

// 常见的方法
const value=divEl.getAttribute('class')
console.log(value)
divEl.setAttribute('age',21)