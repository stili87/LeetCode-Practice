/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let record = {}
    for (let i = 0; i < nums.length; i++){
        if(record[nums[i]]) return true
        record[nums[i]] = true
    }
    
    return false
};
