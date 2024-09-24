// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val; // Node value
        this.left = left; // Left child
        this.right = right; // Right child
    }
}

// Solution class to perform level order traversal (breadth-first traversal) of the binary tree
class Solution {
    levelOrder(root) {
        // Function to perform level order traversal and return a list of values at each level

        let levels = []; // List to store values level by level
        if (root === null) {
            // If the tree is empty, return an empty list
            return levels;
        }

        let level = 0; // Keep track of the current level
        let queue = []; // Queue to process nodes in breadth-first order (FIFO)
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

        return levels; // Return the list of levels with node values
    }
}

// Example usage:

// Construct the binary tree:
//       3
//      / \
//     9   20
//        /  \
//       15   7

let root = new TreeNode(3); // Root node with value 3
root.left = new TreeNode(9); // Left child of root with value 9
root.right = new TreeNode(20); // Right child of root with value 20
root.right.left = new TreeNode(15); // Left child of node 20 with value 15
root.right.right = new TreeNode(7); // Right child of node 20 with value 7

// Instantiate the Solution class and perform level order traversal
let solution = new Solution();
let ans = solution.levelOrder(root); // Perform level order traversal on the constructed tree
console.log(ans); // Output the result list

// Time Complexity: O(N), where N is the number of nodes in the tree
// Space Complexity: O(N), since we store the nodes in a queue and the result list
