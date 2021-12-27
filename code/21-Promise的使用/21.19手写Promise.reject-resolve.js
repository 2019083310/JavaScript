LyPromise.resolve=function(value){
  return new LyPromise((resolve,reject)=>{
    if(value instanceof Promise){
      value.then(v=>{
        resolve(v)
      },r=>{
        reject(r)
      })
    }else{
      resolve(value)
    }
  })
}

LyPromise.reject=function(reason){
  return new LyPromise((resolve,reject)=>{
    reject(reason)
  })
}