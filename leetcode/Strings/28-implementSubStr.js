class Solution {
    strStr(haystack, needle) {
        // Edge case: If both haystack and needle are empty strings, return 0
        if (haystack === "" && needle === "") {
            return 0;
        }

        // If the needle is an empty string, return 0
        if (needle === "") {
            return 0;
        }

        // Iterate over each possible starting position in the haystack
        for (let i = 0; i <= haystack.length - needle.length; i++) {
            let j = 0;
            // Check if the substring starting at i matches the needle
            while (j < needle.length && haystack[i + j] === needle[j]) {
                j++;
            }
            // If the entire needle is matched, return the starting index
            if (j === needle.length) {
                return i;
            }
        }

        // If no match is found, return -1
        return -1;
    }
}

// Example usage
const X = new Solution();
console.log(X.strStr("liver", "ve"));

// Time Complexity : O(m) , m=len(haystack)
// Space Complexity : O(1)