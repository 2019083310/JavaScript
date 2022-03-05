LyPromise.race=function(promises){
  return new LyPromise((resolve,reject)=>{
    for(let i=0;i<promises.length;i++){
      promises[i].then(v=>{
        resolve(v)
      },err=>{
        reject(err)
      })
    }
  })
}