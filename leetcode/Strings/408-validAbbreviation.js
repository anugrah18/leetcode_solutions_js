class Solution {
    validWordAbbreviation(word, abbr) {
        // Initialize pointers for the word and the abbreviation
        let word_ptr = 0;
        let abbr_ptr = 0;

        // Traverse through both the word and the abbreviation
        while (word_ptr < word.length && abbr_ptr < abbr.length) {
            // Check if the current character in the abbreviation is a digit
            if (!isNaN(abbr[abbr_ptr]) && abbr[abbr_ptr] !== '0') {
                let steps = 0;

                // Calculate the number represented by the digits in the abbreviation
                while (abbr_ptr < abbr.length && !isNaN(abbr[abbr_ptr])) {
                    steps = steps * 10 + parseInt(abbr[abbr_ptr]);
                    abbr_ptr++;
                }

                // Move the word pointer by the calculated steps (skipping letters)
                word_ptr += steps;
            } else {
                // If the characters at the current pointers don't match, return False
                if (word[word_ptr] !== abbr[abbr_ptr]) {
                    return false;
                }
                // Move both pointers forward
                word_ptr++;
                abbr_ptr++;
            }
        }

        // Both pointers should be at the end of their respective strings for a valid abbreviation
        return word_ptr === word.length && abbr_ptr === abbr.length;
    }
}

const X = new Solution();
console.log(X.validWordAbbreviation("internationalization", "i12iz4n")); 

// Time Complexity: O(N), where N is the length of the word
// Space Complexity: O(1)
