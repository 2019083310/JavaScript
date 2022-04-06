// 主要适用于创建一个对象，提供一个创建对象的接口

// 如果你不想让某个子系统和交大的那个对象有很强的耦合，而是想从许多子系统中进行挑选的话

class Product{
  constructor(name){
    this.name=name
  }

  init(){
    console.log('init')
  }

  fun(){
    console.log('fun')
  }
}

class Factory{
  constructor(){}

  create(name){
    return new Product(name)
  }
}
