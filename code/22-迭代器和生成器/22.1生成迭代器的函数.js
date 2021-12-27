function createArrayIterator(arr) {
  let index = 0
  return {
    next() {
      if (index < arr.length) {
        return {
          done: 'false',
          value: arr[index++]
        }
      } else {
        return {
          done: 'true',
          value: undefined
        }
      }

    }
  }
}

const names = ["abc", "cba", "nba"]
const nums = [10, 22, 33, 12]

const namesIterator = createArrayIterator(names)
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())

const numsIterator = createArrayIterator(nums)
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())