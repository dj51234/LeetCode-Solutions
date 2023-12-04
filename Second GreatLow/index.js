function SecondGreatLow(arr) {
    // in case test cases aren't sorted 
    arr = arr.sort((a,b) => a - b)
  
    if (arr.length === 2) return `${arr[1]} ${arr[0]}`
    
    if (arr[1] === arr[0]) {
      // remove duplicates on edges only?
      for (let i = 0;i < arr.length; i++) {
        if (arr[i] === arr[0]) {
          arr.splice(i,1)
        } 
      }
    }
  
    if (arr[arr.length - 2] === arr[arr.length - 1]) {
      // remove duplicates on edges only?
      for (let i = 0;i < arr.length; i++) {
        if (arr[i] === arr[arr.length - 1]) {
          arr.splice(arr.length - 1,1)
        } 
      }
    }
  
    return  `${arr[1]} ${arr[arr.length - 2]}`; 
  
  }
     
  // keep this function call here 
  console.log(SecondGreatLow([1,2,2,3]));