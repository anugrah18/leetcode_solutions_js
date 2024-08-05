class Solution {
    // Method to reverse the words in a string
    reverseWords(s) {
        // Initialize variables
        const words = [];
        let word = "";

        // Manually split the string into words
        for (const char of s) {
            if (char === " ") {
                if (word) {
                    words.push(word);
                    word = "";
                }
            } else {
                word += char;
            }
        }

        // Add the last word if there's any
        if (word) {
            words.push(word);
        }

        // Create an empty list to hold the reversed words
        const reversedWords = [];

        // Manually reverse the list of words
        for (let i = words.length - 1; i >= 0; i--) {
            reversedWords.push(words[i]);
        }

        // Join the reversed list with a single space
        const reversedString = reversedWords.join(' ');

        return reversedString;
    }
}

const X = new Solution();
console.log(X.reverseWords("    hello    world")); 

// Time Complexity: O(N)
// Space Complexity: O(N)
