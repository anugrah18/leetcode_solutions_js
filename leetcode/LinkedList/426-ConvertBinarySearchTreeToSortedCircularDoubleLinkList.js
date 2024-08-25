class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    // In-place conversion of Binary Search Tree to a circular doubly linked list
    treeToDoublyListInPlace(root) {
        if (!root) return null;

        let head = null, tail = null;

        function dfs(node) {
            if (!node) return;

            // In-order traversal: left, node, right
            dfs(node.left);

            // Link the previous node (tail) with the current node
            if (tail) {
                tail.right = node;
                node.left = tail;
            } else {
                // If this is the first node, assign it to head
                head = node;
            }
            // Move the tail to the current node
            tail = node;

            dfs(node.right);
        }

        dfs(root);

        // Link the head and tail to make the list circular
        head.left = tail;
        tail.right = head;

        return head;
    }

    // Not in-place conversion using an auxiliary list
    treeToDoublyList(root) {
        if (!root) return null;

        let dummyHead = new Node(0);
        let dummyTail = new Node(0);
        let current = dummyHead;
        dummyHead.right = dummyTail;
        dummyTail.left = dummyHead;

        let linearTree = [];

        // Helper function for in-order traversal that fills the list with node values
        function Prefix(root, res) {
            if (!root) return;
            Prefix(root.left, res);
            res.push(root.val);
            Prefix(root.right, res);
        }

        // Perform in-order traversal and store node values in linearTree
        Prefix(root, linearTree);

        // Create the doubly linked list from the stored values
        for (let num of linearTree) {
            let temp = new Node(num);
            temp.right = current.right;
            current.right.left = temp;
            current.right = temp;
            temp.left = current;
            current = current.right;
        }

        dummyTail.left.right = dummyHead.right;
        dummyHead.right.left = dummyTail.left;

        return dummyHead.right;
    }
}

// Example usage:
const X = new Solution();
let root = new Node(3);
root.left = new Node(2);
root.left.left = new Node(1);
root.right = new Node(4);
root.right.right = new Node(5);

let curr = X.treeToDoublyList(root);
let start = curr;

// Print the list created using the auxiliary list method
do {
    console.log(curr.val);
    curr = curr.right;
} while (curr !== start);

console.log();

curr = X.treeToDoublyListInPlace(root);
start = curr;

// Print the list created using the in-place method
do {
    console.log(curr.val);
    curr = curr.right;
} while (curr !== start);
