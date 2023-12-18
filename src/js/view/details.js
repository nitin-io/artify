export const renderDetails = (data) => {
  const tags = data.tags
    .map((tag) => (tag.type === "search" ? `<li>${tag.title}</li>` : ""))
    .join("");

  return `<div class="full-image">
  <img
        src="${data.urls.regular}"
        alt="${data.alt_description}"
    />
    </div>
  <div class="details">
  ${
    data.description
      ? `<h4>${data.description}</h4>`
      : "<h4 class='error'>No Description Available</h4>"
  }
  <hr />
    <span class="title">Tags</span>
    <ul>
      ${tags}
    </ul>
  </div>`;
};
