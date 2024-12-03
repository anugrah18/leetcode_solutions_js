class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    constructor() {
        this.prev = -Infinity; // Initialize previous node value to negative infinity
    }

    isValidBST(root) {
        const inorder = (node) => {
            if (!node) return true; // An empty subtree is a valid BST

            // Check the left subtree
            if (!inorder(node.left)) return false;

            // Ensure the current node's value is greater than the previous node's value
            if (node.val <= this.prev) return false;

            // Update the previous node's value
            this.prev = node.val;

            // Check the right subtree
            return inorder(node.right);
        };

        return inorder(root); // Start the inorder traversal from the root
    }
}

// Example usage:
const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

const solution = new Solution();
console.log(solution.isValidBST(root)); // Output: true

// Time Complexity = O(N)
// Space Complexity = O(N)
