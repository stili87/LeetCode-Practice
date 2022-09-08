/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    const set = new Set(nums)
    
    let longest = 0
    
    for (let num of set){
        if(!set.has(num -1)){
            let thisStreak = 1
        
        while(set.has(num + 1)){
            thisStreak++
            num+=1
        }
        longest = Math.max(thisStreak, longest)    
        }
            
        
    }

    return longest
    
};
