/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    
    const merge = (arr1, arr2) => {
        results = []
        let left = 0
        let right = 0
        
        while(left < arr1.length || right < arr2.length){
            if(left === arr1.length){
                results.push(arr2[right])
                right++
            }else if(right === arr2.length){
                results.push(arr1[left])
                left++
            }else if(arr1[left] < arr2[right]){
                results.push(arr1[left])
                left++
            }else{
                results.push(arr2[right])
                right++
            }
            
        }
        
        return results
    }
    
        
        
        
        if(nums.length === 1 ) return nums
    
        //cut nums in half
        let leftHalf = nums.slice(0, Math.floor(nums.length / 2))
        let rightHalf = nums.slice(Math.floor(nums.length / 2), nums.length)
        //recursive sort
        leftHalf =  sortArray(leftHalf)
        rightHalf =  sortArray(rightHalf)
    
        return merge(leftHalf, rightHalf)
    };
