class Solution {
    merge(intervals) {
        // Sort the intervals based on the starting times
        intervals.sort((a, b) => a[0] - b[0]);

        // Initialize an empty list to store merged intervals
        const merged = [];

        // Iterate through each interval
        for (const interval of intervals) {
            // If merged is empty or the last interval in merged does not overlap with the current interval
            if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
                // Append the current interval to merged
                merged.push(interval);
            } else {
                // There is an overlap, so merge the current interval with the last interval in merged
                merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
            }
        }

        // Return the list of merged intervals
        return merged;
    }
}

const solution = new Solution();
console.log(solution.merge([[1, 5], [2, 9], [13, 15]]));

// Time complexity: O(nlogn)
// Space complexity: O(n)
