// I needed help with this one understanding the proper way to make it work so i had to watch a video.

var subsets = function(nums) {
    let results = []
    let subset = []
    
    const dfs = i => {
        if (i >= nums.length){
            results.push(subset.slice())
            return
        }
        subset.push(nums[i])
        dfs(i+1)
        subset.pop()
        dfs(i+1)
    }

    dfs(0)
    return results
};


console.log(subsets([1,2,3]))
