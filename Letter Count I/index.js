function LetterCountI(str) { 

    let finalStr = str.split(' ')
    let arr = str.toLowerCase().split(' ')
    let highest = 0
    // iterate over each word
    arr = arr.map(word => word.split(''))

    for (let i = 0; i < arr.length;i++) {
        arr[i] = arr[i].reduce((acc, letter) => {
        acc[letter] = acc[letter] + 1 || 1
        return acc
        },{})
        
        arr[i] = Math.max(...Object.values(arr[i]).sort((a,b) => b - a))
    }
    // need to find largest number without sorting, to get index for the word in original string
    arr.forEach((num, i) => {
        highest = num > highest ? num : highest
    })
    let answer = arr.findIndex((num) => num === highest)
    
    // code goes here  
    return highest === 1 ? -1 : finalStr[answer]
  
  }
     
  // keep this function call here 
  console.log(LetterCountI('Hello apple pie'));