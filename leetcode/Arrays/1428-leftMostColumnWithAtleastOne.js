// Class to represent a binary matrix
class BinaryMatrix {
    constructor(mat) {
        this.mat = mat;
    }

    // Method to get the value at a specific position in the matrix
    get(row, col) {
        return this.mat[row][col];
    }

    // Method to get the dimensions of the matrix
    dimensions() {
        return [this.mat.length, this.mat[0].length];
    }
}

// Class to solve the problem of finding the left-most column with at least one '1'
class Solution {
    leftMostColumnWithOne(binaryMatrix) {
        // Get the dimensions of the matrix
        const [rows, cols] = binaryMatrix.dimensions();

        // Start from the top-right corner of the matrix
        let currentRow = 0;
        let currentCol = cols - 1;

        // Variable to store the result, initialized to -1
        let result = -1;

        // Traverse the matrix
        while (currentRow < rows && currentCol >= 0) {
            if (binaryMatrix.get(currentRow, currentCol) === 1) {
                // If a '1' is found, update result and move left
                result = currentCol;
                currentCol--;
            } else {
                // If a '0' is found, move down
                currentRow++;
            }
        }

        return result;
    }
}

// Example usage
const mat = [[0, 0], [1, 1]];
const binaryMatrix = new BinaryMatrix(mat);
const solution = new Solution();
const result = solution.leftMostColumnWithOne(binaryMatrix);
console.log(result); // Output: 0

// Time Complexity: O(rows + cols) - We potentially traverse the entire matrix once
// Space Complexity: O(1) - Constant space for variables
