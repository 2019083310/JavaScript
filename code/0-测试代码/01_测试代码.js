// 你不知道的JavaScript
function foo(el) {
  console.log(el,this.id)
}

var obj = {
  id:'awesome'
}

var nums = [1,2,3]
nums.forEach(foo,obj)


// splice方法
// 1.删除操作
const arr=[1,2,3,4,5]
arr.splice(0,1)
console.log(arr)

// 2.插值操作
arr.splice(0,0,1)
console.log(arr)

arr.splice(0,0,1,2)
console.log(arr)

// 3.修改操作
arr.splice(0,1,3)
console.log(arr)

//事件循环
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

//process是node中的一个对象，浏览器中没有
process.nextTick(function() {
  console.log('6');
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})

//1-->7-->6-->8-->2-->4-->3-->5-->9--11-->10-->12

