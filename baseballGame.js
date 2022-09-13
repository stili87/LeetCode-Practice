/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    let record = []
    
    
    for(let i = 0; i < ops.length; i++){
        let op = ops[i]
        
        if(op === 'C'){
            record.pop()
        } else if(op === 'D'){
            record.push(record[record.length - 1] * 2)
        } else if(op === '+'){
            record.push(record[record.length - 1] + record[record.length - 2])
        } else{
            record.push(Number(op))
        }
        
    
    }
    let total = 0 
    record.forEach(num => total += num)
    
    return total
};
