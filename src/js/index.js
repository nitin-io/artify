import { getImages, getSinglePhoto } from "./services/unsplash";
import { renderGallery } from "./view/gallery";

const catNavigationList = document.querySelector(".nav-list");
const galleryDiv = document.querySelector(".gallery");
const popUpModal = document.querySelector("dialog");
const modalOpenBtn = document.querySelector("[data-open-modal]");
const modalCloseBtn = document.querySelector("[data-close-modal]");

renderGallery(await getImages());

const changeCategory = async (category) => {
  renderGallery(await getImages(category));
};

catNavigationList.addEventListener("click", (evt) => {
  changeCategory(evt.target.dataset.cat);
});

galleryDiv.addEventListener("click", (evt) => {
  if (evt.target.className === "gallery-img") {
    popUpModal.showModal();
    console.log(getSinglePhoto(evt.target.dataset.id));
    console.dir(popUpModal);
  }
});

modalCloseBtn.addEventListener("click", () => {
  popUpModal.close();
});
