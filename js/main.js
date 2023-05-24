import { getData } from "./getData.js";

const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const searchInput = document.getElementById("search-input").value;

  getData(searchInput);
});
