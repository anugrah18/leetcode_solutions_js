class Solution {
    // Method to calculate the depth sum of a nested list
    depthSum(nestedList) {
        // Helper function to convert a list to a nested list (simulates e.getList())
        function getList(list) {
            let ans = [];
            for (let lt of list) {
                ans.push(lt);
            }
            return ans;
        }

        // Helper function for depth-first search
        function dfs(lt, lvl) {
            let ans = 0;
            for (let e of lt) {
                if (typeof e === 'number') {
                    // If the element is a number, multiply it by its depth level
                    // and add the result to the accumulated sum.
                    ans += e * lvl;
                } else {
                    // If the element is a list, recursively call dfs on this list
                    // with an incremented depth level (lvl + 1) and add the result to ans.
                    ans += dfs(getList(e), lvl + 1);
                }
            }
            return ans;
        }

        return dfs(nestedList, 1);
    }
}

// Example usage
const solution = new Solution();
console.log(solution.depthSum([1, [4, [6]]])); // Output: 27

// Time Complexity : O(N)
// Space Complexity : O(N)
