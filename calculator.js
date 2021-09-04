let displayNumber = document.querySelector('.screen');
let variableDisplay = displayNumber;

const keypad = document.querySelectorAll('.keypad');

keypad.forEach((item) => {
    item.addEventListener('click', () => {
        displayNumber.textContent = displayNumber.textContent + item.textContent;
    });
});

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
    displayNumber.textContent = '';
});

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(operator,a,b) {
    
}