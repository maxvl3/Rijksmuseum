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

export { displayData };
