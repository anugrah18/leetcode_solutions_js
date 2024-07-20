class Solution {
    // Method to add one to a number represented as an array of digits
    plusOne(digits) {
        // Initialize carry to 1 because we are adding one to the number
        let carry = 1;

        // Iterate over the digits from the last to the first
        for (let i = digits.length - 1; i >= 0; i--) {
            // Calculate the new value at the current position
            digits[i] = (digits[i] + carry) % 10;
            // Calculate the carry for the next position
            carry = Math.floor((digits[i] + carry) / 10);
        }

        // If there is a carry left after the last digit, add it to the front
        if (carry > 0) {
            digits.unshift(carry);
        }

        return digits;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.plusOne([9, 9]));

// Time Complexity: O(N) - The code processes each digit once
// Space Complexity: O(1) - The code uses a constant amount of extra space
