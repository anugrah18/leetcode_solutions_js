class Solution {
    // Method to find the first missing positive integer in an array
    firstMissingPositive(nums) {
        // Replace all negative numbers with zero
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < 0) {
                nums[i] = 0;
            }
        }

        // Use the array itself to mark the presence of numbers
        for (let i = 0; i < nums.length; i++) {
            let val = Math.abs(nums[i]);
            if (1 <= val && val <= nums.length) {
                // Mark the number as seen by negating the value at the index corresponding to the number
                if (nums[val - 1] > 0) {
                    nums[val - 1] *= -1;
                // Edge case for when the value at the index is zero
                } else if (nums[val - 1] === 0) {
                    nums[val - 1] = -1 * (nums.length + 1);
                }
            }
        }

        // Find the first positive index, which corresponds to the missing positive number
        for (let i = 1; i <= nums.length; i++) {
            if (nums[i - 1] >= 0) {
                return i;
            }
        }

        // If all numbers from 1 to nums.length are present, return the next number
        return nums.length + 1;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.firstMissingPositive([1, 2, 0])); // Output: 3

// Time Complexity : O(N)
// Space Complexity : O(1)
