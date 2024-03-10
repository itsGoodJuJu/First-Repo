/* 
1). Get the current temperature(F), UV index, wind speed, rain chance, and wind direction of Newark, NJ and store it within an object. Print the object to the terminal
2). Retrieve the temperature of Newark 4 hours from now and add it to the previously created object
3). Do the same for the following cities:
 Los Angeles
Miami
Charlotte
Houston
Seattle
4). Add each city to an array
5). Print out the city that will be the warmest in 4 hours
*/

let newark = {}

let newObject = {
    "data": {
        "time": "2024-03-08T15:43:00Z",
        "values": {
            "cloudBase": 1.18,
            "cloudCeiling": 1.18,
            "cloudCover": 80,
            "dewPoint": 1.19,
            "freezingRainIntensity": 0,
            "humidity": 51,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 1023.78,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 8.19,
            "temperatureApparent": 8.19,
            "uvHealthConcern": 1,
            "uvIndex": 3,
            "visibility": 16,
            "weatherCode": 1001,
            "windDirection": 34,
            "windGust": 3,
            "windSpeed": 1.13
        }
    },
    "location": {
        "lat": 40.73565673828125,
        "lon": -74.17236328125,
        "name": "Newark, Essex County, New Jersey, United States",
        "type": "administrative"
    }
}

// ------------- Dre's version --------------
// let nwk = {
//     temp: newObject.data.values.temperature,
//     uvIndex: newObject.data.values.uvIndex,
//     windSpeed: newObject.data.values.windSpeed,
//     rainChance: newObject.data.values.precipitationProbability,
//     windDirection: newObject.data.values.windDirection,
// }
// -------------------------------------------

newark.name = "Newark";
newark.currentTemp = newObject.data.values.temperature;
newark.uvIndex = newObject.data.values.uvIndex;
newark.windSpeed = newObject.data.values.windSpeed;
newark.rainChance = newObject.data.values.precipitationProbability;
newark.windDirection = newObject.data.values.windDirection;


let newarkHours = {
    "data": {
        "timelines": {
            "timestep": "1h",
            "endTime": "2024-03-08T21:00:00Z",
            "startTime": "2024-03-08T15:00:00Z",
            "intervals": [
                {
                    "startTime": "2024-03-08T15:00:00Z",
                    "values": {
                        "temperature": 45.5
                    }
                },
                {
                    "startTime": "2024-03-08T16:00:00Z",
                    "values": {
                        "temperature": 45.94
                    }
                },
                {
                    "startTime": "2024-03-08T17:00:00Z",
                    "values": {
                        "temperature": 47.43
                    }
                },
                {
                    "startTime": "2024-03-08T18:00:00Z",
                    "values": {
                        "temperature": 49.12
                    }
                },
                {
                    "startTime": "2024-03-08T19:00:00Z",
                    "values": {
                        "temperature": 50.15
                    }
                },
                {
                    "startTime": "2024-03-08T20:00:00Z",
                    "values": {
                        "temperature": 50.31
                    }
                },
                {
                    "startTime": "2024-03-08T21:00:00Z",
                    "values": {
                        "temperature": 49.53
                    }
                }
            ]
        }
    }
}

newark.tempFourHoursFromNow = newarkHours.data.timelines.intervals[4].values.temperature;

console.log(newark);



let losAngeles = {}

let losAngelesAPI = {
    "data": {
        "time": "2024-03-08T15:58:00Z",
        "values": {
            "cloudBase": null,
            "cloudCeiling": null,
            "cloudCover": 9,
            "dewPoint": 9.13,
            "freezingRainIntensity": 0,
            "humidity": 86,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 1005.12,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 11.19,
            "temperatureApparent": 11.19,
            "uvHealthConcern": 0,
            "uvIndex": 0,
            "visibility": 15.63,
            "weatherCode": 1000,
            "windDirection": 43.13,
            "windGust": 2.13,
            "windSpeed": 1.38
        }
    },
    "location": {
        "lat": 34.05369186401367,
        "lon": -118.24276733398438,
        "name": "Los Angeles, California, United States",
        "type": "administrative"
    }
}

losAngeles.name = "Los Angeles";
losAngeles.currentTemp = losAngelesAPI.data.values.temperature;
losAngeles.uvIndex = losAngelesAPI.data.values.uvIndex;
losAngeles.windSpeed = losAngelesAPI.data.values.windSpeed;
losAngeles.rainChance = losAngelesAPI.data.values.precipitationProbability;
losAngeles.windDirection = losAngelesAPI.data.values.windDirection;


