function findRotationCount(nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        if (nums[l] <= nums[r]) {
            // The array is already sorted, so the number of rotations is the index of the left.
            return l;
        }

        let m = Math.floor((l + r) / 2);

        if (nums[m] >= nums[l]) {
            // The left portion is sorted, so the min element and rotation count must be in the right portion.
            l = m + 1;
        } else {
            // The right portion is sorted, so the min element and rotation count must be in the left portion.
            r = m;
        }
    }

    // If the array is not rotated, the number of rotations is 0.
    return 0;
}

module.exports = findRotationCount;

// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints: Time Complexity: O(log N)

// Examples:
// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0
