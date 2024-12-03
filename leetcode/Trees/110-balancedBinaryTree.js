class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val; // Node value
        this.left = left; // Left child
        this.right = right; // Right child
    }
}

class Solution {
    isBalanced(root) {
        // Helper function to perform depth-first search (DFS) and check if the tree is balanced
        const dfs = (node) => {
            if (!node) {
                // If the node is null, it's considered balanced with a height of 0
                return [true, 0];
            }

            // Recursively check the left and right subtrees
            const left = dfs(node.left); // Returns [isBalanced, height] for the left subtree
            const right = dfs(node.right); // Returns [isBalanced, height] for the right subtree

            // A tree is balanced if both left and right subtrees are balanced and the height difference is ≤ 1
            const balanced =
                left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

            // Return whether the tree rooted at 'node' is balanced and its height
            return [balanced, 1 + Math.max(left[1], right[1])];
        };

        // Start the DFS traversal and return whether the entire tree is balanced
        return dfs(root)[0];
    }
}

// Example usage:

// Construct the binary tree:
//        3
//       / \
//      9  20
//         / \
//        15  7

const root = new TreeNode(3); // Root node with value 3
root.left = new TreeNode(9); // Left child of root with value 9
root.right = new TreeNode(20); // Right child of root with value 20
root.right.left = new TreeNode(15); // Left child of node 20 with value 15
root.right.right = new TreeNode(7); // Right child of node 20 with value 7

// Instantiate the Solution class and check if the binary tree is balanced
const solution = new Solution();
console.log(solution.isBalanced(root)); // Output: true if the tree is balanced, otherwise false

// Time Complexity: O(N), where N is the number of nodes in the tree (each node is visited once)
// Space Complexity: O(N), due to the recursion stack in a skewed tree scenario
