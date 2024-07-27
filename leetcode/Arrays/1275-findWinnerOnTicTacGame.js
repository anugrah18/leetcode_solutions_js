class Solution {
    // Method to determine the result of a Tic-Tac-Toe game given the moves
    tictactoe(moves) {
        const n = 3; // Size of the Tic-Tac-Toe board
        const rows = Array(n).fill(0);
        const cols = Array(n).fill(0);
        let d1 = 0, d2 = 0; // Track the sum of moves for the two diagonals
        let player = 1; // Player 1 is represented by 1 and Player 2 by -1

        // Iterate through each move
        for (let [r, c] of moves) {
            rows[r] += player; // Add the player's value to the row sum
            cols[c] += player; // Add the player's value to the column sum
            if (r === c) {
                d1 += player; // If the move is on the main diagonal, add the player's value to d1
            }
            if (r + c === n - 1) {
                d2 += player; // If the move is on the anti-diagonal, add the player's value to d2
            }

            // Check if the absolute value of any row, column, or diagonal sum is equal to n
            if (Math.abs(rows[r]) === n || Math.abs(cols[c]) === n || Math.abs(d1) === n || Math.abs(d2) === n) {
                return player === 1 ? "A" : "B"; // Return the winner
            }

            player *= -1; // Switch player
        }

        // If all moves have been made and no winner, check if the game is a draw or pending
        return moves.length === n * n ? "Draw" : "Pending";
    }
}

// Example usage
const solution = new Solution();
console.log(solution.tictactoe([[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]])); // Output: "A"

// Time Complexity: O(m) , m = length of moves
// Space Complexity: O(n) , n = length of board
