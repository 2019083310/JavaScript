//对象字面量
var mrDeng = {
  name : "MrDeng",
  age : 40,
  sex : "male",
  health : 100,
  smoke : function () {
      console.log("I am smoking cool!!!")
      this.health --
  },
  drink : function () {
      console.log("I am drinking")
      this.health ++
  }
}

//Object构造函数--通过new Object()创建
var obj = new Object()
obj.name = "why"
obj.age = 18
obj.height = 1.88
obj.running = function() {
  console.log(this.name + "在跑步~")
}