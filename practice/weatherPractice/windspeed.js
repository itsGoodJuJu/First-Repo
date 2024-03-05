let avgWindspeed = 7.71

if (avgWindspeed < 0) {
    console.log("Illegal value provided");
} else if(avgWindspeed < 5) {
    console.log("slightly windy");
} else if(avgWindspeed >= 5 && avgWindspeed < 15) {
    console.log("moderate winds, grab a jacket");
} else if(avgWindspeed >= 15 && avgWindspeed < 25) {
    console.log("conditions are hazardous");
} else if (avgWindspeed >= 25) {
    console.log("wind advisory warning");
}