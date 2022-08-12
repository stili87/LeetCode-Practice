/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let sum = 0
    let i = 0
    while(i < s.length){
        if(s[i] + s[i + 1]  === 'IV'){
            sum += 4
            i+= 2
        }else if (s[i] + s[i + 1]  === 'IX'){
            sum += 9
            i+= 2
        }else if (s[i] + s[i + 1]  === 'XL'){
            sum += 40
            i+= 2
        }else if (s[i] + s[i + 1]  === 'XC'){
            sum += 90
            i+= 2
        }else if (s[i] + s[i + 1]  === 'CD'){
            sum += 400
            i+= 2
        }else if (s[i] + s[i + 1]  === 'CM'){
            sum += 900
            i+= 2
        }else if (s[i] === 'I'){
            sum += 1
            i+= 1
        }else if (s[i] === 'V'){
            sum += 5
            i+= 1
        }else if (s[i] === 'X'){
            sum += 10
            i+= 1
        }else if (s[i] === 'L'){
            sum += 50
            i+= 1
        }else if (s[i] === 'C'){
            sum += 100
            i+= 1
        }else if (s[i] === 'D'){
            sum += 500
            i+= 1
        }else if (s[i] === 'M'){
            sum += 1000
            i+= 1
        }
    }
    
    return sum
    
};
