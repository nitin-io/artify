import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "",
});

export const getImages = async (category = "Classic Art", page = 1) => {
  const result = await unsplash.search.getPhotos({
    query: category,
    page: page,
    perPage: 12,
    orientation: "landscape",
  });

  if (result.type === "success") {
    return result.response.results;
  }

  throw new Error("Something is wrong with unsplash API");
};
