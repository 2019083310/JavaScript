// 获取元素
const wrapperEl = document.querySelector('.wrapper')
const remainedEl = document.querySelector('.remained')
const percentEl = document.querySelector('.percent')
const cupEls = document.querySelectorAll('.select-list>.item')
// console.log(cupEls)

const wrapperHeight = wrapperEl.clientHeight

// 绑定事件
cupEls.forEach(cup => {
  cup.addEventListener('click', (e) => {
    if (cup.classList.contains('active')) {
      cup.classList.remove('active')
      updateWrapperHeight()
    } else {
      cup.classList.add('active')
      updateWrapperHeight()
    }
  })
})

function updateWrapperHeight() {
  const cupActives = document.querySelectorAll('.active')
  percentEl.style.height = `${cupActives.length/8*wrapperHeight}px`
  percentEl.style.lineHeight = `${cupActives.length/8*wrapperHeight}px`
  percentEl.innerHTML = `${cupActives.length/8*100}%`

  if (percentEl.innerHTML === '100%') {
    remainedEl.style.display = 'none'
  } else {
    remainedEl.style.display = 'flex'
  }
}