class Solution {
    calculate(s) {
        // Initialize pointers and variables to store current, previous values,
        // result, and current operation
        let i = 0;
        let curr = 0, prev = 0, res = 0;
        let curr_operation = "+";

        // Iterate through the string
        while (i < s.length) {
            const curr_char = s[i];

            // If the current character is a digit
            if (!isNaN(curr_char) && curr_char !== ' ') {
                // Construct the full number (in case it's more than one digit)
                while (i < s.length && !isNaN(s[i]) && s[i] !== ' ') {
                    curr = curr * 10 + parseInt(s[i]);
                    i++;
                }
                i--; // Step back one index since the outer loop also increments `i`

                // Perform the operation based on the current operation sign
                if (curr_operation === "+") {
                    res += curr;
                    prev = curr;
                } else if (curr_operation === "-") {
                    res -= curr;
                    prev = -curr;
                } else if (curr_operation === "*") {
                    res -= prev; // Remove the previous value from the result
                    res += prev * curr; // Multiply and add the product to the result
                    prev = curr * prev; // Update `prev` to the product
                } else if (curr_operation === "/") {
                    res -= prev; // Remove the previous value from the result
                    res += Math.trunc(prev / curr); // Divide and add the quotient to the result
                    prev = Math.trunc(prev / curr); // Update `prev` to the quotient
                }

                curr = 0; // Reset `curr` for the next number

            // If the current character is an operator (and not a space)
            } else if (curr_char !== " ") {
                curr_operation = curr_char; // Update the current operation
            }

            i++; // Move to the next character
        }

        return res;
    }
}

// Example usage
const X = new Solution();
console.log(X.calculate("3+2*2"));

// Time Complexity: O(N)
// Space Complexity: O(1)
