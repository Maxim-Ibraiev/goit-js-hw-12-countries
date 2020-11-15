import "./style.scss";
const debounce = require("debounce");
import CountriesInfo from'./CountriesInfo'

const country = document.querySelector(".js-t");
const form = document.querySelector(".js-form");

form.addEventListener("input", debounce(event => {
  new CountriesInfo(
    event,
    country
  )
}, 500));
