class Solution {
    shortestDistance(wordsDict, word1, word2) {
        // Initialize indices for word1 (m) and word2 (n) to a large value
        let m = Infinity;
        let n = Infinity;

        // Initialize the answer (ans) to a large value
        let ans = Infinity;

        // Iterate through the words in the list with their indices
        for (let i = 0; i < wordsDict.length; i++) {
            let word = wordsDict[i];

            // If the current word matches word1, update its index (m)
            if (word === word1) {
                m = i;
            }

            // If the current word matches word2, update its index (n)
            if (word === word2) {
                n = i;
            }

            // Update the shortest distance by comparing the current distance with the previous minimum
            ans = Math.min(ans, Math.abs(m - n));
        }

        // Return the shortest distance found
        return ans;
    }
}

const X = new Solution();
console.log(X.shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice")); 

// Time Complexity: O(N), where N is the number of words in wordsDict
// Space Complexity: O(1) 
