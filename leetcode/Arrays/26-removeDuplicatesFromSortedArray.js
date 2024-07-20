class Solution {
    // Method to remove duplicates from a sorted array in-place
    removeDuplicates(nums) {
        // If the list is empty, return 0
        if (nums.length === 0) {
            return 0;
        }

        // Initialize a pointer to track the position of the last unique element
        let i = 0;

        // Iterate over the list starting from the second element
        for (let j = 1; j < nums.length; j++) {
            // If the current element is not equal to the element at pointer i
            if (nums[j] !== nums[i]) {
                // Move the pointer i to the next position
                i++;
                // Update the element at pointer i to the current element
                nums[i] = nums[j];
            }
        }

        // Return the length of the list with unique elements
        return i + 1;
    }
}

// Example usage
const solution = new Solution();
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// Get the length of the array with unique elements
const length = solution.removeDuplicates(nums);

// Print the length and the modified array
console.log(length); // Output: 5
console.log(nums.slice(0, length)); // Output: [0, 1, 2, 3, 4]

// Time Complexity: O(N) - The code iterates through the list once
// Space Complexity: O(1) - The code uses a constant amount of extra space
