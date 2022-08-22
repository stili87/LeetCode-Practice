/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let newHead = new ListNode()
    let current = newHead
    
    while(list1 || list2){
        let list1Val 
        let list2Val 
        
        let next = new ListNode()
        if(list1){
            list1Val = list1.val
        }
        if(list2){
            list2Val = list2.val
        }
        
        if(list1 && list2){
            next.val = Math.min(list1Val, list2Val)
            if(list1Val < list2Val){
                list1 = list1.next
            }else{
                list2 = list2.next
            }
        } else if(list1 && !list2){
            next.val = list1Val   
            list1 = list1.next
        }else{
            next.val = list2Val    
            list2 = list2.next
        }

        current.next = next
        current = current.next

    }
     
     return newHead.next
}
