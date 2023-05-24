import { displayData } from "./displayData.js";

async function getData(searchInput) {
  try {
    const zerostateImage = document.getElementById("zerostate-image");
    const nothingfoundImage = document.getElementById("nothingfound-image");
    const loadingImage = document.getElementById("loading");
    const artworksList = document.querySelector("ul");

    artworksList.innerHTML = "";

    zerostateImage.style.display = "none";
    nothingfoundImage.style.display = "none";
    loadingImage.style.display = "block";

    await delay(2000);

    const response = await fetch(
      "https://www.rijksmuseum.nl/api/nl/collection?key=yLfBqOT3&imgonly=true&ps=10&s=relevance&q=" +
        searchInput
    );
    const data = await response.json();

    if (data.artObjects.length === 0) {
      nothingfoundImage.style.display = "block";
    } else {
      nothingfoundImage.style.display = "none";
    }

    loadingImage.style.display = "none";
    displayData(data);
  } catch (error) {
    const loadingImage = document.getElementById("loading");
    loadingImage.style.display = "none";
    const errorImage = document.getElementById("errorstate-image");
    errorImage.style.display = "block";
    console.log(error);
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { getData };
