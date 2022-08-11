import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryImageItems = galleryItems
  .map(
    (galleryItem) => `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`
  )
  .join("");

galleryContainer.innerHTML = galleryImageItems;

galleryContainer.addEventListener("click", modalOpen);

// function modalOpen(evt) {
//   evt.preventDefault();
//   if (!evt.target.dataset.source) return;
//   basicLightbox
//     .create(
//       `
//     <img src="${evt.target.dataset.source}">
// `
//     )
//     .show();
// }

// document.addEventListener("keydown", (e) => {
//   if (e.code !== "Escape") return;
//   instance.close();
// });

function modalOpen(evt) {
  evt.preventDefault();

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`);

  if (!evt.target.dataset.source) return;
  instance.show();

  document.addEventListener(
    "keydown",
    (e) => {
      if (e.code !== "Escape") return;
      //console.log(e.code);
      instance.close();
    },
    { once: true }
  );
}
