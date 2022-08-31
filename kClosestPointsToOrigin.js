/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    
    const findDistance = (x,y) => {
        return Math.sqrt( (x - 0)**2 + (y - 0)**2)
    }
    
    points.sort((a, b) => {
      return findDistance(a[0], a[1]) - findDistance(b[0], b[1])
    })
    
    return points.slice(0,k)
    
    
    
};
