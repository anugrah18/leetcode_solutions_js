// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        // Initialize a binary tree node with a value, left child, and right child
        this.val = val; // Node value
        this.left = left; // Left child
        this.right = right; // Right child
    }
}

// Solution class to check if two binary trees are identical
class Solution {
    isSameTree(p, q) {
        // Function to check if two binary trees (p and q) are structurally identical and have the same node values

        if (!p && !q) {
            // If both trees are empty, they are the same
            return true;
        }
        if (!p || !q) {
            // If one of the trees is empty and the other is not, they are not the same
            return false;
        }
        if (p.val !== q.val) {
            // If the values of the current nodes in both trees are different, they are not the same
            return false;
        }

        // Recursively check the left and right subtrees of both trees
        // Both left subtrees and right subtrees must be identical for the trees to be the same
        return this.isSameTree(p.right, q.right) && this.isSameTree(p.left, q.left);
    }
}

// Example usage:

// Construct the first binary tree (root1):
//        1
//       / \
//      2   3

let root1 = new TreeNode(1); // Root node with value 1
root1.left = new TreeNode(2); // Left child of root1 with value 2
root1.right = new TreeNode(3); // Right child of root1 with value 3

// Construct the second binary tree (root2):
//        1
//       / \
//      2   3

let root2 = new TreeNode(1); // Root node with value 1
root2.left = new TreeNode(2); // Left child of root2 with value 2
root2.right = new TreeNode(3); // Right child of root2 with value 3

// Instantiate the Solution class and check if the two trees are the same
let solution = new Solution();
console.log(solution.isSameTree(root1, root2)); // Output true if the trees are identical, otherwise false

// Time Complexity: O(N), where N is the number of nodes in both trees (each node is visited once)
// Space Complexity: O(N), due to the recursion stack in the worst case of a skewed tree
