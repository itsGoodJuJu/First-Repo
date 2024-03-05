let temp = 90;
if (temp < 72) {
    console.log("It's cold");
} else {
    console.log("It's hot")
}

if (temp != 72) {
    console.log("Today is not a perfect day");
    console.log("Wait for another day to go outside");
}

let isSaturday = false;
if(!isSaturday) {
    console.log("It's the weekend!")
}

let day = "Friday";
if (day == "Monday") {
    console.log("It's the worst day of the week")
}

let score = 43;
// does not work because number datatype != string datatype
// === must equal same value and datatype
if (score === "43") {
    console.log("That's a great score");
}

let price = 40000;
if (price < 25000) {
    console.log("Buy the car with cash"); 
} else if(price >= 25000 && price <= 35000) {
    console.log("Pay $25000 cash and finance the rest");
} else {
    console.log("The car is too expensive; pick a different one");
}