// Importeer de displayData functie vanuit het bestand displayData.js
import { displayData } from "./displayData.js";

// Deze functie wordt gebruikt om gegevens weer te geven
async function getData(searchInput) {
  try {
    // Verkrijg referenties naar verschillende DOM-elementen
    const zerostateImage = document.getElementById("zerostate-image");
    const nothingfoundImage = document.getElementById("nothingfound-image");
    const loadingImage = document.getElementById("loading");
    const artworksList = document.querySelector("ul");

    // Wis de inhoud van de lijst met kunstwerken
    artworksList.innerHTML = "";

    // Verberg zero state/not found en toon de loading state
    zerostateImage.style.display = "none";
    nothingfoundImage.style.display = "none";
    loadingImage.style.display = "block";

    // Wacht 2000 milliseconden (2 seconden)
    await delay(2000);

    // Haal gegevens op van de Rijksmuseum API op basis van de zoekterm
    const response = await fetch(
      "https://www.rijksmuseum.nl/api/nl/collection?key=yLfBqOT3&imgonly=true&ps=10&s=relevance&q=" +
        searchInput
    );
    const data = await response.json();

    // Controleer of er geen kunstwerken zijn gevonden
    if (data.artObjects.length === 0) {
      nothingfoundImage.style.display = "block";
    } else {
      nothingfoundImage.style.display = "none";
    }

    // Verberg de loading state
    loadingImage.style.display = "none";

    // Filter de gegevens en maak een nieuw array
    const filteredData = data.artObjects.map((artObject) => {
      const { id, title, principalOrFirstMaker, webImage } = artObject;
      const imageUrl = webImage ? webImage.url + "1000" : "";
      return { id, title, principalOrFirstMaker, imageUrl };
    });

    // Geef de gefilterde gegevens weer met behulp van de `displayData` functie
    displayData(filteredData);
  } catch (error) {
    // Behandel fouten die optreden tijdens het ophalen of verwerken van gegevens
    const loadingImage = document.getElementById("loading");
    loadingImage.style.display = "none";
    const errorImage = document.getElementById("errorstate-image");
    errorImage.style.display = "block";
    console.log(error);
  }
}

// Functie om een vertraging in te voegen met de opgegeven tijd in milliseconden
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Exporteer de getData functie om deze beschikbaar te maken voor andere modules
export { getData };
