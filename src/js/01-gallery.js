import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGalleryItems() {
  const galleryHTML = galleryItems
    .map(
      item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    </li>
  `
    )
    .join('');

  gallery.innerHTML = galleryHTML;
  console.log(galleryHTML);

  gallery.insertAdjacentHTML('beforeend', galleryHTML);
  console.log(gallery);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

createGalleryItems();
