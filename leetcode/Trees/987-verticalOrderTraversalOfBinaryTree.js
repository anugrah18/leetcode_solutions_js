// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        // Initialize a binary tree node with a value, left child, and right child
        this.val = val; // Node value
        this.left = left; // Left child
        this.right = right; // Right child
    }
}

// Solution class for performing vertical order traversal of a binary tree
class Solution {
    // Function to perform vertical traversal of a binary tree
    verticalTraversal(root) {
        // List to store tuples of [column, row, node value]
        const nodeList = [];

        // Helper function to perform Depth-First Search (DFS)
        // It tracks the column and row of each node in the tree
        const DFS = (column, row, node) => {
            if (node !== null) {
                // Add the current node's column, row, and value to the nodeList
                nodeList.push([column, row, node.val]);
                // Traverse the left subtree (column - 1, row + 1)
                DFS(column - 1, row + 1, node.left);
                // Traverse the right subtree (column + 1, row + 1)
                DFS(column + 1, row + 1, node.right);
            }
        };

        // Start DFS traversal from the root node, located at column 0 and row 0
        DFS(0, 0, root);

        // Sort the nodeList first by column, then by row, and finally by node value
        nodeList.sort((a, b) => {
            if (a[0] !== b[0]) return a[0] - b[0]; // Compare column
            if (a[1] !== b[1]) return a[1] - b[1]; // Compare row
            return a[2] - b[2]; // Compare node value
        });

        // Initialize variables to track the current column index and list of values in the current column
        let currColumnIndex = nodeList[0][0]; // Start with the first column in the list
        let currColumn = []; // List to store node values for the current column
        const ans = []; // List to store the final result of the vertical traversal

        // Iterate through the sorted nodeList
        for (const [column, , value] of nodeList) {
            // If the current node is in the same column as the previous one
            if (column === currColumnIndex) {
                // Add the node value to the current column list
                currColumn.push(value);
            } else {
                // If the column has changed, append the current column list to the result
                ans.push(currColumn);
                // Update the current column index and start a new column list
                currColumnIndex = column;
                currColumn = [value];
            }
        }

        // Append the last column to the result
        ans.push(currColumn);

        // Return the list of node values grouped by vertical columns
        return ans;
    }
}

// Example usage:
// Construct the following binary tree:
//         3
//       /   \
//      9     20
//           /  \
//         15    7

const root = new TreeNode(3);  // Root node with value 3
root.left = new TreeNode(9);  // Left child of root with value 9
root.right = new TreeNode(20);  // Right child of root with value 20
root.right.left = new TreeNode(15);  // Left child of node 20 with value 15
root.right.right = new TreeNode(7);  // Right child of node 20 with value 7

// Create a Solution object and perform vertical order traversal
const X = new Solution();
console.log(X.verticalTraversal(root));  // Output: [[9], [3, 15], [20], [7]]

// Time Complexity: O(N log N)
// Sorting the node list takes O(N log N) time, where N is the number of nodes.
// Space Complexity: O(N)
// The space complexity is O(N) due to the space required to store the nodeList.
