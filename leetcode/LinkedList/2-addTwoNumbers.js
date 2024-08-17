class ListNode {
    constructor(val = 0, next = null) {
        // Initialize a ListNode with a value and a reference to the next node
        this.val = val;
        this.next = next;
    }

    printList() {
        // Function to print the values in the linked list
        let cur = this;
        while (cur !== null) {
            console.log(cur.val);
            cur = cur.next;
        }
    }
}

class Solution {
    addTwoNumbers(l1, l2) {
        // Initialize a dummy node to hold the result list and a tail pointer
        const ans = new ListNode(0);
        let ansTail = ans;
        let carry = 0;  // Initialize carry for sum overflow

        // Iterate through both linked lists until both are fully traversed
        while (l1 !== null || l2 !== null) {
            // Get the values from the current nodes of both lists, default to 0 if the node is null
            const val1 = l1 !== null ? l1.val : 0;
            const val2 = l2 !== null ? l2.val : 0;

            // Calculate the digit and the new carry
            const sum = val1 + val2 + carry;
            const out = sum % 10;
            carry = Math.floor(sum / 10);

            // Create a new node with the sum result and move the tail pointer
            ansTail.next = new ListNode(out);
            ansTail = ansTail.next;

            // Move to the next nodes in l1 and l2
            l1 = l1 !== null ? l1.next : null;
            l2 = l2 !== null ? l2.next : null;
        }

        // If there is any carry left after the loop, add it as a new node
        if (carry > 0) {
            ansTail.next = new ListNode(carry);
        }

        // Return the next of dummy node as the starting node of the result list
        return ans.next;
    }
}

// Create first linked list: 2 -> 4 -> 9
const list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(9);

// Create second linked list: 5 -> 6 -> 4
const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

// Add the two numbers represented by the linked lists
const X = new Solution();
const res = X.addTwoNumbers(list1, list2);

// Print the result list
res.printList();

// Time Complexity : O(N)
// Where N is the length of the longer linked list. We iterate through each node once.

// Space Complexity : O(N)
// The space used is for the output linked list, which has at most max(length of l1, length of l2) + 1 nodes.
