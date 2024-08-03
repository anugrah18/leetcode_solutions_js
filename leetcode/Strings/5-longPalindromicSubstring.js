class Solution {
    constructor() {
        this._resStart = 0;
        this._resLength = 0;
    }

    longestPalindrome(s) {
        for (let i = 0; i < s.length; i++) {
            // Expand around a single character as the middle of the palindrome
            this._expandFromMiddle(s, i, i);
            // Expand around two characters as the middle of the palindrome
            this._expandFromMiddle(s, i, i + 1);
        }

        return s.substring(this._resStart, this._resStart + this._resLength);
    }

    _expandFromMiddle(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // Expand as long as the characters at the left and right indices are the same
            left--;
            right++;
        }

        if (this._resLength < right - left - 1) {
            // If the expanded palindrome is longer than the current longest palindrome
            this._resStart = left + 1;
            this._resLength = right - left - 1;
        }
    }
}

const X = new Solution();
console.log(X.longestPalindrome("bhdbabbajnfjnfg"));

// Time Complexity: O(N^2)
// Space Complexity: O(1)
