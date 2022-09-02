/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length -1 
    while(left < right){
        let leftNum = numbers[left]
        let rightNum = numbers[right]
        let total = leftNum + rightNum
        if(total < target){
            left++
        }else if(total > target){
            right--
        }else if(total === target){
            return [left + 1, right + 1]
        }
    }
};
