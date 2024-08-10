class Solution {
    convert(s, numRows) {
        // If there's only one row, the zigzag conversion doesn't change the string
        if (numRows === 1) {
            return s;
        }

        let res = "";  // Resultant string after zigzag conversion

        // Loop through each row in the zigzag pattern
        for (let r = 0; r < numRows; r++) {
            // Calculate the step size to move vertically down the zigzag
            const increment = 2 * (numRows - 1);

            // Traverse the string in increments of 'increment'
            for (let i = r; i < s.length; i += increment) {
                res += s[i];  // Add the current character to the result

                // Handle characters in the middle of the zigzag (not the first or last row)
                if (r > 0 && r < numRows - 1 && i + increment - 2 * r < s.length) {
                    res += s[i + increment - 2 * r];
                }
            }
        }

        return res;  // Return the final zigzag converted string
    }
}

const X = new Solution();
console.log(X.convert("PAYPALISHIRING", 3));

// Time Complexity: O(N), N = Length of the string
// Space Complexity: O(N)
