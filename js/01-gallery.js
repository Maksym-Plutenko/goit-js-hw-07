import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
    gallery.insertAdjacentHTML('beforeend', `
        <div class="gallery__item">
            <a class="gallery__link" href=${item.original}>
                <img
                    class="gallery__image"
                    src=${item.preview}
                    data-source=${item.original}
                    alt=${item.description}
                />
            </a>
        </div>
    `);
});

gallery.addEventListener('click', event => {
    event.preventDefault();

    basicLightbox.create(`
		<img width="1400" height="900" src=${event.target.dataset.source}>
	`).show()
});

console.log(galleryItems);
