export const getFavsFromLS = () => {
  const favs = JSON.parse(localStorage.getItem("favoriteArtifacts"));
  return favs ? favs : [];
};

export const addToFavorite = (artifact) => {
  const allFavs = getFavsFromLS();
  const found = allFavs.find((fav) => fav.id === artifact.id);
  if (found) {
    const filteredFavs = allFavs.filter((item) => item.id !== artifact.id);
    localStorage.setItem("favoriteArtifacts", JSON.stringify(filteredFavs));
    return "Removed From Favorites!";
  } else {
    allFavs.push(artifact);
    localStorage.setItem("favoriteArtifacts", JSON.stringify(allFavs));
    return "Added to Favorites!";
  }
};

export const removeFromFavorite = (id) => {
  const allFavs = getFavsFromLS();
  const filteredFavs = allFavs.filter((item) => item.id !== id);
  localStorage.setItem("favoriteArtifacts", JSON.stringify(filteredFavs));
  return "Removed!";
};
