/**
 * Counts the number of zeroes in a sorted array using binary search.
 *
 * @param {number[]} arr - The sorted array to search for zeroes.
 * @returns {number} - The count of zeroes in the array.
 */
function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        //console.log(`middle is index ${middleIdx}: value ${middleVal}`);
        if (middleVal === 0) {
            // We've gone too far, head left to find all the zeroes!
            rightIdx = middleIdx - 1;
            //console.log(`middleVal is a 0, jumping to index ${rightIdx}`);
        } else if (middleVal === 1) {
            // We're still in the ones, head right
            leftIdx = middleIdx + 1;
            //console.log(`middleVal is a 1, jumping to index ${leftIdx}`);
        }
    }
    // While loop is done, leftIdx will be the first 0!
    const zeroesCount = arr.length - leftIdx;
    return zeroesCount;
}

// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called ***countZeroes***, which returns the number of zeroes in the array.

// **Constraints**:
// Time Complexity: O(log N)

//Examples:
// countZeroes([1, 1, 1, 1, 0, 0]); // 2
// countZeroes([1, 0, 0, 0, 0]); // 4
// countZeroes([0, 0, 0]); // 3
// countZeroes([1, 1, 1, 1]); // 0

module.exports = countZeroes;
