/**
 * @param {string} s
 * @return {boolean}
 */

//  set first index and last index as default params
const isPalindrome = function(s, first = 0, last = 0) {

    // on the first iteration, convert the string using regex, lowercase everything and set last to the last index
    if (first === 0) {
        const regex = /[^A-Za-z0-9]/g
        s = s.replace(regex, '').toLowerCase()
        last = s.length - 1
    }
    
    // BASE cases
    // if the first index and last index don't match, return false bc it's not a palindrome
    if (s[first] !== s[last]) {
        return false
    }

    // if the first variable is larger than the last variable, we've reached the end and every letter had a match, we can return true
    if (first >= last) {
        return true
    }

    // edge case from directions, weird but okay :/
    if (s === ' ') {
        return true
    }
    // return s, update the first index to be the next letter and the last index to be the previous letter before it going backwards
    return isPalindrome(s, first + 1, last - 1)
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))