/**
 * Calculates the frequency of a target value in a sorted array.
 *
 * @param {Array} arr - The sorted array to search in.
 * @param {*} target - The target value to find the frequency of.
 * @returns {number} - The frequency of the target value in the array. Returns -1 if the target value is not found.
 */
function sortedFrequency(arr, target) {
    let leftIdx = binSearch(arr, target, true);
    if (leftIdx === -1) {
        return -1;
    }
    let rightIdx = binSearch(arr, target, false);
    return rightIdx - leftIdx + 1;
}

/**
 * Performs binary search on a sorted array to find the index of a target value.
 * @param {Array} arr - The sorted array to search in.
 * @param {*} target - The target value to search for.
 * @param {boolean} leftBias - Determines whether to bias the search towards the leftmost occurrence of the target value.
 * @returns {number} - The index of the target value in the array, or -1 if not found.
 */
function binSearch(arr, target, leftBias) {
    // Initialize the left index at the start of the array
    let leftIdx = 0;
    // Initialize the right index at the end of the array
    let rightIdx = arr.length - 1;
    // Initialize the result as -1, which will be returned if the target is not found
    let result = -1;
    // Continue the loop as long as the left index is less than or equal to the right index
    while (leftIdx <= rightIdx) {
        // Calculate the middle index
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        // Get the value at the middle index
        let middleVal = arr[middleIdx];
        // If the middle value is equal to the target
        if (middleVal === target) {
            // Update the result with the middle index
            result = middleIdx;
            // If leftBias is true, update the right index to search the left half
            if (leftBias) {
                rightIdx = middleIdx - 1;
            }
            // Otherwise, update the left index to search the right half
            else {
                leftIdx = middleIdx + 1;
            }
        }
        // If the middle value is less than the target, update the left index to search the right half
        else if (middleVal < target) {
            leftIdx = middleIdx + 1;
        }
        // If the middle value is greater than the target, update the right index to search the left half
        else {
            rightIdx = middleIdx - 1;
        }
    }
    // Return the result, which is either the index of the target or -1 if the target was not found
    return result;
}

// Given a sorted array and a number, write a function called ***sortedFrequency*** that counts the occurrences of the number in the array

// **Constraints**:

// Time Complexity: O(log N)

// Examples:
// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

module.exports = sortedFrequency;
