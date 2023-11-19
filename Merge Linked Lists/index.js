/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
    let current1 = list1 // equal to head of list1
    let current2 = list2 // equal to head of list2
    let dummyNode = new ListNode(0, null) // create new dummyNode to add new nodes to
    let currentNode = dummyNode // keep track of which node you are at by traversing to next through each iteration of loop

    // while the current node is not empty
    while (current1 !== null && current2 !== null) {
        // check if current1's node value is less than current2's node value 
        if (current1.val < current2.val) {
            // if it is, change the currentNode's next to be equal to reference to current1's value, then move on to current1's next node
            currentNode.next = current1
            current1 = current1.next
        } else {
            // if it is, change the currentNode's next to be equal to reference to current2's value, then move on to current2's next node
            currentNode.next = current2
            current2 = current2.next
        }
        // Now we move on to the currentNode's next node
        currentNode = currentNode.next
    }
    // currentNode's next value will be equal to whichever node.vals come first
    currentNode.next = current1 || current2
    // return the full dummyNode minus the first initial dummy node
    return dummyNode.next
};

