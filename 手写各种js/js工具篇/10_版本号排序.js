// 题目描述:有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。
// 现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']
const arr=['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
function versionSort(arr){
  return arr.sort((a,b)=>{
    let i=0
    const arr1=a.split('.')
    const arr2=b.split('.')

    while(true){
      const s1=arr1[i]
      const s2=arr2[i]
      i++
      if(s1===undefined||s2===undefined){
        return arr2.length-arr1.length
      }

      if(s1===s2) continue

      return s2-s1
    }
  })
}
console.log(versionSort(arr))

function compareVersion(version1,version2){
  version1=version1.split('.')
  version2=version2.split('.')

  const maxLen=Math.max(version1.length,version2.length)

  for(let i=0;i<maxLen;i++){
    const a=parseInt(version1[i]??0)
    const b=parseInt(version2[i]??0)
    if(a===b){
      i++
    }else if(a>b){
      return 1
    }else{
      return -1
    }
  }

  return 0
}

// sort函数的参数是一个函数，函数中有两个参数
// 第一个是后面的元素，第二个是前面的元素
// const arr=[1,2,3]
// arr.sort((a,b)=>{
//   console.log(a,b)//2 1   3 2
//   return a-b
// })