export const renderDetails = (data) => {
  const tags = data.tags
    .map((tag) => (tag.type === "search" ? `<li>${tag.title}</li>` : ""))
    .join("");

  return `<img
        src="${data.urls.regular}"
        alt="${data.alt_description}"
    />
  <div class="details">
    ${data.description ? `<h4>${data.description}</h4>` : ""}
    <ul>
      ${tags}
    </ul>
  </div>`;
};
