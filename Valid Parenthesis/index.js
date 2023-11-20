/**
 * @param {string} s
 * @return {boolean}
 */

// Store open brackets in array by pushing them to the array when found
// If a closing bracket is found, and the array is empty OR if the last item of the array is NOT a matching open bracket, return false

const isValid = function(s) {   
    debugger;
    let stringIsValid = [] // create empty array to store open brackets

    // loop through string
    for (let char of s) {
        // If open bracket is found, push it to the array   
        if (char === '(' || char === '{' || char === '[') {
            stringIsValid.push(char)
        // If current character is a CLOSING bracket, check the last item in the array to check if it matches it's open bracket. 
        // If it doesn't then the string is invalid and we return false
        } else {
            if ((char === ')' && stringIsValid[stringIsValid.length - 1] !== '(') ||
                (char === '}' && stringIsValid[stringIsValid.length - 1] !== '{') ||
                (char === ']' && stringIsValid[stringIsValid.length - 1] !== '[')) {
                return false
            } 
            // If it DOES match the last item's open bracket, we pop the open bracket off the array and move to the next 
            // character in the string
            stringIsValid.pop()
        }  
    } 
    
    // If the length of the array is 0, this means every open bracket had a matching closing bracket and will return true
    // If the length of the array is NOT 0, this means there are still open brackets left in the array that weren't 
    // matched with any closing brackets
    return stringIsValid.length === 0   
}
  
console.log(isValid('([{}])}'))