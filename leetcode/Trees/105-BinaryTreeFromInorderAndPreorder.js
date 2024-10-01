// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        // Initialize a binary tree node with a value, left child, and right child
        this.val = val; // Node value
        this.left = left; // Left child
        this.right = right; // Right child
    }
}

// Inorder traversal function to print the tree nodes in in-order sequence
function inorder(root) {
    // Base case: if the root is null, return
    if (!root) {
        return;
    }
    // Traverse the left subtree
    inorder(root.left);
    // Print the current node's value
    console.log(root.val);
    // Traverse the right subtree
    inorder(root.right);
}

// Solution class for constructing the tree from preorder and inorder traversals
class Solution {
    // Function to build a binary tree from preorder and inorder traversal using slicing
    buildTree(preorder, inorder) {
        // Recursive function to build the tree
        const rec = (inorder, preorder) => {
            if (inorder.length === 0 || preorder.length === 0) {
                // Base case: if either list is empty, return null
                return null;
            }

            // Create the root node from the first element of preorder (Root is always first in preorder)
            const root = new TreeNode(preorder.shift()); // Use shift() to remove the first element

            // Find the index of the root value in inorder traversal
            const mid = inorder.indexOf(root.val);

            // Recursively build the left subtree using the left part of inorder
            root.left = rec(inorder.slice(0, mid), preorder);

            // Recursively build the right subtree using the right part of inorder
            root.right = rec(inorder.slice(mid + 1), preorder);

            return root; // Return the constructed subtree
        };

        return rec(inorder, preorder); // Start building the tree recursively
    }

    // Optimized version of buildTree using a dictionary for faster lookups in inorder traversal
    buildTree2(preorder, inorder) {
        // Create a dictionary to map values to their indices in inorder traversal
        const mapper = {};
        inorder.forEach((value, index) => {
            mapper[value] = index; // Store value and index in the mapper
        });

        // Helper function to build the tree using the low and high bounds for inorder traversal
        const helper = (low, high) => {
            if (low > high) {
                // Base case: if low > high, return null
                return null;
            }

            // Create the root node from the first element of preorder
            const root = new TreeNode(preorder.shift());

            // Find the index of the root in inorder using the mapper
            const mid = mapper[root.val];

            // Recursively build the left subtree with the elements before the root in inorder
            root.left = helper(low, mid - 1);

            // Recursively build the right subtree with the elements after the root in inorder
            root.right = helper(mid + 1, high);

            return root; // Return the constructed subtree
        };

        return helper(0, inorder.length - 1); // Start building the tree using the full range of inorder
    }
}

// Example usage:
// Construct the tree from preorder and inorder traversals:
// Preorder: [3, 9, 20, 15, 7]
// Inorder: [9, 3, 15, 20, 7]
const X = new Solution();
const root = X.buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);

// Perform inorder traversal on the constructed tree
inorder(root); // Output: 9, 3, 15, 20, 7

// Time Complexity: O(N)
// The time complexity is O(N) because each node is visited once.
// Space Complexity: O(N)
// The space complexity is O(N) due to the recursive call stack and the storage for the tree structure.
