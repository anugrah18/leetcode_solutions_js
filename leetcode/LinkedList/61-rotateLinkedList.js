// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to rotate the linked list to the right by k places
    rotateRight(head, k) {
        // If the list is empty, return the head (null)
        if (head === null) {
            return head;
        }

        // Initialize a pointer to traverse the list and a variable to store the length of the list
        let ptr = head;
        let N = 1;

        // Traverse the list to find its length (N) and make the list circular by connecting the last node to the head
        while (ptr.next !== null) {
            N += 1;
            ptr = ptr.next;
        }

        // Connect the last node to the head, making the list circular
        ptr.next = head;

        // Calculate the new tail index after rotating k times
        let tailIndex = N - (k % N) - 1;

        // Reset the pointer to the head and move it to the new tail position
        ptr = head;
        for (let i = 0; i < tailIndex; i++) {
            ptr = ptr.next;
        }

        // The new head will be the next node after the new tail
        let newHead = ptr.next;

        // Break the circular link to finalize the rotated list
        ptr.next = null;

        // Return the new head of the rotated list
        return newHead;
    }
}

// Example usage:
let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);

const X = new Solution();
let rotatedNode = X.rotateRight(node, 2);

// Print the rotated list
let curr = rotatedNode;
while (curr !== null) {
    console.log(curr.val);
    curr = curr.next;
}

// Time Complexity: O(N)
// Space Complexity: O(1)
