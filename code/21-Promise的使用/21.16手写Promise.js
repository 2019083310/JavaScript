function LyPromise(executor) {
  this.PromiseState = 'pending'
  this.PromiseResult = null

  const self = this

  //定义callbacks属性，保存Pending状态的回调函数
  this.callbacks = []
  function resolve(data) {
    if (self.PromiseState !== 'pending') {
      return
    }
    self.PromiseState = 'fulfilled'
    self.PromiseResult = data

    //异步任务成功后执行回调函数
    setTimeout(()=>{
      self.callbacks.forEach(item=>{
        item.OnResolved(data)
      })
    })
  }

  function reject(reason) {
    if (self.PromiseState !== 'pending') {
      return
    }

    self.PromiseState = 'rejected'
    self.PromiseResult = reason

    //异步任务失败后执行回调函数
    setTimeout(()=>{
      self.callbacks.forEach(item=>{
        item.OnRejected(reason)
      })
    })
  }

  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

LyPromise.prototype.then = function (OnResolved, OnRejected) {
  const that=this

  //判断回调函数是否存在
  if (typeof OnResolved !== 'function') {
    OnResolved = value => value
  }

  if (typeof OnRejected !== 'function') {
    OnRejected = reason => {
      throw reason
    }
  }

  return new LyPromise((resolve, reject) => {
    //封装重复部分
    function callback(type) {
      try {
        //获取回调函数的执行结果
        let result=type(that.PromiseResult)

        //判断
        if(result instanceof Promise){
          //如果是Promise对象
          result.then(v=>{
            resolve(v)
          },r=>{
            reject(r)
          })
        }else{
          resolve(result)
        }
      } catch (e) {
        reject(e)
      }
    }

    //如果Promise状态为fulfilled回调这个函数
    if (this.PromiseState === 'fulfilled') {
      setTimeout(() => {
        callback(OnResolved)
      })
    }

    //如果Promise状态为rejected回调这个函数
    if (this.PromiseState === 'rejected') {
      setTimeout(() => {
        callback(OnRejected)
      })
    }

    //如果Promise状态为pending，保存回调函数
    if(this.PromiseState==='pending'){
      this.callbacks.push({
        OnResolved(){
          callback(OnResolved)
        },
        OnRejected(){
          callback(OnRejected)
        }
      })
    }
  })
}