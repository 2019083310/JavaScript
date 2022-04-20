// 1-根据LyPromise来写
LyPromise.all=function(arr){
  return new LyPromise((resolve,reject)=>{
    let count=0
    let result=[]

    for(let i=0;i<arr.length;i++){
      arr[i].then(v=>{
        count++
        result.push(v)
        if(count===arr.length){
          resolve(result)
        }
      },err=>{
        reject(err)
      })
    }
  })
}

// 2-根据Promise来写
Promise.LyAll=function(promises){
  return new Promise((resolve,reject)=>{
    let count=0
    let result=[]

    const len=promises.length
    promises.forEach((p,i)=>{
      Promise.resolve(p).then(res=>{
        count+=1
        result[i]=res

        if(count===len){
          resolve(result)
        }
      }).catch(reject)
    })
  })
}