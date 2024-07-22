class Solution {
    // Method to find the next permutation of the array
    nextPermutation(nums) {
        let i = nums.length - 2;

        // Find the first decreasing element from the end
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }

        if (i >= 0) {
            let j = nums.length - 1;
            // Find the index of the number just larger than nums[i]
            while (j >= 0 && nums[j] <= nums[i]) {
                j--;
            }

            // Swap nums[i] with the number just larger than nums[i]
            [nums[i], nums[j]] = [nums[j], nums[i]];

            // Reverse the numbers after index i
            let start = i + 1;
            let end = nums.length - 1;
            while (start < end) {
                [nums[start], nums[end]] = [nums[end], nums[start]];
                start++;
                end--;
            }
        }

        return nums;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.nextPermutation([1, 2, 3])); // Output: [1, 3, 2]

// Time Complexity: O(N) - Single pass for finding the index and swapping, and another pass for reversing
// Space Complexity: O(1) - In-place modification of the array
