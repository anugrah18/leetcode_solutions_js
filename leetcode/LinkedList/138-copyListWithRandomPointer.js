class Node {
    constructor(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

class Solution {
    copyRandomList(head) {
        // Map to store the mapping of old nodes to their corresponding new nodes.
        const oldToCopy = new Map();
        oldToCopy.set(null, null); // Handle case where a node's next or random pointer is null.

        // First pass: Create all the new nodes and store them in the map.
        let curr = head;
        while (curr) {
            const copy = new Node(curr.val); // Create a new node with the same value as the current node.
            oldToCopy.set(curr, copy); // Map the original node to its copy.
            curr = curr.next; // Move to the next node in the original list.
        }

        // Second pass: Assign next and random pointers for the copied nodes.
        curr = head;
        while (curr) {
            const copy = oldToCopy.get(curr); // Get the copied node from the map.
            copy.next = oldToCopy.get(curr.next); // Assign the next pointer in the copied list.
            copy.random = oldToCopy.get(curr.random); // Assign the random pointer in the copied list.
            curr = curr.next; // Move to the next node in the original list.
        }

        // Return the head of the copied list.
        return oldToCopy.get(head);
    }
}

// Example Usage:
// Creating the original list:
// Node 1 -> Node 2 -> Node 3
// Random pointers:
// Node 1 -> Node 3, Node 2 -> Node 1, Node 3 -> Node 2

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

node1.random = node3;
node2.random = node1;
node3.random = node2;

// Solution instance
const X = new Solution();

// Create a deep copy of the list
let copied_list_head = X.copyRandomList(node1);

// Traverse the copied list to show it is correctly copied
let curr = copied_list_head;
while (curr) {
    let random_val = curr.random ? curr.random.val : null;
    console.log(`Node Value: ${curr.val}, Random points to: ${random_val}`);
    curr = curr.next;
}

// Time Complexity: O(N)
// Space Complexity: O(N)
