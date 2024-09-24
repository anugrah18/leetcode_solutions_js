// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        // Initialize a binary tree node with a value, left child, and right child
        this.val = val; // Node value
        this.left = left; // Left child
        this.right = right; // Right child
    }
}

// Solution class to invert a binary tree
class Solution {
    // Inverting the tree using recursion
    invertTree_I(root) {
        // Function to invert a binary tree recursively
        if (!root) {
            // If the node is None, return null (base case)
            return null;
        }

        // Recursively invert the left and right subtrees
        const left = this.invertTree_I(root.left);
        const right = this.invertTree_I(root.right);

        // Swap the left and right children
        root.left = right;
        root.right = left;

        // Return the inverted tree rooted at the current node
        return root;
    }

    // Inverting the tree using iteration
    invertTree_II(root) {
        // Function to invert a binary tree iteratively
        if (!root) {
            // If the tree is empty, return null
            return null;
        }

        const queue = []; // Queue for level order traversal
        queue.push(root); // Start by adding the root node to the queue

        while (queue.length > 0) {
            // Process nodes in the queue
            const current = queue.shift(); // Dequeue the front node

            // Swap the left and right children of the current node
            [current.left, current.right] = [current.right, current.left];

            // Enqueue the left and right children (if they exist) for further processing
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }

        // Return the root of the inverted tree
        return root;
    }
}

// Example usage:

// Construct the binary tree:
//        4
//       / \
//      2   7
//     / \ / \
//    1  3 6  9

let tree = new TreeNode(4); // Root node with value 4
tree.left = new TreeNode(2); // Left child of root with value 2
tree.right = new TreeNode(7); // Right child of root with value 7
tree.left.left = new TreeNode(1); // Left child of node 2 with value 1
tree.left.right = new TreeNode(3); // Right child of node 2 with value 3
tree.right.left = new TreeNode(6); // Left child of node 7 with value 6
tree.right.right = new TreeNode(9); // Right child of node 7 with value 9

// Instantiate the Solution class and invert the binary tree
let solution = new Solution();
let invertTree1 = solution.invertTree_I(tree); // Inversion using recursion
let invertTree2 = solution.invertTree_II(tree); // Inversion using iteration

// Check if both methods yield the same result (should be true)
console.log(invertTree1 === invertTree2); // Output true if both trees are equivalent

// Time Complexity: O(N), where N is the number of nodes in the tree (we visit each node once)
// Space Complexity: O(N), due to the recursion stack in the recursive method and the queue in the iterative method
