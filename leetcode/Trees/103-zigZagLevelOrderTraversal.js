// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        // Initialize a binary tree node with a value, left child, and right child
        this.val = val; // Node value
        this.left = left; // Left child
        this.right = right; // Right child
    }
}

// Solution class to traverse the tree in a zigzag level order manner
class Solution {
    // Function to perform zigzag level order traversal of a binary tree
    zigzagLevelOrder(root) {
        // If the root is null, return an empty array
        const levels = [];
        if (!root) {
            return levels;
        }

        // Initialize level index and a queue for breadth-first search (BFS)
        let level = 0;
        const queue = [root]; // Start with the root node

        // Perform level-order traversal using BFS
        while (queue.length > 0) {
            levels.push([]); // Append an empty array for the current level
            const lvlLength = queue.length; // Number of nodes at the current level

            // Iterate through the nodes at the current level
            for (let i = 0; i < lvlLength; i++) {
                // Pop the first node from the queue
                const node = queue.shift();
                // Add the node's value to the current level's array
                levels[level].push(node.val);

                // If the node has a left child, add it to the queue
                if (node.left) {
                    queue.push(node.left);
                }
                // If the node has a right child, add it to the queue
                if (node.right) {
                    queue.push(node.right);
                }
            }

            // Move to the next level
            level++;
        }

        // After collecting all levels, reverse every second level to create the zigzag pattern
        for (let i = 0; i < levels.length; i++) {
            if (i % 2 === 1) { // Reverse the array at odd levels (1, 3, 5, etc.)
                levels[i].reverse();
            }
        }

        // Return the array of levels with zigzag ordering
        return levels;
    }
}

// Example usage:

// Construct the following binary tree:
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7

const tree = new TreeNode(1);  // Root node with value 1
tree.left = new TreeNode(2);  // Left child of root with value 2
tree.right = new TreeNode(3);  // Right child of root with value 3
tree.left.left = new TreeNode(4);  // Left child of node 2 with value 4
tree.left.right = new TreeNode(5);  // Right child of node 2 with value 5
tree.right.left = new TreeNode(6);  // Left child of node 3 with value 6
tree.right.right = new TreeNode(7);  // Right child of node 3 with value 7

// Create a Solution object and perform zigzag level order traversal
const X = new Solution();
console.log(X.zigzagLevelOrder(tree));  // Output: [[1], [3, 2], [4, 5, 6, 7]]

// Time Complexity: O(N), where N is the number of nodes in the tree (each node is visited once)
// Space Complexity: O(N), due to the space required to store the result and the queue
