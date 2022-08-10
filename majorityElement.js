/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const numObj = {}
    for(let num of nums){
        numObj[num] ? numObj[num] = numObj[num] + 1 : numObj[num] = 1
    }
    
    for(let key in numObj){
        if(numObj[key] > nums.length / 2) return key
    }
};
