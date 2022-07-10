// ?获取元素
const container = document.querySelector('.container')

//? 创建元素 
const fragment = document.createDocumentFragment()
for (let i = 0; i < 600; i++) {
  const divEl = document.createElement('div')
  divEl.classList.add('box')

  fragment.appendChild(divEl)
}

container.appendChild(fragment)

// ?获取所有元素
const boxEls = document.querySelectorAll('.box')
boxEls.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.backgroundColor = `${randomGenerateColor()}`
  })

  box.addEventListener('mouseleave', () => {
    box.style.backgroundColor = 'rgb(29,29,29)'
    box.style.transition = 'all 2s ease-in'
  })
})

// ? 随机生成颜色函数
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

function randomGenerateColor() {
  const number = Math.floor(Math.random() * colors.length)

  return colors[number]
}