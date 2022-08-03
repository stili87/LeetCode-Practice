var floodFill = function(image, sr, sc, color) {

    const findNeighbors = (node, image) =>  {
        const [row, col] = node
        const neighbors = [
        [row - 1, col],  // top
        [row + 1, col],  // bottom
        [row, col - 1],  // left
        [row, col + 1],  // right
        ]
        const currentColor = image[row][col]
        
        const validNeighbors = neighbors.filter(neighbor => {
            const [nRow, nCol] = neighbor
            if(image[nRow] && image[nRow][nCol] === currentColor) return neighbor
        })
        
        return validNeighbors
    }
    
    
    const visited = new Set()
    const stack = [[sr,sc]]
   
    
    while(stack.length){
        const currentNode = stack.pop()
        visited.add(currentNode.toString())
        const [currentRow, currentCol] = currentNode

        if(!(image[currentRow][currentCol] === color)){
            const neighbors = findNeighbors(currentNode, image)
            image[currentRow][currentCol] = color
            for(const neighbor of neighbors){
                const neighborStr = neighbor.toString()
                if(!visited.has(neighborStr)){
                    stack.push(neighbor)
                }
            }
        }
    }
    return image
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))
