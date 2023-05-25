// Deze functie wordt gebruikt om kunstwerken te genereren met de opgehaalde data
function displayData(filteredData) {
  const artworksList = document.querySelector("ul");
  const overlay = document.querySelector(".overlay");

  // Itereer over de gefilterde gegevens en maak elementen aan voor elk kunstobject
  filteredData.forEach((artObject) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const a = document.createElement("a");

    img.src = artObject.imageUrl;

    a.href = `/#${artObject.id}`;
    a.appendChild(img);
    li.appendChild(a);
    artworksList.appendChild(li);

    // Voeg een click event listener toe aan de afbeelding om de overlay weer te geven
    img.addEventListener("click", () => {
      displayOverlay(artObject);
    });
  });

  // Functie om de overlay weer te geven met details van het kunstobject
  function displayOverlay(artObject) {
    const closeButton = document.createElement("button");
    closeButton.textContent = "Sluiten";

    // Voeg een click event listener toe aan de sluitknop om de overlay te verbergen
    closeButton.addEventListener("click", () => {
      overlay.style.visibility = "hidden";
      window.history.replaceState(
        null,
        document.title,
        window.location.pathname
      );
    });

    // HTML elementen creëren en data hieraan koppelen
    const img = document.createElement("img");
    img.src = artObject.imageUrl;

    const title = document.createElement("h2");
    title.textContent = artObject.title;

    const artist = document.createElement("p");
    artist.textContent = artObject.principalOrFirstMaker;

    overlay.innerHTML = "";
    overlay.appendChild(closeButton);
    overlay.appendChild(img);
    overlay.appendChild(artist);
    overlay.appendChild(title);

    // Maak de overlay zichtbaar
    overlay.style.visibility = "visible";
  }
}

// Exporteer de displayData functie om deze beschikbaar te maken voor andere modules
export { displayData };
