import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
(function () {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image js-target" src="${preview}" data-source="${original}" alt="${description}" />
  </a>
</li>`
    )
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
})();

galleryEl.addEventListener('click', onclick);
function onclick(evt){

    if(!evt.target.classList.contains('js-target')){
        return;
    }
    const li = evt.target.closest('.gallery__item');

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
instance.show()

document.body.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    instance.close();
  }
});
}

console.log(galleryItems); 
