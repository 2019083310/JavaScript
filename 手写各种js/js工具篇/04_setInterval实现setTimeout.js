const mySetTimeout = (fn, time) => {
  const timer = setInterval(() => {
    clearInterval(timer);
    fn();
  }, time);
};
mySetTimeout(()=>{
  console.log(1);
},1000)