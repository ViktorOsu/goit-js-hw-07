const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', function() {
    if(!nameInput.value){
        changeNameInput('Anonymous');
    } else {
        changeNameInput(nameInput.value);
    }
});

function changeNameInput(name){
    nameOutput.textContent = name;
}