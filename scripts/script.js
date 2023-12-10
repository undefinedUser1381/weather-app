let inputeELem = document.querySelector("input");

let reqDetails = {
     reqKey : "a1f64a423cf95babdd5116bc3f53342e",
     url : "https://api.openweathermap.org/data/2.5/weather?q="
}
async function getWeatherData (requierdVal) {

    let resData = await fetch(`${reqDetails.url}${requierdVal}&&appid=${reqDetails.reqKey}`);

    let result = await resData.json();

    showDataToDom(result)
    
}
function showNowDate () {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let nowDate = new Date();

    let year = nowDate.getFullYear();
    let month = months[nowDate.getMonth()];
    let day = dayNames[nowDate.getDay()];
    let date = nowDate.getDate();

    return `${day} ${date} ${month} ${year}`;

}
function showDataToDom (res) {

    let cityNama = document.querySelector(".city-name");
    let cityDate = document.querySelector(".city-date");
    let cityTemprature = document.querySelector(".city-temprature");
    let weatherStatus = document.querySelector(".weather-status");
    let countryTemp = document.querySelector(".country-temp");

    const constNum = 273.15;

    console.log(res);

    cityNama.innerHTML = `${res.name} , ${res.sys.country}`;
    cityDate.innerHTML = showNowDate();
    cityTemprature.innerHTML = `${Math.floor(res.main.temp - 273.15)}°C` ;
    weatherStatus.innerHTML = `${res.weather[0].description}`;
    countryTemp.innerHTML = `${Math.floor(res.main.temp_min - constNum)}°C / ${Math.floor(res.main.temp_max - constNum)}°C`;

}
inputeELem.addEventListener("keypress", (e) => {

       if(e.key === "Enter"){
           getWeatherData(inputeELem.value);
       }

}); 

