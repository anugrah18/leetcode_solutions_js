class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    isSibling(root, x, y) {
        if (!root) return false;

        // Check if the current root's left and right children are x and y (or y and x)
        return (
            (root.left && root.left.val === x && root.right && root.right.val === y) ||
            (root.left && root.left.val === y && root.right && root.right.val === x) ||
            this.isSibling(root.left, x, y) ||
            this.isSibling(root.right, x, y)
        );
    }

    level(root, p, lvl) {
        if (!root) return 0;
        if (root.val === p) return lvl;

        // Check the left subtree
        const leftLevel = this.level(root.left, p, lvl + 1);
        if (leftLevel !== 0) return leftLevel;

        // Otherwise, check the right subtree
        return this.level(root.right, p, lvl + 1);
    }

    isCousins(root, x, y) {
        // Check if both nodes are at the same level and are not siblings
        return (
            this.level(root, x, 0) === this.level(root, y, 0) &&
            !this.isSibling(root, x, y)
        );
    }
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const solution = new Solution();
console.log(solution.isCousins(root, 4, 6)); // Output: true

// Time Complexity: O(N), where N is the number of nodes in the binary tree.
// Space Complexity: O(N), where N is the number of nodes in the binary tree.
