const isPalindrome = function(x) {
    let reverse = x.toString().split('').reverse().join('') * 1
    return reverse === x
};

console.log(isPalindrome(121))