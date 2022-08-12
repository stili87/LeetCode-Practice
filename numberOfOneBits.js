/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    if(n === 1) return 1
    if (n === 0) return 0
    
    if(n % 2 === 0){
        return hammingWeight(n/2)
    }else{
        return 1 + hammingWeight(Math.floor(n/2))
    }
    
};
