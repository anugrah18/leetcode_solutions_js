class ListNode {
    constructor(x) {
        // Initialize a ListNode with a value and a reference to the next node
        this.val = x;
        this.next = null;
    }
}

class Solution {
    hasCycle(head) {
        // If the list is empty or has only one node, it cannot have a cycle
        if (!head || !head.next) {
            return false;
        }

        // Initialize two pointers, slow and fast
        let slow = head;
        let fast = head;

        // Traverse the list with both pointers
        while (fast && fast.next) {
            slow = slow.next;            // Move slow pointer one step
            fast = fast.next.next;       // Move fast pointer two steps

            // If slow pointer and fast pointer meet, there is a cycle
            if (slow === fast) {
                return true;
            }
        }

        // If the loop exits, no cycle was detected
        return false;
    }
}

// Example usage:
const X = new Solution();

// Create a linked list: 1 -> 2 -> 3 -> 4 -> (cycle back to 2)
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = list.next;  // Creates a cycle

console.log(X.hasCycle(list));  // Expected output: true

// Time Complexity: O(N), where N is the number of nodes in the linked list.
// Space Complexity: O(1), only a constant amount of extra space is used.
