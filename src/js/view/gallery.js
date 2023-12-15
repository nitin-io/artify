const mainDiv = document.getElementById("main");

export const renderGallery = (photos) => {
  mainDiv.innerHTML = photos
    .map((photo) => `<img src=${photo.urls.small} />`)
    .join("");
};
