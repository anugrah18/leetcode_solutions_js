// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }

    printList() {
        let current = this;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

class Solution {
    // Function to remove all elements from a linked list that have a specific value
    removeElements(head, val) {
        // Create a dummy node to handle edge cases such as removing the head node
        let dummy = new ListNode(0);
        dummy.next = head;

        // Initialize two pointers: prev points to the last node that is not removed,
        // curr is used to traverse the list
        let prev = dummy;
        let curr = head;

        // Traverse the linked list
        while (curr) {
            // If the current node's value is equal to the target value, skip it
            if (curr.val === val) {
                prev.next = curr.next;
            } else {
                // Otherwise, move the prev pointer to the current node
                prev = curr;
            }
            // Move to the next node
            curr = curr.next;
        }

        // Return the new head of the list, which is dummy.next
        return dummy.next;
    }
}

// Example usage:
const X = new Solution();
let LL = new ListNode(1);
LL.next = new ListNode(2);
LL.next.next = new ListNode(6);
LL.next.next.next = new ListNode(3);
LL.next.next.next.next = new ListNode(4);
LL.next.next.next.next.next = new ListNode(5);
LL.next.next.next.next.next.next = new ListNode(6);

let new_LL = X.removeElements(LL, 6);
new_LL.printList();

// Time Complexity: O(N), where N is the number of nodes in the linked list. The list is traversed once.
// Space Complexity: O(1), since no extra space is used apart from a few pointers.
