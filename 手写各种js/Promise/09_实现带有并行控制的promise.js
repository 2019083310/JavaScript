// 什么是并行控制呢
// 给你很多请求，但是只允许你同时发送两个，只有当其中一个完成时，才能能发送另一个请求
// 例如:
// 

class Scheduler {
  // 生成一个实例对象，能够添加要发送的任务
  // limit允许每次发送的最大数量
  constructor(limit) {
    this.maxCount = limit
    this.queue = [] //先进先出，利用队列的特性
    this.runCount = 0 //正在发送请求的任务数量
  }

  // 定义一个方法，把要发送的所有任务入队列
  addTask(time, order) {
    const taskFn = ()=>{
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(order)
          resolve()
        }, time)
      })
    }
    this.queue.push(taskFn)
  }

  // 开始执行任务
  taskExecutor() {
    for (let i = 0; i < this.maxCount; i++) {
      this.request()
    }
  }

  // 发送请求
  request(){
    // 判断队列的长度以及正在发送请求的数量
    if(!this.queue||!this.queue.length||this.runCount>=this.maxCount){
      return
    }

    this.runCount++
    // 正常发送请求
    this.queue.shift()().then(res=>{
      this.runCount--
      this.request()
    })
  }
}

const scheduler = new Scheduler(2)

// 把所有任务添加到队列中，先进先出
scheduler.addTask(1000, '1')
scheduler.addTask(500, '2')
scheduler.addTask(300, '3')
scheduler.addTask(400, '4')

scheduler.taskExecutor()