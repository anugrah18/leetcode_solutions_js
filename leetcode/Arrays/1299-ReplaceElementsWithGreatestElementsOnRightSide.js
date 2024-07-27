class Solution {
    replaceElements(arr) {
        // Initialize the answer array with zeros
        let ans = new Array(arr.length).fill(0);
        // Initialize max_el to negative infinity
        let max_el = -Infinity;

        // Iterate over the array from the second last element to the first element
        for (let i = arr.length - 1; i > 0; i--) {
            // Update max_el to be the maximum of max_el and the current element
            max_el = Math.max(max_el, arr[i]);
            // Set the element at the previous index in the answer array to max_el
            ans[i - 1] = max_el;
        }

        // Set the last element of the answer array to -1
        ans[arr.length - 1] = -1;

        // Return the answer array
        return ans;
    }
}

const X = new Solution();
console.log(X.replaceElements([17, 18, 5, 4, 6, 1]));

// Time Complexity: O(N)
// Space Complexity: O(1)
