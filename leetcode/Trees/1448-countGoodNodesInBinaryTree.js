// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        // Initialize the node with a value, left child, and right child
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Solution class to count good nodes in the binary tree
class Solution {
    constructor() {
        // Initialize a counter for good nodes
        this.count = 0;
    }

    // Main function to find the number of good nodes
    goodNodes(root) {
        // Inner helper function to perform DFS on the tree
        const dfs = (node, maxVal) => {
            if (!node) {
                // Base case: if the node is null, return (end of recursion)
                return;
            }

            // If the current node's value is greater than or equal to the max value seen so far, it's a good node
            if (node.val >= maxVal) {
                this.count++;  // Increment the good node counter
                maxVal = node.val;  // Update maxVal to the current node's value
            }

            // Recursively traverse the left and right subtrees
            dfs(node.left, maxVal);
            dfs(node.right, maxVal);
        };

        // Start DFS with the root and initialize maxVal to negative infinity
        dfs(root, -Infinity);

        // Return the final count of good nodes
        return this.count;
    }
}

// Example usage
// Construct the binary tree
//         3
//       /   \
//      1     4
//     /     / \
//    3     1   5

const root = new TreeNode(3);             // Root node with value 3
root.left = new TreeNode(1);               // Left child of root with value 1
root.right = new TreeNode(4);              // Right child of root with value 4
root.left.left = new TreeNode(3);          // Left child of node 1 with value 3
root.right.left = new TreeNode(1);         // Left child of node 4 with value 1
root.right.right = new TreeNode(5);        // Right child of node 4 with value 5

// Create an instance of Solution and count the good nodes
const X = new Solution();
console.log(X.goodNodes(root));  // Output the number of good nodes

// Time Complexity: O(N) - Each node is visited once.
// Space Complexity: O(N) - Space for the recursion stack in the worst case (when the tree is skewed).
