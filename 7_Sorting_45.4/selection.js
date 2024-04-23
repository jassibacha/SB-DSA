/*
 * selectionSort function:
 * Improves on the bubble sort by making only one exchange for every pass through the list.
 * It looks for the smallest element and after completing the pass, it swaps it with the
 * first unsorted element.
 * @param {Array} arr - The array to sort.
 * @returns {Array} The sorted array.
 */
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

module.exports = selectionSort;
