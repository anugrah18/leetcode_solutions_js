class Solution {
    generate(numRows) {
        // Initialize the result with the first row
        let res = [[1]];

        // Generate each row of Pascal's Triangle
        for (let i = 0; i < numRows - 1; i++) {
            // Create a temporary list with a leading and trailing zero
            let temp = [0, ...res[res.length - 1], 0];
            let row = [];
            // Generate the next row by summing adjacent elements in the temp list
            for (let j = 0; j < res[res.length - 1].length + 1; j++) {
                row.push(temp[j] + temp[j + 1]);
            }
            // Append the newly generated row to the result
            res.push(row);
        }

        return res;
    }
}

const X = new Solution();
console.log(X.generate(5));

// Time Complexity: O(N*N)
// Space Complexity: O(N*N)
