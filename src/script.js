function changeCity(event) {
  event.preventDefault();
  let inputCityElement = document.querySelector("#input-city");
  let newCityElement = document.querySelector("#change-city");
  newCityElement.innerHTML = inputCityElement.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("click", changeCity);
