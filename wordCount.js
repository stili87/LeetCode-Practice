function LetterCount(str) { 


    const wordArr = str.split(' ')
    const countArr = []
  
    wordArr.forEach((word) => {
        let memo = {}
  
        for(let i = 0; i < word.length; i++){
          if(memo[word[i]] !== undefined){
            memo[word[i]] = memo[word[i]] + 1
          } else {
            memo[word[i]] = 0
        }
      }
  
      let count = 0
      for(let key in memo){
        count += memo[key]
      }
      countArr.push(count)
      
  
    })
  
    let maxIdx = -1
    let maxDoubles = 0
  
    for(let i = 0; i < countArr.length; i++){
      
      if(countArr[i] > maxDoubles){
        maxDoubles = countArr[i]
        maxIdx = i
      }
    }
  
    if(maxDoubles === 0) return -1
  
    return wordArr[maxIdx]
}
