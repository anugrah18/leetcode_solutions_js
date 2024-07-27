class Solution {
    // Method to rotate the matrix in place
    rotate(matrix) {
        const N = matrix.length; // Get the size of the matrix

        // Transpose the matrix by swapping elements at symmetric positions
        for (let i = 0; i < N; i++) {
            for (let j = i + 1; j < N; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }

        // Reverse each row to get the rotated matrix
        for (let i = 0; i < N; i++) {
            matrix[i].reverse();
        }
    }
}

// Example usage
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Original Matrix:');
console.log(matrix);

const solution = new Solution();
solution.rotate(matrix);

console.log('Rotated Matrix:');
console.log(matrix);

// Time Complexity: O(N^2)
// Space Complexity: O(1)
