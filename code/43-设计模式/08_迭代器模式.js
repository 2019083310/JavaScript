// 提供一种方法顺序一个对象的元素，而又不暴露该对象的内部表示

// 场景:es6的迭代器，forEach

class Iterator{
  constructor(container) {
    this.list=container.list
    this.index=0
  }

  next(){
    if(this.hasNext()){
      return this.list[this.index++]
    }

    return null
  }

  hasNext(){
    if(this.index>=this.list.length){
      return false
    }
    return true
  }
}

class Container{
  constructor(list){
    this.list=list
  }

  getIterator(){
    return new Iterator(this)
  }
}

const container=new Container([1,2,3,4,5])
const iterator=container.getIterator()
while(iterator.hasNext()){
  console.log(iterator.next())
}
