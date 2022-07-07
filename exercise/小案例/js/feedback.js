// ?获取元素
const container = document.querySelector('.container')
const feedEls = document.querySelectorAll('.feedback-list > .item')
const btn = document.querySelector('.submit')
// console.log(feedEls)

let feedText = ''

feedEls.forEach(el => {
  el.addEventListener('click', () => {
    feedEls.forEach(el => {
      el.classList.remove('active')
    })

    el.classList.add('active')
    const feedTextEl = el.querySelector('span')
    feedText = feedTextEl.innerText
    // console.log(feedText)
  })
})

btn.addEventListener('click', () => {
  if (!feedText.length) return
  container.innerHTML = `
    <i class="fas fa-heart" style="color:red;font-size:30px;"></i>
    <strong>Thank You!</strong>
    <strong>Feedback：${feedText}!</strong>
    <p style="color:#555;text-align:center;">We'll use your feedback to improve our customer support</p>
  `
})