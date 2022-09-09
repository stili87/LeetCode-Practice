/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let res = []
    let mIdx = 0
    let nIdx = 0
    
    while(mIdx < m || nIdx < n){
        
        if(mIdx < m && nIdx < n){
            if(nums1[mIdx] < nums2[nIdx]){
                res.push(nums1[mIdx])
                mIdx++
            }else{
                res.push(nums2[nIdx])
                nIdx++
            }
            
        }else if(nIdx >= n){
            res.push(nums1[mIdx])
            mIdx++
            
        }else{
            res.push(nums2[nIdx])
            nIdx++
            
        }
        
    }
    for(let i = 0; i < res.length; i++){
        nums1[i] = res[i]
    }
    
};
