class LyError{
  constructor(errCode,errMessage){
    this.errCode=errCode
    this.errMessage=errMessage
  }
}

function add(type){
  if(type===0){
    // 1.字符串
    // throw 'type不能为0'

    //2.number
    // throw 1111

    //3.对象
    // throw {errorMessage:'type不能为0'}

    //4.自定义类
    // throw new LyError(101,'type不能为0')

    //5.JavaScript内置类Error
    // throw new Error('type不能为0')

    // Error创建的对象中的属性
    // const err=new Error('type不能为0')
    // console.log(err.message)
    // console.log(err.name)
    // console.log(err.stack)

    // throw err

    // 6.Error的子类
    // throw new TypeError('type类型错误')
    // throw new RangeError('type边界错误')
    // throw new SyntaxError('type语法解析错误')
  }
}

add(0)
console.log(1111)