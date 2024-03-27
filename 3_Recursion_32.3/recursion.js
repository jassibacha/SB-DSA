/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
    // If nums is an empty array, return 1
    if (idx === nums.length) return 1;
    return nums[idx] * product(nums, idx + 1);

    // Taking me a bit to wrap my head around this, but essentially we're multiplying the nums[idx] return before the multiplied product(nums, idx + 1) is ever called, recursion is so weird.
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
    if (idx === words.length) return longestSoFar;

    currWordLength = words[idx].length;

    if (currWordLength > longestSoFar) {
        longestSoFar = currWordLength;
    }

    return longest(words, idx + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = '') {
    // If the current index surpasses the input string's length, return the new string.
    if (idx >= str.length) return newStr;

    newStr = newStr + str[idx];

    return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
    leftIdx = idx;
    rightIdx = str.length - idx - 1;

    // Base case: If the left index surpasses or meets the right index, the string is a palindrome.
    if (leftIdx >= rightIdx) return true;

    // If characters at the left and right indices are not the same, the string is not a palindrome.
    if (str[leftIdx] !== str[rightIdx]) return false;

    // Recursively check the next set of characters.
    return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
    // Base case: If the index surpasses the length of the array, the value is not present.
    if (idx >= arr.length) return -1;

    // If the current element of the array matches the value, return the index.
    if (arr[idx] === val) return idx;

    // Recursively check the next index.
    return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = '') {
    // Base case: If the index surpasses the length of the string, return the new reversed string.
    if (idx >= str.length) return newStr;

    // Append the character at the current index from the original string to the beginning of the new string.
    newStr += str[str.length - idx - 1];

    // Recursively process the next character.
    return revString(str, idx + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    // Initialize an empty array to hold the strings.
    let resultArray = [];

    // Loop through each property in the object.
    for (let key in obj) {
        // If the property's value is a string, add it to the result array.
        if (typeof obj[key] === 'string') {
            resultArray.push(obj[key]);
        }

        // If the property's value is an object make a recursive call to gather strings from that object.
        if (typeof obj[key] === 'object') {
            let nestedStr = gatherStrings(obj[key]);
            resultArray = resultArray.concat(nestedStr); // Merge the arrays
        }
    }

    // Return the result array containing all gathered strings.
    return resultArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
    // Base case: If the left index surpasses the right index, the value is not present.
    if (left > right) return -1;

    // Calculate the middle index.
    mid = Math.floor((left + right) / 2);

    // If the middle element matches the value, return the middle index.
    if (arr[mid] === val) return mid;

    if (arr[mid] > val) {
        // If the middle element is greater than the value, search in the left half.
        return binarySearch(arr, val, left, mid - 1);
    } else {
        // If the middle element is less than the value, search in the right half.
        return binarySearch(arr, val, mid + 1, right);
    }
}

module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings,
    binarySearch,
};
