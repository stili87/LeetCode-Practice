var searchInsert = function(nums, target) {
    let mid = Math.floor((nums.length - 1) / 2)

    if(nums[mid] === target) return mid
    if(nums[mid] > target && nums[mid -1] < target) return mid
    
    if(nums[mid] > target) return searchInsert(nums.slice(0, mid), target)
    if(nums[mid] < target) return 1 + mid + searchInsert(nums.slice(mid + 1), target)

};
