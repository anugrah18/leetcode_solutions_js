class Solution {
    setZeroes(matrix) {
        const ROWS = matrix.length; // Get the number of rows in the matrix
        const COLS = matrix[0].length; // Get the number of columns in the matrix
        let rowZero = false; // Flag to indicate if the first row needs to be set to zero

        // First pass: determine which rows and columns need to be zeroed
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (matrix[r][c] === 0) {
                    matrix[0][c] = 0; // Set the first element of the column to 0
                    if (r > 0) {
                        matrix[r][0] = 0; // Set the first element of the row to 0
                    } else {
                        rowZero = true; // If the zero is in the first row, set the flag
                    }
                }
            }
        }

        // Second pass: use the first row and column as markers to set elements to zero
        for (let r = 1; r < ROWS; r++) {
            for (let c = 1; c < COLS; c++) {
                if (matrix[0][c] === 0 || matrix[r][0] === 0) {
                    matrix[r][c] = 0;
                }
            }
        }

        // If the first element of the matrix is 0, set the first column to zero
        if (matrix[0][0] === 0) {
            for (let r = 0; r < ROWS; r++) {
                matrix[r][0] = 0;
            }
        }

        // If the flag is set, set the first row to zero
        if (rowZero) {
            for (let c = 0; c < COLS; c++) {
                matrix[0][c] = 0;
            }
        }
    }
}

// Example usage
const solution = new Solution();
const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];

console.log('Original Matrix:');
console.log(matrix);

solution.setZeroes(matrix);

console.log('Modified Matrix:');
console.log(matrix);

// Time Complexity: O(M*N)
// Space Complexity: O(1)
