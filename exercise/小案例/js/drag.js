const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drag', dragDrop)
}


//? dragstart通常作用于拖拽元素上，保存拖拽元素的引用
function dragStart() {
  this.className += 'hold'
  setTimeout(() => this.className = 'invisible', 0)
}

//? dragend也通常作用于拖拽元素上，重置拖拽元素透明度
function dragEnd() {
  this.className = 'fill'
}

//? 放值目标元素时触发事件
function dragOver(e) {
  // 阻止默认动作
  e.preventDefault();
}

//? 拖拽的目标元素进入可放置的目标时触发 
function dragEnter(e) {
  e.preventDefault()
  this.className += 'hovered'
}

//? 当拖动元素离开可放置目标节点，重置其背景
function dragLeave() {
  this.className = 'empty'
}

//? 目标元素放置在相应的区域内
function dragDrop() {
  this.className = 'empty'
  this.appendChild(fill)
}