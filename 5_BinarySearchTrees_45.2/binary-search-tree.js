class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */
    insert(val) {
        // If the tree is empty, create a new node with the value and set it as the root
        if (!this.root) {
            this.root = new Node(val);
            // Then return the tree to allow for method chaining
            return this;
        }

        // Start from the root of the tree
        let currentNode = this.root;

        // Use a while loop to find the correct position for the new value
        while (true) {
            // Check if the value should be inserted in the left subtree
            if (val < currentNode.val) {
                // If the left child does not exist, insert the new node here
                if (!currentNode.left) {
                    currentNode.left = new Node(val);
                    // Return the tree to allow for method chaining
                    return this;
                } else {
                    // If the left child exists, move to the left child and continue the search
                    currentNode = currentNode.left;
                }
            }
            // Check if the value should be inserted in the right subtree
            else if (val > currentNode.val) {
                // If the right child does not exist, insert the new node here
                if (!currentNode.right) {
                    currentNode.right = new Node(val);
                    // Return the tree to allow for method chaining
                    return this;
                } else {
                    // If the right child exists, move to the right child and continue the search
                    currentNode = currentNode.right;
                }
            }
            // If the value is equal to the current node's value, don't insert it (disallow duplicates)
            else {
                return this;
            }
        }
    }

    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */
    insertRecursively(val, currentNode = this.root) {
        // If the tree is empty, set the root to the new node
        if (!this.root) {
            this.root = new Node(val);
            // Then return the tree to allow for method chaining
            return this;
        }

        // If value is less than the current node's value go left
        if (val < currentNode.val) {
            // If the left child does not exist, insert the new node here
            if (!currentNode.left) {
                currentNode.left = new Node(val);
                // Return the tree to allow for method chaining
                return this;
            }
            // If the left child exists, continue recursively in the left subtree.
            return this.insertRecursively(val, currentNode.left);
        }
        // Value greater? Right subtree
        else {
            // If the right child does not exist, insert the new node here
            if (!currentNode.right) {
                currentNode.right = new Node(val);
                // Return the tree to allow for method chaining
                return this;
            }
            // If the right child exists, continue recursively in the right subtree.
            return this.insertRecursively(val, currentNode.right);
        }
    }

    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */

    find(val) {
        // If the tree is empty, return undefined as there are no nodes to search.
        if (!this.root) {
            return undefined;
        }

        // Start the search from the root of the tree.
        let currentNode = this.root;
        // This variable will be used to store the node if it is found.
        let found = false;

        // Continue the search as long as there is a node to examine and the node hasn't been found.
        while (currentNode && !found) {
            // If the value to find is less than the current node's value, go left.
            if (val < currentNode.val) {
                currentNode = currentNode.left;
            }
            // If the value to find is greater than the current node's value, go right.
            else if (val > currentNode.val) {
                currentNode = currentNode.right;
            }
            // If the value is equal to the current node's value, mark it as found.
            else {
                found = currentNode;
            }
        }

        // If the node wasn't found (found remains false), return undefined.
        if (!found) {
            return undefined;
        }

        // Return the found node.
        return found;
    }

    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */

    findRecursively(val, currentNode = this.root) {
        // Return undefined if the tree is empty or the value isn't found.
        if (!currentNode) return undefined;

        // Search in the left subtree if the value is less than the current node's value.
        if (val < currentNode.val) {
            if (!currentNode.left) return undefined;
            return this.findRecursively(val, currentNode.left);
        }
        // Search in the right subtree if the value is greater than the current node's value.
        else if (val > currentNode.val) {
            if (!currentNode.right) return undefined;
            return this.findRecursively(val, currentNode.right);
        }

        // Return the current node when the value is found.
        return currentNode;
    }

    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */

    dfsPreOrder() {
        let data = []; // Store the visited nodes
        let currentNode = this.root; // Start at the root

        // Traverse the tree using pre-order DFS
        function traverse(node) {
            data.push(node.val); // Visit the current node
            if (node.left) traverse(node.left); // Go left
            if (node.right) traverse(node.right); // Go right
        }

        traverse(currentNode); // Start the traversal
        return data; // Return the visited nodes
    }

    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */

    dfsInOrder() {
        let data = []; // Store the visited nodes
        let currentNode = this.root; // Start at the root

        function traverse(node) {
            if (node.left) traverse(node.left); // Go left if theres a left
            data.push(node.val); // Visit the current node
            if (node.right) traverse(node.right); // Go right if there's a right
        }

        traverse(currentNode); // Start the traversal
        return data; // Return the visited nodes
    }

    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */

    dfsPostOrder() {
        let data = []; // Store the visited nodes
        let currentNode = this.root; // Start at the root

        function traverse(node) {
            if (node.left) traverse(node.left); // Go left if theres a left
            if (node.right) traverse(node.right); // Go right if there's a right
            data.push(node.val); // Visit the current node
        }

        traverse(currentNode); // Start the traversal
        return data; // Return the visited nodes
    }

    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */

    bfs() {
        let node = this.root; // Start at the root
        let queue = []; // Queue to manage order in which nodes are visited
        let data = []; // Store the visited nodes

        queue.push(node); // Add the root to the queue
        while (queue.length) {
            node = queue.shift(); // Remove the first node from the queue
            data.push(node.val); // Visit the current node
            if (node.left) queue.push(node.left); // Add the left node to the queue
            if (node.right) queue.push(node.right); // Add the right node to the queue
        }

        // As the loop continues it dequeues the node from the
        // front and enqueues its children in the back, this repeats
        // until the queue is empty

        return data; // Return the visited nodes}
    }

    /** Further Study!
     * remove(val): Removes a node in the BST with the value val.
     * Returns the removed node. */

    remove(val) {}

    /** Further Study!
     * isBalanced(): Returns true if the BST is balanced, false otherwise. */

    isBalanced() {}

    /** Further Study!
     * findSecondHighest(): Find the second highest value in the BST, if it exists.
     * Otherwise return undefined. */

    findSecondHighest() {}
}

module.exports = BinarySearchTree;
