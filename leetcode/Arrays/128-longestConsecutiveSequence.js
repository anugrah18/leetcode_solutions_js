class Solution {
    // Method to find the longest consecutive sequence in an array of numbers
    longestConsecutive(nums) {
        const numSet = new Set(nums); // Create a set from the array to allow O(1) lookups
        let longest = 0; // Variable to track the longest consecutive sequence length

        // Iterate through each number in the array
        for (let n of nums) {
            // Check if the current number is the start of a sequence
            if (!numSet.has(n - 1)) {
                let length = 1; // Initialize the length of the current sequence

                // Iterate through consecutive elements to find the length of the sequence
                while (numSet.has(n + length)) {
                    length++;
                }

                // Update the maximum sequence length
                longest = Math.max(length, longest);
            }
        }

        return longest; // Return the length of the longest consecutive sequence
    }
}

// Example usage
const solution = new Solution();
console.log(solution.longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4

// Time Complexity: O(N)
// Space Complexity: O(N)
