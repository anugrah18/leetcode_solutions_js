class ListNode {
    constructor(val = 0, next = null) {
        // Initialize a ListNode with a value and a reference to the next node
        this.val = val;
        this.next = next;
    }

    printList() {
        // Function to print the values in the linked list
        let current = this;
        while (current !== null) {
            console.log(current.val);
            current = current.next;
        }
    }
}

class Solution {
    // Approach 1 - Convert to stack
    // Time Complexity: O(N), where N is the maximum length of the two lists
    // Space Complexity: O(N), due to the use of stacks to store the values from the lists
    addTwoNumbers_1(l1, l2) {
        const stack_1 = [];
        const stack_2 = [];

        // Push all values from the first list into stack_1
        while (l1 !== null) {
            stack_1.push(l1.val);
            l1 = l1.next;
        }

        // Push all values from the second list into stack_2
        while (l2 !== null) {
            stack_2.push(l2.val);
            l2 = l2.next;
        }

        let carry = 0;
        let newHead = null;

        // Process the stacks until both are empty and no carry is left
        while (stack_1.length > 0 || stack_2.length > 0 || carry !== 0) {
            // Pop values from stacks or use 0 if the stack is empty
            const val1 = stack_1.length > 0 ? stack_1.pop() : 0;
            const val2 = stack_2.length > 0 ? stack_2.pop() : 0;

            // Calculate the sum and update carry
            const sum = val1 + val2 + carry;
            carry = Math.floor(sum / 10);

            // Create a new node with the digit result and link it to the new head
            const node = new ListNode(sum % 10);
            node.next = newHead;
            newHead = node;
        }

        return newHead;
    }

    // Approach 2 - Convert to numbers
    // Time Complexity: O(N), where N is the maximum length of the two lists
    // Space Complexity: O(N), due to the space needed to store the integer and the resulting linked list
    addTwoNumbers_2(l1, l2) {
        let n1 = 0;
        let n2 = 0;

        // Convert the first linked list to a number
        while (l1 !== null) {
            n1 = 10 * n1 + l1.val;
            l1 = l1.next;
        }

        // Convert the second linked list to a number
        while (l2 !== null) {
            n2 = 10 * n2 + l2.val;
            l2 = l2.next;
        }

        // Add the two numbers
        const total = n1 + n2;

        // Create a new linked list from the result
        const root = new ListNode(0);
        let curr = root;
        for (const char of total.toString()) {
            curr.next = new ListNode(parseInt(char, 10));
            curr = curr.next;
        }

        return root.next;
    }
}

// Example usage:

// Create the first linked list: 7 -> 2 -> 4 -> 3
const L1 = new ListNode(7);
L1.next = new ListNode(2);
L1.next.next = new ListNode(4);
L1.next.next.next = new ListNode(3);

// Create the second linked list: 5 -> 6 -> 4
const L2 = new ListNode(5);
L2.next = new ListNode(6);
L2.next.next = new ListNode(4);

const X = new Solution();

// Add the two numbers using the first approach (using stacks)
const L3 = X.addTwoNumbers_1(L1, L2);
// Add the two numbers using the second approach (converting to numbers)
const L4 = X.addTwoNumbers_2(L1, L2);

// Print the results
L3.printList();  // Expected output: 7 -> 8 -> 0 -> 7
L4.printList();  // Expected output: 7 -> 8 -> 0 -> 7
