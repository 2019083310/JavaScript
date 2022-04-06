// 一行代码解决
function getAllElements(){
  const result=[...new Set([...document.querySelectorAll('*')].map(el=>el.tagName))]
  console.log(result)

  return result.length

}
getAllElements()