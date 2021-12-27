//编写一个迭代器
const iterator={
  next(){
    return {done:'false',value:'abc'}
  }
}

//数组
const names=['abc','cba','nba']

let index=0
//创建一个数组迭代器
const namesIterator={
  next(){
    if(index<names.length){
      return {done:'false',value:names[index++]}
    }else{
      return {done:"true",value:undefined}
    }
  }
}

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())