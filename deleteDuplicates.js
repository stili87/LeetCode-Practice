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
 var deleteDuplicates = function(head) {
    let newDHead = new ListNode()
    let newCurr = newDHead
    let current = head
    let dups = new Set()
    while(current){
        if(dups.has(current.val)){
            current = current.next
            continue
        }
        dups.add(current.val)
        let next = new ListNode(current.val)
        newCurr.next = next
        newCurr = newCurr.next
        current = current.next
        
    }
    
    return newDHead.next
};
