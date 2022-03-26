// setTimeout的第三个参数，可以作为第一个参数的函数的参数

// 场景题:
for(var i=0;i<5;i++){
  setTimeout(()=>{
    console.log(i)
  },i*1000)
}//5 5 5 5 5 

// 改进输出：0 1 2 3 4
// 方法1：立即执行函数
for(var i=0;i<5;i++){
  (function (j){
    setTimeout(()=>{
      console.log(j);
    },j*1000)
  })(i)
}

// 方法2：setTimeout的第三个参数
for(var i=0;i<5;i++){
  setTimeout((j)=>{
    console.log(j)
  },i*1000,i)
}

// 方法3：let
for(let i=0;i<5;i++){
  setTimeout(()=>{
    console.log(i)
  },i*1000)
}
