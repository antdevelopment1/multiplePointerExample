// Create a function which takes two strings and checks whether the characters in the first string form a 
// subsequence of the characters in the second string. The function should check whether the characters in 
// the first string appear somewhere in the second string, without their order changing.

// Examples
// ('hello', 'hello world') = true
// ('sing', 'sting') = true
// ('abc', 'abracadabra') = true
// ('abc', 'acb') = false


function subsequence(str1, str2) {
    // Create a variable for i and start it at 0
    let i = 0;
    // Create a empty variable for j and start it at 0
    let j = 0;

    // If no string is passed we return true
    if (!str1) {
        // I'm unsure if I feel this should return true. If there is no first string I would think we return false if no 
        // first string was passed
        return true;
    }

    // Run a while loop while j is less than the second string
    while (j < str2.length) {
        // We check if the first letter of each word matches each other
        if (str1[i] === str2[j]) {
            // If they do we will increment i by 1
            i++;
        }
        // If the count for i makes it all the way to the end of string1 then we return true
        if (i === str1.length) {
            return true;
        }
        // We increment j as we go through the loop to check the next letter agaianst str1[i]
        j++;
    }
    // If we finish the loop before we can return true we will return false
    return false;

}

console.log(subsequence('abc', 'acb'))