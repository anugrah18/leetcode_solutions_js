class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    deleteDuplicates(head) {
        let dummy = new ListNode(-1);
        dummy.next = head;
        let curr = dummy;

        // Traverse the linked list.
        while (curr) {
            // If the current node's next two nodes exist and have the same value, skip the duplicates.
            if (curr.next && curr.next.next && curr.next.val === curr.next.next.val) {
                let temp = curr.next.next;
                // Move the temp pointer forward as long as it points to a node with the same value.
                while (temp && temp.next && temp.val === temp.next.val) {
                    temp = temp.next;
                }
                // Link the current node to the node after the duplicates.
                curr.next = temp.next;
            } else {
                // Move the current pointer forward if no duplicates are found.
                curr = curr.next;
            }
        }

        // Return the modified list, starting after the dummy node.
        return dummy.next;
    }
}

// Example usage:
let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(3);
node.next.next.next.next = new ListNode(4);
node.next.next.next.next.next = new ListNode(4);
node.next.next.next.next.next.next = new ListNode(5);

const X = new Solution();
let ans = X.deleteDuplicates(node);

// Printing the resulting linked list.
let curr = ans;
while (curr) {
    console.log(curr.val);
    curr = curr.next;
}

// Time Complexity: O(N)
// Space Complexity: O(1)
