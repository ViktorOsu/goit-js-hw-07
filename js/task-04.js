
let counterValue = 0;
const buttonDecrement = document.querySelector('[data-action=decrement]');
const buttonIncrement = document.querySelector('[data-action=increment]');
const spanValue = document.querySelector('#value');

buttonDecrement.addEventListener('click', buttonDecrementClicked)
buttonIncrement.addEventListener('click', buttonIncrementClicked);


function buttonDecrementClicked() { 
    counterValue -= 1;
    spanValue.textContent = counterValue;
}


function buttonIncrementClicked(){
    counterValue += 1;
    spanValue.textContent = counterValue;
}



