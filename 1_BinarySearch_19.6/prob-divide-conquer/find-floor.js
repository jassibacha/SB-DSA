function findFloor(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let floor = -1; // Initialize floor to -1 to handle cases where the floor doesn't exist

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (nums[m] === target) {
            return nums[m]; // If the target is found, it is the floor itself
        } else if (nums[m] < target) {
            floor = nums[m]; // Update the floor if the current element is smaller than the target
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return floor; // Return the floor value
}

module.exports = findFloor;

// Write a function called ***findFloor*** which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Constraints: Time Complexity: O(log N)

// Examples:
// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1
