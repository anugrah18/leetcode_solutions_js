// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    inorderTraversal(root) {
        let inorderList = [];
        this.inorderTree(root, inorderList);
        return inorderList;
    }

    inorderTree(root, list = []) {
        if (root === null) {
            return;
        }
        this.inorderTree(root.left, list);
        list.push(root.val);
        this.inorderTree(root.right, list);
    }
}

// Example usage:
let tree = new TreeNode(1);
tree.left = null;
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);
tree.right.right = new TreeNode(4);

let solution = new Solution();
let result = solution.inorderTraversal(tree);
console.log(result);

// Time Complexity: O(N)
// Space Complexity: O(N)
