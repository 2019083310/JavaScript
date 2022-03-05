LyPromise.reject=function(data){
  return new LyPromise((resolve,reject)=>{
    reject(data)
  })
}