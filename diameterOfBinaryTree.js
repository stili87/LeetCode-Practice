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
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    let max = 0
    
    let getDepth = (root) => {
        if (!root) return 0
        let left = getDepth(root.left)
        let right = getDepth(root.right)
        max = Math.max(left + right, max)
        return Math.max(left, right) + 1
    }
    getDepth(root)
    
    return max
    
    
};
