

// let bool = [true, false, false, true, true, true, false];

// let i = 0;
// while(i < bool.length) {
//     if(bool[i] === true) {
//         console.log(i);
//     }
//     i++
// }


// * --------------------------------------------------------------------------- *

let userAccounts = [
    {
        name: "John Doe",
        birthday: "05/24/1974",
        username: "john@email.com",
    },
    {
        name: "Ashley Jones",
        birthday: "07/09/1986",
        username: "ashley@email.com",
    },
    {
        name: "Mike Brown",
        birthday: "11/12/2004",
        username: "mike@email.com",
    },
    {
        name: "Jake Smith",
        birthday: "12/03/1999",
        username: "jake@email.com",
    },
]

// function getBirthdates(users) {
//     let i = 0;
//     while(i < users.length) {
//         // console.log(users[i].birthday);
//         users[i].id = i + 1;
//         i++;
//     }
//     console.log(users);
// }

// getBirthdates(userAccounts);

// * ---------------------------------------------------------------------------- *

// Generate a random ID that is 7 digits long (x,xxx,xxx) and is not a duplicate
// ie another candidate cannot have the same ID

let ids = [];

function generateNewID(users) {
    let i = 0;
    let id = Math.ceil(Math.random() * 10000000);
    for(i = 0; i < ids.length; i++) {
        console.log("invalidID: ", ids[i]);
        if(ids[i] === id) {
            console.log("Duplicate found!");
            console.log("Generated id: ", id)
            return generateNewID();
        }
    }
    ids.push(id);
    console.log("Invalid ID Array", ids);
    return id;

    // while(i < users.length) {
    //     // console.log(users[i].birthday);
    //     users[i].id = i + Math.ceil(Math.random() * 10000000);
        

        // ---- below not exactly correct ---
        // if(ids.includes(users[i].id)) {
        //     break; XXX
        // } else {
        //     ids.push(users[i].id);
        // }
    //     i++;
    // }
    // console.log(users);
    // console.log(ids);
}


function getBirthdates(users) {
    let i = 0;
    while(i < users.length) {
    // console.log(users[i].birthday);
    users[i].id = generateNewID();
        i++;
    }
    console.log(users);
}

getBirthdates(userAccounts);



// * ---------------------------------------------------------------------------- *
// use favorite browser to convert current list of user birthdays from string to date

// Determine if you can compare dates using <, >, == similar to any regular number

// print out a list of users who are old enough to run for president



// function getBirthdates(users) {

//     let i = 0;
//     while(i < users.length) {
//         let d = new Date(users[i].birthday)
//         let today = new Date();
//         // let nextDate = new Date(users[i+1].birthday)

//         let day = d.getDate();
//         let month = d.getMonth()+1;
//         let year = d.getFullYear();

//         let currentDay = today.getDate();
//         let currentMonth = today.getMonth()+1;
//         let currentYear = today.getFullYear();

//         // console.log(month + "/" + day + "/" + year);

//         // if(d > nextDate) {
//         //     console.log(true);
//         // } else {
//         //     console.log(false);
//         // }

//         if(currentYear - year > 35) {
//             console.log(users[i].name + " is eligible to run for president.");
//         } else {
//             console.log(users[i].name + " is not eligible to run for president... YET!");
//         }
//         i++;
//     }
// }

// getBirthdates(userAccounts);


