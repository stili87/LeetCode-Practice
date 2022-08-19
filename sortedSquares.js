/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let left = 0
    let right = nums.length -1
    let res = []
    
    for(let i = nums.length -1; i > -1; i--){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            res[i] = nums[left] * nums[left]
            left++
        }else{
            res[i] = nums[right] * nums[right]
            right--
        }
    }
    
    return res
};
