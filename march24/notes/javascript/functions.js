
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function sayHello(username) {
    console.log("Hi, my name is " + username);
}

let windspeed = 7.71

function generateWindWarning(day1, day2, day3) {
    avgWindspeed = (day1 + day2 + day3)/3;
    console.log(avgWindspeed);
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
}

function generateWeatherWarning() {
    console.log(windspeed);
}

function lottery(userNumber) {
    let lotteryNumber = Math.ceil(Math.random() * 100);
    console.log("User Number: " + userNumber);
    console.log("Lottery Number: " + lotteryNumber);
    if(userNumber === lotteryNumber) {
        console.log("Congratulations! You've won the lottery!");
    } else {
        console.log("Better luck next time")
    }
}

sayHello("JuJu");
generateWindWarning(7, 12, 15);
generateWeatherWarning();
lottery(randomNumber);