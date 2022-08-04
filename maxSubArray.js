/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let sum = -Infinity
    let windowSum = 0
    
    for(let i = 0; i< nums.length; i++){
        windowSum += nums[i]
        sum = Math.max(windowSum, nums[i], sum)
        windowSum = Math.max(windowSum, nums[i])
    }
     return sum

 };
