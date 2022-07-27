var search = function(nums, target) {
    if(!nums.length) return -1

    const midpoint = Math.floor(nums.length / 2 )
    if (nums[midpoint] === target){
        return midpoint
    }else if (nums[midpoint] > target){
        return search(nums.slice(0, midpoint), target)
    }else{
        let rightSearch = search(nums.slice(midpoint + 1, nums.length), target)
        if (rightSearch < 0) return -1
        return rightSearch + midpoint + 1
    }
};
