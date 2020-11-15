import "./style.scss";
const debounce = require("debounce");
import CountriesInfo from "./CountriesInfo";

const country = document.querySelector(".js-t");
const form = document.querySelector(".js-form");
const getCountries = new CountriesInfo(country);

form.addEventListener("input", debounce(onSearchCountries, 500));

function onSearchCountries(e) {
  getCountries.searchCountries(e.target.value)
}
