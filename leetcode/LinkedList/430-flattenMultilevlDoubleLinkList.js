class Node {
    constructor(val, prev = null, next = null, child = null) {
        // Initialize a Node with a value, previous node, next node, and a child node
        this.val = val;
        this.prev = prev;
        this.next = next;
        this.child = child;
    }
}

class Solution {
    flatten(head) {
        // If the head is null, return null (no nodes to flatten)
        if (!head) {
            return null;
        }

        // Create a pseudo head node to act as a starting point
        const pseudoHead = new Node(0, null, head, null);
        let prev = pseudoHead;

        // Initialize a stack to help with flattening the list
        const stack = [];
        stack.push(head);

        while (stack.length > 0) {
            // Pop the last node from the stack
            const curr = stack.pop();

            // Link the previous node with the current node
            prev.next = curr;
            curr.prev = prev;

            // If the current node has a next node, push it onto the stack
            if (curr.next) {
                stack.push(curr.next);
            }

            // If the current node has a child node, push it onto the stack
            if (curr.child) {
                stack.push(curr.child);
                // After processing the child, remove the child pointer
                curr.child = null;
            }

            // Move the prev pointer to the current node
            prev = curr;
        }

        // Detach the pseudo head from the real head
        pseudoHead.next.prev = null;
        return pseudoHead.next;
    }
}

// Example Input:
// 1<->2<->4
//     |
//     3<->5<->6
//         |
//         7

// Create nodes
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);

// Set up the doubly linked list structure with child pointers
node1.next = node2;
node2.prev = node1;
node2.next = node4;
node4.prev = node2;
node2.child = node3;
node3.next = node5;
node5.prev = node3;
node5.child = node7;
node5.next = node6;
node6.prev = node5;

// Flatten the list
const X = new Solution();
let res = X.flatten(node1);

// Print the flattened list
while (res) {
    console.log(res.val);
    res = res.next;
}

// Time Complexity: O(N), where N is the number of nodes in the linked list.
// Space Complexity: O(N), in the worst case, the stack will contain all nodes in the list.
