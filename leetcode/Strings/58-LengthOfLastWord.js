class Solution {
    lengthOfLastWord(s) {
        // Initialize the pointer (p) to the end of the string
        // Initialize length to 0, this will store the length of the last word
        let p = s.length;
        let length = 0;

        // Traverse the string backwards
        while (p > 0) {
            // Move the pointer one step back
            p--;

            // If the current character is not a space, increase the length of the last word
            if (s[p] !== ' ') {
                length++;
            } 
            // If a space is encountered after finding some characters, return the length of the last word
            else if (length > 0) {
                return length;
            }
        }

        // Return the length if the loop ends (handles cases with no spaces or trailing spaces)
        return length;
    }
}

// Example usage
const X = new Solution();
console.log(X.lengthOfLastWord("   fly me   to   the moon  "));

// Time Complexity: O(N)
// Space Complexity: O(1)
