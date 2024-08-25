class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}

class Solution {
    getIntersectionNode(headA, headB) {
        // Initialize two pointers, one for each list
        let ptr1 = headA;
        let ptr2 = headB;

        // If either list is empty, there can be no intersection
        if (!ptr1 || !ptr2) {
            return null;
        }

        // Traverse both lists
        while (ptr1 !== ptr2) {
            // Move both pointers one step at a time
            ptr1 = ptr1 ? ptr1.next : headB;
            ptr2 = ptr2 ? ptr2.next : headA;
        }

        // Either both pointers meet at the intersection, or both become null (no intersection)
        return ptr1;
    }
}

// Example usage:
let LL1 = new ListNode(4);
LL1.next = new ListNode(7);
LL1.next.next = new ListNode(8);
LL1.next.next.next = new ListNode(3);

let LL2 = new ListNode(1);
LL2.next = new ListNode(6);
LL2.next.next = LL1.next;

const X = new Solution();
console.log(X.getIntersectionNode(LL1, LL2)?.val);

// Time Complexity: O(N + M), where N is the number of nodes in list A and M is the number of nodes in list B
// Space Complexity: O(1)
