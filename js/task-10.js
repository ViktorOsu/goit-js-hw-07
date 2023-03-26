function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]')
const boxesCounter = document.querySelector('#boxes');


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

let size = 30;

function createBoxes() {
  const amount = Number(input.value);
  let boxes = '';
  

  for (let i = 0; i < amount; i += 1, size += 10) {
    const boxesColor = getRandomHexColor();
    const box = `<div style="background-color:${boxesColor};width:${size}px;height:${size}px"></div>`;
    boxes += box;
  }
  
  boxesCounter.insertAdjacentHTML('beforeend', boxes);
  size = currentSize;
}



function destroyBoxes() {
  boxesCounter.innerHTML = '';
  size = 30;
}




