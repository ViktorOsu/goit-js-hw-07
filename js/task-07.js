const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', e => {
    text.style.fontSize = `${e.target.value}px`;
});



