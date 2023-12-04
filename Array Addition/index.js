// [-1,3,5,8]
// -1
// -1 += 8 += 5 +=3


function ArrayAdditionI(arr) { 
  // get largest num and remove from array. Array is sorted
    const [numToTest] = arr.sort((a,b) => a - b).splice(-1)

    // initial value for sum
    let sum = 0

    // loop through elements in arr argument
    for (let i = 0;i < arr.length;i++) {

      // this will be used to skip numbers to ensure every combo is used, starting with 0 so we can test every combo with every number first
      let skip = i
      
      // when skip is 0 this loop will try all combinations up to the last index
      while (skip < arr.length) {

        // set current index as starting sum
        sum = arr[i]

        // loop through every item after current index and add it to the sum, testing all combos up until last index
        for (let j = i + 1;j < arr.length;j++) {

          // after the first iteration of looping through the whole array, this will be set to the index to be skipped so we can try other possible combos
          if (j !== skip) {
            sum += arr[j]
          }

          // return true if a combo is found
          if (sum === numToTest) {
            return true
          }
        }
        // increase skip to change the skipped element for the next loop
      skip++
      }
    }
    
    // return false if no combos are found
    return false
  }
     
  // keep this function call here 
  console.log(ArrayAdditionI( [4, 6, 23, 10, 1, 3] ));