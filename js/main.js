// Importeer de getData functie vanuit het bestand getData.js
import { getData } from "./getData.js";

const searchForm = document.getElementById("search-form");

// EventListener voor de zoekbalk die de value meegeeft aan de getData functie
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const searchInput = document.getElementById("search-input").value;

  getData(searchInput);
});
