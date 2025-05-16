
function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    if(b == 0) return '';
    return +a / +b;
}

function operate(firstOperand, operator, secondOperand) {
    let result = null;
    switch(operator) {
        case '+':
            result = add(firstOperand, secondOperand);
            break;
        case '-':
            result = subtract(firstOperand, secondOperand);
            break;
        case '*':
            result = multiply(firstOperand, secondOperand);
            break;
        case '/':
             result = divide(firstOperand,secondOperand);
             break;
    }
    return result;
}

let firstOPerand = '';
let secondOPerand = '';
let operator = '';
let isFirstOperandTurn = true;

function updateDisplayScreenContent(content) {
    let displayScreen = document.querySelector('.display-screen');
    displayScreen.textContent = content;
}

let numberButtons = document.querySelectorAll('.number-btn');
numberButtons.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        let clickedDigit = e.target.value;
        let number = (isFirstOperandTurn? firstOPerand: secondOPerand);

        if(clickedDigit !== '.') {
            number += clickedDigit;
        }else if(firstOPerand) {
            number += clickedDigit;
        }
        updateDisplayScreenContent(number);
        (isFirstOperandTurn?
         firstOPerand = number:
         secondOPerand = number
        );
    });
});

