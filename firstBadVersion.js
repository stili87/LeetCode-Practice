/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 0
        let right = n
        
        while (true){
            let currentMid = Math.round((left + right) /2)
            let midBool = isBadVersion(currentMid)
            let prevMidBool = isBadVersion(currentMid-1)
            
            if(midBool && !prevMidBool) return currentMid
            
            if(!midBool && !prevMidBool){
                left = currentMid    
            }else{
                right = currentMid
            }

        }
        
    };
};
