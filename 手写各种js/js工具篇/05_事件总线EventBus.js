// 事件总线eventBus实际上就是用来组件之间的通信
// 他是我们的观察者模式，也是发布订阅模式
// vue2把事件总线放在框架中实现,$on  $off  $once  $emit
// vue3废除了上面这些，通过第三方库来实现，比如mitt
class LyEventBus {
  constructor() {
    this.eventBus = {}
  }

  // 实现订阅
  on(eventName, eventCallback, thisArg) {
    if (typeof eventName !== 'string') {
      throw new Error('the event name must be string type')
    }

    if (typeof eventCallback !== 'function') {
      throw new Error('ths event callback must be function type')
    }

    let handlers = this.eventBus[eventName]
    if (!handlers) {
      handlers = []
      this.eventBus[eventName] = handlers
    }

    handlers.push({
      eventCallback,
      thisArg
    })
  }

  // 取消订阅
  off(eventName,eventCallback) {
    if(typeof eventName!=='string'){
      throw new Error('the event name must be string type')
    }

    if(typeof eventCallback!=='function'){
      throw new Error('ths event callback must be function type')
    }

    const handlers=this.eventBus[eventName]
    if(!handlers) return 
    const newHandlers=[...handlers]
    for(let i=0;i<newHandlers.length;i++){
      const handler=handlers[i]
      if(handler.eventCallback===eventCallback){
        const index=handlers.indexOf(handler)
        handlers.splice(index,1)
      }
    }
  }

  // 只触发一次
  once(eventName, eventCallback, thisArg) {
    if (typeof eventName !== 'string') {
      throw new Error('the event name must be string type')
    }

    if (typeof eventCallback !== 'function') {
      throw new Error('ths event callback must be function type')
    }

    const tempCallback=(...payLoad)=>{
      this.off(eventName,tempCallback)
      eventCallback.apply(thisArg,payLoad)
    }

    return this.on(eventName,tempCallback,thisArg)
  }

  // 触发订阅
  emit(eventName, ...payLoad) {
    if (typeof eventName !== 'string') {
      throw new Error('the event name must be string type')
    }

    const handlers = this.eventBus[eventName]
    if (!handlers) return
    handlers.forEach(handler => {
      handler.eventCallback.apply(handler.thisArg, payLoad)
    })
  }
}

const eventBus = new LyEventBus()

eventBus.on('coder', function (payLoad) {
  console.log(this,'coder',payLoad)
}, {
  name: 'coder'
})
eventBus.on('coder', function (payLoad) {
  console.log(this,'coder',payLoad)
}, {
  name: 'coder'
})

eventBus.emit('coder',123)