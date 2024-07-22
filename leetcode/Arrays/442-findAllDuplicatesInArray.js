class Solution {
    // Method to find all duplicate numbers in the array
    findDuplicates(nums) {
        // Initialize a set to store the duplicate numbers
        const ans = new Set();

        // Iterate through each number in the array
        for (let n of nums) {
            // If the number at the index abs(n) - 1 is negative, it means the number n is a duplicate
            if (nums[Math.abs(n) - 1] < 0) {
                // Add the absolute value of n to the set of duplicates
                ans.add(Math.abs(n));
            } else {
                // Otherwise, negate the number at the index abs(n) - 1 to mark it as visited
                nums[Math.abs(n) - 1] *= -1;
            }
        }

        // Convert the set of duplicates to an array and return it
        return Array.from(ans);
    }
}

// Example usage
const solution = new Solution();
console.log(solution.findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [2, 3]

// Time Complexity: O(N) - Each element is processed once
// Space Complexity: O(N) - Space used by the Set to store duplicates
