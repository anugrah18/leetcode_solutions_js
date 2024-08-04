class Solution {
    // Method to reorder log files based on the custom key
    reorderLogFiles(logs) {
        // Sort the logs using the custom key function defined in getKey
        return logs.sort(this.getKey.bind(this));
    }

    // Key function to define the order of logs
    getKey(logA, logB) {
        // Split each log into two parts: the identifier (id) and the rest of the log
        const [idA, ...restA] = logA.split(" ");
        const [idB, ...restB] = logB.split(" ");
        const restStrA = restA.join(" ");
        const restStrB = restB.join(" ");

        // Determine if the rest of the log is alphabetic or numeric
        const isAlphaA = isNaN(restA[0]);
        const isAlphaB = isNaN(restB[0]);

        // Compare logs based on their type (letter logs vs. digit logs)
        if (isAlphaA && isAlphaB) {
            // Both are letter logs: sort by content, then by identifier if contents are the same
            const cmp = restStrA.localeCompare(restStrB);
            if (cmp !== 0) return cmp;
            return idA.localeCompare(idB);
        }

        // Sort letter logs before digit logs
        return isAlphaA ? -1 : isAlphaB ? 1 : 0;
    }
}

// Example usage
const X = new Solution();
console.log(X.reorderLogFiles(["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]));

// Time Complexity: O(M * N * log N)
//   - Sorting the logs takes O(N * log N), where N is the number of logs.
//   - Comparing two logs involves comparing the contents, which takes O(M) time, where M is the maximum length of a log.
//   - Hence, the overall time complexity is O(M * N * log N).

// Space Complexity: O(M * N)
//   - The space complexity is proportional to the total size of the logs, which is O(M * N).
//   - Here, M is the average length of a log and N is the number of logs.
