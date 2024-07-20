class Solution {
    // Method to move all zeroes in the array to the end, while maintaining the order of non-zero elements
    moveZeroes(nums) {
        // Initialize a pointer for the position to place the next non-zero element
        let ptr = 0;

        // Iterate over the array
        for (let i = 0; i < nums.length; i++) {
            // If the current element is not zero
            if (nums[i] !== 0) {
                // Swap the current element with the element at the ptr index
                [nums[ptr], nums[i]] = [nums[i], nums[ptr]];
                // Increment the ptr to the next position
                ptr++;
            }
        }
    }
}

// Example usage
const solution = new Solution();
const nums = [1, 0, 2, 3, 5, 0, 7, 9];

// Move zeroes to the end
solution.moveZeroes(nums);

// Print the modified array
console.log(nums);

// Time Complexity: O(N) - The code iterates through the array once
// Space Complexity: O(1) - The code uses a constant amount of extra space
