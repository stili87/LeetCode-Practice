function maxPathSum(board, p, q) {

    let pMemo = {}
    let qMemo = {}

    let findPScore = (p, board) => {
        let [pRow, pCol] = p
        if (!board[pRow] || !board[pRow][pCol]) return 0

        let score = board[pRow][pCol]

        let downRight = 0
        let downLeft = 0
        let down = 0

        if (pMemo[`${pRow + 1}, ${pCol + 1}`] && board[pRow + 1] && board[pRow+1][pCol+1]) {
            downRight = pMemo[[pRow + 1 + pCol + 1].toSting()]
        } else if(board[pRow + 1] && board[pRow+1][pCol+1]) {
            downRight = findPScore([pRow + 1, pCol + 1], board)
            pMemo[[pRow + 1, pCol + 1].toString()] = downRight
        }

        if (pMemo[[pRow + 1, pCol - 1].toString()]&& board[pRow + 1] && board[pRow+1][pCol-1]) {
            downLeft = pMemo[[pRow + 1, pCol - 1].toString()]
        } else if(board[pRow + 1] && board[pRow+1][pCol-1]) {
            downLeft = findPScore([pRow + 1, pCol - 1], board)
            pMemo[[pRow + 1, pCol - 1].toString()] = downLeft
        }
        
        if (pMemo[[pRow + 1, pCol].toString()] && board[pRow + 1] && board[pRow+1][pCol]) {
            down = pMemo[[pRow + 1, pCol].toString()]
        } else if(board[pRow + 1] && board[pRow+1][pCol]) {
            down = findPScore([pRow + 1, pCol], board)
            pMemo[[pRow + 1, pCol].toString()] = down
        }



        let best = Math.max(downRight, down, downLeft)
        return score + best

    }

    let findQScore = (q, board) => {
        let [qRow, qCol] = q
        if (!board[qRow] || !board[qRow][qCol]) return 0

        let score = board[qRow][qCol]

        let upRight = 0 
        let upLeft = 0 
        let up = 0

        if (qMemo[`${qRow - 1}, ${qCol + 1}`] && board[qRow-1] && board[qRow-1][qCol + 1]) {
            upRight = qMemo[[qRow - 1, qCol + 1].toSting()]
        } else if(board[qRow-1] && board[qRow-1][qCol + 1]){
            upRight = findQScore([qRow - 1, qCol + 1], board)
            qMemo[[qRow - 1, qCol + 1].toString()] = upRight
        }

        if (qMemo[[qRow - 1, qCol - 1].toString()] && board[qRow - 1] && board[qRow-1][qCol - 1]) {
            upLeft = qMemo[[qRow - 1, qCol - 1].toString()]
        } else if(board[qRow - 1] && board[qRow-1][qCol - 1]) {
            upLeft = findQScore([qRow - 1, qCol - 1], board)
            qMemo[[qRow - 1, qCol - 1].toString()] = upLeft
        }
        
        if (qMemo[[qRow - 1, qCol].toString()] && board[qRow - 1] && board[qRow-1][qCol]) {
            up = qMemo[[qRow - 1, qCol].toString()]
        } else if(board[qRow - 1] && board[qRow-1][qCol]) {
            up = findQScore([qRow - 1, qCol], board)
            qMemo[[qRow - 1, qCol].toString()] = up
        }



        let best = Math.max(upRight, upLeft, up)


        return score + best

    }
    
    
    let pScore = findPScore([0, p], board)
    let qScore = findQScore([board.length - 1, q], board)
    


    return Math.max(pScore, qScore)

}
