// Definition for a binary tree node
class Node {
    constructor(val = 0, left = null, right = null) {
        // Initialize a binary tree node with a value, left child, and right child
        this.val = val; // Node value
        this.left = left; // Left child
        this.right = right; // Right child
    }

    // Method to calculate the maximum depth of the binary tree using recursion
    maxDepth(root) {
        if (root === null) {
            // If the current node is null, return 0 (base case)
            return 0;
        } else {
            // Recursively calculate the depth of the left and right subtrees
            let lHeight = this.maxDepth(root.left); // Left subtree height
            let rHeight = this.maxDepth(root.right); // Right subtree height
            // The maximum depth of the tree is the greater of the left and right heights + 1 for the current node
            return Math.max(lHeight, rHeight) + 1;
        }
    }

    // Method to calculate the maximum depth of the binary tree using iteration (DFS)
    maxDepth_II(root) {
        let stack = [];
        if (root !== null) {
            // Start with depth 1 and the root node
            stack.push([1, root]);
        }

        let depth = 0; // Initialize the depth to 0
        while (stack.length > 0) {
            // Pop the top element of the stack (current_depth, current_node)
            let [current_depth, node] = stack.pop();
            if (node !== null) {
                // Update the maximum depth encountered so far
                depth = Math.max(depth, current_depth);
                // Push the left and right children to the stack with their corresponding depths
                stack.push([current_depth + 1, node.left]);
                stack.push([current_depth + 1, node.right]);
            }
        }

        // Return the maximum depth
        return depth;
    }
}

// Example usage:

// Construct the binary tree:
//         3
//        / \
//       9  20
//          / \
//         15  7

let tree = new Node(3); // Root node with value 3
tree.left = new Node(9); // Left child of root with value 9
tree.right = new Node(20); // Right child of root with value 20
tree.right.left = new Node(15); // Left child of node 20 with value 15
tree.right.right = new Node(7); // Right child of node 20 with value 7

// Print the maximum depth of the tree using recursion
console.log(tree.maxDepth(tree)); // Output: 4 (The maximum depth of the tree is 4)

// Print the maximum depth of the tree using iteration
console.log(tree.maxDepth_II(tree)); // Output: 4 (The maximum depth of the tree is 4)

// Time Complexity: O(N), where N is the number of nodes in the tree (each node is visited once)
// Space Complexity: O(N), due to the recursion stack or iterative stack in the worst case
