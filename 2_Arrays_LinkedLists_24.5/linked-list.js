/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** LinkedList: chained together nodes. */

class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */

    push(val) {
        // Create a new node with the given value
        let newNode = new Node(val);

        // If the list is empty, set the head and tail to the new node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the list is not empty, append the new node to the end of the list
            // and update the tail to point to the new node
            this.tail.next = newNode;
            this.tail = newNode;
        }

        // Increment the length of the list
        this.length++;
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        // Create a new node with the given value
        let newNode = new Node(val);

        // If the list is empty, set the head and tail to the new node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the list is not empty, append the new node to the beginning of the list
            // and update the head to point to the new node
            newNode.next = this.head;
            this.head = newNode;
        }

        // Increment the length of the list
        this.length++;
    }

    /** pop(): return & remove last item. */

    pop() {
        // If the list is empty, return null
        if (!this.head) return null;

        // If the list has only one node, remove it and update the head and tail to null
        if (this.head === this.tail) {
            let removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removedNode.val;
        }

        // If the list has more than one node, traverse the list until the second to last node
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }

        // Remove the last node and update the tail to point to the second to last node
        let removedNode = this.tail;
        this.tail = current;
        this.tail.next = null;
        this.length--;
        return removedNode.val;
    }

    /** shift(): return & remove first item. */

    shift() {
        // If the list is empty, return null
        if (!this.head) return null;

        // If the list has only one node, remove it and update the head and tail to null
        if (this.head === this.tail) {
            let removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removedNode.val;
        }

        // If the list has more than one node, remove the first node and update the head
        let removedNode = this.head;
        this.head = this.head.next;
        this.length--;
        return removedNode.val;
    }

    /** getAt(idx): get val at idx. */

    getAt(idx) {
        // If the index is out of bounds, return null
        if (idx < 0 || idx >= this.length) return null;

        // Traverse the list until the node at the given index
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current.next;
        }

        return current.val;
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
        // If the index is out of bounds, return null
        if (idx < 0 || idx >= this.length) return null;

        // Traverse the list until the node at the given index
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current.next;
        }

        // Update the value of the node at the given index
        current.val = val;
    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
        // If the index is out of bounds, return null
        if (idx < 0 || idx > this.length) return null;

        // If the index is 0, insert the new node at the beginning of the list
        if (idx === 0) {
            this.unshift(val);
            return;
        }

        // If the index is equal to the length of the list, insert the new node at the end of the list
        if (idx === this.length) {
            this.push(val);
            return;
        }

        // Traverse the list until the node before the given index
        let current = this.head;
        for (let i = 0; i < idx - 1; i++) {
            current = current.next;
        }

        // Create a new node with the given value
        let newNode = new Node(val);

        // Insert the new node between the current node and the next node
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {
        // If the index is out of bounds, return null
        if (idx < 0 || idx >= this.length) return null;

        // If the index is 0, remove the first node
        if (idx === 0) {
            return this.shift();
        }

        // If the index is equal to the length of the list - 1, remove the last node
        if (idx === this.length - 1) {
            return this.pop();
        }

        // Traverse the list until the node before the given index
        let current = this.head;
        for (let i = 0; i < idx - 1; i++) {
            current = current.next;
        }

        // Remove the node at the given index
        let removedNode = current.next;
        current.next = removedNode.next;
        this.length--;
        return removedNode.val;
    }

    /** average(): return an average of all values in the list */

    average() {
        // If the list is empty, return 0
        if (!this.head) return 0;

        // Traverse the list and calculate the sum of all values
        let current = this.head;
        let sum = 0;
        while (current) {
            sum += current.val;
            current = current.next;
        }

        // Return the average of all values
        return sum / this.length;
    }
}

module.exports = LinkedList;
