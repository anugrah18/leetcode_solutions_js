class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    reorderList(head) {
        if (!head) return;

        // Find the middle of the linked list
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reverse the second part of the list in-place
        let prev = null;
        let curr = slow;
        while (curr) {
            let nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }

        // Merge the two halves of the list
        let first = head;
        let second = prev;

        while (second.next) {
            let temp1 = first.next;
            first.next = second;
            first = temp1;

            let temp2 = second.next;
            second.next = first;
            second = temp2;
        }
    }
}

// Example usage:
const X = new Solution();
let Node = new ListNode();
Node.next = new ListNode(1);
Node.next.next = new ListNode(2);
Node.next.next.next = new ListNode(3);
Node.next.next.next.next = new ListNode(4);

let ans = Node.next;
X.reorderList(ans);

while (ans) {
    console.log(ans.val);
    ans = ans.next;
}

// Time Complexity : O(N)
// Space Complexity : O(1)
