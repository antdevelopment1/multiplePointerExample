// Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of 
// the pair equals the target value. There may be more than 1 pair that matches the average target

// Create an empty function that accepts an array and an interger as a target value
function average(arr, target) {
    // Check if the length of the array is 0
    if (arr.length === 0) {
        // If it is we return false
        return false;
    }

    // Start a pointer at the begining and save it in a variable
    let start = 0;
    // Start a pointer at the end and save it to a variable
    let end = arr.length - 1;

    // Create a while loop that runs while start is less than end
    while (start < end) {
        // We save the value of the first pointer plus the second pointer divided by 2 in a variable giving
        // us the vaerage
        let avg = arr[start] + arr[end] / 2;
        // We check if that value is equal to our target variable
        if (avg === target) {
            // If it is we return true
            return true;
        // Otherwise is the average is less than the target we increment our first pointer
        } else if (avg < target) {
            start++;
        // Otherwise we will decrement our second pointer 
        } else {
            end--;
        }
    }
    // If we make to the middle of the array and can't find our target average based on adding the sum
    // of the two pointers as we loop through the array we return false
    return false;
}

console.log(average([-1,0,3,4,5,6], 4.1))