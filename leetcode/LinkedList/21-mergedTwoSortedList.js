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
    mergeTwoLists(l1, l2) {
        // Create a prehead node to act as a starting point
        const prehead = new ListNode(-1);
        let prev = prehead;

        // Traverse both lists and merge them in sorted order
        while (l1 && l2) {
            if (l1.val <= l2.val) {
                // If l1's value is smaller or equal, link it to the merged list
                prev.next = l1;
                l1 = l1.next;
            } else {
                // If l2's value is smaller, link it to the merged list
                prev.next = l2;
                l2 = l2.next;
            }
            // Move the prev pointer to the last node in the merged list
            prev = prev.next;
        }

        // If either list is not fully traversed, link the remaining nodes
        prev.next = l1 ? l1 : l2;

        // Return the head of the merged list, which is the next node after prehead
        return prehead.next;
    }
}

// Create two sorted linked lists
const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

// Merge the two lists
const X = new Solution();
const answer1 = X.mergeTwoLists(l1, l2);

// Print the merged list
answer1.printList();

// Time Complexity: O(N + M), where N and M are the lengths of the two linked lists l1 and l2
// Space Complexity: O(1), only a few pointers are used for merging
