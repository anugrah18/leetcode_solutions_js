class Solution {
    constructor() {
        this.count = 0; // Initialize a class-level variable to keep track of the number of palindromic substrings
    }

    countSubstrings(s) {
        // Iterate over each character in the string as the potential center of a palindrome
        for (let i = 0; i < s.length; i++) {
            // Expand around a single character as the middle of the palindrome (odd-length palindromes)
            this.expandFromMiddle(s, i, i);
            // Expand around two adjacent characters as the middle of the palindrome (even-length palindromes)
            this.expandFromMiddle(s, i, i + 1);
        }
        return this.count; // Return the total count of palindromic substrings
    }

    expandFromMiddle(s, i, j) {
        // Continue expanding as long as the characters at the left (i) and right (j) indices are the same
        while (i >= 0 && j < s.length && s[i] === s[j]) {
            this.count += 1; // Increment the count for each valid palindrome found
            i -= 1; // Move left pointer outward
            j += 1; // Move right pointer outward
        }
    }
}

// Example usage
const X = new Solution();
console.log(X.countSubstrings("abc"));

// Time Complexity: O(N^2), where N is the length of the string.
// Space Complexity: O(1).
