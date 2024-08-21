// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }

    printList() {
        let current = this;
        while (current !== null) {
            console.log(current.val);
            current = current.next;
        }
    }
}

class Solution {
    // Function to reverse a singly linked list
    reverseList(head) {
        let prev = null;  // Initialize the previous pointer as null
        let curr = head;  // Start with the current pointer at the head of the list

        // Iterate through the list
        while (curr !== null) {
            let nextNode = curr.next;  // Temporarily store the next node
            curr.next = prev;  // Reverse the current node's pointer to the previous node
            prev = curr;  // Move the previous pointer to the current node
            curr = nextNode;  // Move the current pointer to the next node
        }

        return prev;  // Return the new head of the reversed list, which is the last non-null node
    }
}

// Example usage:
let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);

const X = new Solution();
let rev = X.reverseList(list);

rev.printList();

// Time Complexity: O(N)
// Space Complexity: O(1)
