class Solution {
    validateIP4(IP) {
        // Split the input IP string by '.' to get the components of the IPv4 address
        const address = IP.split('.');

        // Iterate through each component of the IPv4 address
        for (const item of address) {
            // Check if the component is numeric by ensuring all characters are digits
            for (const char of item) {
                if (char < '0' || char > '9') {
                    return "Neither"; // Return "Neither" if any character is not a digit
                }
            }

            // Convert the component to an integer and check if it is within the valid range for IPv4 (0-255)
            const num = parseInt(item, 10);
            if (num > 255) {
                return "Neither"; // Return "Neither" if it exceeds 255
            }

            // Check if the component has leading zeros (invalid in IPv4 except for the number "0")
            if (item.length !== 1 && item[0] === '0') {
                return "Neither"; // Return "Neither" if there are leading zeros
            }
        }

        return "IPv4"; // Return "IPv4" if all components are valid
    }

    validateIP6(IP) {
        // Split the input IP string by ':' to get the components of the IPv6 address
        const address = IP.split(':');

        // Define a set of valid hexadecimal characters for IPv6
        const Hexa = "0123456789ABCDEFabcdef";

        // Iterate through each component of the IPv6 address
        for (const item of address) {
            // Check if the component length is within the valid range for IPv6 (1-4 characters)
            if (item.length < 1 || item.length > 4) {
                return "Neither"; // Return "Neither" if the length is invalid
            }

            // Check if each character in the component is a valid hexadecimal character
            for (const char of item) {
                if (!Hexa.includes(char)) {
                    return "Neither"; // Return "Neither" if an invalid character is found
                }
            }
        }

        return "IPv6"; // Return "IPv6" if all components are valid
    }

    validIPAddress(IP) {
        // Check if the IP string has 4 components when split by '.' (possible IPv4)
        if (IP.split('.').length === 4) {
            return this.validateIP4(IP); // Validate as IPv4
        }

        // Check if the IP string has 8 components when split by ':' (possible IPv6)
        else if (IP.split(':').length === 8) {
            return this.validateIP6(IP); // Validate as IPv6
        }

        else {
            return "Neither"; // Return "Neither" if it is neither a valid IPv4 nor IPv6 format
        }
    }
}

// Example usage
const X = new Solution();
console.log(X.validIPAddress("192.168.0.1")); // Output: "IPv4"

// Time complexity: O(N), where N is the length of the IP address string
// Space complexity: O(1)
