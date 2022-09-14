function updateTimes(signalOne, signalTwo) {
    // Write your code here
    console.log(signalOne)
    console.log(signalTwo)
    let count = 0
    let max = -Infinity
    for(let i =0; i < signalOne.length; i++){
        if(signalOne[i] === signalTwo[i] && signalTwo[i] > max){
            max = signalTwo[i]
            count++
        } 
    }
    
    return count

}
