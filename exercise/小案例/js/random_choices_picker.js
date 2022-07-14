const textArea = document.querySelector('.text')
const wrapper = document.querySelector('.wrapper')

textArea.addEventListener('input', (e) => {
  wrapper.innerHTML = ''
  let value = textArea.value
  if (!value.length) {
    return
  }

  let listArr = value.split(',')
  console.log(listArr)

  listArr.forEach(list => {
    if (list === '') return
    const span = document.createElement('span')

    span.innerText = list
    span.classList.add('style')

    wrapper.appendChild(span)
  })
})