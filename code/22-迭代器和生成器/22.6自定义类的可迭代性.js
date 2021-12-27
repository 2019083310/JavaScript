// 案例: 创建一个教室类, 创建出来的对象都是可迭代对象
class ClassRome{
  constructor(address,name,students){
    this.address=address
    this.name=name
    this.students=students
  }

  entry(newStudent){
    this.students.push(newStudent)
  }

  [Symbol.iterator](){
    let index=0
    return {
      next:()=>{
        if(index<this.students.length){
          return {done:false,value:this.students[index++]}
        }else{
          return {done:true,value:undefined}
        }
      },
      return:()=>{
        return {done:true,value:undefined}
      }
    }
  }
}

const classroom=new ClassRome('beijing','liu',['kobe','james','liu'])
classroom.entry('curry')

for(let item of classroom){
  console.log(item)
}