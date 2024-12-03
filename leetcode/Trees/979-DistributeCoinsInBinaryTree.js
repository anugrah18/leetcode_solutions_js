class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val; // Number of coins in this node
        this.left = left; // Left child node
        this.right = right; // Right child node
    }
}

class Solution {
    constructor() {
        this.ans = 0; // Initialize the answer (number of moves) to 0
    }

    distributeCoins(root) {
        const dfs = (node) => {
            // Perform a depth-first search (DFS) to calculate the excess coins at each node
            if (!node) return 0; // Base case: if the node is null, return 0

            // Recursively calculate the excess coins for the left and right subtrees
            const leftExcess = dfs(node.left);
            const rightExcess = dfs(node.right);

            // Update the total moves required by adding the absolute excess coins from the left and right subtrees
            this.ans += Math.abs(leftExcess) + Math.abs(rightExcess);

            // Return the net excess coins for the current node
            // Net coins = coins at current node + excess from left subtree + excess from right subtree - 1 (coin needed for the node itself)
            return node.val + leftExcess + rightExcess - 1;
        };

        dfs(root); // Start the DFS traversal from the root node
        return this.ans; // Return the total number of moves required
    }
}

// Example tree:
//       3
//      / \
//     0   0
// Expected output: 2 (move 2 coins from the root to its two children)

const root = new TreeNode(3); // Root has 3 coins
root.left = new TreeNode(0); // Left child has 0 coins
root.right = new TreeNode(0); // Right child has 0 coins

const solution = new Solution();
console.log(solution.distributeCoins(root)); // Output: 2

// Time Complexity: O(N)
// Space Complexity: O(H), where H is the height of the tree
