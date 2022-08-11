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
    let length = 0
    let current  = head
    while(current){
        length++
        current = current.next
    }
    let limit = Math.floor(length / 2)
    let i = 0
    
    while(i <= limit){
        if( i === limit) return head
        head = head.next
        i++
    }
    
};
