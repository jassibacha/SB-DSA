/*
 * pivot function:
 * Chooses the first element as the pivot, partitions the array around the pivot,
 * placing all smaller elements to the left and larger to the right.
 * Returns the index of the pivot element after partitioning.
 * @param {Array} arr - The array to partition.
 * @param {number} start - The start index for the partition.
 * @param {number} end - The end index for the partition.
 */
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (array, i, j) => {
        [array[i], array[j]] = [array[j], array[i]];
    };

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

/*
 * quickSort function:
 * Sorts an array using the Quick Sort algorithm, which is a divide-and-conquer
 * method. It works by selecting a 'pivot' element from the array and partitioning
 * the other elements into two sub-arrays, according to whether they are less than
 * or greater than the pivot.
 * @param {Array} arr - The array to sort.
 * @param {number} left - The starting index of the array segment to sort.
 * @param {number} right - The ending index of the array segment to sort.
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

module.exports = { pivot, quickSort };
