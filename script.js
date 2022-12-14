let realdate = new Date();
let date = realdate.getDate();
let hours = realdate.getHours();
let minutes = realdate.getMinutes();

let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let days = weekdays[realdate.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let allmonths = months[realdate.getMonth()];
let h6 = document.querySelector("h6");
h6.innerHTML = `${days}, ${allmonths} ${date}, ${hours}:${minutes}`;

function showWeatherCondition(response) {
  document.querySelector("#cityname").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].main;
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "93c9302a335ce19bd3e0802426872a43";
  let city = document.querySelector("#search-box").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherCondition);
}

function convertme(event) {
  event.preventDefault();
  let tempcondition = document.querySelector("#temperature");
  tempcondition.innerHTML = 66;
}
function convertmetoo(event) {
  event.preventDefault();
  let celsiuscondition = document.querySelector("#temperature");
  celsiuscondition.innerHTML = 26;
}

let query = document.querySelector("#search-form");
query.addEventListener("submit", searchCity);

let fahr = document.querySelector("#fahreint");
fahr.addEventListener("click", convertme);

let cel = document.querySelector("#celsius");
cel.addEventListener("click", convertmetoo);
