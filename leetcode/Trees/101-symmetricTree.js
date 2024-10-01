// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        // Initialize a binary tree node with a value, left child, and right child
        this.val = val; // Node value
        this.left = left; // Left child
        this.right = right; // Right child
    }
}

// Solution class to determine if a binary tree is symmetric
class Solution {
    // Function to check if the tree is symmetric by calling the isMirror helper function
    isSymmetric(root) {
        // The tree is symmetric if the tree is a mirror of itself (root, root)
        return this.isMirror(root, root);
    }

    // Helper function to check if two trees (t1 and t2) are mirrors of each other
    isMirror(t1, t2) {
        // If both trees are null, they are mirrors of each other
        if (t1 === null && t2 === null) {
            return true;
        }
        // If one of the trees is null and the other is not, they are not mirrors
        if (t1 === null || t2 === null) {
            return false;
        }
        // Check if the values of t1 and t2 are equal, and recursively check if:
        // 1. The left subtree of t1 is a mirror of the right subtree of t2
        // 2. The right subtree of t1 is a mirror of the left subtree of t2
        return (t1.val === t2.val) && this.isMirror(t1.left, t2.right) && this.isMirror(t1.right, t2.left);
    }
}

// Example usage:

// Construct the following symmetric binary tree:
//         1
//        / \
//       2   2
//      / \ / \
//     3  4 4  3

const tree = new TreeNode(1);  // Root node with value 1
tree.left = new TreeNode(2);  // Left child of root with value 2
tree.right = new TreeNode(2);  // Right child of root with value 2
tree.left.left = new TreeNode(3);  // Left child of node 2 with value 3
tree.left.right = new TreeNode(4);  // Right child of node 2 with value 4
tree.right.left = new TreeNode(4);  // Left child of node 2 with value 4
tree.right.right = new TreeNode(3);  // Right child of node 2 with value 3

// Create a Solution object and check if the tree is symmetric
const X = new Solution();
console.log(X.isSymmetric(tree));  // Output: true (The tree is symmetric)

// Time Complexity: O(N), where N is the number of nodes in the tree (each node is visited once)
// Space Complexity: O(N), due to the recursion stack in the worst case of a completely unbalanced tree
