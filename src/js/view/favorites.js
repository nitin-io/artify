import { getFavsFromLS, removeFromFavorite } from "../services/favorites";
import { getImages } from "../services/unsplash";
import { renderGallery } from "./gallery";
import popUpNotify from "./popUpNotify";

const main = document.getElementById("main");

const renderFavorites = (favorites) => {
  const allCards = favorites
    ?.map(
      (fav) =>
        `<div class="card">
            <img src=${fav.urls.small} alt="${fav.alt_description}" data-id="${fav.id}" />
            <button class="remove-btn" ><i class="fa-solid fa-trash-can"></i></button>
        </div>`
    )
    .join("");
  main.innerHTML = `
    <nav class="nav-bar">
    <button class="btn-bg-none" id="logo-btn">
      <h2 class="nav-brand brand-font">Artify</h2>
    </button>
      <button id="home-btn">
      <i class="fa-solid fa-house"></i> Back To Home
      </button>
    </nav>
    <div class="fav-title">
    <h3>Favorites</h3>
    </div>
    <div class="favorites">
        ${
          allCards
            ? allCards
            : `<span class="error" style="text-align:center;position:absolute;top:50%;right:50%;transform:translate(50%,50%);">404: Favorites Not Found</span>`
        }
    </div>`;

  const homeBtn = document.getElementById("home-btn");
  const favoritesDiv = document.querySelector(".favorites");
  const logoBtn = document.getElementById("logo-btn");

  logoBtn.addEventListener("click", () => {
    location.reload();
  });

  homeBtn.addEventListener("click", async (evt) => {
    renderGallery(await getImages());
  });

  favoritesDiv.addEventListener("click", async (evt) => {
    if (evt.target.className === "remove-btn") {
      const id = evt.target.previousSibling.previousSibling.dataset.id;
      popUpNotify(removeFromFavorite(id));
      evt.target.parentNode.remove();
    }
  });
};

export default renderFavorites;
