// 定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象状态改变就会通知
// 所有观察者对象，使他们自动更新自己

// 场景:Vue的响应式  DOM事件


// 发布订阅模式：有三个角色：发布者(publisher)，订阅者(subscribe)，事件调度中心(eventBus)
// 发布者通过事件调度中心提供的emit方法发布事件，而订阅者通过事件调度中心提供的on方法订阅事件
// 发布者和订阅者是互不关心的，耦合度很低，谁也不关心谁
// 发布者只管发布事件，不管有没有订阅者
// 订阅者只管订阅事件，不管有没有发布者，只要发布了，就触发事件执行
// 因此，很灵活被用来用作事件总线EventBus

// 观察者模式:只有两个角色。观察者(Observer)、目标对象(Subject)
// 观察者实现update方法，共目标对象调用。update方法可以执行自定义的逻辑
// 目标对象的职能单一，需要维护自己的观察者数组，当自身发生变化，
// 调用自身的notify方法，通知所有观察者执行update方法

class Subject{
  constructor(){
    this.observers=[]
  }

  // 添加事件
  add(observer){
    this.observers.push(observer)
    this.observers=[...new Set(this.observers)]
  }

  // 更新事件
  notify(...args){
    this.observers.forEach(observer=>observer.update(...args))
  }

  // 删除事件
  remove(observer){
    let observers=this.observers
    for(let i=0,len=observers.length;i<len;i++){
      if(observers[i]===observer){
        observers.splice(i,1)
      }
    }
  }
}

class Observer{
  constructor(){}
  update(...args){
    console.log(...args)
  }
}

// 创建观察者
const observer1=new Observer()
const observer2=new Observer()

// 创建目标对象
const sub=new Subject()

// 添加观察者
sub.add(observer1)
sub.add(observer2)

sub.notify('你好啊,李银河')
