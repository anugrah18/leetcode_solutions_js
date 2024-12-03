class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    constructor() {
        this.res = null; // Class variable to store the maximum path sum
    }

    maxPathSum(root) {
        this.res = root.val; // Initialize res with the root value

        const dfs = (node) => {
            if (!node) return 0; // Base case: if the current node is null, return 0

            // Recursively calculate the maximum path sum of the left and right subtrees
            let leftMax = dfs(node.left);
            let rightMax = dfs(node.right);

            // Ignore paths with negative sums
            leftMax = Math.max(0, leftMax);
            rightMax = Math.max(0, rightMax);

            // Update res with the maximum path sum that can include the current node and its subtrees
            this.res = Math.max(this.res, node.val + leftMax + rightMax);

            // Return the maximum path sum that can include the current node and one of its subtrees
            return node.val + Math.max(leftMax, rightMax);
        };

        dfs(root); // Start the DFS traversal from the root
        return this.res; // Return the maximum path sum
    }
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

const solution = new Solution();
console.log(solution.maxPathSum(root)); // Output: 6

// Time Complexity: O(N)
// Space Complexity: O(N)
