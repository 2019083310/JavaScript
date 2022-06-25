// 获取按钮
const addBtn = document.querySelector('.btn')

// 获取容器container
const container = document.querySelector('.container')

// 从本地缓存读取数据
const notes = JSON.parse(localStorage.getItem('notes'))
if (notes) {
  notes.forEach(note => addNewNote(note))
}

// 监听添加笔记事件
// ?addEventListener的回调函数的参数默认就是事件对象event,不能传其他额外的参数
addBtn.addEventListener('click', () => addNewNote())

// 自定义回调函数
function addNewNote(text = '') {
  // 创建元素
  const divEl = document.createElement('div')
  divEl.classList.add('note')

  divEl.innerHTML = `
    <div class="top">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button> 
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
  // 获取元素，绑定事件
  const editBtn = divEl.querySelector('.edit')
  const deleteBtn = divEl.querySelector('.delete')
  const mainEl = divEl.querySelector('.main')
  const textAreaEl = divEl.querySelector('textarea')

  // textarea和input等表单项一样，获取设置值通过value
  textAreaEl.value = text
  mainEl.innerHTML = marked(text)

  deleteBtn.addEventListener('click', () => {
    // todo 两种方法：1.通过父元素container移除子元素,removeChild  2.el.remove()方法就可以移除元素本身
    divEl.remove()
    updateLS()
  })

  editBtn.addEventListener('click', () => {
    mainEl.classList.toggle('hidden')
    textAreaEl.classList.toggle('hidden')
  })

  textAreaEl.addEventListener('input', (e) => {
    const value = e.target.value

    mainEl.innerHTML = marked(value)
    updateLS()
  })

  container.appendChild(divEl)
}

// 保存到localStorage中
function updateLS() {
  const notesText = document.querySelectorAll('textarea')

  const notes = []
  notesText.forEach(note => {
    notes.push(note.value)
  })

  localStorage.setItem('notes', JSON.stringify(notes))
}