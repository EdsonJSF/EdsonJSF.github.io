const documentBody = document.body;
const langageContainer = document.querySelector(".langage-selected");
const langagesList = document.querySelector(".langages-list");

documentBody.addEventListener("click", () => {
  if (!langagesList.classList.contains("d-none")) {
    langagesList.classList.add("d-none");
  }
});

langageContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  if (langagesList.classList.contains("d-none")) {
    langagesList.classList.remove("d-none");
  } else {
    langagesList.classList.add("d-none");
  }
});
