/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    let current = head
    let newDHead = new ListNode()
    let newCurr = newDHead
    
    while(current){
        if(current.val === val){
            current = current.next
            continue
        }
        let next = new ListNode(null)
        newCurr.next = next
        newCurr.next.val  = current.val
        newCurr = newCurr.next
        current = current.next
    }
    
    
    return newDHead.next
};
