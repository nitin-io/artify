import { getImages } from "./services/unsplash";
import { renderGallery } from "./view/gallery";

const catNavigationList = document.querySelector(".nav-list");
const galleryDiv = document.querySelector(".gallery");

renderGallery(await getImages());

const changeCategory = async (category) => {
  renderGallery(await getImages(category));
};

catNavigationList.addEventListener("click", (evt) => {
  changeCategory(evt.target.dataset.cat);
});

galleryDiv.addEventListener("click", (evt) => {
  console.log(evt.target);
});
