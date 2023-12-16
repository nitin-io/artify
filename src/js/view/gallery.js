const galleryDiv = document.querySelector(".gallery");

export const renderGallery = (photos) => {
  console.log(photos[0]);
  galleryDiv.innerHTML = photos
    .map(
      (photo) =>
        `<img class="gallery-img" src=${photo.urls.small} alt="${photo.alt_description}" data-id=${photo.id}/>`
    )
    .join("");
};
