class LyStorage {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
  }

  setItem(key, value) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getItem(key) {
    let value=this.storage.getItem(key)
    if(value){
      value=JSON.parse(value)
    }
    return value
  }

  clear(){
    this.storage.clear()
  }

  removeItem(key){
    this.storage.removeItem(key)
  }

  key(index){
    return this.storage.key(index)
  }

  length(){
    return this.storage.length
  }
}

const localCache=new LyStorage()
const sessionCache=new LyStorage(false)

export {
  localCache,
  sessionCache
}