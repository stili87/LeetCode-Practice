/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
 var construct2DArray = function(original, m, n) {
    if(original.length !== m * n) return []
    let mat = []
    for(let i = 0; i < m; i++){
        mat.push([])
    }
    
    let colTrack = 0
    let rowTrack = 0
    
    for(let j = 0; j < original.length; j++){
        let ele = original[j]
        
        mat[rowTrack][colTrack] = ele
        colTrack++
        
        if(colTrack >= n){
            colTrack = 0
            rowTrack++
        }

    }
    
    return mat
};
