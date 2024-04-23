/*
 * insertionSort function:
 * Sorts an array by building up a sorted array at the beginning of the list.
 * It takes each element in turn and inserts it into its correct position into the
 * already sorted part of the array.
 * @param {Array} arr - The array to sort.
 * @returns {Array} The sorted array.
 */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

module.exports = insertionSort;