let losAngelesHours = {
    "data": {
        "timelines": {
                "timestep": "1h",
                "endTime": "2024-03-08T21:00:00Z",
                "startTime": "2024-03-08T15:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T15:00:00Z",
                        "values": {
                            "temperature": 54.73
                        }
                    },
                    {
                        "startTime": "2024-03-08T16:00:00Z",
                        "values": {
                            "temperature": 62.7
                        }
                    },
                    {
                        "startTime": "2024-03-08T17:00:00Z",
                        "values": {
                            "temperature": 64.22
                        }
                    },
                    {
                        "startTime": "2024-03-08T18:00:00Z",
                        "values": {
                            "temperature": 61.95
                        }
                    },
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 64.93
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 66.38
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 61.3
                        }
                    }
                ]
            
        }
    }
}

losAngeles.tempFourHoursFromNow = losAngelesHours.data.timelines.intervals[4].values.temperature;

console.log(losAngeles);



let miami = {}

let miamiAPI = {
    "data": {
        "time": "2024-03-08T16:52:00Z",
        "values": {
            "cloudBase": 0.55,
            "cloudCeiling": 0.55,
            "cloudCover": 80,
            "dewPoint": 22.5,
            "freezingRainIntensity": 0,
            "humidity": 78,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 1015.07,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 26.81,
            "temperatureApparent": 29.17,
            "uvHealthConcern": 3,
            "uvIndex": 8,
            "visibility": 16,
            "weatherCode": 1001,
            "windDirection": 110.81,
            "windGust": 3.81,
            "windSpeed": 2.88
        }
    },
    "location": {
        "lat": 25.774173736572266,
        "lon": -80.19361877441406,
        "name": "Miami, Miami-Dade County, Florida, United States",
        "type": "city"
    }
}

miami.name = "Miami";
miami.currentTemp = miamiAPI.data.values.temperature;
miami.uvIndex = miamiAPI.data.values.uvIndex;
miami.windSpeed = miamiAPI.data.values.windSpeed;
miami.rainChance = miamiAPI.data.values.precipitationProbability;
miami.windDirection = miamiAPI.data.values.windDirection;

let miamiHours = {
    "data": {
        "timelines": {
                "timestep": "1h",
                "endTime": "2024-03-08T22:00:00Z",
                "startTime": "2024-03-08T16:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T16:00:00Z",
                        "values": {
                            "temperature": 80.26
                        }
                    },
                    {
                        "startTime": "2024-03-08T17:00:00Z",
                        "values": {
                            "temperature": 82.17
                        }
                    },
                    {
                        "startTime": "2024-03-08T18:00:00Z",
                        "values": {
                            "temperature": 82.68
                        }
                    },
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 82.46
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 82.53
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 82.08
                        }
                    },
                    {
                        "startTime": "2024-03-08T22:00:00Z",
                        "values": {
                            "temperature": 81.27
                        }
                    }
                ]
            }
        
    }
}

miami.tempFourHoursFromNow = miamiHours.data.timelines.intervals[4].values.temperature;

console.log(miami);


let charlotte = {};

let charlotteAPI = {
    "data": {
        "time": "2024-03-08T16:58:00Z",
        "values": {
            "cloudBase": 0.25,
            "cloudCeiling": 0.25,
            "cloudCover": 100,
            "dewPoint": 11.63,
            "freezingRainIntensity": 0,
            "humidity": 88,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 996.68,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 13.63,
            "temperatureApparent": 13.63,
            "uvHealthConcern": 1,
            "uvIndex": 2,
            "visibility": 14.5,
            "weatherCode": 1001,
            "windDirection": 121.88,
            "windGust": 6.19,
            "windSpeed": 3.31
        }
    },
    "location": {
        "lat": 35.22720718383789,
        "lon": -80.84308624267578,
        "name": "Charlotte, Mecklenburg County, North Carolina, United States",
        "type": "administrative"
    }
}

charlotte.name = "Charlotte";
charlotte.currentTemp = charlotteAPI.data.values.temperature;
charlotte.uvIndex = charlotteAPI.data.values.uvIndex;
charlotte.windSpeed = charlotteAPI.data.values.windSpeed;
charlotte.rainChance = charlotteAPI.data.values.precipitationProbability;
charlotte.windDirection = charlotteAPI.data.values.windDirection;

let charlotteHours= {
    "data": {
        "timelines": {
                "timestep": "1h",
                "endTime": "2024-03-08T22:00:00Z",
                "startTime": "2024-03-08T16:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T16:00:00Z",
                        "values": {
                            "temperature": 56.98
                        }
                    },
                    {
                        "startTime": "2024-03-08T17:00:00Z",
                        "values": {
                            "temperature": 57.62
                        }
                    },
                    {
                        "startTime": "2024-03-08T18:00:00Z",
                        "values": {
                            "temperature": 59.47
                        }
                    },
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 61.86
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 62.98
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 62.9
                        }
                    },
                    {
                        "startTime": "2024-03-08T22:00:00Z",
                        "values": {
                            "temperature": 62.44
                        }
                    }
                ]
            }
        
    }
}


