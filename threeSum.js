function ThreeSum(arr) { 

    let total = arr[0]
    let memo = {}
    
    for(let i = 1; i < arr.length; i++){
      if(memo[arr[i]] != undefined  ) {
        memo[arr[i]] = memo[arr[i]] + 1
      }else {
        memo[arr[i]] = 1
      }
    }
    
    const newArr = []
    
    for(let j = 1; j < arr.length; j++){
      newArr.push(total - arr[j])
    }
    
    for(let k = 0; k < newArr.length; k++){
      let target = newArr[k]
      for(let keys in memo){
        let subTarget = target - keys
        if(memo[subTarget]) return true
      }
    }
    
    return false
}
