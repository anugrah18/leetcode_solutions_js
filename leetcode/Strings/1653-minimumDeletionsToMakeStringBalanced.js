class Solution {
    minimumDeletions(s) {
        let ht = {}; // Create a hash table to store character counts

        // Count the occurrences of each character in the string
        for (let c of s) {
            ht[c] = (ht[c] || 0) + 1;
        }

        let a = ht['a'] || 0; // Number of 'a's in the string
        let b = 0; // Counter for the number of 'b's encountered so far
        let ans = s.length; // Initialize the minimum deletions to the length of the string

        // Iterate through each character in the string
        for (let c of s) {
            // Update the minimum deletions needed
            ans = Math.min(ans, a + b);
            // Adjust the counts based on the current character
            if (c === 'a') {
                a -= 1;
            } else {
                b += 1;
            }
        }

        // Check the final configuration
        ans = Math.min(ans, a + b);

        return ans;
    }
}

// Example usage
const X = new Solution();
console.log(X.minimumDeletions("aababbab"));  // Output: 2

// Time Complexity: O(N), where N is the length of the string.
// Space Complexity: O(N), primarily due to the hash table.
