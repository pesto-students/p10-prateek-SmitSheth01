class ListNode {
    int val;
      ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
  }

class Ex_8_1 {
	
    public ListNode reverseList(ListNode head) {
           
           ListNode curr = head;
           ListNode pre = null;
           while(curr != null){
               ListNode tmp = curr.next;
               curr.next = pre;
               pre = curr;
               curr = tmp;
           }
           return pre;
           
        }
    }  