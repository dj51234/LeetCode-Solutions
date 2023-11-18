const longestCommonPrefix = function(strs, i = 0, output = '') {

    //* Get the current letter from i
    let currentLetter = strs[0][i] 
    //* Check if every word matches the current letter at the current index
    let lettersMatch = strs.every(word => word[i] === currentLetter) 

    //* check if strs or first letter is empty, if it is, return empty string
    if (currentLetter === undefined) {
        return output
    //* When the letters at the current index don't match in every word, return the current output
    } else if (!lettersMatch) {
        return output
    //* If only the first letter matches, return an empty string as well because that isn't a prefix
    } else if (!lettersMatch && i === 1) {
        return ''
    }
    //* if all conditions were passed add the current letter to output
    output += strs[0][i]
    //* Call longestCommonPrefix, providing the new output and increasing the index check by 1
    return longestCommonPrefix(strs, i + 1, output)
};

console.log(longestCommonPrefix(["flower","flow","flight"]))