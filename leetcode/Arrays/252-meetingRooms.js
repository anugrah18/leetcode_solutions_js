class Solution {
    // Method to determine if a person can attend all meetings without overlapping
    canAttendMeetings(intervals) {
        // Sort the intervals based on their starting times
        intervals = intervals.sort((a, b) => a[0] - b[0]);

        // Iterate through the intervals starting from the second interval
        for (let i = 1; i < intervals.length; i++) {
            // If the end time of the previous interval is greater than the start time of the current interval
            if (intervals[i - 1][1] > intervals[i][0]) {
                // Return false since the meetings overlap
                return false;
            }
        }

        // Return true if no overlapping intervals are found
        return true;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.canAttendMeetings([[0, 30], [5, 10], [15, 20]])); // Output: false

// Time Complexity : O(N log N) - Due to the sorting step
// Space Complexity : O(1) - Constant space usage, excluding the input and output
