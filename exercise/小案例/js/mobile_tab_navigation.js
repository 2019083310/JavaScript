const tabEls = document.querySelectorAll('.item')
const imgEls = document.querySelectorAll('img')

tabEls[0].classList.add('active')

tabEls.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabEls.forEach(tab => {
      tab.classList.remove('active')
    })

    tab.classList.add('active')

    imgEls.forEach(img => {
      img.style.display = 'none'
    })
    imgEls[index].style.display = 'block'
  })
})