class Solution {
    longestCommonPrefix(strs) {
        // If the list is empty, return an empty string
        if (strs.length === 0) {
            return "";
        }

        // Start with the first string as the initial prefix
        let prefix = strs[0];

        // Iterate through all strings in the list
        for (let i = 1; i < strs.length; i++) {
            // Reduce the prefix length until it matches the beginning of the current string
            while (strs[i].indexOf(prefix) !== 0) {
                prefix = prefix.slice(0, -1);
                // If the prefix becomes empty, return an empty string
                if (prefix === "") {
                    return "";
                }
            }
        }

        return prefix;
    }
}

// Example usage
const X = new Solution();
console.log(X.longestCommonPrefix(["flower", "flow", "flight"])); 

// Time complexity : O(N*M) , where N = number of string, M = length of longest common prefix
// Space complexity : O(1)
