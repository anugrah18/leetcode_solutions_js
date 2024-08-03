class Solution {
    rankTeam(votes) {
        // Get the length of a single vote string (number of teams)
        const x = votes[0].length;
        // Object to store the rank counts for each team
        const rank = {};

        // Iterate over each vote
        for (const word of votes) {
            // Iterate over each character in the vote (each team)
            for (let i = 0; i < word.length; i++) {
                const char = word[i];
                // If the team is not yet in the rank object, add it with a list of zeros
                if (!rank[char]) {
                    rank[char] = Array(x).fill(0);
                }
                // Increment the count of the team's rank at position i
                rank[char][i] += 1;
            }
        }

        // Convert the rank object to an array of entries for sorting
        const rankArray = Object.entries(rank);
        // Sort the teams first by their rank counts in descending order, then by team letter in ascending order
        rankArray.sort((a, b) => {
            for (let i = 0; i < x; i++) {
                if (a[1][i] !== b[1][i]) {
                    return b[1][i] - a[1][i];
                }
            }
            return a[0] < b[0] ? -1 : 1;
        });

        // Extract the sorted team letters
        const sortedTeams = rankArray.map(entry => entry[0]);
        // Join the sorted team letters into a single string and return it
        return sortedTeams.join('');
    }
}

const X = new Solution();
console.log(X.rankTeam(["ABC","ACB","ABC","ACB","ACB"]));  // Output: "ACB"

// Time Complexity: O(M * log(M)) + O(N * M), where M is the number of votes and N is the number of teams
// Space Complexity: O(N^2), where N is the number of teams
