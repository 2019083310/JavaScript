// 获取元素
const fasEls = document.querySelectorAll('.fas')
const bottoms = document.querySelectorAll('.bottom')

fasEls.forEach((el, index) => {
  el.addEventListener('click', () => {
    if (el.classList.contains('fa-chevron-down')) {
      el.classList.remove('fa-chevron-down')
      el.classList.add('fa-times')
      bottoms[index].style.display = 'block'
    } else if (el.classList.contains('fa-times')) {
      el.classList.remove('fa-times')
      el.classList.add('fa-chevron-down')
      bottoms[index].style.display = 'none'
    }
  })
})