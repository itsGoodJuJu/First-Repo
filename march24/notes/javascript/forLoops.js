

let teams = ["Braves", "Reds", "Yankees", "Red Sox", "Marlins", "Cardinals"];

// for(let index = 0; index < teams.length; index++) {
//     // console.log(teams[index]);
//     if(teams[index] == "Marlins") {
//         console.log("The Braves may play the Marlins in the first round.");
//     } 
// } 

//  ---------------------------------------------------------------------
// Using the same array of teams, print the teams that are at an odd index

// for(let index = 1; index < teams.length; index += 2) {
//     console.log(teams[index]);
// }

// ^ most likely the best way to find every odd index ^

// --------------------------------------------------------------------
// below is an additional way to find all odd index, but not the simplest
// for(let index = 0; index < teams.length; index++) {
//     if(index % 2 != 0) {
//         console.log(teams[index]);
//     }
// }

// ---------------------------------------------------------------------
// Print the array of teams in reverse

// for(let index = teams.length - 1; index >= 0; index--) {
//     console.log(teams[index]);
// }


// --------------------------------------------------------------------

// Part 1: Print out every team with an attendance over 30000
// Part II: Print the list of teams in alphabetical order by name
teams = [
    {
        name: "Braves",
        city: "Atlanta",
        state: "GA",
        avgAttendance: 39401,
    },
    {
        name: "Reds",
        city: "Cincinatti",
        state:"OH",
        avgAttendance: 25164
    },
    {
        name: "Yankees",
        city: "New York City",
        state: "NY",
        avgAttendance: 40862
    },
    {
        name: "Red Sox",
        city: "Boston",
        state: "MA",
        avgAttendance: 32989,
    },
]

// Part 1: Print out every team name with an attendance over 30000

// for(let index = 0; index < teams.length; index++) {
//     if(teams[index].avgAttendance > 30000) {
//         console.log(teams[index].name)
//     }
// }

// Part II: Print the list of teams in alphabetical order by name

// ----------------- My Attempt Below ------------------
// let orderedTeams = teams.sort((a, b) =>
//     a.name.localeCompare(b.name));
// console.log(orderedTeams);

// for(i = 0; i < teams.length; i++) {
//     console.log(teams[i].name);
// }

// ---------- Build a sort function from scratch ------------


for(let i = 0; i + 1 < teams.length; i++) {
    // console.log("Current team: ", teams[i].name);
    // console.log("Next team: ", teams[i + 1].name);
    if(teams[i].name < teams[i + 1].name) {
        console.log(teams[i].name);
    } else if(teams[i + 1].name < teams[i].name) {
        console.log(teams[i + 1].name);
        console.log(teams[i].name);
    }
}

