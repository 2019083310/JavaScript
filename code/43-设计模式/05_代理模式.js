// 为对象提供一种监听对象变化的接口

// 假设当A 在心情好的时候收到花，小明表白成功的几率有60%，
// 而当A 在心情差的时候收到花，小明表白的成功率无限趋近于0。
// 小明跟A 刚刚认识两天，还无法辨别A 什么时候心情好。如果不合时宜地把花送给A，
// 花被直接扔掉的可能性很大，这束花可是小明吃了7 天泡面换来的。
// 但是A 的朋友B 却很了解A，所以小明只管把花交给B，B 会监听A 的心情变化，然后选择A 心情好的时候把花转交给A，代码如下：

// 应用场景:HTML元素的事件代理、ES6的Proxy

function Flower() {}

const xiaoming = {
  sendFlower: function (target) {
    const flower = new Flower()
    target.receiveFlower(flower)
  }
}

const B = {
  receiveFlower: function (flower) {
    A.listenGoodMood(() => {
      A.receiveFlower(flower)
    })
  }
}

const A = {
  receiveFlower: function (flower) {
    console.log('收到花' + flower)
  },
  listenGoodMood: function (fn) {
    setTimeout(() => {
      fn()
    }, 1000)
  }
}

xiaoming.sendFlower(B)