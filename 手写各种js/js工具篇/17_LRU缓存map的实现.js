// LRU指的是最近优先缓存
// 当我们考虑内存优先的时候，LRU缓存就很重要了
// 特点:1-有序  2-哈希表存储：map(这里就别用数组和set了，它们两个get/set的速度很慢)

class LRUCache{
  constructor(length){
    this.length=length
    this.data=new Map()
  }

  get(key){
    const data=this.data

    const value=data.get(key)

    if(value){
      data.delete(key)
      data.set(key,value)
    }

    return value??null
  }

  set(key,value){
    const data=this.data

    if(data.has(key)){
      data.delete(key)
    }
    data.set(key,value)

    if(data.size>this.length){
      data.delete(data.keys().next().value)
    }
  }
}

const cache=new LRUCache(2)

cache.set(0,1)
cache.set(1,2)
console.log(cache.get(0))
cache.set(2,3)
console.log(cache.get(1))
cache.set(3,4)
console.log(cache.get(0))