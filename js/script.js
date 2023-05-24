const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const searchInput = document.getElementById("search-input").value;

  getData(searchInput);
});

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
      "https://www.rijksmuseum.nl/api/nl/fs524/collection?key=yLfBqOT3&imgonly=true&ps=10&s=relevance&q=" +
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
    return new Promise(resolve => setTimeout(resolve, ms));
}

function displayData(data) {
  const artworksList = document.querySelector("ul");
  const overlay = document.querySelector(".overlay");

  data.artObjects.forEach((artObject) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const a = document.createElement("a");

    img.src = artObject.webImage.url + 1000;

    a.href = `/#${artObject.id}`;
    a.appendChild(img);
    li.appendChild(a);
    artworksList.appendChild(li);

    img.addEventListener("click", () => {
      displayOverlay(artObject);
    });
  });

  function displayOverlay(artObject) {
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => {
      overlay.style.visibility = "hidden";
      window.history.replaceState(
        null,
        document.title,
        window.location.pathname
      );
    });

    const img = document.createElement("img");
    img.src = artObject.webImage.url + 1000;

    const title = document.createElement("h2");
    title.textContent = artObject.title;

    const artist = document.createElement("p");
    artist.textContent = artObject.principalOrFirstMaker;

    overlay.innerHTML = "";
    overlay.appendChild(closeButton);
    overlay.appendChild(img);
    overlay.appendChild(artist);
    overlay.appendChild(title);

    overlay.style.visibility = "visible";
  }
}
