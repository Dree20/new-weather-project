function updateInfo(response) {
  let newTemperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#change-city");

  cityElement.innerHTML = response.data.city;
  newTemperatureElement.innerHTML = Math.round(temperature);
}
function findCity(city) {
  let apiKey = "babdtd562ab541fbc49o01aca733b4ff";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(updateInfo);
}
function changeCity(event) {
  event.preventDefault();
  let inputCityElement = document.querySelector("#input-city");

  findCity(inputCityElement.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);

findCity("");
