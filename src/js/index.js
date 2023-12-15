import { getImages } from "./services/unsplash";
import { renderGallery } from "./view/gallery";

console.log(await getImages());
renderGallery(await getImages());
