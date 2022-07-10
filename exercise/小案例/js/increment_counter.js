const counterEls = document.querySelectorAll('.counter')

// 定时器
// function setTimeFn(el, count) {
//   timer = setInterval(() => {
//     el.innerText = Number(el.innerText) + 1
//     if (el.innerText == count) {
//       clearInterval(timer)
//     }
//   }, 0);
// }

counterEls.forEach(counter => {
  const updateCounter = () => {
    const innerText = +counter.innerText

    const count = +counter.getAttribute('data-counter')

    const target = count / 200
    if (innerText < count) {
      counter.innerText = `${Math.ceil(innerText+target)}`
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = count
    }
  }

  updateCounter()
})