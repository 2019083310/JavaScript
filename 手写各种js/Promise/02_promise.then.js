LyPromise.prototype.then = function (onResolved, onRejected) {
  // then方法的参数必须为函数，否则会穿透
  // 还有then方法不能返回本身Promise否则会死循环
  if (typeof onResolved !== 'function') {
    onResolved = value => value
  }

  if (typeof onRejected !== 'function') {
    onRejected = reason => reason
  }

  return new LyPromise((resolve, reject) => {
    const that = this

    function callback(fn) {
      try {
        const result = fn(that.promiseResult)
        if (result instanceof Promise) {
          result.then(v => {
            resolve(v)
          }, err => {
            reject(err)
          })
        } else {
          resolve(result)
        }
      } catch (e) {
        reject(e)
      }
    }

    if (this.promiseState === 'fulfilled') {
      setTimeout(() => {
        callback(onResolved)
      })
    }

    if (this.promiseState === 'rejected') {
      setTimeout(() => {
        callback(onRejected)
      })
    }

    if (this.promiseState === 'pending') {
      this.callbacks.push({
        OnResolved(){
          callback(onResolved)
        },
        OnRejected(){
          callback(onRejected)
        }
      })
    }
  })
}