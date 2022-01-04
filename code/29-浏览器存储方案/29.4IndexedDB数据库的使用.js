// 1.连接IndexedDB数据库
const dbRequest = indexedDB.open('liu') //liu是数据库的名字
console.log(dbRequest)

let db = null
dbRequest.onerror = function () {
  console.log('打开数据库失败')
}

dbRequest.onsuccess = function (event) {
  console.log(event)
  db = event.target.result
}

// 第一次打开，或者版本升级
dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result

  console.log(db)

  // 创建一些存储对象
  db.createObjectStore('users', {
    keyPath: "id"
  })
}

class User {
  constructor(id, name, age) {
    this.id = id
    this.name = name
    this.age = age
  }
}

const users = [
  new User(100, 'liu', 21),
  new User(101, 'kobe', 40),
  new User(102, 'james', 30)
]

const btns = document.querySelectorAll('button')
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    // 创建事务对象
    const transaction=db.transaction('users','readwrite')
    console.log(transaction)
    const store=transaction.objectStore('users')

    switch (i) {
      case 0:
        console.log('点击添加新增')
        for(const user of users){
          const addRequest=store.add(user)
          // console.log(addRequest)
          addRequest.onsuccess=function(){
            console.log(`${user.name}添加成功`)
          }
          transaction.oncomplete=function(){
            console.log('添加操作全部完成')
          }
        }
        break
      case 1:
        console.log('点击查询')
        // 1.查询方式一（知道主键，根据主键查询）
        // const queryRequest=store.get(102)
        // queryRequest.onsuccess=function(event){
        //   console.log(event.target.result)
        // }
        // 2.查询方式二:
        const queryRequest=store.openCursor()
        queryRequest.onsuccess=function(event){
          const cursor=event.target.result
          console.log(cursor)
          if(cursor){
            if(cursor.key===102){
              console.log(cursor.key,cursor.value)
            }else{
              cursor.continue()
            }
          }else{
            console.log('查询完成')
          }
        }
        break
      case 2:
        console.log('点击修改数据')
        const updateRequest = store.openCursor()
        updateRequest.onsuccess = function(event) {
          const cursor = event.target.result
          if (cursor) {
            if (cursor.key === 101) {
              const value = cursor.value;
              value.name = "curry"
              cursor.update(value)
            } else {
              cursor.continue()
            }
          } else {
            console.log("查询完成")
          }
        }
        break
      case 3:
        console.log('点击删除数据')
        const deleteRequest=store.openCursor()
        deleteRequest.onsuccess=function(event){
          const cursor=event.target.result
          if(cursor){
            if(cursor.key===101){
              cursor.delete()
            }else{
              cursor.continue()
            }
          }else{
            console.log('查询完成')
          }
        }
        break
    }
  }
}