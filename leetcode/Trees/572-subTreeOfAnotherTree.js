// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Solution class to check if subRoot is a subtree of root
class Solution {
    // Function to check if subRoot is a subtree of root
    isSubtree(root, subRoot) {
        // If subRoot is null, it's always a subtree
        if (!subRoot) return true;
        // If root is null but subRoot is not, it's not a subtree
        if (!root) return false;

        // If the trees rooted at current nodes are the same, return true
        if (this.isSameTree(root, subRoot)) return true;

        // Recursively check the left and right subtrees of the root
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    // Helper function to check if two trees are identical
    isSameTree(p, q) {
        // If both trees are null, they are identical
        if (!p && !q) return true;
        // If one tree is null and the other is not, they are not identical
        if (!p || !q) return false;

        // Check if the current nodes are the same and recursively check left and right subtrees
        return p.val === q.val && this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}

// Example usage:
// Construct the main tree:
//         3
//       /   \
//      4     5
//     / \
//    1   2

const root = new TreeNode(3);       // Root node with value 3
root.left = new TreeNode(4);        // Left child of root with value 4
root.right = new TreeNode(5);       // Right child of root with value 5
root.left.left = new TreeNode(1);   // Left child of node 4 with value 1
root.left.right = new TreeNode(2);  // Right child of node 4 with value 2

// Construct the subtree:
//       4
//      / \
//     1   2

const subRoot = new TreeNode(4);    // Root node of subRoot with value 4
subRoot.left = new TreeNode(1);     // Left child of subRoot with value 1
subRoot.right = new TreeNode(2);    // Right child of subRoot with value 2

// Create an instance of Solution and check if subRoot is a subtree of root
const X = new Solution();
console.log(X.isSubtree(root, subRoot));   // Output should be true, as subRoot is a subtree of root

// Time Complexity: O(M * N)
// Where M is the number of nodes in subTree, and N is the number of nodes in the main Tree.
// This is because for each node in the main tree, we may have to check the entire subtree.

// Space Complexity: O(M + N)
// Due to the recursion stack in the worst case, when both trees are completely skewed.
