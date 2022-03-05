LyPromise.allSettled=function(promises){
  return new LyPromise((resolve,reject)=>{
    let result=[]
    for(let i=0;i<promises.length;i++){
      promises[i].then(v=>{
        result.push(v)
      },reason=>{
        result.push(reason)
      })
    }

    resolve(result)
  })
}