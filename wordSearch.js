/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    
    const traverse = (row, col, wordIdx) => {
        if(board[row][col] !== word[wordIdx]) return false
        if(wordIdx === word.length - 1) return true
        let temp = board[row][col]
        board[row][col] = 0
            
        let up = false
        let down = false
        let left = false
        let right = false
        
        if(board[row-1]) up = traverse(row -1, col, wordIdx + 1)
        if(board[row+1]) down = traverse(row +1, col, wordIdx + 1)
        if(board[row][col + 1]) right = traverse(row, col + 1, wordIdx + 1)
        if(board[row][col - 1]) left = traverse(row, col - 1, wordIdx + 1)
        
        board[row][col] = temp
        
        return up || down || left || right
        
    }
    
    
    for(let row = 0; row < board.length; row++){
        for (let col = 0; col < board[0].length; col++){
            let exists = traverse(row, col, 0)
            if(exists) return true
        }
    }
    
    return false
    
};
