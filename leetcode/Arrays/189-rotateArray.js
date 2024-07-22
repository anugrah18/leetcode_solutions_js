class Solution {
    // Method to rotate the array using reversal
    rotate_I(nums, k) {
        // Helper function to reverse a portion of the array
        function reverse(arr, start, end) {
            while (start < end) {
                // Swap the elements at start and end
                [arr[start], arr[end]] = [arr[end], arr[start]];
                start++;
                end--;
            }
        }

        // Length of the array
        const n = nums.length;
        // Normalize k to ensure it's within the bounds of the array length
        k = k % n;

        // Reverse the entire array
        reverse(nums, 0, n - 1);
        // Reverse the first k elements
        reverse(nums, 0, k - 1);
        // Reverse the remaining elements
        reverse(nums, k, n - 1);

        // Return the rotated array
        return nums;
    }

    // Method to rotate the array using array slicing
    rotate_II(nums, k) {
        // Normalize k to ensure it's within the bounds of the array length
        k = k % nums.length;
        // Rotate the array using slicing
        nums.unshift(...nums.splice(nums.length - k, k));

        // Return the rotated array
        return nums;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.rotate_I([1, 2, 3, 4, 5, 6, 7], 4)); // Output: [4, 5, 6, 7, 1, 2, 3]
console.log(solution.rotate_II([1, 2, 3, 4, 5, 6, 7], 4)); // Output: [4, 5, 6, 7, 1, 2, 3]

// Time Complexity: O(N) - Both methods iterate over the array
// Space Complexity: O(1) for rotate_I - in-place rotation; O(K) for rotate_II due to slicing
