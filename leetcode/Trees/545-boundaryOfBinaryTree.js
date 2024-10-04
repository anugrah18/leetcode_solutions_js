// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Solution class to find the boundary of the binary tree
class Solution {
    // Function to find the boundary of a binary tree
    boundaryOfBinaryTree(root) {
        if (!root) return [];

        const res = [root.val];

        // Function to find the left boundary of the tree (excluding leaves)
        const leftBoundary = (root) => {
            if (!root) return;
            if (root.left) {
                res.push(root.val);
                leftBoundary(root.left);
            } else if (root.right) {
                res.push(root.val);
                leftBoundary(root.right);
            }
        };

        // Function to find the right boundary of the tree (excluding leaves)
        const rightBoundary = (root) => {
            if (!root) return;
            if (root.right) {
                rightBoundary(root.right);
                res.push(root.val); // Add value after traversal for bottom-up order
            } else if (root.left) {
                rightBoundary(root.left);
                res.push(root.val);
            }
        };

        // Function to find all leaf nodes in the tree
        const leaves = (root) => {
            if (!root) return;
            leaves(root.left);
            if (!root.left && !root.right) {
                res.push(root.val); // It's a leaf node
            }
            leaves(root.right);
        };

        // Call the helper functions to build the boundary
        leftBoundary(root.left); // Find the left boundary (excluding the root and leaves)
        leaves(root.left);       // Find leaf nodes in the left subtree
        leaves(root.right);      // Find leaf nodes in the right subtree
        rightBoundary(root.right); // Find the right boundary (excluding the root and leaves)

        return res;
    }
}

// Example usage:
// Construct the following binary tree:
//           1
//         /   \
//        2     3
//       / \   /
//      4   5 6
//         / \ / \
//        7  8 9 10

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(8);
root.right.left = new TreeNode(6);
root.right.left.left = new TreeNode(9);
root.right.left.right = new TreeNode(10);

// Create an instance of Solution and find the boundary of the binary tree
const X = new Solution();
console.log(X.boundaryOfBinaryTree(root)); // Output the boundary of the tree

// Time Complexity: O(n) - Each node is visited once.
// Space Complexity: O(n) - Space required for recursion stack and result list.
