/**
 * Finds the index of a target value in a rotated sorted array.
 *
 * @param {Array} arr - The rotated sorted array.
 * @param {*} target - The target value to search for.
 * @returns {number} - The index of the target value in the array, or -1 if not found.
 */
function findRotatedIndex(arr, target) {
    l = 0;
    r = arr.length - 1;

    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (arr[m] === target) return m; // Found the target, return the index.

        if (arr[l] <= arr[m]) {
            // Target is within the left sorted portion.
            if (target >= arr[l] && target < arr[m]) {
                r = m - 1; // Narrow the search to the left portion.
            } else {
                l = m + 1; // Target must be in the right portion.
            }
        } else {
            // Target is within the right sorted portion.
            if (target > arr[m] && target <= arr[r]) {
                l = m + 1; // Narrow the search to the right portion.
            } else {
                r = m - 1; // Target must be in the left portion.
            }
        }
    }

    return -1;
}

// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

// Constraints: Time Complexity: O(log N)

// Examples:
// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

module.exports = findRotatedIndex;
