class Solution {
    // Method to find the maximum area of a piece of cake after making horizontal and vertical cuts
    maxArea(h, w, horizontalCuts, verticalCuts) {
        // Add the edges of the cake to the cuts list
        horizontalCuts.push(0);
        horizontalCuts.push(h);
        verticalCuts.push(0);
        verticalCuts.push(w);

        // Sort the cuts to find the maximum differences
        horizontalCuts.sort((a, b) => a - b);
        verticalCuts.sort((a, b) => a - b);

        // Initialize variables to store the maximum differences
        let h_diff = -1;
        let w_diff = -1;

        // Find the maximum difference between consecutive horizontal cuts
        for (let i = 1; i < horizontalCuts.length; i++) {
            h_diff = Math.max(h_diff, horizontalCuts[i] - horizontalCuts[i - 1]);
        }

        // Find the maximum difference between consecutive vertical cuts
        for (let i = 1; i < verticalCuts.length; i++) {
            w_diff = Math.max(w_diff, verticalCuts[i] - verticalCuts[i - 1]);
        }

        // Calculate the maximum area and return it modulo 10^9 + 7
        return (h_diff * w_diff) % 1000000007;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.maxArea(5, 4, [1, 2, 4], [1, 3])); // Output: 4

// Time Complexity : O(Nlog(N) + Mlog(M)) - Due to sorting the cuts
// Space Complexity : O(1) - Constant space usage, excluding the input and output