charlotte.tempFourHoursFromNow = charlotteHours.data.timelines.intervals[4].values.temperature;

console.log(charlotte);



let houston = {}

let houstonAPI = {
    "data": {
        "time": "2024-03-08T17:01:00Z",
        "values": {
            "cloudBase": 0.15,
            "cloudCeiling": 0.15,
            "cloudCover": 97,
            "dewPoint": 22.88,
            "freezingRainIntensity": 0,
            "humidity": 93,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 1005.69,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 24.19,
            "temperatureApparent": 24.19,
            "uvHealthConcern": 0,
            "uvIndex": 1,
            "visibility": 12.52,
            "weatherCode": 1001,
            "windDirection": 203.81,
            "windGust": 3.13,
            "windSpeed": 1.13
        }
    },
    "location": {
        "lat": 29.75893783569336,
        "lon": -95.3676986694336,
        "name": "Houston, Harris County, Texas, United States",
        "type": "administrative"
    }
}

houston.name = "Houston";
houston.currentTemp = houstonAPI.data.values.temperature;
houston.uvIndex = houstonAPI.data.values.uvIndex;
houston.windSpeed = houstonAPI.data.values.windSpeed;
houston.rainChance = houstonAPI.data.values.precipitationProbability;
houston.windDirection = houstonAPI.data.values.windDirection;

let houstonHours = {
    "data": {
        "timelines": {
                "timestep": "1h",
                "endTime": "2024-03-08T23:00:00Z",
                "startTime": "2024-03-08T17:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T17:00:00Z",
                        "values": {
                            "temperature": 75.54
                        }
                    },
                    {
                        "startTime": "2024-03-08T18:00:00Z",
                        "values": {
                            "temperature": 78.67
                        }
                    },
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 76.4
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 76.56
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 78.62
                        }
                    },
                    {
                        "startTime": "2024-03-08T22:00:00Z",
                        "values": {
                            "temperature": 79.2
                        }
                    },
                    {
                        "startTime": "2024-03-08T23:00:00Z",
                        "values": {
                            "temperature": 78.48
                        }
                    }
                ]
            }
        
    }
}


houston.tempFourHoursFromNow = houstonHours.data.timelines.intervals[4].values.temperature;

console.log(houston);


let seattle = {};

let seattleAPI = {
    "data": {
        "time": "2024-03-08T17:03:00Z",
        "values": {
            "cloudBase": 0.51,
            "cloudCeiling": 0.51,
            "cloudCover": 100,
            "dewPoint": 1.88,
            "freezingRainIntensity": 0,
            "humidity": 75,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 1018.93,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 6.13,
            "temperatureApparent": 6.13,
            "uvHealthConcern": 0,
            "uvIndex": 0,
            "visibility": 16,
            "weatherCode": 1001,
            "windDirection": 167.38,
            "windGust": 2.69,
            "windSpeed": 0.88
        }
    },
    "location": {
        "lat": 47.60383224487305,
        "lon": -122.33006286621094,
        "name": "Seattle, King County, Washington, United States",
        "type": "administrative"
    }
}

seattle.name = "Seattle";
seattle.currentTemp = seattleAPI.data.values.temperature;
seattle.uvIndex = seattleAPI.data.values.uvIndex;
seattle.windSpeed = seattleAPI.data.values.windSpeed;
seattle.rainChance = seattleAPI.data.values.precipitationProbability;
seattle.windDirection = seattleAPI.data.values.windDirection;

let seattleHours = {
    "data": {
        "timelines": {
                "timestep": "1h",
                "endTime": "2024-03-08T23:00:00Z",
                "startTime": "2024-03-08T17:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T17:00:00Z",
                        "values": {
                            "temperature": 43.03
                        }
                    },
                    {
                        "startTime": "2024-03-08T18:00:00Z",
                        "values": {
                            "temperature": 43.94
                        }
                    },
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 44.78
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 45.82
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 47.23
                        }
                    },
                    {
                        "startTime": "2024-03-08T22:00:00Z",
                        "values": {
                            "temperature": 48.06
                        }
                    },
                    {
                        "startTime": "2024-03-08T23:00:00Z",
                        "values": {
                            "temperature": 49.34
                        }
                    }
                ]
            }
        
    }
}

seattle.tempFourHoursFromNow = seattleHours.data.timelines.intervals[4].values.temperature;

console.log(seattle);

let cities = [];

cities.push(newark, losAngeles, miami, charlotte, houston, seattle);

console.log(cities);

let warmest = cities[0].tempFourHoursFromNow;
let warmestCityName = cities[0].name;
for(i = 0; i < cities.length; i++) {
    if(warmest < cities[i].tempFourHoursFromNow) {
        warmest = cities[i].tempFourHoursFromNow;
        warmestCityName = cities[i].name;
    } 
}
console.log(warmestCityName + ": " + warmest);
