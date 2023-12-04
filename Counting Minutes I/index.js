function parseTimes(str) {
    let [time1, time2] = str.split('-')
    time1 = time1.split(':')
    time2 = time2.split(':')
    time1[2] = time1[1].substr(-2)
    time1[1] = time1[1].replace(time1[2],'')
    time2[2] = time2[1].substr(-2)
    time2[1] = time2[1].replace(time2[2],'')
    
    for(let i = 0; i < time1.length;i++) {
      if (i !== 2) {
        time1[i] = parseInt(time1[i])
        time2[i] = parseInt(time2[i])
      }
    }
  
    if (time1.includes('am') && time1[0] === 12) time1[0] = 0
  
    if (time2.includes('am') && time2[0] === 12) time2[0] = 0
    
    return [time1, time2]
  }
  
  function CountingMinutesI(str) { 
    // split string
    let [time1, time2] = parseTimes(str)
    
    // calc minutes
    // am
    if (time1.includes('am') && time1[0] !== 0) time1[0] = time1[0] * 60
    if (time1.includes('am') && time1[0] === 0) time1[0] = time1[1]
    if (time2.includes('am') && time2[0] !== 0) time2[0] = time2[0] * 60
    if (time2.includes('am') && time2[0] === 0) time2[0] = time2[1]
  
    // pm
    if (time1.includes('pm') && time1[0] !== 12) time1[0] = (time1[0] * 60) + 720
    if (time1.includes('pm') && time1[0] === 12) time1[0] = 720
    if (time2.includes('pm') && time2[0] !== 12) time2[0] = (time2[0] * 60) + 720
    if (time2.includes('pm') && time2[0] === 12) time2[0] = 720
  
    
    let finalTime1 = [...time1]
    finalTime1.pop()
    let finalTime2 = [...time2]
    finalTime2.pop()
  
    finalTime1 = finalTime1.reduce((acc,mins) => acc + mins,0)
    finalTime2 = finalTime2.reduce((acc,mins) => acc + mins,0)
  
    if (time1.includes('pm') && time2.includes('am')) {
      return (finalTime2 + 1440) - finalTime1
    } else if (finalTime1 > finalTime2) {
      return 1440 - (finalTime1 - finalTime2)
    } else {
      return finalTime2 - finalTime1
    }
  
  }
  
  
     
  // keep this function call here 
  console.log(CountingMinutesI('1:23am-1:08am'));