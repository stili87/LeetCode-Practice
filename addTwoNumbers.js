/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2, carry=0) {
    let newNode = new ListNode()
    if(!l1 && !l2 && !carry){
        return null
    }else if(!l1 && !l2 && carry > 0){
        newNode.val = carry
        newNode.next = null
        return newNode
    }
    
        
    if(l1 && l2){
        let total = carry + l1.val + l2.val
        let newCarry = Math.floor(total / 10)
        newNode.val = total % 10
        newNode.next = addTwoNumbers(l1.next, l2.next, newCarry)
    }else if(l1 && !l2){
        let total = carry + l1.val
        let newCarry = Math.floor(total / 10)
        newNode.val = total % 10
        newNode.next = addTwoNumbers(l1.next, l2, newCarry)
    }else if(!l1 && l2){        
        let total = carry + l2.val
        let newCarry = Math.floor(total / 10)
        newNode.val = total % 10
        newNode.next = addTwoNumbers(l1, l2.next, newCarry)
    }
    
return newNode    
    
    
    
};
