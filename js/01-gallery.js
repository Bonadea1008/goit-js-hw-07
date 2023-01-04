import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const picturesCardMarkup = createPicturesCard(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", picturesCardMarkup);

function createPicturesCard(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", onPictureClick);

function onPictureClick(evt) {
  evt.preventDefault();
  window.addEventListener("keydown", onEscapePress);

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  function onEscapePress(evt) {
    if (evt.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscapePress);
    }
  }
}

console.log(galleryItems);

//library
const libraryScriptJS = document.createElement("script");
libraryScriptJS.src =
  "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";

document.body.appendChild(libraryScriptJS);

const libraryLinkCSS = document.createElement("link");
libraryLinkCSS.rel = "stylesheet";
libraryLinkCSS.href =
  "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css";

document.head.appendChild(libraryLinkCSS);
