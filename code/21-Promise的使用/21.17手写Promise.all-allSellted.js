LyPromise.all=function(promises){
  return new LyPromise((resolve,reject)=>{
    let count=0
    let arr=[]

    for(let i=0;i<promises.length;i++){
      promises[i].then(v=>{
        count++
        arr[i]=v
        if(count===promises.length){
          resolve(arr)
        }
      },r=>{
        reject(r)
      })
    }
  })
}


LyPromise.allSettled=function(promises){
  return new LyPromise((resolve,reject)=>{
    let count=0
    let arr=[]
    for(let i=0;i<promises.length;i++){
      promises[i].then(v=>{
        arr[i]=v
        if(count===promises.length){
          resolve(arr)
        }
      },r=>{
        arr[i]=r
      })
    }
  })
}