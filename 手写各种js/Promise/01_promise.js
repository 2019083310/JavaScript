function LyPromise(executor){
  this.promiseState='pending'
  this.promiseResult=null

  const self=this

  this.callbacks=[]
  function resolve(data){
    if(self.promiseState!=='pending'){
      return
    }

    self.promiseState='fulfilled'
    self.promiseResult=data

    setTimeout(()=>{
      self.callbacks.forEach(item=>{
        item.OnResolved()
      })
    })
  }

  function reject(data){
    if(self.promiseState!=='pending'){
      return
    }

    self.promiseState='rejected'
    self.promiseResult=data

    setTimeout(()=>{
      self.callbacks.forEach(item=>{
        item.OnRejected()
      })
    })
  }

  try{
    executor(resolve,reject)
  }catch(e){
    reject(e)
  }
}