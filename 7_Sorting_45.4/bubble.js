/*
 * bubbleSort function:
 * Repeatedly steps through the list, compares adjacent elements and swaps them if
 * they are in the wrong order. The pass through the list is repeated until the list
 * is sorted. The algorithm gets its name because smaller elements "bubble" to the top
 * of the list.
 * @param {Array} arr - The array to sort.
 * @returns {Array} The sorted array.
 */
function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

module.exports = bubbleSort;
