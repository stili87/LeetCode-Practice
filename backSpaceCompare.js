/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    let newS = ''
    let newT = ''
    
    for(let i = 0; i < s.length; i++){
        if(s[i] && s[i] !== '#'){
            newS += s[i]
        }else{
            newS = newS.slice(0, newS.length - 1)
        }
    }
    
    for(let j = 0; j < t.length; j++){
        if(t[j] && t[j] !== '#'){
            newT += t[j]
        }else{
            newT = newT.slice(0, newT.length - 1)
        }
    }
    
   
    return newS === newT
    
    
};
