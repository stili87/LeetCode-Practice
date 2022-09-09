/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let idx = digits.length - 1
    digits[idx] = digits[idx] + 1
    
    
    while(digits[idx] >= 10){
        if(idx === 0){
            digits[idx] = digits[idx] % 10
            digits.unshift(1)
            break
        }
        digits[idx - 1] = digits[idx - 1] + 1
        digits[idx] = digits[idx] % 10
        idx--
    }
    return digits
};
