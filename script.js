

const readMoreContainer = document.querySelector(".read-more-container");
const lastParaOfStory = document.querySelector(".last-para-of-story");
const textOfReadMoreContainer = document.querySelector(
  ".read-more-container .red-text-color"
);

readMoreContainer.addEventListener("click", () => {
  readMoreContainer.classList.toggle("show-more");
  lastParaOfStory.classList.toggle("show-more-story-text");
  textOfReadMoreContainer.innerText = readMoreContainer.classList.contains(
    "show-more"
  )
    ? "Read Less"
    : "Read More";
});
