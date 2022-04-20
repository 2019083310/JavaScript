/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 1-暴力
  // for(let i=0;i<nums.length;i++){
  //     if(nums[i]===nums[i+1]){
  //         nums.splice(i,1)
  //         i--
  //     }       
  // }
  // return nums.length
  // 2-双指针
  if (nums.length === 0 || nums.length === 1) {
    return nums.length
  }

  const len = nums.length

  let slow = 0
  let fast = 1
  while (fast < len) {
    if (nums[slow] !== nums[fast]) {
      nums[++slow] = nums[fast]
    }
    fast++
  }

  return slow + 1
};