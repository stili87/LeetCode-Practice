/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    let res = []
    for(let i = 0; i < nums.length; i++){
        let curr = Math.abs(nums[i])
        if(nums[curr - 1] < 0) res.push(curr)
        nums[curr - 1] = -Math.abs(nums[curr - 1])
    }
    
    return res
};
