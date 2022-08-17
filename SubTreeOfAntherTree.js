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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    if(!root) return false
      
    const isSubTreeHelp = (root, subRoot) => {
        if(!root && !subRoot) return true
        if(!root || !subRoot) return false
        
        if(root.val === subRoot.val){
            let leftSearch = isSubTreeHelp(root.left, subRoot.left)
            let rightSearch = isSubTreeHelp(root.right, subRoot.right)
            return leftSearch && rightSearch
        }
        
        return false
    }
    
    if(root.val === subRoot.val){
         let leftSearch = isSubTreeHelp(root.left, subRoot.left)
         let rightSearch = isSubTreeHelp(root.right, subRoot.right)
         if(leftSearch && rightSearch) return true
    }

    let leftCheck = isSubtree(root.left, subRoot)
    let rightCheck = isSubtree(root.right, subRoot)
        
    return leftCheck || rightCheck
    
    
};
