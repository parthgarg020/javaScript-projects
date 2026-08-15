const apiKey = "3a96bcafa7778d621db40329e0189229";
const api = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchbox = document.querySelector(".search button");
const weather = document.querySelector(".weather");
const error = document.querySelector("#error");
const wicon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  let response = await fetch(api + city + `&appid=${apiKey}`);
  var data = await response.json();

  if (response.status == 404) {
    error.style.display = "block";
    weather.style.display = "none";
  } else {
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
    weather.style.display = "block";

    if (data.weather[0].main === "Clouds") {
      wicon.src = "clouds.png";
    } else if (data.weather[0].main === "Clear") {
      wicon.src = "clear.png";
    } else if (data.weather[0].main === "Drizzle") {
      wicon.src = "drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      wicon.src = "mist.png";
    } else if (data.weather[0].main === "Rain") {
      wicon.src = "rain.png";
    } else if (data.weather[0].main === "Snow") {
      wicon.src = "snow.png";
    }
    error.style.display = "none"
    weather.style.display = "block"
  }
}

searchbox.addEventListener("click", function () {
  checkWeather(searchInput.value);
});
