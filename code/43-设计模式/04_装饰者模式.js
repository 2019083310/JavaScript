// 动态的给某个对象添加一些额外的职责，是另一种继承替代的方案

class cellPhone{
  create(){
    console.log('生成一个手机')
  }
}

class Decorator{
  constructor(cellphone){
    this.cellPhone=cellphone
  }

  create(){
    this.cellPhone.create()
    this.createShell(this.cellphone)
  }

  createShell(){
    console.log('生成手机壳')
  }
}
const cellphone=new cellPhone()
cellphone.create()

console.log('------')

const dec=new Decorator(cellphone)
dec.create()
