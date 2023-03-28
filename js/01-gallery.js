import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');

let instance = null;

const galleryItemsList = galleryItems.map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
       <a class="gallery__link" href="${original}">
           <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
           />
       </a>
    </li>
`;
}).join('');


galleryListEl.insertAdjacentHTML('beforeend', galleryItemsList);


console.log(galleryListEl);



function onItemClick(event) {
    const { target: galleryItemsEl } = event;

    event.preventDefault();

    if (galleryItemsEl.nodeName !== 'IMG') return;

    instance = basicLightbox.create(`
    <img src="${galleryItemsEl.dataset.source}" width="1400" height="900">
`,
        {
            onClose: (instance) => {
                document.removeEventListener('keydown', onEscape);
            },
        });

    instance.show();

    document.addEventListener('keydown', onEscape)

}

function onEscape(event) {
    if (event.code === 'Escape') {
        instance.close();
    }
} 


galleryListEl.addEventListener('click', onItemClick);



