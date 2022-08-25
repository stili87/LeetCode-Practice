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
 var minDepth = function(root) {
    if(!root) return 0
    let queue = [[root, 1]]
    while(queue.length > 0){
        let node = queue.pop()
        let [curr, level] = node
        if(curr.left === null && curr.right === null) return level
        if(curr.left) queue.unshift([curr.left, level + 1])
        if(curr.right) queue.unshift([curr.right, level + 1])
    }
    
}
