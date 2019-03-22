// Create a function which acceptsa sorted array and counts the unique values in an array. There can be
// negative values in the array but the array will always be sorted
// ======================================================
// O(N Linear Solution) Multiple Pointer Look Ahead
// ======================================================
// Create a function that accepts an array
function uniqueValues(arr) {
    // We check if the length of the array is 0 and return 0 if it is
    if (arr.length === 0) {
        return 0;
    }
    // Set it equal to 0
    let i = 0;
    // Run a for a loop using j as the second pointer to run through the array
    for (let j = 1; j < arr.length; j++) {
        // If the first pointer and the second pointer are not equal to each other we will increment i
        // and set arr[i] = arr[j]
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    // At the end by the time j reaches the end of the loop i will have made it to it's last unique index
    // which is 1 less than the number of unique values so we add 1 to it and return the value
    return i + 1;
}
                                       
console.log(uniqueValues([-3,-2,-1,0,1,2,2]));
                                         
