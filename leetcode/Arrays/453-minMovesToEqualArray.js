class Solution {
    // Method to find the minimum number of moves to make all elements equal
    minMoves(nums) {
        // Sort the array of numbers
        nums = nums.sort((a, b) => a - b);

        // Initialize the counter for the number of moves
        let ans = 0;
        // Initialize the index of the smallest element
        let i = 0;

        // Iterate from the second element to the last element
        for (let j = 1; j < nums.length; j++) {
            // Add the difference between the current element and the smallest element to the count
            ans += nums[j] - nums[i];
        }

        // Return the total number of moves
        return ans;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.minMoves([1, 2, 3])); // Output: 3

// Time Complexity: O(N log N) - Due to the sorting step
// Space Complexity: O(1) - Constant space usage, excluding the input and output
