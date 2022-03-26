function getFrequentChar(str) {
  const map = new Map()
  for (const s of str) {
    if (map.has(s)) {
      map.set(s, map.get(s) + 1)
    } else {
      map.set(s, 1)
    }
  }
  let res = 0
  let temp = res
  const result = []
  for (const item of map) {
    if (res === 0) {
      res = item[1]
      temp=res
      result.push(item)
    } else {
      res = item[1] > res ?item[1] : res
      if(temp!==res){
        result.pop()
        result.push(item,)
        temp=res
      }
    }
  }
  return result
}
getFrequentChar('hello world')