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
        let left = 1 + getDepth(root.left)
        let right = 1 + getDepth(root.right)
        return Math.max(left, right)
    }

    let dfs = root => {
        if(!root) return 
        let leftDepth = getDepth(root.left)
        let rightDepth = getDepth(root.right)
        max = Math.max(leftDepth + rightDepth, max)
        dfs(root.left)
        dfs(root.right)
    }
    
    dfs(root)
    
    return max
    
    
};
