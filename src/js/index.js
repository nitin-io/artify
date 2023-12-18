import { getImages, getSinglePhoto } from "./services/unsplash";
import { renderGallery } from "./view/gallery";

const popUpModal = document.querySelector("dialog");
const modalCloseBtn = document.querySelector("[data-close-modal]");
const logoBtn = document.getElementById("logo-btn");

// Rendering Gallery
renderGallery(await getImages());

// Event Listener to close modal
modalCloseBtn.addEventListener("click", () => {
  popUpModal.close();
});
