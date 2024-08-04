class Solution {
    // Approach 1: Using two-pass string builder.
    // Time Complexity: O(N)
    // Space Complexity: O(N)
    minRemoveToMakeValid_1(s) {
        function deleteInvalidClose(string, open, close) {
            let newS = [];
            let balance = 0;
            for (const c of string) {
                if (c === open) {
                    balance += 1;
                }
                if (c === close) {
                    if (balance === 0) {
                        continue;
                    }
                    balance -= 1;
                }
                newS.push(c);
            }
            return newS.join('');
        }

        // First pass to remove invalid closing brackets
        s = deleteInvalidClose(s, '(', ')');
        // Second pass to remove invalid opening brackets (by reversing the string)
        s = deleteInvalidClose(s.split('').reverse().join(''), ')', '(');
        // Reverse the string back to original order
        return s.split('').reverse().join('');
    }

    // Approach 2: Using stack and string builder.
    // Time Complexity: O(N)
    // Space Complexity: O(N)
    minRemoveToMakeValid_2(s) {
        let indexToRemove = new Set();
        let stack = [];

        // First pass to find indices of brackets to remove
        for (let i = 0; i < s.length; i++) {
            const c = s[i];
            if (c !== '(' && c !== ')') {
                continue;
            }
            if (c === '(') {
                stack.push(i);
            } else if (stack.length === 0) {
                indexToRemove.add(i);
            } else {
                stack.pop();
            }
        }

        // Add any unmatched opening brackets to the removal set
        stack.forEach(index => indexToRemove.add(index));
        let ans = [];

        // Second pass to build the valid string
        for (let i = 0; i < s.length; i++) {
            if (!indexToRemove.has(i)) {
                ans.push(s[i]);
            }
        }

        return ans.join('');
    }
}

// Example usage
const X = new Solution();
console.log(X.minRemoveToMakeValid_1("lee(t(c)o)de)"));
console.log(X.minRemoveToMakeValid_2("lee(t(c)o)de)"));  


