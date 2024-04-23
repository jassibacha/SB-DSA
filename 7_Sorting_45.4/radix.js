/**
 * Returns the digit in `num` at the given place value `i`.
 * @param {number} num - The number from which to extract the digit.
 * @param {number} i - The position to check for the digit (where 0 is the units place).
 * @returns {number} The digit at the ith place.
 */
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/**
 * Calculates the number of digits in `num`.
 * @param {number} num - The number to count digits in.
 * @returns {number} The count of digits in the given number.
 */
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Determines the maximum number of digits in any number in the array.
 * @param {Array<number>} nums - The array of numbers.
 * @returns {number} The maximum number of digits in the array.
 */
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

/**
 * Sorts an array of numbers using the Radix Sort algorithm.
 * @param {Array<number>} nums - The array of numbers to sort.
 * @returns {Array<number>} The sorted array.
 */
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

module.exports = { radixSort, getDigit, digitCount, mostDigits };
