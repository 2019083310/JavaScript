// 1.生成器来替代迭代器
function* createArrayIterator(arr) {
  // 第一种写法
  // for(let i=0;i<arr.length;i++){
  //   yield arr[i]
  // }

  // 第二种写法
  // for(let item of arr){
  //   yield item
  // }

  // 第三种写法
  // yield* arr

}

// const names=['abc','cba','nba']
// const namesIterator=createArrayIterator(names)

// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())

// 2.创建一个函数，这个函数可以迭代一个范围内的数字
//10 20
function* createRangeIterator(start, end) {
  let index = start
  while (index < end) {
    yield index++
  }

  // let index = start
  // return {
  //   next: function() {
  //     if (index < end) {
  //       return { done: false, value: index++ }
  //     } else {
  //       return { done: true, value: undefined }
  //     }
  //   }
  // }
}

// const rangeIterator = createRangeIterator(10, 20)
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())

// 3.class案例
class ClassRome{
  constructor(address,name,students){
    this.address=address
    this.name=name
    this.students=students
  }

  entry(newStudent){
    this.students.push(newStudent)
  }

  *[Symbol.iterator](){
    yield* this.students
  }
}

const classRome=new ClassRome('beijing','liu',['james','kobe','curry'])
for(let item of classRome){
  console.log(item)
}