// script.js

let display = document.getElementById('display');
let displayValue = '0';

function updateDisplay() {
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1) || '0';
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0' && number !== '.') {
        displayValue = number.toString();
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    const lastChar = displayValue[displayValue.length - 1];
    if ('+-*/'.includes(lastChar)) {
        displayValue = displayValue.slice(0, -1) + operator;
    } else {
        displayValue += operator;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue.replace('×', '*').replace('÷', '/')).toString();
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}