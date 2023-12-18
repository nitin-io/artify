import { getImages, randomPhoto } from "../services/unsplash";
import { getSinglePhoto } from "../services/unsplash";
import { addToFavorite, getFavsFromLS } from "../services/favorites";
import { renderDetails } from "./details";
import renderFavorites from "./favorites";
import popUpNotify from "./popUpNotify";

const main = document.getElementById("main");

export const renderGallery = async (photos) => {
  const allCards = (allPhotos) =>
    allPhotos
      .map(
        (photo) =>
          `
        <div class="card">
          <img 
            class="gallery-img"
            src=${photo.urls.small}
            alt="${photo.alt_description}"
            data-id=${photo.id}
            />
        <button 
            class="like-btn"
            title="Add To Favorite"
            >
            <i class="fa-regular fa-heart"></i>
            </button>
            </div>`
      )
      .join("");

  main.innerHTML = `<nav class="nav-bar">
      <button class="btn-bg-none" id="logo-btn">
        <h2 class="nav-brand brand-font">Artify</h2>
      </button>
      <button href="#" class="fav-logo">
        <i class="fa-regular fa-heart"></i> Favorites
      </button>
    </nav>
  
  <section id="home">
      <h1>Welcome To <span class="brand-font">Artify</span></h1>
      <p>Artifacts: A journey through time without leaving the present.</p>
    </section>

    <!-- Category Change <start> -->
    <div class="categories">
      <button class="selected">Classic Art</button>
      <button>Modern Art</button>
      <button>Sculpture</button>
      <button>Cubism</button>
      <button>Abstract Art</button>
    </div>
    <!-- Category Change <end> -->
    <div class="gallery">${allCards(photos)}</div>`;

  const galleryDiv = document.querySelector(".gallery");
  const dialogBox = document.querySelector(".dialog-box");
  const notificationDiv = document.querySelector(".notifications");
  const favBtn = document.querySelector(".fav-logo");
  const popUpModal = document.querySelector("dialog");
  const logoBtn = document.getElementById("logo-btn");

  logoBtn.addEventListener("click", () => {
    location.reload();
  });

  // Function to execute when any category get clicked
  const changeCategory = async (category) => {
    galleryDiv.innerHTML = allCards(await getImages(category));
  };

  // Event Listener for category
  const categoriesNavigationDiv = document.querySelector(".categories");

  categoriesNavigationDiv.addEventListener("click", (evt) => {
    if (evt.target.tagName === "BUTTON") {
      const prevSelected = document.querySelector(".selected");
      prevSelected.classList.remove("selected");
      changeCategory(evt.target.innerText);
      evt.target.classList.add("selected");
    }
  });

  // Event Listener to fetch data from unsplash and load details modal
  galleryDiv.addEventListener("click", async (evt) => {
    if (evt.target.className === "gallery-img") {
      popUpModal.showModal();
      const imageData = await getSinglePhoto(evt.target.dataset.id);
      const detailHTML = renderDetails(imageData);
      dialogBox.innerHTML = detailHTML;
    }

    if (
      evt.target.className === "like-btn" ||
      evt.target.parentNode.className === "like-btn"
    ) {
      if (
        evt.target.previousSibling.previousSibling.className === "gallery-img"
      ) {
        const id = evt.target.previousSibling.previousSibling.dataset.id;
        const imageData = await getSinglePhoto(id);
        const responseText = addToFavorite(imageData);
        notificationDiv.appendChild(popUpNotify(responseText));
      }
    }
  });

  favBtn.addEventListener("click", () => {
    renderFavorites(getFavsFromLS());
  });
};

{
  /* <i class="fa-solid fa-heart"></i> */
}
