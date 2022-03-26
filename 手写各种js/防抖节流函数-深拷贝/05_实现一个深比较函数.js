// 这种不能实现对{} {}空对象的判断
// 判断对象是否为空对象
console.log(Object.keys({}).length===0)//true  这种不严谨
console.log(Object.keys({})&&{}.constructor==='object')


function isEqual(x,y){
  if(x===y){
    return true
  }else if((typeof x==='object'&&x!==null)&&(typeof y==='object'&&y!==null)){
    const keysX=Object.keys(x)
    const keysY=Object.keys(y)
    if(keysX.length!==keysY.length){
      return false
    }
    for(const key of keysX){
      if(!isEqual(x[key],y[key])){
        return false
      }
    }
    return true
  }else{
    return false
  }
}

console.log(isEqual({},{}))
console.log(isEqual(1,'1'))
console.log(isEqual(1,1))
console.log(isEqual({name:'kobe'},{name:"coder"}))