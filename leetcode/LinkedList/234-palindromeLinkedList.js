class ListNode {
    constructor(val = 0, next = null) {
        // Initialize a ListNode with a value and a pointer to the next node
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to check if a linked list is a palindrome
    // Time Complexity: O(N) where N is the number of nodes in the linked list
    // Space Complexity: O(1) as the space used is constant
    isPalindrome(head) {
        // If the list is empty or has only one element, it's a palindrome
        if (!head || !head.next) {
            return true;
        }

        // Initialize two pointers, slow and fast
        let slow = head;
        let fast = head;

        // Move slow by 1 step and fast by 2 steps to find the middle of the list
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reverse the second half of the list
        slow = this.reverse(slow);
        fast = head;

        // Compare the first half with the reversed second half
        while (slow) {
            if (slow.val !== fast.val) {
                return false;  // If mismatch found, it's not a palindrome
            }
            fast = fast.next;
            slow = slow.next;
        }

        return true;  // If no mismatch found, it's a palindrome
    }

    // Helper function to reverse a linked list
    reverse(node) {
        let prev = null;
        while (node) {
            let nextNode = node.next;  // Store the next node
            node.next = prev;          // Reverse the current node's pointer
            prev = node;               // Move prev to the current node
            node = nextNode;           // Move to the next node
        }
        return prev;  // Return the new head of the reversed list
    }
}

// Example usage:
const X = new Solution();
const ll = new ListNode(1);
ll.next = new ListNode(2);
ll.next.next = new ListNode(1);

// Check if the linked list is a palindrome
console.log(X.isPalindrome(ll));  // Output: true

// Time Complexity: O(N) where N is the length of the linked list.
// Space Complexity: O(1) as the space used is constant (only pointers are used).
