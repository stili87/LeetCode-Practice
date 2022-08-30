/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
    // find all 0s and put them in a queue
    // emenate out from the 0s marking things around them as 1s then if those 1s have non 0 and non visited neighbors, mark as 2 etc
    let visited = new Set()
    let queue = []
    for(let row = 0; row < mat.length; row++){
        for(let col = 0; col < mat[0].length; col++)
            if(mat[row][col] === 0) {
                visited.add([row, col].toString())
                queue.push([row, col, 0])
            }
    }
    
    
    const findNeighbors = (row, col) => {
        const neighbors = [
            [row -1, col],
            [row +1, col],
            [row, col + 1],
            [row, col - 1]
        ]
        return neighbors.filter(neighbor => {
            const [nRow, nCol] = neighbor
            if(mat[nRow] && mat[nRow][nCol] === 1 && !visited.has([nRow, nCol].toString())){
                visited.add([nRow, nCol].toString())
                return true
            }
        })
    }
    
    
    while(queue.length){
        const curr = queue.shift()
        const [cRow, cCol, level] = curr
        mat[cRow][cCol] = level
        const neighbors = findNeighbors(cRow, cCol)    
        neighbors.forEach(neighbor => {
            neighbor.push(level + 1)
            queue.push(neighbor)
        })
        
    }
    
    return mat
};
