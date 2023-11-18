const romanToInt = function(strs, i = 0, output = '') {
    const numerals = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    } 
     const entries = Object.entries(numerals)
     const nums = []
     
     for (let i = 0; i < s.length; i++) {
         for (let j = 0; j < entries.length; j++) {
             if (s[i] === entries[j][1]) {
                 nums.push(entries[j][0] * 1)
             }
         }
     }
 
     for (let i = 0; i < nums.length; i++) {
         if (nums[i] < nums[i + 1]) {
             nums[i] = (nums[i + 1] - nums[i])
             nums.splice(i + 1, 1)
         }
     }
     
     return nums.reduce((total,num) => total + num)
};

console.log(romanToInt("MCMXCIV"))