const popUpNotify = (text) => {
  const div = document.createElement("div");
  div.classList.add("popup-notification");
  div.innerText = text;

  setTimeout(() => {
    div.classList.add("closing");
    setTimeout(() => {
      div.remove();
    }, 1000);
  }, 4000);

  return div;
};

export default popUpNotify;
