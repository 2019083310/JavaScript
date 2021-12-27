LyPromise.race=function(promises){
  return new LyPromise((resolve,reject)=>{
    for(let i=0;i<promises.length;i++){
      promises[i].then(v=>{
        resolve(v)
      },r=>{
        reject(r)
      })
    }
  })
}

LyPromise.any=function(promises){
  return new LyPromise((resolve,reject)=>{
    let count=0
    for(let i=0;i<promises.length;i++){
      promises[i].then(v=>{
        resolve(v)
      },r=>{
        count++
        if(count===promises.length){
          return new TypeError('抛出异常!')
        }
      })
    }
  })
}