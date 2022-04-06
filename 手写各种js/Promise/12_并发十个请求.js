// 同时发多个相同的请求，如果第一个请求成功，那么剩余的请求都不会发出，成功的结果作为剩余请求返回
// 如果第一个请求失败了，那么接着发编号为2的请求，如果请求成功，那么剩余的请求都不会发出，成功的结果作为剩余请求返回
// 如果第二个请求失败了，那么接着发编号为3的请求，如果请求成功，那么剩余的请求都不会发出，成功的结果作为剩余请求返回
// ...以此递推，直到遇到最坏的情况需要发送最后一个请求

// 并发： 一个接口请求还处于pending，短时间内就发送相同的请求

const cacheAsync=(promiseGenerator,symbol)=>{
  const cache=new Map()
  const never=Symbol()

  return async (params)=>{
    return new Promise((resolve,reject)=>{
      symbol=symbol||params

      let cacheCfg=cache.get(symbol)
      if(!cacheCfg){
        cacheCfg={
          hit:never,
          executor:[{resolve,reject}]
        }
      }else{
        // 命中缓存
        if(cacheCfg.hit!==never){
          return resolve(cacheCfg.hit)
        }

        cacheCfg.executor.push({resolve,reject})
      }

      const {executor}=cacheCfg

      // 处理并发，在请求还处于pending的状态的时候就发起相同的请求
      // 拿第一个请求
      if(executor.length===1){
        const next=async ()=>{
          try{
            if(!executor.length){
              return
            }
            const response=await promiseGenerator(params)
            // 如果成功了,那么直接resolve掉剩余的请求
            while(executor.length){
              // 清空
              executor.shift().resolve(response)
            }

            // 缓存结果
            cacheCfg.hit=response
          }catch(e){
            // 如果失败，那么这个promise的则为reject
            const {reject}=executor.shift()

            reject(e)
            next()//失败重试，降级为串行
          }
        }
        next()
      }
    })
  }

}
