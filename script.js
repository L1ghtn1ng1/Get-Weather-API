async function getWeather(city) {
    if(init){
        init = false;
        city = "Auckland";
    }
    const apiKey = `Y9FJTKAD5WAYH3WUZCYKN8SMY`;
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${apiKey}&contentType=json`
    const respond = await fetch(url , {mode: 'cors'});
    if(respond.status === 400){
        alert('Location not found');
        return;
    }
    const data = await respond.json();
    const condition = await data.currentConditions.conditions;
    const place = await data.resolvedAddress;
    const temp = await data.currentConditions.temp;
    const feelsLike = await data.currentConditions.feelslike;
    const humidity = await data.currentConditions.humidity;
    // const precipitation = data.currentConditions.precip;
    const windSpeed = await data.currentConditions.windspeed;
    const sunrise = await data.currentConditions.sunrise;
    const sunset = await data.currentConditions.sunset;
    // const maxTemp = data.days[0].tempmax;
    // const minTemp = data.days[0].tempmin;
    // const currentTime = data.currentConditions.datetime;
    cityLabel.textContent = place;
    console.log(condition);
    conditionLabel.textContent = condition;
    tempLabel.textContent = temp
    windLabel.textContent ="Wind:  " +windSpeed + " km/h";
    feelsLikeLabel.textContent ="Feels Like:  " +feelsLike + "°F";
    humidityLabel.textContent ="Humidity:  " + humidity + "%";
    sunriseLabel.textContent = "Sunrise: " + sunrise;
    sunsetLabel.textContent = "Sunset: " + sunset;


    
}

const cityLabel = document.getElementById('location');
const conditionLabel = document.getElementById('conditions');
const tempLabel = document.getElementById('temp');
const feelsLikeLabel = document.getElementById('feels');
const humidityLabel = document.getElementById('humidity');
const windLabel = document.getElementById('wind');
const sunriseLabel = document.getElementById('sunrise');
const sunsetLabel = document.getElementById('sunset');
let init = true;

const input = document.getElementById('city');

if(init){
    getWeather();
}

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        getWeather(input.value);
        input.value = "";
    }
})   


