/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    // Space Inefficent O(n) time and space
    // while(head){
    //     if(head.vis) return true 
    //     head.vis = true
    //     head = head.next
    // }
    // return false
    
    //Tortosie and hair cycle dectector. O(1) Space  O(n)time
    let slow = head
    let fast
    if(head && head.next && head.next.next){
        fast = head.next.next    
    }else {
        return false
    }
    
    while(slow){
        if(slow === fast) return true
        slow = slow.next
        if(fast.next && fast.next.next)
            {
            fast = fast.next.next        
            }else{
                return false
            }
    }
    
    return false
};
