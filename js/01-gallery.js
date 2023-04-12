import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItems = document.querySelector('gallery');

(function(){
const markup = galleryItems.map(({preview,original,description}))
<ul class="gallery">
<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src="small-image.jpg" data-source="large-image.jpg" alt="Image description" />
  </a>
</li>
</ul>

})()


console.log(galleryItems);
///




// preview:
// 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
// original:
// 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
// description: 'Hokkaido Flower',


// const instance = basicLightbox.create(`<img src="assets/images/image.png" width="800" height="600">`)

// instance.show()