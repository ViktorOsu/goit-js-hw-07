
const categories = document.querySelector('ul#categories');
console.log(`Number of categories: ${categories.childElementCount}`);

const items = document.querySelectorAll('.item');

items.forEach(items => {
console.log(`Category: ${items.firstElementChild.textContent}`);
console.log(`Elements: ${items.lastElementChild.childElementCount}`);
});

