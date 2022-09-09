/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let count = 0
    let subtract = 1
    
    while(x > 0){
        count++
        x = x - subtract
        subtract += 2
    }
    
    if(x < 0) count--
    
    return count
};
