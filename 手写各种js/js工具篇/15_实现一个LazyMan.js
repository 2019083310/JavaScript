// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

class _LazyMan {
  constructor(name) {
    // 一个任务队列
    this.taskList = []
    const fn = () => {
      console.log(`Hi! This is ${name}`)
      this.next()
    }
    this.taskList.push(fn)

    // 清空任务队列
    setTimeout(()=>{
      this.next()
    },0)
  }

  // eat方法
  eat(name) {
    const fn = () => {
      console.log(`Eat ${name}`)
      this.next()
    }
    // 添加到任务队列中
    this.taskList.push(fn)
    return this
  }

  // sleep方法
  sleep(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`wake up after ${time}`)
        this.next()
      }, time)
    }
    this.taskList.push(fn)
    return this
  }

  // sleepFirst方法
  sleepFirst(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`wake up after ${time}`)
        this.next()
      }, time)
    }
    // 添加到队首，优先执行
    this.taskList.unshift(fn)
    return this
  }

  // next方法执行任务队列
  next(){
    // 第一个按顺序执行
    const task=this.taskList.shift()
    task&&task()
  }
}

function LazyMan(name) {
  return new _LazyMan(name)
}
// LazyMan('coder')
// LazyMan('coder').eat('fish').eat('beef')
LazyMan('coder').eat('fish').sleepFirst(10000)
// LazyMan('coder').eat('fish').sleep(5000).sleepFirst(10000)