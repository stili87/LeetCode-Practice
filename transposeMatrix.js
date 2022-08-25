/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    let newMat = []
    for(let i = 0; i < matrix[0].length; i++){
        newMat.push([])
    }
    
    let rowIdx = 0
    let colIdx = 0
    
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++ ){
            newMat[col][row] = matrix[row][col]
        }
    }
    
    
    
    return newMat
    
};
