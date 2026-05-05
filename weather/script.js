// API key 29313b3ad4091393955ead4df3d3d9b2
// API URL https://api.openweathermap.org/data/2.5/weather?q=germany&appid=29313b3ad4091393955ead4df3d3d9b2&unit=metric

const API_KEY = "29313b3ad4091393955ead4df3d3d9b2";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".input-box");
const searchBtn = document.querySelector(".search-btn");

async function checkWeather(city) {

    const response = await fetch(API_URL + city +`&appid=${API_KEY}`);  
    let data = await response.json();
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }

    else{

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temprature").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".windSpeed").innerHTML = Math.round(data.wind.speed) + " km/h";


        const icon = document.querySelector(".weather-icon");

        const weatherIcons = {
            Clear: "fa-sun",
            Clouds: "fa-cloud",
            Rain: "fa-cloud-rain",
            Drizzle: "fa-cloud-rain",
            Mist: "fa-smog"
        };

        icon.className = "weather-icon fa-solid " + (weatherIcons[data.weather[0].main] || "fa-sun");
            
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

