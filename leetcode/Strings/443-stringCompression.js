class Solution {
    // Approach 1: Using an additional string.
    // Time Complexity: O(N)
    // Space Complexity: O(N)
    compress_1(chars) {
        let ans = "";  // Initialize an empty string to store the compressed characters.
        let count = 0;  // Initialize a counter to count occurrences of each character.

        for (const c of chars) {
            if (ans.length === 0) {
                // If ans is empty, add the first character and reset the count to 1.
                ans += c;
                count = 1;
            } else if (ans[ans.length - 1] === c) {
                // If the current character matches the last character in ans, increment the count.
                count += 1;
            } else {
                // If the current character is different, append the count (if > 1) and the new character.
                if (count !== 1) {
                    ans += String(count);
                }
                ans += c;
                count = 1;  // Reset the count for the new character.
            }
        }

        // After the loop, append the count for the last set of characters (if > 1).
        if (count !== 1) {
            ans += String(count);
        }

        const N = Math.min(ans.length, chars.length);  // Determine the minimum length to avoid exceeding the original array size.

        // Copy the compressed characters from ans back to chars.
        for (let i = 0; i < N; i++) {
            chars[i] = ans[i];
        }

        return N;  // Return the length of the compressed string.
    }

    // Approach 2: In-place compression.
    // Time Complexity: O(N)
    // Space Complexity: O(1)
    compress_2(chars) {
        let readIndex = 0;
        let writeIndex = 0;  // Initialize two pointers for reading and writing.

        while (readIndex < chars.length) {
            let count = 0;  // Initialize a counter to count occurrences of each character.
            const letter = chars[readIndex];  // Get the current character.

            // Count the occurrences of the current character.
            while (readIndex < chars.length && chars[readIndex] === letter) {
                readIndex += 1;
                count += 1;
            }

            // Write the character at the writeIndex and increment the writeIndex.
            chars[writeIndex] = letter;
            writeIndex += 1;

            // If the count is greater than 1, convert the count to a string and write each digit.
            if (count > 1) {
                for (const s of String(count)) {
                    chars[writeIndex] = s;
                    writeIndex += 1;
                }
            }
        }

        return writeIndex;  // Return the length of the compressed string.
    }
}

// Example usage
const X = new Solution();
console.log(X.compress_1(["a","a","b","b","c","c","c"])); 
console.log(X.compress_2(["a","a","b","b","c","c","c"]));  
