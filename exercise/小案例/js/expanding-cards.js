const divEls = document.querySelectorAll('.panel')

divEls.forEach(el => {
  el.addEventListener('click', () => {
    divEls.forEach(e => {
      if (e.classList.contains('active')) {
        e.classList.remove('active')
      }
    })
    el.classList.add('active')
  })
})