class Solution {
    // Method to calculate the maximum profit from stock prices
    maxProfit(prices) {
        let maxProfit = 0; // Initialize maximum profit to 0

        // Iterate through the list of prices starting from the second element
        for (let i = 1; i < prices.length; i++) {
            // Check if the current price is greater than the previous price
            if (prices[i] > prices[i - 1]) {
                // If so, add the difference (profit) to maxProfit
                maxProfit += prices[i] - prices[i - 1];
            }
        }
        
        // Return the total maximum profit
        return maxProfit;
    }
}

const solution = new Solution();
const stockPrices = [7, 1, 55, 3, 6, 24];
console.log(solution.maxProfit(stockPrices));

// Time Complexity: O(n)
// Space Complexity: O(1)
