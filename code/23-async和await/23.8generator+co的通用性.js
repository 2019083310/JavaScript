function promise1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('1');
    }, 1000);
  });
}

function promise2(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('value:' + value);
    }, 1000);
  });
}

function* readFile() {
  const value = yield promise1();
  const result = yield promise2(value);
  return result;
}

function co(gen){
  return new Promise((resolve,reject)=>{
    const g=gen()
    function next(param){
      const {value,done}=g.next(param)
      if(!done){
        Promise.resolve(value).then(res=>next(res))
      }else{
        resolve(value)
      }
    }

    next()
  })
}

co(readFile).then(res=>console.log(res))