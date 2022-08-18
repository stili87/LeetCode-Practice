/*
 * Complete the 'collision' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY speed
 *  2. INTEGER pos
 */

function collision(speed, pos) {
    // Write your code here
    let cols = 0
    for(let i = 0; i< speed.length; i++){
        if(i === pos) continue
        if(i < pos && speed[i] > speed[pos]){
            cols++
        }else if( i > pos && speed[i] < speed[pos]){
              cols++
        } 
    }
    return cols
}
