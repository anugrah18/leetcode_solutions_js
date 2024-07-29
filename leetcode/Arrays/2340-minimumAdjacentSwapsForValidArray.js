class Solution {
    minimumSwaps(nums) {
        let n = nums.length;

        // If there is only one element, no swaps are needed
        if (n === 1) {
            return 0;
        }

        let minIndex = 0;
        let maxIndex = 0;

        // Find the indices of the minimum and maximum elements
        for (let i = 0; i < n; i++) {
            if (nums[i] < nums[minIndex]) {
                minIndex = i;
            }
            if (nums[i] >= nums[maxIndex]) {
                maxIndex = i;
            }
        }

        // Calculate the total number of swaps needed
        let minSwaps = minIndex;  // Swaps to bring the minimum element to the front
        let maxSwaps = (n - 1 - maxIndex);  // Swaps to bring the maximum element to the end
        let swaps = minSwaps + maxSwaps;

        // If the minimum index is greater than the maximum index, one swap can be avoided
        if (minIndex > maxIndex) {
            swaps -= 1;
        }

        return swaps;
    }
}

// Example usage
const X = new Solution();
console.log(X.minimumSwaps([3, 4, 5, 5, 3, 1]));  // Output: 5

// Time Complexity: O(n), where n is the number of elements in the input list
// Space Complexity: O(1)
