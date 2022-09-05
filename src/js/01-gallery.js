// Add imports above this line

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line
/* 1. Створення и рендер розмітки по массиву данных galleryItems.
 */
const createGalleryItems = document.querySelector('.gallery');
const imageMarkup = createImageCard(galleryItems);

createGalleryItems.insertAdjacentHTML('beforeend', imageMarkup);

function createImageCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join('');
}

//  3/ Додано підписи зображень з бібліотеки SimpleLightbox

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 250,
});

console.log(galleryItems);
