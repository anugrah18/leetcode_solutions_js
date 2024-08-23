// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    deleteDuplicates(head) {
        let curr = head;

        // Traverse the linked list
        while (curr !== null && curr.next !== null) {
            // If the current node's value is the same as the next node's value
            if (curr.val === curr.next.val) {
                // Skip the next node by pointing the current node's next to the node after the next
                curr.next = curr.next.next;
            } else {
                // Move to the next node
                curr = curr.next;
            }
        }

        // Return the modified list with duplicates removed
        return head;
    }
}

// Example usage:
const X = new Solution();
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(4);

head = X.deleteDuplicates(head);

// Print the modified list
while (head !== null) {
    console.log(head.val);
    head = head.next;
}

// Time Complexity = O(N)
// Space Complexity = O(1)
