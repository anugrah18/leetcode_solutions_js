// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        // Initialize a binary tree node with a value, left child, and right child
        this.val = val; // Node value
        this.left = left; // Left child
        this.right = right; // Right child
    }
}

// Solution class to compute the diameter of a binary tree
class Solution {
    constructor() {
        this.ans = 0; // Class variable to store the maximum diameter found
    }

    diameterOfBinaryTree(root) {
        // Function to compute the diameter of the binary tree
        // The diameter is the length of the longest path between any two nodes in the tree.
        // This path may or may not pass through the root.

        if (!root) {
            // If the tree is empty, the diameter is 0
            return 0;
        }

        // Update the diameter by considering the sum of left and right depths from the current node
        this.ans = Math.max(this.ans, this._depth(root.left) + this._depth(root.right));

        // Recursively compute the diameter for the left and right subtrees
        this.diameterOfBinaryTree(root.left);
        this.diameterOfBinaryTree(root.right);

        // The result is the maximum diameter found
        return this.ans; // Return the diameter
    }

    _depth(root) {
        // Helper function to calculate the depth (or height) of a subtree
        // The depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

        if (!root) {
            // If the node is None, the depth is 0
            return 0;
        }

        // Recursively calculate the depth of the left and right subtrees
        const L = this._depth(root.left);
        const R = this._depth(root.right);

        // The depth of the current node is 1 plus the maximum of the depths of its left and right subtrees
        return Math.max(L, R) + 1;
    }
}

// Example usage:

// Construct the binary tree:
//        1
//       / \
//      2   3
//     / \  / \
//    4  5 6   7
//             \
//              8

let root = new TreeNode(1); // Root node with value 1
root.left = new TreeNode(2); // Left child of root with value 2
root.right = new TreeNode(3); // Right child of root with value 3
root.left.left = new TreeNode(4); // Left child of node 2 with value 4
root.left.right = new TreeNode(5); // Right child of node 2 with value 5
root.right.left = new TreeNode(6); // Left child of node 3 with value 6
root.right.right = new TreeNode(7); // Right child of node 3 with value 7
root.right.right.right = new TreeNode(8); // Right child of node 7 with value 8

// Instantiate the Solution class and compute the diameter of the binary tree
let solution = new Solution();
console.log(solution.diameterOfBinaryTree(root)); // Output the diameter of the tree

// Time Complexity: O(N), where N is the number of nodes in the tree (we visit each node once)
// Space Complexity: O(N), due to the recursion stack in a skewed tree scenario
