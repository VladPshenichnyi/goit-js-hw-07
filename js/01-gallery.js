import { galleryItems } from './gallery-items.js'

const galleryEl = document.querySelector('.gallery')
const imageRef = document.querySelectorAll('.gallery__image')

const galleryImageMarkup = createGalleryImageMarkup(galleryItems)
galleryEl.insertAdjacentHTML('beforeend', galleryImageMarkup)


function createGalleryImageMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div >
        `
    })
    .join('')
}

galleryEl.addEventListener('click', onImageClick)

function onImageClick(e) {
    e.preventDefault()
    if (!e.target.classList.contains('gallery__image')) {
        return
    }

    imageRef.src = e.target.dataset.source

    const instance = basicLightbox.create(
        `<img src="${imageRef.src}" alt="${imageRef.alt}" />`)

    instance.show()

    if (instance.visible()) {
        galleryEl.addEventListener('keydown', onEscBtnPress)
    }

    function onEscBtnPress(e) {
        if (e.code === 'Escape') {
            instance.close()
        }
    }
}