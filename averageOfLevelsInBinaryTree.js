/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
    let res = []
    
    
    let levelCheck = nodes => {
        if(nodes.length < 1) return 
        let avg = 0 
        nodes.forEach(node => avg += node.val)
        avg /= nodes.length
        res.push(avg)
        let nextLevel = []
        nodes.forEach(node => {
            if(node.right) nextLevel.push(node.right)
            if(node.left) nextLevel.push(node.left)
        })
        levelCheck(nextLevel)
    }
    
    
    
    levelCheck([root])
    
    return res
};
