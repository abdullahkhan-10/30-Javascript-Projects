const ApiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const ApiKey = "c5e243b2d549f1e6a0fe9c8876ee275f";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function weatherCheck(city) {
  const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".details").style.display = "none";

  }
   else {
    const data = await response.json();

    // console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humadity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".condition").innerHTML = data.weather[0].main;

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } 
    else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } 
    else if (data.weather[0].main == "Dust") {
      weatherIcon.src = "images/dust.png";
    } 
    else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    }
     else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "images/haze.png";
    } 
    else if (data.weather[0].main == "Smoke") {
      weatherIcon.src = "images/smoke.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".details").style.display = "flex";
    document.querySelector(".error").style.display = "none";
  }

};

searchBtn.addEventListener("click", () => {
    weatherCheck(searchInput.value);
  });