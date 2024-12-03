class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    kthSmallest(root, k) {
        const ans = [];

        const inorder = (node) => {
            if (!node) return;
            inorder(node.left);
            ans.push(node.val);
            inorder(node.right);
        };

        inorder(root);
        return ans[k - 1];
    }
}

// Example usage:
const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);

const solution = new Solution();
console.log(solution.kthSmallest(root, 1)); // Output: 1

// Time Complexity: O(N)
// Space Complexity: O(N)
