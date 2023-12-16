import { getImages, getSinglePhoto } from "./services/unsplash";
import { renderGallery } from "./view/gallery";
import { renderDetails } from "./view/details";

const catNavigationList = document.querySelector(".nav-list");
const galleryDiv = document.querySelector(".gallery");
const popUpModal = document.querySelector("dialog");
const dialogBox = document.querySelector(".dialog-box");
const modalCloseBtn = document.querySelector("[data-close-modal]");

renderGallery(await getImages());

const changeCategory = async (category) => {
  renderGallery(await getImages(category));
};

catNavigationList.addEventListener("click", (evt) => {
  changeCategory(evt.target.dataset.cat);
});

galleryDiv.addEventListener("click", async (evt) => {
  if (evt.target.className === "gallery-img") {
    popUpModal.showModal();
    const imageData = await getSinglePhoto(evt.target.dataset.id);
    const detailHTML = renderDetails(imageData);
    dialogBox.innerHTML = detailHTML;
  }
});

modalCloseBtn.addEventListener("click", () => {
  popUpModal.close();
});
