import PNotify from "pnotify/dist/es/PNotify";
import fetchCountries from "./fetchCountries";

const ListTmp = require("./template/list.handlebars");
const cartTmp = require("./template/cart.handlebars");

class CountriesInfo {
  constructor(container) {
    this.container = container;
  }
  
  searchCountries(name) {
    fetchCountries(name)
      .then(this.renderCountries.bind(this))
      .catch((err) => {
        if (err.message === "Unexpected end of JSON input") {
          this.container.classList.remove("countryCard");
          this.container.innerHTML = "";
        }
      });
  }

  renderCountries(countries) {
    if (countries.message === "Not Found") {
      return PNotify["error"]({
        title: "Error",
        text: "Not Found",
        delay: 2000,
      });
    }
    if (countries.length > 10) {
      return PNotify["error"]({
        title: "Error",
        text: "Too many matches found. Please enter a more specific query!",
        delay: 2000,
      });
    }
    if (countries.length > 1) {
      this.container.classList.remove("countryCard");
      return (this.container.innerHTML = ListTmp(countries));
    }

    this.container.innerHTML = cartTmp(countries[0]);
    this.container.classList.add("countryCard");
  }
}

export default CountriesInfo;
