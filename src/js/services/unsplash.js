import { createApi } from "unsplash-js";

const accessKey =
  import.meta.env.VITE_UNSPLASH_ACCESS_KEY ||
  "9D8DgQQJv9r9vqohcvPd4GhwEU_R4X3YZaFt7wZoIm8";

const unsplash = createApi({
  accessKey,
});

export const getImages = async (category = "Classic Art", page = 1) => {
  const result = await unsplash.search.getPhotos({
    query: category,
    page: page,
    perPage: 30,
    orientation: "landscape",
  });

  if (result.type === "success") {
    return result.response.results;
  }

  throw new Error("Something is wrong with unsplash API");
};

export const getSinglePhoto = async (photoId) => {
  try {
    const { response } = await unsplash.photos.get({ photoId });
    const { id, alt_description, urls, description, tags } = response;
    return { id, alt_description, urls, description, tags };
  } catch (err) {
    console.log(err);
  }
};

export const randomPhoto = async () => {
  const { response } = await unsplash.photos.getRandom({
    count: 1,
    query: "artifact",
  });
  const { alt_description, urls } = response[0];

  return { alt_description, url: urls.regular };
};
