LyPromise.any=function(promises){
  return new Promise((resolve,reject)=>{
    let count=0
    for(let i=0;i<promises.length;i++){
      promises[i].then(v=>{
        resolve(v)
      },reason=>{
        count++
        if(count===promises.length){
          throw new Error('抛出异常')
        }
      })
    }
  })
}