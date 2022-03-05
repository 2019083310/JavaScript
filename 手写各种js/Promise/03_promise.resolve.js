LyPromise.resolve=function(data){
  return new LyPromise((resolve,reject)=>{
    if(data instanceof LyPromise){
      data.then(v=>{
        resolve(v)
      },err=>{
        reject(err)
      })
    }else{
      resolve(data)
    }
  })
}