const $ = document;
const searchInputElem = $.querySelector(".search input");
const searchBtn = $.querySelector(".search button");

searchBtn.addEventListener("click", () => {
  checkWeather("qazvin");
});

async function checkWeather(cityName) {
  let apiKey = "6e9f98b15b9622b7458c9c7e66ba0194";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather";

  let responce = await fetch(
    `${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`
  );
  let weatherData = await responce.json();

  console.log(weatherData);
}
