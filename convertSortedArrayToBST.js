/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    if(nums.length === 1){
        return new TreeNode(nums[0], null, null)
    }else if(nums.length === 0 ){
        return null
    }
    
    let midPoint = Math.floor(nums.length / 2)
    let head = new TreeNode(nums[midPoint], null, null)
    head.left = sortedArrayToBST(nums.slice(0, midPoint))
    head.right = sortedArrayToBST(nums.slice(midPoint + 1))
    
    
    
    return head
    
    
};
