const galleryDiv = document.querySelector(".gallery");

export const renderGallery = (photos) => {
  galleryDiv.innerHTML = photos
    .map(
      (photo) =>
        `<div class="card">
        <img class="gallery-img" src=${photo.urls.small} alt="${photo.alt_description}" data-id=${photo.id}/>
        <button class="like-btn">Like</button>
        </div>`
    )
    .join("");
};
