/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    if(!intervals.length) return [newInterval]
    
    const isOverLap = (i1, i2) => {
        if(i2[0] >= i1[0] && i2[0] <= i1[1]) return true  // [1,3] & [2,5]
        if(i2[1] >= i1[0] && i2[1] <= i1[1]) return true // [2,5] & [4,10]
        if(i2[0] <= i1[0] && i2[1] >= i1[1]) return true // [6,9] & [5,10]
     }

    //if interval fits at the beginning
    if(newInterval[1] < intervals[0][1]  && !(isOverLap(newInterval, intervals[0]))){
        intervals.unshift(newInterval)
        return intervals
        //if interval fits in the end
    }else if(newInterval[0] > intervals[intervals.length - 1][1]  && !(isOverLap(newInterval, intervals[0]))){
        intervals.push(newInterval)
        return intervals
    }
    let idx = 0
    let newIntervals = []
    let overLapStart = false
    
    while(intervals[idx] !== undefined){
        // if no over lap and newInterval fits between two distinct intervals
        if(intervals[idx + 1] && (intervals[idx][1] < newInterval[0] && intervals[idx + 1][0] > newInterval[1])){
           newIntervals.push(intervals[idx])
           newIntervals.push(newInterval)
            idx += 1
           }
        // if overlap, push in only the overlapping interval, reset the new Interval to the one we just created, move to next index
        else if(isOverLap(intervals[idx], newInterval)){
            newInterval = [Math.min(intervals[idx][0], newInterval[0]), Math.max(intervals[idx][1], newInterval[1])]
            overLapStart = true
            idx++
        }
        // if no overlap and it does not fit between
        else{
            if(overLapStart){
                newIntervals.push(newInterval)
                overLapStart = false
            }
               newIntervals.push(intervals[idx])
               idx++
           }
        
    }
    
    if(overLapStart){
        newIntervals.push(newInterval)
        return newIntervals
    }
    return newIntervals
    
};
