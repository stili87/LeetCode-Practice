var climbStairs = function(n) {
    const memo = {1:1, 2:2}

    let climb = n => {
        if(n in memo) return memo[n]
        memo[n] = climb(n-1) + climb(n-2)
        return memo[n]
    }

    return climb(n)

    // if (n <=1) return 1

    // let prev1 = 1
    // let prev2 = 2

    // for(let i = 3; i <= n; i++ ){
    //     let newValue = prev1 + prev2
    //     prev1 = prev2
    //     prev2 = newValue
    // }

    // return prev2
    
};

console.log(climbStairs(45))
