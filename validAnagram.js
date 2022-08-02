var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    
    const firstObj = {}
    const secondObj = {}
    for(let i = 0; i < s.length; i++){
        if(!firstObj[s[i]]) firstObj[s[i]] = 1
        else firstObj[s[i]] = firstObj[s[i]] + 1
    }
    for(let j = 0; j < t.length; j++){
        if(!secondObj[t[j]]) secondObj[t[j]] = 1
        else secondObj[t[j]] = secondObj[t[j]] + 1
    }
    
    for(let key in firstObj){
        if(firstObj[key] !== secondObj[key]) return false
    }
    
    return true
    
};
