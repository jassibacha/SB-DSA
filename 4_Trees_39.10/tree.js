/** TreeNode: node for a general tree. */

class TreeNode {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }

    /** sumValues(): add up all of the values in the tree. */

    sumValues() {
        // If the tree is empty, return 0
        if (!this.root) return 0;
        // Create a queue to keep track of nodes to visit
        let toVisitQueue = [this.root];
        // Initialize the sum to 0
        let sum = 0;

        // While there are nodes to visit
        while (toVisitQueue.length) {
            // Remove the first node from the queue
            let current = toVisitQueue.shift();
            // Add the value of the current node to the sum
            sum += current.val;
            // Add the children of the current node to the queue
            toVisitQueue.push(...current.children);
        }
        // Return the sum
        return sum;
    }

    /** countEvens(): count all of the nodes in the tree with even values. */

    countEvens() {
        // If the tree is empty, return 0
        if (!this.root) return 0;
        // Create a queue to keep track of nodes to visit
        let toVisitQueue = [this.root];
        // Initialize the count to 0
        let count = 0;

        // While there are nodes to visit
        while (toVisitQueue.length) {
            // Remove the first node from the queue
            let current = toVisitQueue.shift();
            // Check if the value of the current node is even
            if (current.val % 2 === 0) {
                // If it is, add to the count
                count++;
            }
            // Add the children of the current node to the queue
            toVisitQueue.push(...current.children);
        }
        // Return the count
        return count;
    }

    /** numGreater(lowerBound): return a count of the number of nodes
     * whose value is greater than lowerBound. */

    numGreater(lowerBound) {
        // If the tree is empty, return 0
        if (!this.root) return 0;
        // Create a queue to keep track of nodes to visit
        let toVisitQueue = [this.root];
        // Initialize the count to 0
        let count = 0;

        // While there are nodes to visit
        while (toVisitQueue.length) {
            // Remove the first node from the queue
            let current = toVisitQueue.shift();
            // Check if the value of the current node is greater than the lowerBound
            if (current.val > lowerBound) {
                // If it is, add to the count
                count++;
            }
            // Add the children of the current node to the queue
            toVisitQueue.push(...current.children);
        }
        // Return the count
        return count;
    }
}

module.exports = { Tree, TreeNode };
