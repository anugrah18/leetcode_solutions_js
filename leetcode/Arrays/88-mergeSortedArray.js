class Solution {
    // Method to merge two sorted arrays into the first array
    merge(nums1, m, nums2, n) {
        // p1 is the pointer for nums1, starting from the end of the valid part
        let p1 = m - 1;
        // p2 is the pointer for nums2, starting from the end
        let p2 = n - 1;
        // p is the pointer for the merged array, starting from the end
        let p = m + n - 1;

        // Iterate while both p1 and p2 are within bounds
        while (p1 >= 0 && p2 >= 0) {
            // Compare elements from the end of nums1 and nums2
            if (nums1[p1] <= nums2[p2]) {
                // If nums2[p2] is greater or equal, place it at the current position of p in nums1
                nums1[p] = nums2[p2];
                p2--;
            } else {
                // If nums1[p1] is greater, place it at the current position of p in nums1
                nums1[p] = nums1[p1];
                p1--;
            }
            p--;
        }

        // If there are remaining elements in nums2, copy them over to nums1
        // No need to copy remaining elements in nums1 because they are already in place
        while (p2 >= 0) {
            nums1[p2] = nums2[p2];
            p2--;
        }
    }
}

// Example usage
const solution = new Solution();
const nums1 = [1, 2, 3, 0, 0, 0]; // Initial nums1 with space for nums2
const m = 3; // Number of valid elements in nums1
const nums2 = [2, 5, 6]; // nums2 to merge
const n = 3; // Number of valid elements in nums2

// Merge nums2 into nums1
solution.merge(nums1, m, nums2, n);

// Print the merged nums1
console.log(nums1);

// Time Complexity: O(m + n) - We process each element once
// Space Complexity: O(1) - In-place merging
