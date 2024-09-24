// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        // Initialize a binary tree node with a value, left child, and right child
        this.val = val; // Node value
        this.left = left; // Left child
        this.right = right; // Right child
    }
}

// Solution class to check if a binary tree is complete
class Solution {
    checkCompleted(root) {
        // Function to check if a binary tree is a complete binary tree
        // A complete binary tree has all levels completely filled except possibly the last,
        // which is filled from left to right.

        if (!root) {
            // If the tree is empty, it's considered complete
            return true;
        }

        let queue = []; // Queue for level order traversal
        let flag = false; // Flag to track if a missing child has been encountered
        queue.push(root); // Start by adding the root node to the queue

        while (queue.length > 0) {
            // Process nodes level by level
            let node = queue.shift(); // Dequeue the first node from the queue

            // Check the left child
            if (node.left) {
                if (flag) {
                    // If a missing child was encountered previously, and now we see a left child,
                    // it means the tree is not complete
                    return false;
                }
                queue.push(node.left); // Add the left child to the queue for further processing
            } else {
                flag = true; // Set the flag if the left child is missing
            }

            // Check the right child
            if (node.right) {
                if (flag) {
                    // If a missing child was encountered previously, and now we see a right child,
                    // it means the tree is not complete
                    return false;
                }
                queue.push(node.right); // Add the right child to the queue for further processing
            } else {
                flag = true; // Set the flag if the right child is missing
            }
        }

        // If we completed the traversal without issues, the tree is complete
        return true;
    }
}

// Example usage:

// Construct the binary tree:
//        1
//       / \
//      2   3
//     / \  /
//    4  5 6

let tree = new TreeNode(1); // Root node with value 1
tree.left = new TreeNode(2); // Left child of root with value 2
tree.right = new TreeNode(3); // Right child of root with value 3
tree.left.left = new TreeNode(4); // Left child of node 2 with value 4
tree.left.right = new TreeNode(5); // Right child of node 2 with value 5
tree.right.left = new TreeNode(6); // Left child of node 3 with value 6

// Instantiate the Solution class and check if the binary tree is complete
let solution = new Solution();
console.log(solution.checkCompleted(tree)); // Output True if the tree is complete, otherwise False

// Time Complexity: O(N), where N is the number of nodes in the tree (we visit each node once)
// Space Complexity: O(N), for the queue used in the level order traversal
