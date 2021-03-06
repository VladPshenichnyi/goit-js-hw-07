import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");
galleryRef.innerHTML = createMarkup();

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 200,
});

function createMarkup() {
    let markup = "";
    for (const { preview, original, description } of galleryItems) {
    markup += `
    <a class="gallery__item"  href="${original}"> 
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
    </a>`;
    }

    return markup;
}