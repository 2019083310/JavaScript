// 适配器模式：将一个类的接口转化为另外一个接口，以满足用户的需求
// 场景:Vue的computed和封装旧的接口

// 好处:可以让任何两个没有关联的类一起运行，提高了类的复用，适配对象，数据

class Plug{
  constructor(){

  }
  getName(){
    return 'iphone 充电头'
  }
}

class Target{
  constructor(){
    this.plug=new Plug()
  }

  getName(){
    return this.plug.getName()+'适配器Type-充电头'
  }
}

const target=new Target()
console.log(target.getName())