let displayNumber = document.querySelector('.screen');
let firstInput;
let operatorType;

const keypad = document.querySelectorAll('.keypad');

keypad.forEach((item) => {
    item.addEventListener('click', () => {
        displayNumber.textContent = displayNumber.textContent + item.textContent;
    });
});

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
    displayNumber.textContent = '';
    firstInput = null;
    operatorType = null;
});

const addButton = document.querySelector('.add');

addButton.addEventListener('click', () => {
    if (displayNumber.textContent && !firstInput) {
        firstInput = displayNumber.textContent;
        displayNumber.textContent = '';
        operatorType = 'add';
        console.log('add');
    }
});

const operateButton = document.querySelector('.operate');

operateButton.addEventListener('click', () => {
   if (firstInput && displayNumber.textContent) {
       operate(operatorType, firstInput, displayNumber.textContent);
   } 
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
    console.log('equals');
    if (operatorType === 'add') {
        console.log(parseInt(firstInput) + parseInt(displayNumber.textContent));
        displayNumber.textContent = parseInt(firstInput) + parseInt(displayNumber.textContent);
        firstInput = null;
        operatorType = null;
    }
}