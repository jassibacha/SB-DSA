/*
 * merge function:
 * Merges two sorted arrays into one sorted array.
 * @param {Array} arr1 - The first sorted array.
 * @param {Array} arr2 - The second sorted array.
 * @returns {Array} A new sorted array containing all elements from both input arrays.
 */
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

/*
 * mergeSort function:
 * Recursively splits an array into halves, sorts each half, and merges them back together.
 * Follows the divide-and-conquer approach.
 * @param {Array} arr - The array to sort.
 * @returns {Array} The sorted array.
 */
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

module.exports = { merge, mergeSort };
