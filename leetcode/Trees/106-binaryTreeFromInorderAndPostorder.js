// Definition of a tree node for a binary tree
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        // Initialize the node with a value, left child, and right child
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Inorder traversal function to print nodes in "left-root-right" order
function inorder(root) {
    // Base case: If the current node is null, return (end of recursion)
    if (!root) {
        return;
    }
    // Recursively visit the left subtree
    inorder(root.left);
    // Print the value of the current node
    console.log(root.val);
    // Recursively visit the right subtree
    inorder(root.right);
}

// Solution class to build the binary tree
class Solution {
    // Function to build a binary tree from inorder and postorder traversal lists
    buildTree(inorder, postorder) {
        // Recursive helper function to construct the tree
        const rec = (inorder, postorder) => {
            // Base case: If either list is empty, return null
            if (inorder.length === 0 || postorder.length === 0) {
                return null;
            }

            // The last element in postorder is the root of the current subtree
            const root = new TreeNode(postorder.pop());
            // Find the index of the root in the inorder list
            const mid = inorder.indexOf(root.val);

            // Recursively build the right subtree using elements after the root in inorder
            root.right = rec(inorder.slice(mid + 1), postorder);
            // Recursively build the left subtree using elements before the root in inorder
            root.left = rec(inorder.slice(0, mid), postorder);

            // Return the root node of the constructed subtree
            return root;
        };

        // Start the recursive construction of the tree
        return rec(inorder, postorder);
    }
}

// Create an instance of Solution and build the tree using inorder and postorder traversals
const X = new Solution();
const root = X.buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);

// Perform inorder traversal of the constructed tree and print the node values
inorder(root); // Output: 9, 3, 15, 20, 7

// Time Complexity: O(N) - Each node is processed once.
// Space Complexity: O(N) - Space for recursion stack and storing the tree nodes.
