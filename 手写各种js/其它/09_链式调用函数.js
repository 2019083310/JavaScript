// https://leetcode.cn/leetbook/read/didiglobal2/e76gah/
var Sub = function (initValue) {
  this.initValue = initValue ?? 0
  this.add = function (value) {
    if (typeof value !== 'number') {
      return this
    }

    this.initValue += value
    return this
  }

  this.getResult = function () {
    return this.initValue
  }
}