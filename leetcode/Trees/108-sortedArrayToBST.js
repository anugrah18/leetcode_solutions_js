// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        // Initialize a node with a value, left child, and right child
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Solution class to convert a sorted array into a Binary Search Tree (BST)
class Solution {
    // Main function to convert sorted array to a BST
    sortedArrayToBST(nums) {
        // If the array is empty, return null (no tree can be created)
        if (nums.length === 0) {
            return null;
        }

        // Call helper function to recursively build the BST
        return this.convertArrayToBST(nums, 0, nums.length - 1);
    }

    // Helper function to recursively build the BST
    convertArrayToBST(nums, left, right) {
        // Base case: if left index is greater than right, return null
        if (left > right) {
            return null;
        }

        // Find the middle element to create a balanced BST
        const mid = Math.floor((left + right) / 2);

        // Create a node using the middle element of the array
        const node = new TreeNode(nums[mid]);

        // Recursively build the left subtree using the left half of the array
        node.left = this.convertArrayToBST(nums, left, mid - 1);

        // Recursively build the right subtree using the right half of the array
        node.right = this.convertArrayToBST(nums, mid + 1, right);

        // Return the constructed node
        return node;
    }
}

// Example usage
const X = new Solution();

// Convert the sorted array [1, 2, 3, 4, 5] to a BST
const tree = X.sortedArrayToBST([1, 2, 3, 4, 5]);

// Output the value of the root node of the constructed BST
console.log(tree.val);  // Should print 3 (the middle element of the array)

// Time Complexity: O(N) - Every element in the array is visited once to build the tree
// Space Complexity: O(N) - Space required for recursion stack and tree nodes
