function listToTree(data){
  const hashMap={}
  const res=[]

  data.forEach(item=>{
    const {id,pid}=item

    // 不存在时，先声明children树形
    if(!hashMap[id]){
      hashMap[id]={
        children:[]
      }
    }

    hashMap[id]={
      ...item,
      children:hashMap[id].children
    }

    // 处理当前的Item
    const treeItem=hashMap[id]

    // 根节点，直接push
    if(pid===0){
      res.push(treeItem)
    }else{
      // 也有可能当前节点的父节点还没有加入hashMap,单独处理
      if(!hashMap[pid]){
        hashMap[pid]={
          children:[]
        }
      }

      // 非根节点找到父节点
      hashMap[pid].children.push(treeItem)
    }
  })
  return res
} 

const data = [
  // 注意这里，专门把pid为1的元素放一个在前面
  { id: 2, name: '部门2', pid: 1 },
  { id: 1, name: '部门1', pid: 0 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 7, name: '部门7', pid: 6 },
]

console.log(JSON.stringify(listToTree(data), null, 2))
