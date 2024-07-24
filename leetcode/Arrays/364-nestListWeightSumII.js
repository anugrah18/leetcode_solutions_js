class Solution {
    // Method to calculate the depth sum of a nested list
    depthSum(nestedList) {
        // Helper function to convert a list to a nested list (simulates e.getList())
        function getList(lst) {
            let ans = [];
            for (let lt of lst) {
                ans.push(lt);
            }
            return ans;
        }

        // Helper function to determine the maximum depth of the nested list
        function depth(nestedList) {
            let curr_depth = 1;
            for (let x of nestedList) {
                if (typeof x !== 'number') {
                    // If x is a list, recursively find the maximum depth of the list
                    if (getList(x).length > 0) {
                        curr_depth = Math.max(curr_depth, 1 + depth(getList(x)));
                    } else {
                        curr_depth = Math.max(curr_depth, depth(getList(x)));
                    }
                }
            }
            return curr_depth;
        }

        // Depth-first search function to calculate weighted sum based on depth
        function dfs(lt, lvl, max_depth) {
            let ans = 0;
            for (let e of lt) {
                if (typeof e === 'number') {
                    // If the element is an integer, multiply it by the weight based on its depth
                    ans += e * (max_depth - lvl + 1);
                } else {
                    // If the element is a list, recursively call dfs on this list
                    // with an incremented depth level (lvl + 1) and add the result to ans.
                    ans += dfs(getList(e), lvl + 1, max_depth);
                }
            }
            return ans;
        }

        // Determine the maximum depth of the nested list
        const max_depth = depth(nestedList);
        // Initiate DFS with the initial level set to 1 and the maximum depth
        return dfs(nestedList, 1, max_depth);
    }
}

// Example usage
const solution = new Solution();
console.log(solution.depthSum([1, [4, [6]]])); // Output: 27

// Time Complexity : O(N)
// Space Complexity : O(N)
