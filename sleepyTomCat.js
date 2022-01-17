function sleepyTomCat(input){
   const freeDaysCount = Number(input[0]);
   let workDaysCount = 365 - freeDaysCount;
   let totalTimeForGame = (freeDaysCount * 127) + (workDaysCount *63); 
   let minutesNeedForSleep = 30000;
   let diff = Math.abs(30000 - totalTimeForGame) 
   let hours = diff / 60;
   let min = diff % 60;
   if (minutesNeedForSleep < totalTimeForGame){ 
    console.log("Tom will run away");
    console.log(`${Math.floor(hours)} hours and ${min} minutes more for play`)
   } else {
    console.log("Tom sleeps well");   
    console.log(`${Math.floor(hours)} hours and ${min} minutes less for play`) 
    Math.c
   }
}
sleepyTomCat(["20"])