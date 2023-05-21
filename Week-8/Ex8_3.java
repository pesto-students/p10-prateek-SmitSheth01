class ListNode {
       int val;
         ListNode next;
         ListNode() {}
         ListNode(int val) { this.val = val; }
         ListNode(int val, ListNode next) { this.val = val; this.next = next; }
     }


 class Solution {
    public boolean hasCycle(ListNode head) {
        
        if(head == null){
            return false;
        }
        ListNode curr = head.next;
        ListNode temp = head;
        
        
        while(curr != null && curr.next != null){
            curr = curr.next.next;
            temp = temp.next;
            if(curr == temp){
               return true;
            }
        }
        return false;
    }
}