
function getBirthdate() {
//  does some code here
}
// ^ outdated/simple way to write a function


// Anonymous function
// () => {
//     console.log("Anonymous function is running");
// }


fetch('https://randomuser.me/api/?results=20')
    .then((response) => response.json())
    .then((data) => {
        let userDatabase = [];
        userDatabase.push(data);  
        // console.log(userDatabase);
        let usersInfo = [];
        for(i = 0; i < userDatabase[0].results.length; i++) {
            let users = {
                firstName: userDatabase[0].results[i].name.first,
                lastName: userDatabase[0].results[i].name.last,
                phoneNumber: userDatabase[0].results[i].phone,
                streetAddress: userDatabase[0].results[i].location.street.number + ' ' + userDatabase[0].results[i].location.street.name,
                photo: userDatabase[0].results[i].picture.medium,

                // maybe use bootstrap to get images to show
            };
            // let photoTag = document.createElement("img");
            // photoTag.src = photo;
            usersInfo.push(users);
            
        } 
        console.log(usersInfo);
        // let user = document.getElementsByClassName('user');      // document is undefined?? 
        user1.innerText = `${"First Name: " + usersInfo[0].firstName} \n ${"Last Name: " + usersInfo[0].lastName} \n ${"Phone Number: " + usersInfo[0].phoneNumber} \n ${"Street Address: " + usersInfo[0].streetAddress} \n ${"Photo ID: " + usersInfo[0].photo}`;
        
        user2.innerText = `${"First Name: " + usersInfo[1].firstName} \n ${"Last Name: " + usersInfo[1].lastName} \n ${"Phone Number: " + usersInfo[1].phoneNumber} \n ${"Street Address: " + usersInfo[1].streetAddress} \n ${"Photo ID: " + usersInfo[1].photo}`;
        
        user3.innerText = `${"First Name: " + usersInfo[2].firstName} \n ${"Last Name: " + usersInfo[2].lastName} \n ${"Phone Number: " + usersInfo[2].phoneNumber} \n ${"Street Address: " + usersInfo[2].streetAddress} \n ${"Photo ID: " + usersInfo[2].photo}`;

        user4.innerText = `${"First Name: " + usersInfo[3].firstName} \n ${"Last Name: " + usersInfo[3].lastName} \n ${"Phone Number: " + usersInfo[3].phoneNumber} \n ${"Street Address: " + usersInfo[3].streetAddress} \n ${"Photo ID: " + usersInfo[3].photo}`;

        user5.innerText = `${"First Name: " + usersInfo[4].firstName} \n ${"Last Name: " + usersInfo[4].lastName} \n ${"Phone Number: " + usersInfo[4].phoneNumber} \n ${"Street Address: " + usersInfo[4].streetAddress} \n ${"Photo ID: " + usersInfo[4].photo}`;
        
        user6.innerText = `${"First Name: " + usersInfo[5].firstName} \n ${"Last Name: " + usersInfo[5].lastName} \n ${"Phone Number: " + usersInfo[5].phoneNumber} \n ${"Street Address: " + usersInfo[5].streetAddress} \n ${"Photo ID: " + usersInfo[5].photo}`;

        user7.innerText = `${"First Name: " + usersInfo[6].firstName} \n ${"Last Name: " + usersInfo[6].lastName} \n ${"Phone Number: " + usersInfo[6].phoneNumber} \n ${"Street Address: " + usersInfo[6].streetAddress} \n ${"Photo ID: " + usersInfo[6].photo}`;

        user8.innerText = `${"First Name: " + usersInfo[7].firstName} \n ${"Last Name: " + usersInfo[7].lastName} \n ${"Phone Number: " + usersInfo[7].phoneNumber} \n ${"Street Address: " + usersInfo[7].streetAddress} \n ${"Photo ID: " + usersInfo[7].photo}`;

        user9.innerText = `${"First Name: " + usersInfo[8].firstName} \n ${"Last Name: " + usersInfo[8].lastName} \n ${"Phone Number: " + usersInfo[8].phoneNumber} \n ${"Street Address: " + usersInfo[8].streetAddress} \n ${"Photo ID: " + usersInfo[8].photo}`;
        
        user10.innerText = `${"First Name: " + usersInfo[9].firstName} \n ${"Last Name: " + usersInfo[9].lastName} \n ${"Phone Number: " + usersInfo[9].phoneNumber} \n ${"Street Address: " + usersInfo[9].streetAddress} \n ${"Photo ID: " + usersInfo[9].photo}`;
        
        user11.innerText = `${"First Name: " + usersInfo[10].firstName} \n ${"Last Name: " + usersInfo[10].lastName} \n ${"Phone Number: " + usersInfo[10].phoneNumber} \n ${"Street Address: " + usersInfo[10].streetAddress} \n ${"Photo ID: " + usersInfo[10].photo}`;
        
        user12.innerText = `${"First Name: " + usersInfo[11].firstName} \n ${"Last Name: " + usersInfo[11].lastName} \n ${"Phone Number: " + usersInfo[11].phoneNumber} \n ${"Street Address: " + usersInfo[11].streetAddress} \n ${"Photo ID: " + usersInfo[11].photo}`;
        
        user13.innerText = `${"First Name: " + usersInfo[12].firstName} \n ${"Last Name: " + usersInfo[12].lastName} \n ${"Phone Number: " + usersInfo[12].phoneNumber} \n ${"Street Address: " + usersInfo[12].streetAddress} \n ${"Photo ID: " + usersInfo[12].photo}`;
        
        user14.innerText = `${"First Name: " + usersInfo[13].firstName} \n ${"Last Name: " + usersInfo[13].lastName} \n ${"Phone Number: " + usersInfo[13].phoneNumber} \n ${"Street Address: " + usersInfo[13].streetAddress} \n ${"Photo ID: " + usersInfo[13].photo}`;
        
        user15.innerText = `${"First Name: " + usersInfo[14].firstName} \n ${"Last Name: " + usersInfo[14].lastName} \n ${"Phone Number: " + usersInfo[14].phoneNumber} \n ${"Street Address: " + usersInfo[14].streetAddress} \n ${"Photo ID: " + usersInfo[14].photo}`;

        user16.innerText = `${"First Name: " + usersInfo[15].firstName} \n ${"Last Name: " + usersInfo[15].lastName} \n ${"Phone Number: " + usersInfo[15].phoneNumber} \n ${"Street Address: " + usersInfo[15].streetAddress} \n ${"Photo ID: " + usersInfo[15].photo}`;

        user17.innerText = `${"First Name: " + usersInfo[16].firstName} \n ${"Last Name: " + usersInfo[16].lastName} \n ${"Phone Number: " + usersInfo[16].phoneNumber} \n ${"Street Address: " + usersInfo[16].streetAddress} \n ${"Photo ID: " + usersInfo[16].photo}`;
        
        user18.innerText = `${"First Name: " + usersInfo[17].firstName} \n ${"Last Name: " + usersInfo[17].lastName} \n ${"Phone Number: " + usersInfo[17].phoneNumber} \n ${"Street Address: " + usersInfo[17].streetAddress} \n ${"Photo ID: " + usersInfo[17].photo}`;

        user19.innerText = `${"First Name: " + usersInfo[18].firstName} \n ${"Last Name: " + usersInfo[18].lastName} \n ${"Phone Number: " + usersInfo[18].phoneNumber} \n ${"Street Address: " + usersInfo[18].streetAddress} \n ${"Photo ID: " + usersInfo[18].photo}`;

        user20.innerText = `${"First Name: " + usersInfo[19].firstName} \n ${"Last Name: " + usersInfo[19].lastName} \n ${"Phone Number: " + usersInfo[19].phoneNumber} \n ${"Street Address: " + usersInfo[19].streetAddress} \n ${"Photo ID: " + usersInfo[19].photo}`;
    })
    // .then((data) => console.log(data.results[0].location.street))
    // .then((data) => console.log(data.results[0].name.first));

    // userAPI.push(userDatabase);
    // console.log(userAPI);


    // let userInformation = {
//     firstName: userDatabase[0].data.results[0].name.first,
//     lastName: userDatabase[0].data.results[0].name.last,
//     phoneNumber: userDatabase[0].data.results[0].phone,
//     streetAddress: userDatabase[0].data.results[0].location.street.number + ' ' + userDatabase[0].data.results[0].location.street.name,
//     photo: userDatabase[0].data.results[0].picture.medium,
// }
    




// let newResponse = response + "cat";