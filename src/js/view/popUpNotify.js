const popUpNotify = (text) => {
  const div = document.createElement("div");
  div.classList.add("popup-notification");
  div.innerText = text;

  setTimeout(() => {
    div.remove();
  }, 4000);

  return div;
};

export default popUpNotify;
