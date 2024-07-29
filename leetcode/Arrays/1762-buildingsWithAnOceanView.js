class Solution {
    findBuildings(heights) {
        if (!heights || heights.length === 0) {
            return [];
        }

        let maxHeight = -1;
        let res = [];  // Use an array to collect the indices

        // Traverse the list from the end to the beginning
        for (let i = heights.length - 1; i >= 0; i--) {
            let curHeight = heights[i];
            // If the current building's height is greater than the maximum height seen so far
            if (curHeight > maxHeight) {
                res.unshift(i);  // Add the building index to the front of the array
                maxHeight = curHeight;  // Update the maximum height
            }
        }

        return res;  // Return the array with the building indices
    }
}

// Example usage
const X = new Solution();
console.log(X.findBuildings([4, 2, 3, 1]));  // Output: [0, 2]

// Time Complexity: O(N), where N is the number of buildings
// Space Complexity: O(N), where N is the number of buildings
