class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        ListNode curr = head;
        ListNode tail = null;
        ListNode tmp = null;
        while(curr.next != null){
            tmp = curr;
            curr = curr.next;
        }
        tail = curr;
          
        for(int i = 0; i < k; i++){
           tail.next = head;
           head = tail;
           tmp.next = null;
           tail = tmp;
        }

        return head;
    }
}
