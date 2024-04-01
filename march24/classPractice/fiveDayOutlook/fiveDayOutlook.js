//Create a five day weather outlook for a city of your choice. The outlook should include the following:
//City name: data.location.name
//High Temp: data.timelines.daily[0].values.temperatureApparentMax
//Low Temp: data.timelines.daily[0].values.temperatureApparentMin
//Winds: data.timelines.daily[0].values.windSpeedAvg
//Rain Chance: data.timelines.daily[0].values.precipitationProbabilityAvg
//The day/date of the weather conditions: data.timelines.daily[0].time
//Image representing one of the following conditions: sunny, partly cloudy, mostly cloudy, rainy, windy
//Each day should be stored in its own container. (edited) 

fetch("https://api.tomorrow.io/v4/weather/forecast?location=atlanta&timesteps=daily&units=imperial&apikey=dNGHsezu6fCReGAcWNikN3iscPtTrrIM")
.then((response) => response.json())
.then((data) => {
    for(i = 0; i < data.timelines.daily.length; i++){

        //locating data in array
        let cityName = data.location.name;
        let weatherDate = data.timelines.daily[i].time;
        // let conditionImg = ;
        let highTemp = data.timelines.daily[i].values.temperatureApparentMax;
        let lowTemp = data.timelines.daily[i].values.temperatureApparentMin;
        let winds = data.timelines.daily[i].values.windSpeedAvg;
        let rainChance = data.timelines.daily[i].values.precipitationProbabilityAvg;


        //container
        let weatherContainer = document.createElement("div");


        // tags
        let cityNameTag = document.createElement("p");
        let weatherDateTag = document.createElement("p");
        let conditionImgTag = document.createElement("p");
        let highTempTag = document.createElement("p");
        let lowTempTag = document.createElement("p");
        let windsTag = document.createElement("p");
        let rainChanceTag = document.createElement("p");


        //Values(.innerText)
        cityNameTag.innerText= city;
        weatherDateTag.innerText = date;
        conditionImgTag.innerText = image;
        highTempTag.innerText = HighTemp;
        lowTempTag.innerText = lowTemp;
        windsTag.innerText = winds;
        rainChanceTag = rainChance;
        

        //appendChild
        weatherContainer.appendChild(cityNameTag);
        weatherContainer.appendChild(weatherDateTag);
        weatherContainer.appendChild(conditionImgTag);
        weatherContainer.appendChild(highTempTag);
        weatherContainer.appendChild(lowTempTag);
        weatherContainer.appendChild(windsTag);
        weatherContainer.appendChild(rainChanceTag);

        document.body.appendChild(weatherContainer);

    }

    console.log(data);

}) 
