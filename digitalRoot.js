const digitalRoot = num => {
    let currentNum = Math.abs(num)
    let result = 100
    while (result >= 10){
        let sum = 0 
        while (currentNum >= 10){
            sum += currentNum % 10
            currentNum = Math.floor(currentNum/10)
        }
        sum += currentNum
        result = sum
        if (result >= 10) currentNum = result
    }
    return result
}
function digitalRoot3(num) {
    return num < 10 ? num : digitalRoot(digitalRoot(Math.floor(num / 10)) + (num % 10));
  }

console.log(digitalRoot(234323432))
console.log(digitalRoot3(234323432))
