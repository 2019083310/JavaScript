var a=[0]
// if判断会有隐士的类型转换，对象类型都会返回true
if(a){//a/true
  // 这里做判断的时候，会做toString()的调用转为0而true为1
  console.log(a==true)//false
}else{
  console.log(a)
}

// ==会做隐士转换   ===不会做隐士转换
// 隐士转换规则
// 1.一边为true，转换为数值比较
// 2.一边为字符串，转换为数值比较
// 3.null==undefined
// 4.任何一个值和NaN比较都会返回false
// 5.一边是对象
//  5.1会先调用valueOf()方法
//  5.2在调用toString()方法比较,是数组就会调用数组的join()方法