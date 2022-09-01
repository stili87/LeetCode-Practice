/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    let height  = matrix.length
    let width = matrix[0].length
    let stack = []
    
    let changeNums = (row, col) =>{
        // change all the things in that row to a 0 and add to visited
        for(let nCol = 0; nCol < width; nCol++){
                matrix[row][nCol] = 0
        }
        // change all the things in that col to a 0 and add to visited
        for(let nRow = 0; nRow < height; nRow++){
                matrix[nRow][col] = 0

        }
    }
    
    
    for(let row = 0; row < height; row++){
        for(let col = 0; col < width; col++){
            
            if(matrix[row][col] === 0){
                stack.push([row,col])
            }
        }
    }
    
    for(let i = 0; i < stack.length; i++){
        let [row, col] = stack[i]
        changeNums(row,col)
    }

    return matrix
};
