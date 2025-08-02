function updateInfo(response) {
  console.log(response.data.temperature.current);
}
let apiKey = "babdtd562ab541fbc49o01aca733b4ff";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=query&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(updateInfo);

function changeCity(event) {
  event.preventDefault();
  let inputCityElement = document.querySelector("#input-city");
  let newCityElement = document.querySelector("#change-city");
  newCityElement.innerHTML = inputCityElement.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);
