/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let hash = {}
    
    for(let i = 0; i < nums.length; i++){
        let lookingFor = target - nums[i]
        if (lookingFor in hash){
            return [hash[lookingFor], i]
        }else {
            hash[nums[i]] = i
        }
    }
};
