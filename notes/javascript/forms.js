
let userInfo = [
    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "password1",
        "address": "123 Main St",
        "zip_code": "12345",
        "phone_number": "123-456-7890"
    },
    {
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "password": "password2",
        "address": "456 Elm St",
        "zip_code": "23456",
        "phone_number": "234-567-8901"
    },
    {
        "name": "Michael Johnson",
        "email": "michael.johnson@example.com",
        "password": "password3",
        "address": "789 Oak St",
        "zip_code": "34567",
        "phone_number": "345-678-9012"
    },
    // Continue adding other users here...
]

function getEmail() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    
    console.log("Email: ", email.value);
    console.log('Password: ', password.value);
    // console.log('Profile: ', profile.value);
    
    for(i = 0; i <userInfo.length; i++) {
        if(password.value === userInfo[i].password && email.value === userInfo[i].email) {
            console.log("Logged In :)");
            break;
        } else if (password.value !== userInfo[userInfo.length - 1].password || email.value !== userInfo[userInfo.length - 1].email) {
            console.log("Failed >__<");
        }
        
    }

}
