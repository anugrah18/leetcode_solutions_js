class Solution {
    // Method to insert a new interval into a list of non-overlapping intervals
    insert(intervals, newInterval) {
        const res = []; // Initialize the result list to store merged intervals

        // Iterate through each interval in the intervals list
        for (let i = 0; i < intervals.length; i++) {
            // If the new interval comes before the current interval without overlap
            if (newInterval[1] < intervals[i][0]) {
                // Append the new interval and the remaining intervals to the result list
                res.push(newInterval);
                return res.concat(intervals.slice(i));
            }
            // If the new interval comes after the current interval without overlap
            else if (newInterval[0] > intervals[i][1]) {
                // Append the current interval to the result list
                res.push(intervals[i]);
            } else {
                // Merge the new interval with the current interval by updating the bounds
                newInterval = [
                    Math.min(newInterval[0], intervals[i][0]),
                    Math.max(newInterval[1], intervals[i][1])
                ];
            }
        }

        // Append the merged new interval to the result list
        res.push(newInterval);
        return res;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.insert([[1, 3], [6, 9]], [2, 5])); // Output: [[1, 5], [6, 9]]

// Time Complexity: O(N)
// Space Complexity: O(N)
