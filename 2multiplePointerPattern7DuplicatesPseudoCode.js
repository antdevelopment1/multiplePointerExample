// Create a function which accepts a variable number of arguments, and checks whether there are any duplicates 
// among the arguments passed in.
// This can solved using either the freq pattern or multiple pointer pattern
// ==============================================
// Time Complexity O(N log N) Multple Pointer Pattern
// ==============================================
// Create a function that accepts a flexible number of arguments


    // If the length of our arguments equals 0 return false

    // Sort the arguments and save in a variable

    // Create a start point
    
    // Create a pointer for the nexr value in the array
    
    // While the second pointer is less than the length of the sorted array
    
        // If the the two values equal each other we will return true because there are duplicates
        
            // If they are not equal just increment both spots and start again
           
    // Return false if we get through the whole array and don't return true anywhere inside meaning there
    // there are no duplicates
    


// ==================================
// Time Complexity O(N) Freq Pattern
// ==================================
// Create a function that accepts a flexible number of arguments

    // If the length of the array is 0 return false because there are no duplicates
    

    // Create an empty object

    // Run a for looop that runs through the length of the argument
    
        // Create a variable for the index we are looking at currently
        
        // Check if that value is inside the object
        
            // If it is in the object add 1 to the keys values
            
            // Otherwise set the keys value equal to 1
           

    // Loop through all the keys in the object
    
        // If any of the keys valyes are greater than 1 we return true because we have a duplicate
       
    // If we don't return true at any point we return true
   