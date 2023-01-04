import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
const imageCardsMarkup = createImageCards(galleryItems);

function createImageCards(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /> </a>`;
    })
    .join("");
}

galleryList.insertAdjacentHTML("afterbegin", imageCardsMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
