class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function dfs(node) {
    if (!node) return;

    console.log(node.val);
    dfs(node.left);
    dfs(node.right);
}

class Codec {
    serialize(root) {
        // Encodes a tree to a single string.
        const res = []; // Array to store the serialized tree

        const dfs = (node) => {
            if (!node) {
                res.push("N"); // Append "N" to represent null nodes
                return;
            }
            res.push(String(node.val)); // Append the node's value
            dfs(node.left); // Serialize left subtree
            dfs(node.right); // Serialize right subtree
        };

        dfs(root); // Start DFS traversal from the root
        return res.join(","); // Join the array into a single string
    }

    deserialize(data) {
        // Decodes a string to a tree.
        const vals = data.split(","); // Split the string into an array
        let i = 0; // Index to track the current position in the array

        const dfs = () => {
            if (vals[i] === "N") {
                i++; // Move to the next value
                return null; // Return null for "N"
            }
            const node = new TreeNode(parseInt(vals[i], 10)); // Create a new node
            i++; // Move to the next value
            node.left = dfs(); // Deserialize left subtree
            node.right = dfs(); // Deserialize right subtree
            return node;
        };

        return dfs(); // Start DFS traversal
    }
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

const codec = new Codec();
const serialized = codec.serialize(root);
const deserialized = codec.deserialize(serialized);

console.log(serialized); // Output: "1,2,N,N,3,4,N,N,5,N,N"
dfs(deserialized); // Output the tree structure (preorder traversal)

// Time Complexity: O(N)
// Space Complexity: O(N)
