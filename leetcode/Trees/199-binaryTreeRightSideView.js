// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val; // Node value
        this.left = left; // Left child
        this.right = right; // Right child
    }
}

// Solution class to compute the right side view of a binary tree
class Solution {
    rightSideView(root) {
        // Function to return the right-side view of the binary tree, i.e.,
        // the nodes that are visible when looking at the tree from the right side.

        let levels = []; // List to store values of nodes level by level
        let rightVals = []; // List to store the rightmost node values at each level
        if (!root) {
            // If the tree is empty, return an empty list
            return levels;
        }

        let queue = []; // Queue to process nodes in a breadth-first manner (FIFO)
        let level = 0; // Keep track of the current level
        queue.push(root); // Start by adding the root node to the queue

        while (queue.length > 0) {
            // While there are still nodes to process in the queue

            levels.push([]); // Add an empty list to store the current level's values
            let levelLength = queue.length; // Number of nodes at the current level

            for (let i = 0; i < levelLength; i++) {
                // Process all nodes at the current level

                let node = queue.shift(); // Dequeue the first node from the queue
                levels[level].push(node.val); // Add the node's value to the current level's list

                // Enqueue the left and right children (if they exist) for processing at the next level
                if (node.left !== null) {
                    queue.push(node.left);
                }
                if (node.right !== null) {
                    queue.push(node.right);
                }
            }

            // Move to the next level
            level++;
        }

        // After processing all levels, get the rightmost value at each level
        for (let lvl of levels) {
            rightVals.push(lvl[lvl.length - 1]); // The last element in each level list is the rightmost node
        }

        return rightVals; // Return the list of right-side view values
    }
}

// Example usage:

// Construct the binary tree:
//        1
//       / \
//      2   3
//       \    \
//        5    4

let tree = new TreeNode(1); // Root node with value 1
tree.left = new TreeNode(2); // Left child of root with value 2
tree.right = new TreeNode(3); // Right child of root with value 3
tree.left.right = new TreeNode(5); // Right child of node 2 with value 5
tree.right.right = new TreeNode(4); // Right child of node 3 with value 4

// Instantiate the Solution class and compute the right side view
let solution = new Solution();
console.log(solution.rightSideView(tree)); // Output the list of rightmost node values from each level

// Time Complexity: O(N), where N is the number of nodes in the tree (we visit each node once)
// Space Complexity: O(N), for the queue used in the breadth-first traversal and the result list
