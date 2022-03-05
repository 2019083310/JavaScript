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