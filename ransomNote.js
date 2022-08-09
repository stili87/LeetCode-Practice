/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    const magObj = {}
    for(let i = 0; i < magazine.length; i++){
        if(magObj[magazine[i]]) magObj[magazine[i]] = magObj[magazine[i]] + 1
        else magObj[magazine[i]] = 1
    }
    
    for(let j = 0; j < ransomNote.length; j++){
        if(magObj[ransomNote[j]]) {
            magObj[ransomNote[j]] = magObj[ransomNote[j]] -1
            if (magObj[ransomNote[j]] < 0 ) return false
        }else {
            return false
        }
    }
    return true
};
