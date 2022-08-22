/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let slow = head
    let fast
    if(head.next){
        fast = head.next
    }else{
        return head
    }
     
     while(fast){
         slow = slow.next
         if(fast.next && fast.next.next){
         fast = fast.next.next    
         }else{
             break
         }
 
     }
     
     return slow
 };
