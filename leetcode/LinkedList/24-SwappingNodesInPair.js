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
    swapPairs(head) {
        // Create a dummy node to serve as the previous node for the head
        const dummy = new ListNode(-1);
        dummy.next = head;
        let prevNode = dummy;

        // Traverse the list in pairs
        while (head !== null && head.next !== null) {
            // Identify the nodes to be swapped
            const firstNode = head;
            const secondNode = head.next;

            // Perform the swap by adjusting the pointers
            prevNode.next = secondNode;
            firstNode.next = secondNode.next;
            secondNode.next = firstNode;

            // Move the prevNode and head pointers forward to the next pair
            prevNode = firstNode;
            head = firstNode.next;
        }

        // Return the new head of the list (next node after dummy)
        return dummy.next;
    }
}

// Example usage:
let LL = new ListNode(1);
LL.next = new ListNode(2);
LL.next.next = new ListNode(3);
LL.next.next.next = new ListNode(4);

const X = new Solution();
let new_LL = X.swapPairs(LL);
new_LL.printList();

// Time Complexity : O(N)
// Space Complexity : O(1)
