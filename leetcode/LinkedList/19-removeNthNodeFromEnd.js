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
    // Function to remove the nth node from the end of a linked list
    removeNthFromEnd(head, n) {
        // Initialize a counter to track the position
        let counter = 0;

        // Create a dummy node that points to the head of the list
        let dummyHead = new ListNode(0);
        dummyHead.next = head;

        // Initialize two pointers: ptr1 (slow pointer) and ptr2 (fast pointer)
        let ptr1 = dummyHead;
        let ptr2 = head;

        // Move ptr2 ahead by n nodes
        while (ptr2) {
            if (counter < n) {
                counter++;
            } else {
                // Once counter reaches n, start moving ptr1 along with ptr2
                ptr1 = ptr1.next;
            }
            ptr2 = ptr2.next;
        }

        // Skip the nth node from the end by adjusting the next pointer of ptr1
        ptr1.next = ptr1.next.next;

        // Return the new head of the list
        return dummyHead.next;
    }
}

// Example usage:
let LL = new ListNode(1);
LL.next = new ListNode(2);
LL.next.next = new ListNode(3);
LL.next.next.next = new ListNode(4);
LL.next.next.next.next = new ListNode(5);

const X = new Solution();
let answer = X.removeNthFromEnd(LL, 2);
answer.printList();

// Time Complexity: O(N), where N is the number of nodes in the linked list.
// Space Complexity: O(1), since no extra space is used apart from a few pointers.
