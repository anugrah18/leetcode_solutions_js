class Solution {
    // Method to fully justify the text
    fullJustify(words, maxWidth) {
        const res = []; // Result list to store fully justified lines
        let line = []; // Current line being built
        let lineLength = 0; // Current length of characters in the line

        for (const word of words) {
            // Check if adding this word to the current line will exceed maxWidth
            if (lineLength + line.length + word.length > maxWidth) {
                // Calculate the number of spaces to distribute
                const extraSpace = maxWidth - lineLength;
                if (line.length === 1) {
                    // Special case for a line with only one word
                    // Just pad the end of the single word with spaces
                    res.push(line[0] + ' '.repeat(extraSpace));
                } else {
                    // Distribute spaces between words
                    const spaces = Math.floor(extraSpace / (line.length - 1)); // Base number of spaces between words
                    const remainder = extraSpace % (line.length - 1); // Extra spaces to distribute
                    // Adding spaces between words, including extra spaces for uneven distribution
                    for (let i = 0; i < line.length - 1; i++) {
                        line[i] += ' '.repeat(spaces + (i < remainder ? 1 : 0));
                    }
                    res.push(line.join(''));
                }

                // Reset for the next line
                line = [];
                lineLength = 0;
            }

            // Add the current word to the line
            line.push(word);
            lineLength += word.length;
        }

        // Handle the last line: left-justified
        const lastLine = line.join(' ') + ' '.repeat(maxWidth - line.join(' ').length);
        res.push(lastLine);

        return res;
    }
}

// Example usage
const X = new Solution();
console.log(X.fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));

// Time Complexity: O(N), where N is the number of words.
 // Space Complexity: O(N), where N is the number of words (for storing the result).
