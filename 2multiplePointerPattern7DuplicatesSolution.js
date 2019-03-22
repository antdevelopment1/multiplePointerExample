// Create a function which accepts a variable number of arguments, and checks whether there are any duplicates 
// among the arguments passed in.
// This can solved using either the freq pattern or multiple pointer pattern
// ==================================================
// Time Complexity O(N log N) Multple Pointer Pattern
// ==================================================
// Create a function that accepts a flexible number of arguments
function duplicates(...args) {

    // If the length of our arguments equals 0 return false
    if (args.length === 0) {
        return false;
    }

    // Sort the arguments and save in a variable
    let sorted = args.sort((a,b) => {
        return a - b;
    });

    // Create a start point
    let start = 0;
    // Create a pointer for the nexr value in the array
    let next = 1;
    
    // While the second pointer is less than the length of the sorted array
    while (next < sorted.length) {
        // If the the two values equal each other we will return true because there are duplicates
        if (sorted[start] === sorted[next]) {
            return true;
        } else {
            // If they are not equal just increment both spots and start again
            start++;
            next++;
        }
    }
    // Return false if we get through the whole array and don't return true anywhere inside meaning there
    // there are no duplicates
    return false;
}

console.log(duplicates(1,2,3,2))


// ==================================
// Time Complexity O(N) Freq Pattern
// ==================================
// Create a function that accepts a flexible number of arguments
function duplicates(...args) {
    // If the length of the array is 0 return false because there are no duplicates
    if (args.length === 0) {
        return false;
    }

    // Create an empty object
    let obj = {};

    // Run a for looop that runs through the length of the argument
    for (let i = 0; i < arguments.length; i++) {
        // Create a variable for the index we are looking at currently
        let value = arguments[i];
        // Check if that value is inside the object
        if (obj[value]) {
            // If it is in the object add 1 to the keys values
            obj[value] += 1;
        } else {
            // Otherwise set the keys value equal to 1
            obj[value] = 1;
        }
    }

    // Loop through all the keys in the object
    for (let key in obj) {
        // If any of the keys valyes are greater than 1 we return true because we have a duplicate
        if (obj[key] > 1) {
            return true;
        }
    }
    // If we don't return true at any point we return true
    return false;
}

console.log(duplicates(1,4,3,3,2))