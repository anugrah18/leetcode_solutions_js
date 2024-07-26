class Solution {
    // Method to find the number of overlapping intervals to remove
    eraseOverlapIntervals(intervals) {
        // Sort the intervals based on their starting times
        intervals.sort((a, b) => a[0] - b[0]);

        let res = 0; // Initialize the result counter for the number of intervals to remove
        let prevEnd = intervals[0][1]; // Initialize prevEnd to the end of the first interval

        // Iterate through the intervals starting from the second interval
        for (let i = 1; i < intervals.length; i++) {
            let [start, end] = intervals[i];
            // If there is no overlap, update prevEnd to the current end
            if (start >= prevEnd) {
                prevEnd = end;
            } else {
                // If there is an overlap, increment the result counter
                res++;
                // Update prevEnd to the minimum end time to maximize the non-overlapping space
                prevEnd = Math.min(end, prevEnd);
            }
        }

        // Return the number of intervals to remove to make the rest non-overlapping
        return res;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); // Output: 1

// Time Complexity: O(NlogN)
// Space Complexity: O(N)
