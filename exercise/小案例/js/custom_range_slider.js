// 获取元素
const inputEl = document.querySelector('#range')
const labelEl = document.querySelector('label')

inputEl.addEventListener('input', (e) => {
  const value = e.target.value
  labelEl.innerText = value

  labelEl.style.left = `${value*3}px`
})