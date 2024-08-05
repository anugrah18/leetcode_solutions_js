class Codec {
    // Method to encode a list of strings to a single string
    encode(strs) {
        let res = ""; // Result string to store the encoded version

        for (const s of strs) {
            // For each string, store its length followed by a '#' and then the string itself
            res += s.length + "#" + s;
        }

        return res; // Return the encoded string
    }

    // Method to decode a single string to a list of strings
    decode(s) {
        const res = []; // Initialize result list
        let i = 0; // Initialize index

        while (i < s.length) {
            let j = i;
            // Find the position of the next '#'
            while (s[j] !== "#") {
                j += 1;
            }

            // Get the length of the next string
            const length = parseInt(s.slice(i, j), 10);
            // Extract the string of that length after the '#'
            res.push(s.slice(j + 1, j + 1 + length));
            // Move index to the start of the next length information
            i = j + 1 + length;
        }

        return res; // Return the list of decoded strings
    }
}

// Example usage
const X = new Codec();
const Y = X.encode(["Hello", "World"]);
const Z = X.decode(Y);
console.log(Y); // "5#Hello5#World"
console.log(Z); // ["Hello", "World"]

// Time Complexity: O(N)
// Space Complexity: O(1)

