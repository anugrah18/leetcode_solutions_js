class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    reverseKGroup(head, k) {
        // Helper function to reverse `k` nodes in the linked list.
        function reverseLinkedList(head, k) {
            let new_head = null;
            let ptr = head;

            // Reverse `k` nodes in the linked list.
            while (k) {
                let next_node = ptr.next;
                ptr.next = new_head;
                new_head = ptr;
                ptr = next_node;
                k--;
            }

            return new_head;
        }

        let ptr = head;  // Pointer to traverse the list
        let ktail = null;  // Tail of the last reversed k-group
        let new_head = null;  // New head of the modified list

        // Iterate through the list to process groups of size `k`.
        while (ptr) {
            let count = 0;
            ptr = head;

            // Check if there are at least `k` nodes left to reverse.
            while (count < k && ptr) {
                ptr = ptr.next;
                count++;
            }

            if (count === k) {
                // Reverse the current group of `k` nodes.
                let revHead = reverseLinkedList(head, k);

                // Set the new head if it's the first group.
                if (!new_head) {
                    new_head = revHead;
                }

                // Connect the last group's tail to the current group's head.
                if (ktail) {
                    ktail.next = revHead;
                }

                // Update the tail to the current group's original head.
                ktail = head;
                // Move the head pointer to the next group.
                head = ptr;
            }
        }

        // If there are nodes left that are fewer than `k`, attach them as is.
        if (ktail) {
            ktail.next = head;
        }

        // Return the new head of the modified list.
        return new_head ? new_head : head;
    }
}

// Example usage:
let linklist = new ListNode(1);
linklist.next = new ListNode(2);
linklist.next.next = new ListNode(3);
linklist.next.next.next = new ListNode(4);
linklist.next.next.next.next = new ListNode(5);

const X = new Solution();
let ans = X.reverseKGroup(linklist, 2);

// Print the reversed list in groups of 2.
while (ans) {
    console.log(ans.val);
    ans = ans.next;
}

// Time Complexity: O(N)
// The entire list is traversed, and each node is processed exactly once, leading to O(N) time complexity.
// Space Complexity: O(1)
// The algorithm uses a constant amount of extra space, apart from the input and output structures.
