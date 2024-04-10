/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    /** minDepth(): return the minimum depth of the tree -- that is,
     * the length of the shortest path from the root to a leaf. */

    minDepth() {
        // If the tree is empty, return 0
        if (!this.root) return 0;

        function minDepthHelper(node) {
            // If both children are null, it's a leaf node, return 1
            if (node.left === null && node.right === null) {
                return 1;
            }
            // If left child is null, return minDepth + 1 of right child
            if (node.left === null) {
                return this.minDepthHelper(node.right) + 1;
            }
            // If right child is null, return minDepth + 1 of left child
            if (node.right === null) {
                return this.minDepthHelper(node.left) + 1;
            }
            // Return the minimum of the minDepth of the left and right children + 1
            return (
                Math.min(
                    minDepthHelper(node.left),
                    minDepthHelper(node.right)
                ) + 1
            );
        }

        return minDepthHelper(this.root);
    }

    /** maxDepth(): return the maximum depth of the tree -- that is,
     * the length of the longest path from the root to a leaf. */

    maxDepth() {
        // If the tree is empty, return 0
        if (!this.root) return 0;

        function maxDepthHelper(node) {
            // If both children are null, it's a leaf node, return 1
            if (node.left === null && node.right === null) {
                return 1;
            }
            // If left child is null, return maxDepth + 1 of right child
            if (node.left === null) {
                return this.maxDepthHelper(node.right) + 1;
            }
            // If right child is null, return maxDepth + 1 of left child
            if (node.right === null) {
                return this.maxDepthHelper(node.left) + 1;
            }
            // Return the maximum of the maxDepth of the left and right children + 1
            return (
                Math.max(
                    maxDepthHelper(node.left),
                    maxDepthHelper(node.right)
                ) + 1
            );
        }

        return maxDepthHelper(this.root);
    }

    /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
     * The path doesn't need to start at the root, but you can't visit a node more than once. */

    maxSum() {
        // Initialize result to 0
        let result = 0;

        // Helper function to calculate the max sum
        function maxSumHelper(node) {
            // If the node is null, return 0
            if (node === null) return 0;
            // Calculate the max sum of the left and right children
            const leftSum = maxSumHelper(node.left);
            const rightSum = maxSumHelper(node.right);
            // Update the result to be the maximum of the current result
            // The sum of the current node and the left and right children
            result = Math.max(result, node.val + leftSum + rightSum);
            // Return the maximum of 0, the sum of the left child and the current node
            return Math.max(0, leftSum + node.val, rightSum + node.val);
        }
        // Call the helper function with the root node
        maxSumHelper(this.root);
        // Return the result
        return result;
    }

    /** nextLarger(lowerBound): return the smallest value in the tree
     * which is larger than lowerBound. Return null if no such value exists. */

    nextLarger(lowerBound) {
        // Initialize the result to null
        let result = null;

        // Helper function to find the next larger value
        function nextLargerHelper(node) {
            // If the node is null, return
            if (node === null) return;
            // If the current node value is greater than the lowerBound
            if (node.val > lowerBound) {
                // If the result is null or the current node value is less than the result
                if (result === null || node.val < result) {
                    // Update the result to be the current node value
                    result = node.val;
                }
            }
            // Recursively call the helper function on the left and right children
            nextLargerHelper(node.left);
            nextLargerHelper(node.right);
        }
        // Call the helper function with the root node
        nextLargerHelper(this.root);
        // Return the result
        return result;
    }

    /** Further study!
     * areCousins(node1, node2): determine whether two nodes are cousins
     * (i.e. are at the same level but have different parents. ) */

    areCousins(node1, node2) {}

    /** Further study!
     * serialize(tree): serialize the BinaryTree object tree into a string. */

    static serialize() {}

    /** Further study!
     * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

    static deserialize() {}

    /** Further study!
     * lowestCommonAncestor(node1, node2): find the lowest common ancestor
     * of two nodes in a binary tree. */

    lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
