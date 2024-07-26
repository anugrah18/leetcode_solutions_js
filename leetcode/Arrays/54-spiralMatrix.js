class Solution {
    // Method to return the elements of the matrix in spiral order
    spiralOrder(matrix) {
        const res = []; // Initialize an array to store the result
        let left = 0, right = matrix[0].length; // Define left and right boundaries
        let top = 0, bottom = matrix.length; // Define top and bottom boundaries

        // Continue until the boundaries overlap
        while (left < right && top < bottom) {
            // Traverse the top row from left to right
            for (let i = left; i < right; i++) {
                res.push(matrix[top][i]);
            }
            top++; // Move the top boundary down

            // Traverse the right column from top to bottom
            for (let i = top; i < bottom; i++) {
                res.push(matrix[i][right - 1]);
            }
            right--; // Move the right boundary left

            // Check if the boundaries overlap after adjusting top and right
            if (!(left < right && top < bottom)) {
                break; // Break the loop if boundaries overlap
            }

            // Traverse the bottom row from right to left
            for (let i = right - 1; i >= left; i--) {
                res.push(matrix[bottom - 1][i]);
            }
            bottom--; // Move the bottom boundary up

            // Traverse the left column from bottom to top
            for (let i = bottom - 1; i >= top; i--) {
                res.push(matrix[i][left]);
            }
            left++; // Move the left boundary right
        }

        return res; // Return the result array
    }
}

// Example usage
const solution = new Solution();
console.log(solution.spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Time Complexity: O(N)
// Space Complexity: O(N) (since the output array res stores all elements)
