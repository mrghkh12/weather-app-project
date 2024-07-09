const $ = document;
const searchInputElem = $.querySelector(".search input");
const searchBtn = $.querySelector(".search button");

searchBtn.addEventListener("click", () => {
  checkWeather("Alaska");
});

async function checkWeather(cityName) {
  let apiKey = "6e9f98b15b9622b7458c9c7e66ba0194";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather";

  let responce = await fetch(
    `${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`
  );
  let weatherData = await responce.json();

  setWeatherData(weatherData);
}

function setWeatherData(weatherObj) {
  let weatherSection = $.querySelector(".weather");
  console.log(weatherObj);
  weatherSection.innerHTML = "";
  weatherSection.insertAdjacentHTML(
    "beforeend",
    `            <img src="./images/${
      weatherObj.weather[0].main
    }.png" class="weather-icon">
            <h1 class="temp">${Math.round(weatherObj.main.temp)}°c</h1>
            <h2 class="city">${weatherObj.name}</h2>
            <div class="details">
                <div class="col">
                    <img src="./images/humidity.png">
                    <div>
                        <p class="humidity">${weatherObj.main.humidity}%</p>
                        <p>humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="./images/wind.png">
                    <div>
                        <p class="wind">${weatherObj.wind.speed} km/h</p>
                        <p>wind Speed</p>
                    </div>
                </div>
            </div>`
  );
}
