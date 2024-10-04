// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Solution class to calculate the sum of nodes with values within a given range in a BST
class Solution {
    constructor() {
        this.ans = 0;  // Initialize the sum to 0
    }

    // Function to compute the range sum of BST
    rangeSumBST(root, low, high) {
        // Helper function to perform Depth-First Search (DFS)
        const dfs = (node) => {
            if (node) {
                // If the current node's value is within the range [low, high], add its value to the sum
                if (low <= node.val && node.val <= high) {
                    this.ans += node.val;
                }
                // If the current node's value is greater than low, explore the left subtree (values less than the current node)
                if (low < node.val) {
                    dfs(node.left);
                }
                // If the current node's value is less than high, explore the right subtree (values greater than the current node)
                if (node.val < high) {
                    dfs(node.right);
                }
            }
        };

        // Reset the sum to 0 before starting the DFS
        this.ans = 0;
        dfs(root);  // Start the DFS from the root node
        return this.ans;  // Return the final sum
    }
}

// Example usage:
// Construct the following binary search tree (BST):
//           10
//         /    \
//        5      15
//       / \       \
//      3   7      18

const root = new TreeNode(10);  // Root node with value 10
root.left = new TreeNode(5);    // Left child of root with value 5
root.left.left = new TreeNode(3); // Left child of node 5 with value 3
root.left.right = new TreeNode(7); // Right child of node 5 with value 7
root.right = new TreeNode(15);   // Right child of root with value 15
root.right.right = new TreeNode(18); // Right child of node 15 with value 18

// Create an instance of Solution and calculate the range sum of nodes within [7, 15]
const X = new Solution();
console.log(X.rangeSumBST(root, 7, 15));  // Output the sum of values within the range [7, 15]

// Time Complexity: O(N) - We may visit all the nodes in the tree in the worst case.
// Space Complexity: O(N) - Space used by the recursion stack, proportional to the tree height in the worst case.
