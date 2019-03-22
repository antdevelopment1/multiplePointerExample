// Given an array of numbers, write a function that returns an array that has all duplicate elements removed and
// is sorted from least to greatest value.
// Given an array of numbers, write a function that returns an array that has all duplicate elements removed and
// is sorted from least to greatest value.

// Examples
// uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
// uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
// uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]

// ================================
// O(N^2) Quadratic Solution Edabit
// ================================
// Create an empty function that accepts an array
function uniqueSort(arr) {
    // Check if the length of the array is greater than 0. If its't return []
    if (arr.length === 0) {
        return [];
    }

    // We sort the array from smallest to biggest
    let sortedArray = arr.sort(function(a, b) {
        return a - b;
    })

    // We create an empty array
    let newArr = [];

    // We run a for loop through the length of the sorted array
    for (let i = 0; i < sortedArray.length; i++) {
        // Save the current index we are looping over in an array
        let value = arr[i];
        // We check if the value we are looping through is inside our array or not
        if (newArr.indexOf(value) === -1) {
            // If the value is not already inside the array then we will push the value into our new array
            newArr.push(value);
        }
    }
    // We return the new sorted array with duplicates removed
    return newArr;
}

console.log(uniqueSort([1, 2, 12, 4, 5, 8]))

