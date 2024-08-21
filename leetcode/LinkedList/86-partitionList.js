class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    partition(head, x) {
        // Create two dummy nodes to start the two partitions
        let res1 = new ListNode(0);  // This will hold nodes less than x
        let first = res1;
        let res2 = new ListNode(0);  // This will hold nodes greater than or equal to x
        let second = res2;

        // Traverse the original linked list
        while (head) {
            // If the current node's value is less than x, add it to the first partition
            if (head.val < x) {
                res1.next = new ListNode(head.val);
                res1 = res1.next;
            }
            // If the current node's value is greater than or equal to x, add it to the second partition
            else {
                res2.next = new ListNode(head.val);
                res2 = res2.next;
            }
            // Move to the next node in the original list
            head = head.next;
        }

        // Connect the end of the first partition to the beginning of the second partition
        res1.next = second.next;
        // Return the start of the first partition, which is the new head of the modified list
        return first.next;
    }
}

// Create a linked list: 1 -> 4 -> 3 -> 2 -> 5 -> 2
let node = new ListNode(1);
node.next = new ListNode(4);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(2);
node.next.next.next.next = new ListNode(5);
node.next.next.next.next.next = new ListNode(2);

const X = new Solution();
let resNode = X.partition(node, 3);

// Print the partitioned list
let curr = resNode;
while (curr) {
    console.log(curr.val);
    curr = curr.next;
}

// Time Complexity: O(N)
// Space Complexity: O(N)
