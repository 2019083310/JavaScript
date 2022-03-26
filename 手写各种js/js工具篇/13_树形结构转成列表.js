//广度优先遍历
// 队列实现 
function treeToList(data){
  const res=[]
  const queue=[...data]
  
  while(queue.length){
    // 取出前面的节点
    const node=queue.shift()
    const children=node.children

    if(children.length){
      queue.push(...children)
    }
    // 删除多余的children
    delete node.children

    res.push(node)
  }

  return res
}

// 深度优先遍历
function treeToList2(data){
  const res=[]
  const dfs=(tree)=>{
    tree.forEach(item=>{
      if(item.children){
        dfs(item.children)
        delete item.children
      }
      res.push(item) 
    })
  }
  dfs(data)
  return res
}
console.log(treeToList2(data))
const data = [
  {
    "id": 1,
    "name": "部门1",
    "pid": 0,
    "children": [
      {
        "id": 2,
        "name": "部门2",
        "pid": 1,
        "children": []
      },
      {
        "id": 3,
        "name": "部门3",
        "pid": 1,
        "children": [
          {
            "id": 4,
            "name": "部门4",
            "pid": 3,
            "children": [
              {
                "id": 5,
                "name": "部门5",
                "pid": 4,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
]
console.log(treeToList(data))