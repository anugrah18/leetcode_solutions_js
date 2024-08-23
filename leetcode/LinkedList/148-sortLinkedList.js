// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to sort the linked list using merge sort
    sortList(head) {
        // Base case: if the list is empty or contains only one element, it's already sorted
        if (head === null || head.next === null) {
            return head;
        }

        // Find the middle of the list
        const mid = this._findMiddle(head);

        // Recursively sort the left and right halves
        const left = this.sortList(head);
        const right = this.sortList(mid);

        // Merge the sorted halves
        return this._merge(left, right);
    }

    // Helper function to merge two sorted lists
    _merge(list1, list2) {
        // Create a dummy head to help with merging the lists
        const dummyHead = new ListNode();
        let tail = dummyHead;

        // Merge the two sorted lists
        while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }

        // Append any remaining elements from either list
        tail.next = list1 !== null ? list1 : list2;

        // Return the merged list, skipping the dummy head
        return dummyHead.next;
    }

    // Helper function to find the middle of the list
    _findMiddle(head) {
        // Use the slow and fast pointer approach to find the middle of the list
        let ptr1 = head;
        let ptr2 = head;
        let prev = null;

        while (ptr2 !== null && ptr2.next !== null) {
            prev = ptr1;
            ptr1 = ptr1.next;
            ptr2 = ptr2.next.next;
        }

        // Disconnect the first half of the list from the middle to partition it
        if (prev !== null) {
            prev.next = null;
        }

        // Return the start of the second half of the list
        return ptr1;
    }
}

// Example usage:
let node = new ListNode(3);
node.next = new ListNode(5);
node.next.next = new ListNode(1);
node.next.next.next = new ListNode(2);
node.next.next.next.next = new ListNode(4);

const X = new Solution();
let ans = X.sortList(node);

// Print the sorted list
let ptr = ans;
while (ptr !== null) {
    console.log(ptr.val);
    ptr = ptr.next;
}

// Time Complexity = O(NLogN)
// Space Complexity = O(1)
