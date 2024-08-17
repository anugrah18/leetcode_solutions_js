class ListNode {
    constructor(val = 0, next = null) {
        // Initialize a ListNode with a value and a pointer to the next node
        this.val = val;
        this.next = next;
    }

    printList() {
        // Method to print the values in the linked list
        let current = this;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

class Solution {
    // Method to find the middle node of a linked list
    middleNode(head) {
        // Initialize two pointers, slow and fast, both starting at the head of the list
        let slow = head;
        let fast = head; 

        // Traverse the list with fast moving twice as fast as slow
        while (fast && fast.next) {
            slow = slow.next;           // slow pointer moves one step
            fast = fast.next.next;      // fast pointer moves two steps
        }

        // When fast reaches the end, slow will be at the middle
        return slow;
    }
}

// Create a linked list 1 -> 2 -> 3 -> 4 -> 5
const LL = new ListNode(1);
LL.next = new ListNode(2);
LL.next.next = new ListNode(3);
LL.next.next.next = new ListNode(4);
LL.next.next.next.next = new ListNode(5);

// Find the middle node of the linked list
const X = new Solution();
const Partitioned_LL = X.middleNode(LL);

// Print the list starting from the middle node
Partitioned_LL.printList();

// Time Complexity: O(N) where N is the number of nodes in the linked list
// Space Complexity: O(1) as only two pointers are used
