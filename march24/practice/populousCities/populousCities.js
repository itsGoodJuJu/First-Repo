
// objects 

let tokyo = {
    cityName: "Tokyo",
    state: "Kanto",
    country: "Japan",
    population: 37400000,
    yearFounded: 1889,
}

let delhi = {
    cityName: "Delhi",
    state: "National Capital Territory of Delhi",
    country: "India",
    population: 29300000,
    yearFounded: 1052,
}

let shanghai = {
    cityName: "Shanghai",
    state: "N/A",
    country: "China",
    population: 26300000,
    yearFounded: 1291,
}

let saoPaulo = {
    cityName: "São Paulo",
    state: "São Paulo",
    country: "Brazil",
    population: 21800000,
    yearFounded: 1554,
}

let mexicoCity = {
    cityName: "Mexico City",
    state: "N/A",
    country: "Mexico",
    population: 21600000,
    yearFounded: 1325,
}

let cairo = {
    cityName: "Cairo",
    state: "Cairo Governorate",
    country: "Egypt",
    population: 20400000,
    yearFounded: 969,
}

let dhaka = {
    cityName: "Dhaka",
    state: "Dhaka District",
    country: "Bangladesh",
    population: 20200000,
    yearFounded: 1610,
}

let mumbai = {
    cityName: "Mumbai",
    state: "Maharashtra",
    country: "India",
    population: "20.1 million",
    yearFounded: 1507,
}

let beijing = {
    cityName: "Beijing",
    state: "Beijing Municipality",
    country: "China",
    population: "19.4 million",
    yearFounded: 1261,
}

let osaka = {
    cityName: "Osaka",
    state: "Kansai",
    country: "Japan",
    population: "19.2 million",
    yearFounded: 1889,
}

// array
let list = [
    tokyo, 
    delhi, 
    shanghai,
    saoPaulo,
    mexicoCity,
    cairo,
    dhaka
]

list.push(mumbai, beijing, osaka)

// Console.log()
console.log(list);

// to access properties inside of an object we use dot notation
console.log(mumbai.population);

console.log(list[0].population);

