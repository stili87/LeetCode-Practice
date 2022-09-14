function strokesRequired(picture) {
    // Write your code here
    let visited = new Set()
    let count = 0 
    
    const findNeighbors = (node, value) => {
        let [row, col] = node
        let neighbors = [
            [row +1, col],
            [row -1, col],
            [row, col +1],
            [row, col -1],
        ]
        
        return neighbors.filter(neigh => {
            let [nRow, nCol] = neigh
            if(picture[nRow] && picture[nRow][nCol] === value) return true
        })
    }
    
    
    const floodFill = node => {
        let [row, col] = node
        let value = picture[row][col]
        let stack = [node]
        
        
        while(stack.length){
            let newNode = stack.pop()
            visited.add(newNode.toString())
            let neighbors = findNeighbors(newNode, value)
            neighbors.forEach(neigh => {
                if(!visited.has(neigh.toString())) stack.push(neigh)
            })
        }
        
        
        
    }
    
    
    for(let row = 0; row < picture.length; row++){
        for(let col = 0; col < picture[0].length; col++){
            let node = [row, col]
            if(!visited.has(node.toString())){
                floodFill(node)
                count++
            }
        }
    }
    return count
}
