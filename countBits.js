/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let ans = []
    let memo = {}
    
    for(let i = 0; i <= n; i++){
        if(memo[i]) {
            ans.push(memo[i])    
        }else{
            let bin = i.toString(2)
            let count = 0
            for(let j = 0; j < bin.length; j++){
                if(bin[j] === '1') count++
            }
            memo[i] = count
            ans.push(count)
        }
    }
    return ans
};
