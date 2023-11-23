/**
 * @param {number[]} nums
 * @return {number}
 */

// Standard iteration approach
const removeDuplicates = function(nums, i = 0, j = 0) {
    // Iteration approach //
    for (let i = 0;i < nums.length;i++) {
        for (let j = i + 1;j < nums.length;j++) {
            while (nums[i] === nums[j]) {
                nums.splice(j,1)
            }
        }
    }
};

 // Recursive Approach 
const removeDuplicates2 = function(nums) {
    // i will be the current index and j will be the index of the last encountered unique number
    function sortArr(i, j) {
        // Base case
        if (i === nums.length) {
            // cut off the extra elements
            nums.length = j + 1
            // return the new spliced arr of only unique numbers 
            return nums
            // return nums.length
        }
        // if nums[i] is not equal to nums[j] that means we've found a unique num at i so we will increase j by 1 and replace j with the unique num we've found.
        // Example: If nums[1] is 1, we search the rest of the array until we find a number that isn't 1, like 2. Since we've found 2 and j is still at the last unique num (nums[1]) we increase j by 1 to replace the next index with the new 2 that we've found
        if (nums[i] !== nums[j]) {
            j++
            nums[j] = nums[i]
        }

        // if nums[i] and nums[j] are equal that means we haven't found a new unique num yet so we can check the next index in the array with arr[i + 1] while maintaining j's position as the last unique num position
        return sortArr(i + 1, j)
    }
    // start with i at 1 and j at 0 since the first index (i = 0) will always be unique
    return sortArr(1, 0)
};

console.log(removeDuplicates2([0,0,1,1,1,2,2,3,3,4]))