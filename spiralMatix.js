/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let elementCount = matrix.length * matrix[0].length
    if(elementCount < 2) return matrix[0]
    let endWidth = matrix[0].length - 1
    let endHeight = matrix.length - 1
    let startWidth = 0
    let startHeight = 0
    let res = []
    
    
     while(elementCount > 0){
        
        for(let i = startWidth; i <= endWidth; i++){
            res.push(matrix[startHeight][i])
            elementCount--
        }
        
        startHeight++
        if(elementCount > 0){
            for (let j = startHeight; j <= endHeight; j++){
                res.push(matrix[j][endWidth])
                elementCount--
        }}
        endWidth--
        
        if(elementCount > 0){
            for(let k = endWidth; k >= startWidth; k--){
                res.push(matrix[endHeight][k])
                elementCount--
            }
        }
        endHeight--
        
        if(elementCount > 0){
           for(let l = endHeight; l >= startHeight; l--){
                res.push(matrix[l][startWidth])
                elementCount--
            }
            
        }
        
        startWidth++
        
     }    
    return res
};
